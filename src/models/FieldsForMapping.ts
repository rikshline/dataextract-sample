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
    IgnoredSourceField,
    SheetTotal,
    SourceFieldCandidate,
    UnmatchedSourceField,
} from './';

/**
 * @export
 * @interface FieldsForMapping
 */
export interface FieldsForMapping {
    /**
     * @type {Array<SheetTotal>}
     * @memberof FieldsForMapping
     */
    total?: Array<SheetTotal>;
    /**
     * @type {Array<SheetTotal>}
     * @memberof FieldsForMapping
     */
    unmatchedTotal?: Array<SheetTotal>;
    /**
     * @type {object}
     * @memberof FieldsForMapping
     */
    hasIdentifierMapped?: object;
    /**
     * @type {Array<string>}
     * @memberof FieldsForMapping
     */
    sourceDataSheets?: Array<string>;
    /**
     * @type {Array<SourceFieldCandidate>}
     * @memberof FieldsForMapping
     */
    sourceFieldCandidates?: Array<SourceFieldCandidate>;
    /**
     * @type {Array<UnmatchedSourceField>}
     * @memberof FieldsForMapping
     */
    unmatchedSourceFields?: Array<UnmatchedSourceField>;
    /**
     * @type {Array<IgnoredSourceField>}
     * @memberof FieldsForMapping
     */
    ignoredSourceFields?: Array<IgnoredSourceField>;
}
