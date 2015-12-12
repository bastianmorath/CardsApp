//
//  CAErrorUtils.m
//  cardsapp
//
//  Created by Lukas Reichart on 12/12/15.
//  Copyright Bastian Morath and Lukas Reichart. All rights reserved.
//

#import "CAErrorUtils.h"

NSString *const CADataStoreErrorDomain = @"CADataStoreErrorDomain";

NSError *createErrorFromMessage(NSString *message ) {
  NSDictionary *errorInfo = @{NSLocalizedDescriptionKey: [@"ch.antum.ATDataStore ERROR :: " stringByAppendingString:message]};
  NSError *err = [[NSError alloc] initWithDomain:CADataStoreErrorDomain code:0 userInfo:errorInfo];
  return err;
}

NSDictionary *errorDictionaryFromError(NSError *err)
{
  return err.userInfo;
}