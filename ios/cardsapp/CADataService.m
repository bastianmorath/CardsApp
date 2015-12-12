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
- (void)createEntityWithName:(NSString *)entityName andEntityData:(NSDictionary *)entityData callback:(CADataResultBlock)callback
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
