//
//  CADataStore.m
//  cardsapp
//
//  Created by Lukas Reichart on 05/12/15.
//  Copyright Bastian Morath and Lukas Reichart. All rights reserved.
//

#import "CADataStore.h"
#import "CADataService.h"
#import "CAErrorUtils.h"

@interface CADataStore()

@property (nonatomic,strong) NSMutableDictionary *dataServicesByUser;

@end

@implementation CADataStore

RCT_EXPORT_MODULE()

-(instancetype)init
{
  self = [super init];
  if (self) {
    _dataServicesByUser = [[NSMutableDictionary alloc]init];
  }
  return self;
}

- (CADataService *)getOrCreateDataServiceForUserId:(NSString *)userId
{
  CADataService *dataService = [_dataServicesByUser objectForKey:userId];
  if (!dataService) {
    dataService = [[CADataService alloc]initWithUserId:userId];
    [_dataServicesByUser setValue:dataService forKey:userId];
  }
  return dataService;
}

- (NSError *)checkUserId:(NSString *)userId
{
  NSError *err;
  if (!userId) {
    NSString *message = [NSString stringWithFormat:@"Please specify a valid userId when using CADataStore instead of: %@", userId];
    err = createErrorFromMessage(message);
  }
  return err;
}

/**
 *  Note: createEntityForUser is not responsible for data validation beyond userId, because this is handled in CADataService.
 */
RCT_EXPORT_METHOD(createEntityForUser:(NSString *)userId entityName:(NSString *)entityName withEntityData:(NSDictionary *)entityData callback:(RCTResponseSenderBlock)callback)
{
  NSError *err = [self checkUserId:userId];
  if (err) {
    return callback(@[errorDictionaryFromError(err)]);
  }
  CADataService *dataService = [self getOrCreateDataServiceForUserId:userId];
  [dataService createEntityWithName:entityName andEntityData:entityData callback:^(NSDictionary *entity, NSError *err) {
    if (err) {
      callback(@[errorDictionaryFromError(err)]);
    }
    callback(@[[NSNull null], entity]);
  }];
}

RCT_EXPORT_METHOD(updateEntityForUser:(NSString *)userId entityName:(NSString *)entityName withEntityData:(NSDictionary *)entityData callback:(RCTResponseSenderBlock)callback)
{
  NSError *err = [self checkUserId:userId];
  if (err) {
    return callback(@[errorDictionaryFromError(err)]);
  }
  CADataService *dataService = [self getOrCreateDataServiceForUserId:userId];
  [dataService updateEntityWithName:entityName andEntityData:entityData callback:^(NSDictionary *entity, NSError *err) {
    if (err) {
      callback(@[errorDictionaryFromError(err)]);
    }
    callback(@[[NSNull null], entity]);
  }];
}

RCT_EXPORT_METHOD(deleteEntityForUser:(NSString *)userId entityName:(NSString *)entityName entityId:(NSString *)entityId callback:(RCTResponseSenderBlock)callback )
{
  
  NSError *err = [self checkUserId:userId];
  if (err) {
    return callback(@[errorDictionaryFromError(err)]);
  }
  CADataService *dataService = [self getOrCreateDataServiceForUserId:userId];
  [dataService deleteEntityWithName:entityName andEntityId:entityId callback:^(NSError *err) {
    if (err) {
      callback(@[errorDictionaryFromError(err)]);
    }
    callback(@[[NSNull null]]);
  }];
}


RCT_EXPORT_METHOD(fetchEntitiesForUser:(NSString *)userId entityName:(NSString *)entityName callback:(RCTResponseSenderBlock)callback)
{
  NSError *err = [self checkUserId:userId];
  if (err) {
    return callback(@[errorDictionaryFromError(err)]);
  }
  CADataService *dataService = [self getOrCreateDataServiceForUserId:userId];
  [dataService fetchEntityWithName:entityName callback:^(NSArray *entities, NSError *err) {
    if (err) {
      callback(@[errorDictionaryFromError(err)]);
    }
    callback(@[[NSNull null], entities]);
  }];
}


@end
