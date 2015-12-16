//
//  CardsAppIntegrationTests.m
//  cardsapp
//
//  Created by Lukas Reichart on 13/12/15.
//  Copyright Bastian Morath and Lukas Reichart. All rights reserved.
//


#import <UIKit/UIKit.h>
#import <XCTest/XCTest.h>
#import <RCTTest/RCTTestRunner.h>

#import "RCTAssert.h"

#define RCT_TEST(name)                  \
- (void)test##name                      \
{                                       \
  [_runner runTest:_cmd module:@#name]; \
}

@interface CardsAppIntegrationTests : XCTestCase

@end

@implementation CardsAppIntegrationTests
{
  RCTTestRunner *_runner;
}

- (void)setUp
{
#if __LP64__
  RCTAssert(NO, @"Tests should be run on 32-bit device simulators (e.g. iPhone 5)");
#endif
  
  NSOperatingSystemVersion version = [NSProcessInfo processInfo].operatingSystemVersion;
  RCTAssert((version.majorVersion == 8 && version.minorVersion >= 3) || version.majorVersion >= 9, @"Tests should be run on iOS 8.3+, found %zd.%zd.%zd", version.majorVersion, version.minorVersion, version.patchVersion);
  _runner = [[RCTTestRunner alloc]initWithApp:@"test/integration/IntegrationTestsApp" referenceDirectory:@"\"$(SOURCE_ROOT)/$(PROJECT_NAME)Tests/ReferenceImages\"" moduleProvider:nil];
}

#pragma mark - JS tests

// This list should be kept in sync with IntegrationTestsApp.js
RCT_TEST(FlashCardLibraryTest)


@end