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
    IdentifierWithConflict,
} from './';

/**
 * @export
 * @interface BulkRemoveDuplicateRecords
 */
export interface BulkRemoveDuplicateRecords {
    /**
     * @type {string}
     * @memberof BulkRemoveDuplicateRecords
     */
    projectUid?: string;
    /**
     * @type {string}
     * @memberof BulkRemoveDuplicateRecords
     */
    sessionUid?: string;
    /**
     * @type {Array<IdentifierWithConflict>}
     * @memberof BulkRemoveDuplicateRecords
     */
    identifiersWithConflict?: Array<IdentifierWithConflict>;
}