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
 * @interface ApplyProjectMappings
 */
export interface ApplyProjectMappings {
    /**
     * @type {boolean}
     * @memberof ApplyProjectMappings
     */
    fieldMappings?: boolean;
    /**
     * @type {boolean}
     * @memberof ApplyProjectMappings
     */
    fieldCorrections?: boolean;
    /**
     * @type {boolean}
     * @memberof ApplyProjectMappings
     */
    ignoredSourceFields?: boolean;
    /**
     * @type {boolean}
     * @memberof ApplyProjectMappings
     */
    ignoredDestinationFields?: boolean;
}
