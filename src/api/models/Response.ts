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
 * @interface Response
 */
export interface Response {
    /**
     * @type {string}
     * @memberof Response
     */
    statusText: string;
    /**
     * @type {number}
     * @memberof Response
     */
    statusCode: number;
    /**
     * @type {string}
     * @memberof Response
     */
    result: string;
    /**
     * @type {string}
     * @memberof Response
     */
    message: string;
    /**
     * @type {Array<string>}
     * @memberof Response
     */
    errors?: Array<string>;
    /**
     * @type {string}
     * @memberof Response
     */
    trace?: string;
}
