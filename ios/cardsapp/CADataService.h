//
//  CADataService.h
//  cardsapp
//
//  Created by Lukas Reichart on 10/12/15.
//  Copyright Bastian Morath and Lukas Reichart. All rights reserved.
//

#import <Foundation/Foundation.h>

typedef void (^CACompletionBlock) ();
typedef void (^CAItemResultBlock) (NSDictionary *entity, NSError *err);
typedef void (^CAArrayResultBlock)(NSArray *entities, NSError *err);
typedef void (^CAErrorBlock) (NSError *err );

/**
 CADataService is responsible for handling one NSManagedObjectContext and MSClient object.
 Typically we will create an instance of CADataService for each user.
 */
@interface CADataService : NSObject

- (instancetype)initWithUserId:(NSString *)userId;

/**
 *  Insert an entity into the database managed by the instance.
 *
 *  @param entityName Name of the Entity to insert into. Needs to be defined in Cardsapp.xcdatamodel
 *  @param entityData NSDictionary containing the data to insert.
 *  @param callback   Callback takes an optional error and the result object.
 */
- (void)createEntityWithName:(NSString *)entityName andEntityData:(NSDictionary *)entityData callback:(CAItemResultBlock)callback;

/**
 *  Update an entity in the database.
 *
 *  @param entityName Name of the Entity to update.
 *  @param entityData Data to update with.
 *  @param callback   Callback takes an optional error and the result object.
 */
- (void)updateEntityWithName:(NSString *)entityName andEntityData:(NSDictionary *)entityData callback:(CAItemResultBlock)callback;


/**
 *  Fetch all entries of an entity from the database and transforms the NSManagedObjects into dictionaries.
 *
 *  @param entityName The name of the entity to fetch.
 *  @param callback   Callback takes an optional error and an array of NSDictionaries containing the data.
 */
- (void)fetchEntityWithName:(NSString *)entityName callback:(CAArrayResultBlock)callback;


@property (nonatomic, strong) NSString *userId;

@end
