/**
 * MSK Extract Import API V2
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import {
    ImportSession,
} from './';

/**
 * @export
 * @interface UserProjectSessions
 */
export interface UserProjectSessions {
    /**
     * @type {number}
     * @memberof UserProjectSessions
     */
    total?: number;
    /**
     * @type {Array<ImportSession>}
     * @memberof UserProjectSessions
     */
    sessions?: Array<ImportSession>;
}