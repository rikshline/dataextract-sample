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
 * @interface NewValidationErrorMsg
 */
export interface NewValidationErrorMsg {
    /**
     * @type {string}
     * @memberof NewValidationErrorMsg
     */
    sheet: string;
    /**
     * @type {number}
     * @memberof NewValidationErrorMsg
     */
    row: number;
    /**
     * @type {string}
     * @memberof NewValidationErrorMsg
     */
    fieldName: string;
    /**
     * @type {string}
     * @memberof NewValidationErrorMsg
     */
    fieldType?: string;
    /**
     * @type {string}
     * @memberof NewValidationErrorMsg
     */
    conceptId?: string;
    /**
     * @type {string}
     * @memberof NewValidationErrorMsg
     */
    error: string;
    /**
     * @type {Array<string>}
     * @memberof NewValidationErrorMsg
     */
    invalidValues?: Array<string>;
    /**
     * @type {Array<string>}
     * @memberof NewValidationErrorMsg
     */
    corrections?: Array<string>;
}