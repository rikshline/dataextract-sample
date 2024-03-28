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
 * @interface MergeConflictCorrection
 */
export interface MergeConflictCorrection {
    /**
     * @type {string}
     * @memberof MergeConflictCorrection
     */
    _createdOn?: string;
    /**
     * @type {string}
     * @memberof MergeConflictCorrection
     */
    _modifiedOn?: string;
    /**
     * @type {number}
     * @memberof MergeConflictCorrection
     */
    row?: number;
    /**
     * @type {string}
     * @memberof MergeConflictCorrection
     */
    sheet: string;
    /**
     * @type {string}
     * @memberof MergeConflictCorrection
     */
    fieldName: string;
    /**
     * @type {string}
     * @memberof MergeConflictCorrection
     */
    conceptId?: string;
    /**
     * @type {Array<string>}
     * @memberof MergeConflictCorrection
     */
    original: Array<string>;
    /**
     * @type {Array<string>}
     * @memberof MergeConflictCorrection
     */
    update?: Array<string>;
}
