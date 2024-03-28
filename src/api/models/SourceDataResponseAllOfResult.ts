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
    SourceDataFieldRowErrors,
    SourceDataRes,
} from './';

/**
 * @export
 * @interface SourceDataResponseAllOfResult
 */
export interface SourceDataResponseAllOfResult {
    /**
     * @type {Array<string>}
     * @memberof SourceDataResponseAllOfResult
     */
    recordHeaders: Array<string>;
    /**
     * @type {Array<SourceDataRes>}
     * @memberof SourceDataResponseAllOfResult
     */
    records: Array<SourceDataRes>;
    /**
     * @type {Array<SourceDataFieldRowErrors>}
     * @memberof SourceDataResponseAllOfResult
     */
    validationErrors?: Array<SourceDataFieldRowErrors>;
}