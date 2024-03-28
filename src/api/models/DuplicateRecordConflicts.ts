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
    DuplicateRecordCorrection,
} from './';

/**
 * @export
 * @interface DuplicateRecordConflicts
 */
export interface DuplicateRecordConflicts {
    /**
     * @type {string}
     * @memberof DuplicateRecordConflicts
     */
    sheet: string;
    /**
     * @type {string}
     * @memberof DuplicateRecordConflicts
     */
    identifierValue: string;
    /**
     * @type {object}
     * @memberof DuplicateRecordConflicts
     */
    identifiers: object;
    /**
     * @type {number}
     * @memberof DuplicateRecordConflicts
     */
    parentRow: number;
    /**
     * @type {Array<number>}
     * @memberof DuplicateRecordConflicts
     */
    rows: Array<number>;
    /**
     * @type {number}
     * @memberof DuplicateRecordConflicts
     */
    totalRows?: number;
    /**
     * @type {Array<DuplicateRecordCorrection>}
     * @memberof DuplicateRecordConflicts
     */
    corrections?: Array<DuplicateRecordCorrection>;
}