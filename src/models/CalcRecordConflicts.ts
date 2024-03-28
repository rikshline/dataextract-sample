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
    RecordConflictTypeEnum,
} from './';

/**
 * @export
 * @interface CalcRecordConflicts
 */
export interface CalcRecordConflicts {
    /**
     * @type {number}
     * @memberof CalcRecordConflicts
     */
    total: number;
    /**
     * @type {RecordConflictTypeEnum}
     * @memberof CalcRecordConflicts
     */
    conflictType: RecordConflictTypeEnum;
    /**
     * @type {Array<IdentifierWithConflict>}
     * @memberof CalcRecordConflicts
     */
    identifiersWithConflict: Array<IdentifierWithConflict>;
}
