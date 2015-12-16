//
//  CADataStore.h
//  cardsapp
//
//  Created by Lukas Reichart on 05/12/15.
//  Copyright Bastian Morath and Lukas Reichart. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "RCTBridgeModule.h"

/**
 *  The CADataStore is the main interface to the sqlite storage and Azure Mobile Service. It's a Singleton created by react-native and exports the CRUD methods to javascript. In Cardsapp we want to support multiple users, that's why each user gets his own sqlite database. CADataStore does not manage an sqlite storage or interact with AMS by itself but rather creates and instance of CADataService for each user.

    CADataStore doesn't do any error handling. All error handling is done in JS. CADataStore just passes back an error object.
 */
@interface CADataStore : NSObject<RCTBridgeModule>

@end
