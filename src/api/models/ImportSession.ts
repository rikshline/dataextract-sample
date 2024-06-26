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
    DataSourceSheetTypeEnum,
    DuplicateFields,
    IgnoredSourceField,
    ImportStepEnum,
    MappingSettings,
    MergeSettings,
    SessionMappingStatus,
    SessionValidationStatus,
    SheetIdentifiers,
    SourceDataHeader,
    ValidationSettings,
} from './';

/**
 * @export
 * @interface ImportSession
 */
export interface ImportSession {
    /**
     * @type {string}
     * @memberof ImportSession
     */
    _id: string;
    /**
     * @type {string}
     * @memberof ImportSession
     */
    _projectUid: string;
    /**
     * @type {number}
     * @memberof ImportSession
     */
    extractUserId: number;
    /**
     * @type {boolean}
     * @memberof ImportSession
     */
    applyMappings?: boolean;
    /**
     * @type {boolean}
     * @memberof ImportSession
     */
    applyCorrections?: boolean;
    /**
     * @type {string}
     * @memberof ImportSession
     */
    start: string;
    /**
     * @type {string}
     * @memberof ImportSession
     */
    end?: string;
    /**
     * @type {string}
     * @memberof ImportSession
     */
    lastModified: string;
    /**
     * @type {boolean}
     * @memberof ImportSession
     */
    redcapPending: boolean;
    /**
     * @type {ImportStepEnum}
     * @memberof ImportSession
     */
    currentStep: ImportStepEnum;
    /**
     * @type {string}
     * @memberof ImportSession
     */
    sourceDataName?: string;
    /**
     * @type {Array<SourceDataHeader>}
     * @memberof ImportSession
     */
    originalDataHeaders?: Array<SourceDataHeader>;
    /**
     * @type {Array<SourceDataHeader>}
     * @memberof ImportSession
     */
    sourceDataHeaders?: Array<SourceDataHeader>;
    /**
     * @type {Array<DuplicateFields>}
     * @memberof ImportSession
     */
    duplicateSourceFields?: Array<DuplicateFields>;
    /**
     * @type {boolean}
     * @memberof ImportSession
     */
    isMultiSheet?: boolean;
    /**
     * @type {DataSourceSheetTypeEnum}
     * @memberof ImportSession
     */
    sheetType?: DataSourceSheetTypeEnum;
    /**
     * @type {string}
     * @memberof ImportSession
     */
    sheetJoinField: string;
    /**
     * @type {string}
     * @memberof ImportSession
     */
    checkboxDelimiter?: string;
    /**
     * @type {boolean}
     * @memberof ImportSession
     */
    confirmDeletions?: boolean;
    /**
     * @type {Array<IgnoredSourceField>}
     * @memberof ImportSession
     */
    ignoredSourceFields?: Array<IgnoredSourceField>;
    /**
     * @type {Array<string>}
     * @memberof ImportSession
     */
    malformedSheets?: Array<string>;
    /**
     * @type {Array<SheetIdentifiers>}
     * @memberof ImportSession
     */
    sheetIdentifiers?: Array<SheetIdentifiers>;
    /**
     * @type {string}
     * @memberof ImportSession
     */
    existingRecordsFetchedOn?: string;
    /**
     * @type {SessionMappingStatus}
     * @memberof ImportSession
     */
    mappingStatus?: SessionMappingStatus;
    /**
     * @type {MappingSettings}
     * @memberof ImportSession
     */
    mappingSettings?: MappingSettings;
    /**
     * @type {SessionValidationStatus}
     * @memberof ImportSession
     */
    fieldValidationStatus?: SessionValidationStatus;
    /**
     * @type {ValidationSettings}
     * @memberof ImportSession
     */
    fieldValidationSettings?: ValidationSettings;
    /**
     * @type {SessionValidationStatus}
     * @memberof ImportSession
     */
    recordValidationStatus?: SessionValidationStatus;
    /**
     * @type {SessionValidationStatus}
     * @memberof ImportSession
     */
    mergeStatus?: SessionValidationStatus;
    /**
     * @type {MergeSettings}
     * @memberof ImportSession
     */
    mergeSettings?: MergeSettings;
    /**
     * @type {string}
     * @memberof ImportSession
     */
    encodedOn?: string;
    /**
     * @type {string}
     * @memberof ImportSession
     */
    encodedDownloadOn?: string;
    /**
     * @type {string}
     * @memberof ImportSession
     */
    encodedRcPushOn?: string;
}
