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
 * @interface ExtractReleaseInfoRequest
 */
export interface ExtractReleaseInfoRequest {
    /**
     * @type {number}
     * @memberof ExtractReleaseInfoRequest
     */
    releaseId?: number;
    /**
     * @type {number}
     * @memberof ExtractReleaseInfoRequest
     */
    sourceProjectId?: number;
    /**
     * @type {string}
     * @memberof ExtractReleaseInfoRequest
     */
    sourceProjectName?: string;
    /**
     * @type {number}
     * @memberof ExtractReleaseInfoRequest
     */
    destinationProjectId?: number;
    /**
     * @type {string}
     * @memberof ExtractReleaseInfoRequest
     */
    destinationProjectToken?: string;
    /**
     * @type {string}
     * @memberof ExtractReleaseInfoRequest
     */
    destinationProjectTitle?: string;
    /**
     * @type {boolean}
     * @memberof ExtractReleaseInfoRequest
     */
    isPipingRequest?: boolean;
}
