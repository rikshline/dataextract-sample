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
    RedcapProject,
} from './';

/**
 * @export
 * @interface RedcapProjectsResponseAllOfResult
 */
export interface RedcapProjectsResponseAllOfResult {
    /**
     * @type {string}
     * @memberof RedcapProjectsResponseAllOfResult
     */
    jobId?: string;
    /**
     * @type {number}
     * @memberof RedcapProjectsResponseAllOfResult
     */
    total?: number;
    /**
     * @type {Array<RedcapProject>}
     * @memberof RedcapProjectsResponseAllOfResult
     */
    projects?: Array<RedcapProject>;
}
