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
    FieldMapping,
    SourceCandidate,
} from './';

/**
 * @export
 * @interface SourceFieldCandidate
 */
export interface SourceFieldCandidate {
    /**
     * @type {string}
     * @memberof SourceFieldCandidate
     */
    sheetName: string;
    /**
     * @type {string}
     * @memberof SourceFieldCandidate
     */
    fieldName: string;
    /**
     * @type {string}
     * @memberof SourceFieldCandidate
     */
    conceptId?: string;
    /**
     * @type {FieldMapping}
     * @memberof SourceFieldCandidate
     */
    mapping?: FieldMapping;
    /**
     * @type {Array<SourceCandidate>}
     * @memberof SourceFieldCandidate
     */
    candidates?: Array<SourceCandidate>;
}