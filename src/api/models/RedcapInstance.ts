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
 * @interface RedcapInstance
 */
export interface RedcapInstance {
    /**
     * @type {number}
     * @memberof RedcapInstance
     */
    id?: number;
    /**
     * @type {string}
     * @memberof RedcapInstance
     */
    url: string;
    /**
     * @type {number}
     * @memberof RedcapInstance
     */
    isDefault?: number;
    /**
     * @type {string}
     * @memberof RedcapInstance
     */
    token?: string;
}