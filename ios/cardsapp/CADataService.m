//
//  CADataService.m
//  cardsapp
//
//  Created by Lukas Reichart on 10/12/15.
//  Copyright Bastian Morath and Lukas Reichart. All rights reserved.
//

#import "CADataService.h"
#import "CAErrorUtils.h"
#import <MicrosoftAzureMobile/MicrosoftAzureMobile.h>

@interface CADataService ()

@property (nonatomic,strong) MSClient *amsClient;

@property (nonatomic,strong) NSManagedObjectContext *managedObjectContext;
@property (nonatomic,strong) NSManagedObjectModel *managedObjectModel;
@property (nonatomic,strong) NSPersistentStoreCoordinator *persistenStoreCoordinator;

@end

@implementation CADataService

- (instancetype)initWithUserId:(NSString *)userId
{
  self = [super init];
  if (self) {
    _userId = userId;
  }
  return self;
}


#pragma mark - Azure Mobile Services
- (NSError *)setupDataStore
{
  NSError *err = [self setupCoreDataStack];
  if (err) {
    return err;
  }
  
  _amsClient = [MSClient clientWithApplicationURLString:@"https://cardsapp.azurewebsites.net"];
  MSCoreDataStore *store = [[MSCoreDataStore alloc]initWithManagedObjectContext:[self managedObjectContext]];
  _amsClient.syncContext = [[MSSyncContext alloc]initWithDelegate:nil dataSource:store callback:nil];
  
  return err;
}

- (NSError *)checkDataStoreReady
{
  NSError *err = nil;
  if (!_amsClient) {
    err = [self setupDataStore];
  }
  return err;
}

#pragma mark - Core Data Stack
- (NSError *)setupCoreDataStack
{
  _managedObjectModel = [NSManagedObjectModel mergedModelFromBundles:nil];
  NSURL *databaseUrl = [self urlToSqliteDatabase];
  
  NSError *error = nil;
  _persistenStoreCoordinator = [[NSPersistentStoreCoordinator alloc]initWithManagedObjectModel:_managedObjectModel];
  
  if (![_persistenStoreCoordinator addPersistentStoreWithType:NSSQLiteStoreType configuration:nil URL:databaseUrl options:nil error:&error] ) {
    return error;
  }
  
  _managedObjectContext = [[NSManagedObjectContext alloc]initWithConcurrencyType:NSPrivateQueueConcurrencyType];
  [_managedObjectContext setPersistentStoreCoordinator:_persistenStoreCoordinator];
  
  return nil;
}

- (NSURL *)urlToSqliteDatabase
{
  NSURL *documentsDirectory = [[[NSFileManager defaultManager] URLsForDirectory:NSDocumentDirectory inDomains:NSUserDomainMask]lastObject];
  NSString *databaseName = [_userId stringByAppendingString:@".sqlite"];
  return [documentsDirectory URLByAppendingPathComponent:databaseName];
}

#pragma mark Data Functions
- (void)createEntityWithName:(NSString *)entityName andEntityData:(NSDictionary *)entityData callback:(CAItemResultBlock)callback
{
  NSError *err = [self checkDataStoreReady];
  if (err) {
    return callback(nil, err);
  }
  
  if (!entityData) {
    return callback(nil, [self entityDataIsNil]);
  }
  
  MSSyncTable *syncTable = [_amsClient syncTableWithName:entityName];
  if (!syncTable) {
    return callback(nil, [self entityModelNotFound:entityName] );
  }
  
  [syncTable insert:entityData completion:callback];
}

- (void)fetchEntityWithName:(NSString *)entityName callback:(CAArrayResultBlock)callback
{
  NSError *err = [self checkDataStoreReady];
  if (err) {
    return callback(nil, err);
  }
  
  MSSyncTable *syncTable = [_amsClient syncTableWithName:entityName];
  if (!syncTable) {
    return callback(nil, [self entityModelNotFound:entityName] );
  }
  
  NSFetchRequest *fetchRequest = [[NSFetchRequest alloc]initWithEntityName: syncTable.name];
  
  NSArray *fetchedItems = [_managedObjectContext executeFetchRequest:fetchRequest error:&err];
  if (err) {
    return callback(nil, err);
  }
  callback([self coreDataObjectsToJsonConvertible:fetchedItems], nil);
}

/**
 *  Helper function: takes an array of NSManagedObjects and transforms them into NSDictionaries.
 *  Dates are stored in core data as NSData object and need to be transformed into a string.
 *
 *  @param coreDataObjects The NSManagedObjects to transform.
 *
 *  @return NSArray of NSDictionary
 */
- (NSArray *)coreDataObjectsToJsonConvertible:(NSArray *)coreDataObjects
{
  NSMutableArray *resultData = [NSMutableArray array];
  
  for (NSManagedObject *coreDataObject in coreDataObjects) {
    NSArray *keys = [[[coreDataObject entity] attributesByName] allKeys];
    NSMutableDictionary *dict = [[coreDataObject dictionaryWithValuesForKeys:keys]mutableCopy];
    
    // check if there are any dates in the dict, because we need to convert them into Strings
    // TODO refactor this using underscore.m
    NSMutableDictionary *datesToUpdate = [[NSMutableDictionary alloc]init];
    for (NSString *key in dict) {
      NSObject *value = [dict valueForKey:key];
      if ([value isKindOfClass:[NSDate class]]) {
        NSDate *date = (NSDate *)value;
        [datesToUpdate setValue:[NSNumber numberWithDouble:[date timeIntervalSince1970]] forKey:key];
      }
    }
    
    for (NSString *key in datesToUpdate) {
      [dict setValue:[datesToUpdate valueForKey:key] forKey:key];
    }
    
    [resultData addObject:dict];
  }
  
  return resultData;
}

#pragma mark Error Handling
- (NSError *)entityModelNotFound:(NSString *)entityName
{
  NSString *message = [NSString stringWithFormat:@"The Model with the name: %@ was not found in CADataService", entityName];
  return createErrorFromMessage(message);
}

- (NSError *)entityDataIsNil
{
  return createErrorFromMessage(@"EntityData is undefined or not correctly formatted");
}

@end
