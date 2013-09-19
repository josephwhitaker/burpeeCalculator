/**
 * Appcelerator Titanium Mobile
 * Copyright (c) 2009-2013 by Appcelerator, Inc. All Rights Reserved.
 * Licensed under the terms of the Apache Public License
 * Please see the LICENSE included with this distribution for details.
 *
 * WARNING: This is generated code. Do not modify. Your changes *will* be lost.
 */

#import <Foundation/Foundation.h>
#import "TiUtils.h"
#import "ApplicationDefaults.h"

@implementation ApplicationDefaults

+ (NSMutableDictionary*) copyDefaults
{
	NSMutableDictionary * _property = [[NSMutableDictionary alloc] init];
	
	[_property setObject:[TiUtils stringValue:@"RhlC8sIg4ntsPM63DzZQpan6NOuesdnk"] forKey:@"acs-oauth-secret-production"];
	[_property setObject:[TiUtils stringValue:@"fQy9PAIBSvnadaNb9eiO4iTojO7vNYyn"] forKey:@"acs-oauth-key-production"];
	[_property setObject:[TiUtils stringValue:@"iFpaZzhnqSatNMtPXqjjBszdtAK3yJqR"] forKey:@"acs-api-key-production"];
	[_property setObject:[TiUtils stringValue:@"56NhckoYHdNDtNZKfJ3FJdNObzZXKcrM"] forKey:@"acs-oauth-secret-development"];
	[_property setObject:[TiUtils stringValue:@"8lPaU1siDe9kzWHYQGcV0QfybEdbcY97"] forKey:@"acs-oauth-key-development"];
	[_property setObject:[TiUtils stringValue:@"8vrYCOGobcpcUcgsEaMmNRL3T9uSzrTo"] forKey:@"acs-api-key-development"];
	[_property setObject:[TiUtils stringValue:@"system"] forKey:@"ti.ui.defaultunit"];
	return _property;
}

+ (NSDictionary*) launchUrl {
    static BOOL launched = NO;
    if (!launched) {
        launched = YES;
        return nil;
    } else { return nil;}
}
 
@end