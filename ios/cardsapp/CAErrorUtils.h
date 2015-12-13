//
//  CAErrorUtils.h
//  cardsapp
//
//  Created by Lukas Reichart on 12/12/15.
//  Copyright Bastian Morath and Lukas Reichart. All rights reserved.
//

#import <Foundation/Foundation.h>

NSString *const CADataStoreErrorDomain;

/**
 *  Creates a a new NSError with the provided error message
 *
 *  @param message String to create the error from.
 *
 *  @return The created NSError
 */
NSError *createErrorFromMessage(NSString *message );

/**
 *  This function transform an NSError object into a NSDictionary so we can pass it back to JS.
 *
 *  @param err The NSError to transform.
 *
 *  @return NSDictionary containing the error data.
 */
NSDictionary *errorDictionaryFromError(NSError *err);