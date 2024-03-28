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

/**
 * @export
 * @interface MergeConflictPayload
 */
export interface MergeConflictPayload {
    /**
     * @type {string}
     * @memberof MergeConflictPayload
     */
    sheetName: string;
    /**
     * @type {number}
     * @memberof MergeConflictPayload
     */
    row?: number;
    /**
     * @type {string}
     * @memberof MergeConflictPayload
     */
    identifierValue: string;
    /**
     * @type {number}
     * @memberof MergeConflictPayload
     */
    page?: number;
    /**
     * @type {number}
     * @memberof MergeConflictPayload
     */
    pageSize?: number;
    /**
     * @type {string}
     * @memberof MergeConflictPayload
     */
    searchTerm?: string;
    /**
     * @type {boolean}
     * @memberof MergeConflictPayload
     */
    conflictsOnly?: boolean;
}
