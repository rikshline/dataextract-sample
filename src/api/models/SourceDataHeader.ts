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
 * @interface SourceDataHeader
 */
export interface SourceDataHeader {
    /**
     * @type {string}
     * @memberof SourceDataHeader
     */
    sheet: string;
    /**
     * @type {Array<string>}
     * @memberof SourceDataHeader
     */
    fields: Array<string>;
}