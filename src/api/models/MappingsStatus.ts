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
 * @interface MappingsStatus
 */
export interface MappingsStatus {
    /**
     * @type {string}
     * @memberof MappingsStatus
     */
    redcapToken?: string;
    /**
     * @type {number}
     * @memberof MappingsStatus
     */
    extractProjectId?: number;
    /**
     * @type {string}
     * @memberof MappingsStatus
     */
    destinationName?: string;
    /**
     * @type {boolean}
     * @memberof MappingsStatus
     */
    isFileImport: boolean;
}
