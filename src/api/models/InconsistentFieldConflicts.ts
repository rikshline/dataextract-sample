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
    InconsistentField,
} from './';

/**
 * @export
 * @interface InconsistentFieldConflicts
 */
export interface InconsistentFieldConflicts {
    /**
     * @type {string}
     * @memberof InconsistentFieldConflicts
     */
    sheet: string;
    /**
     * @type {string}
     * @memberof InconsistentFieldConflicts
     */
    identifierValue: string;
    /**
     * @type {object}
     * @memberof InconsistentFieldConflicts
     */
    identifiers?: object;
    /**
     * @type {object}
     * @memberof InconsistentFieldConflicts
     */
    record: object;
    /**
     * @type {object}
     * @memberof InconsistentFieldConflicts
     */
    fieldTypeMap: object;
    /**
     * @type {Array<InconsistentField>}
     * @memberof InconsistentFieldConflicts
     */
    conflictFields?: Array<InconsistentField>;
    /**
     * @type {number}
     * @memberof InconsistentFieldConflicts
     */
    totalFields?: number;
    /**
     * @type {Array<number>}
     * @memberof InconsistentFieldConflicts
     */
    rows?: Array<number>;
}
