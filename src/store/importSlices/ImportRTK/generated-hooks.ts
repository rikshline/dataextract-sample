import { emptySplitApi as api } from "./emptyApi";
export const addTagTypes = [
  "socket",
  "session",
  "data",
  "import",
  "mapping",
  "validation",
  "cleaning",
  "merge",
  "export",
] as const;
const injectedRtkApi = api
  .enhanceEndpoints({
    addTagTypes,
  })
  .injectEndpoints({
    endpoints: (build) => ({
      open: build.query<OpenApiResponse, OpenApiArg>({
        query: (queryArg) => ({
          url: `/socket/task-status/${queryArg.taskId}`,
        }),
        providesTags: ["socket"],
      }),
      getUser: build.mutation<GetUserApiResponse, GetUserApiArg>({
        query: (queryArg) => ({
          url: `/sessions/user`,
          method: "POST",
          body: queryArg.body,
        }),
        invalidatesTags: ["session"],
      }),
      getUserProjectSessionsDeprecated: build.query<
        GetUserProjectSessionsDeprecatedApiResponse,
        GetUserProjectSessionsDeprecatedApiArg
      >({
        query: (queryArg) => ({
          url: `/sessions/user/${queryArg.extractUserId}/${queryArg.extractToken}/deprecated`,
          params: {
            page: queryArg.page,
            pageSize: queryArg.pageSize,
            searchTerm: queryArg.searchTerm,
            startDate: queryArg.startDate,
            endDate: queryArg.endDate,
            sessionStatus: queryArg.sessionStatus,
          },
        }),
        providesTags: ["session"],
      }),
      getUserProjectSessions: build.query<
        GetUserProjectSessionsApiResponse,
        GetUserProjectSessionsApiArg
      >({
        query: (queryArg) => ({
          url: `/sessions/user/${queryArg.extractUserId}/${queryArg.extractToken}`,
          params: {
            page: queryArg.page,
            pageSize: queryArg.pageSize,
            searchTerm: queryArg.searchTerm,
            startDate: queryArg.startDate,
            endDate: queryArg.endDate,
            sessionStatus: queryArg.sessionStatus,
          },
        }),
        providesTags: ["session"],
      }),
      getProjectSessions: build.query<
        GetProjectSessionsApiResponse,
        GetProjectSessionsApiArg
      >({
        query: (queryArg) => ({
          url: `/sessions/project/${queryArg.projectUid}`,
          params: {
            page: queryArg.page,
            pageSize: queryArg.pageSize,
            searchTerm: queryArg.searchTerm,
            startDate: queryArg.startDate,
            endDate: queryArg.endDate,
            sessionStatus: queryArg.sessionStatus,
          },
        }),
        providesTags: ["session"],
      }),
      getSession: build.query<GetSessionApiResponse, GetSessionApiArg>({
        query: (queryArg) => ({ url: `/session/${queryArg.sessionUid}` }),
        providesTags: ["session"],
      }),
      updateSession: build.mutation<
        UpdateSessionApiResponse,
        UpdateSessionApiArg
      >({
        query: (queryArg) => ({
          url: `/session/${queryArg.sessionUid}`,
          method: "POST",
          body: queryArg.updateSessionPayload,
          params: { projectUid: queryArg.projectUid },
        }),
        invalidatesTags: ["session"],
      }),
      deleteSession: build.mutation<
        DeleteSessionApiResponse,
        DeleteSessionApiArg
      >({
        query: (queryArg) => ({
          url: `/session/${queryArg.sessionUid}`,
          method: "DELETE",
        }),
        invalidatesTags: ["session"],
      }),
      getBaseImportData: build.query<
        GetBaseImportDataApiResponse,
        GetBaseImportDataApiArg
      >({
        query: (queryArg) => ({
          url: `/data/base/${queryArg.projectUid}/${queryArg.sessionUid}`,
        }),
        providesTags: ["data"],
      }),
      getSourceData: build.query<GetSourceDataApiResponse, GetSourceDataApiArg>(
        {
          query: (queryArg) => ({
            url: `/data/${queryArg.projectUid}/${queryArg.sessionUid}/source-data/paginated`,
            params: {
              page: queryArg.page,
              pageSize: queryArg.pageSize,
              searchTerm: queryArg.searchTerm,
              sheetName: queryArg.sheetName,
              fieldName: queryArg.fieldName,
              rowIndex: queryArg.rowIndex,
            },
          }),
          providesTags: ["data"],
        }
      ),
      getMetadataField: build.query<
        GetMetadataFieldApiResponse,
        GetMetadataFieldApiArg
      >({
        query: (queryArg) => ({
          url: `/data/${queryArg.projectUid}/metadata/${queryArg.fieldName}`,
          params: { pvPage: queryArg.pvPage, pvPageSize: queryArg.pvPageSize },
        }),
        providesTags: ["data"],
      }),
      getMetadata: build.query<GetMetadataApiResponse, GetMetadataApiArg>({
        query: (queryArg) => ({
          url: `/data/${queryArg.projectUid}/metadata/paginated`,
          params: {
            page: queryArg.page,
            pageSize: queryArg.pageSize,
            searchTerm: queryArg.searchTerm,
            formName: queryArg.formName,
            fieldName: queryArg.fieldName,
            mappingsCounts: queryArg.mappingsCounts,
          },
        }),
        providesTags: ["data"],
      }),
      getProjectConfigs: build.query<
        GetProjectConfigsApiResponse,
        GetProjectConfigsApiArg
      >({
        query: (queryArg) => ({
          url: `/data/${queryArg.projectUid}/configs/${queryArg.configType}/paginated`,
          params: {
            page: queryArg.page,
            pageSize: queryArg.pageSize,
            searchTerm: queryArg.searchTerm,
          },
        }),
        providesTags: ["data"],
      }),
      getSessionValidationData: build.query<
        GetSessionValidationDataApiResponse,
        GetSessionValidationDataApiArg
      >({
        query: (queryArg) => ({
          url: `/data/${queryArg.sessionUid}/${queryArg.itemType}/paginated`,
          params: {
            page: queryArg.page,
            pageSize: queryArg.pageSize,
            searchTerm: queryArg.searchTerm,
          },
        }),
        providesTags: ["data"],
      }),
      getRedcapVersion: build.mutation<
        GetRedcapVersionApiResponse,
        GetRedcapVersionApiArg
      >({
        query: (queryArg) => ({
          url: `/data/redcap/version`,
          method: "POST",
          body: queryArg.redcapVersionPayload,
        }),
        invalidatesTags: ["data"],
      }),
      getProjectAutoNumberingStatus: build.mutation<
        GetProjectAutoNumberingStatusApiResponse,
        GetProjectAutoNumberingStatusApiArg
      >({
        query: (queryArg) => ({
          url: `/data/redcap/project-autonumbering`,
          method: "POST",
          body: queryArg.body,
        }),
        invalidatesTags: ["data"],
      }),
      decodeRedcapRecords: build.mutation<
        DecodeRedcapRecordsApiResponse,
        DecodeRedcapRecordsApiArg
      >({
        query: (queryArg) => ({
          url: `/data/decode-redcap`,
          method: "POST",
          body: queryArg.decodePayload,
        }),
        invalidatesTags: ["data"],
      }),
      getEncodedRecords: build.query<
        GetEncodedRecordsApiResponse,
        GetEncodedRecordsApiArg
      >({
        query: (queryArg) => ({
          url: `/data/encode-records/${queryArg.projectUid}/${queryArg.sessionUid}`,
          params: {
            page: queryArg.page,
            pageSize: queryArg.pageSize,
            searchTerm: queryArg.searchTerm,
            encodeType: queryArg.encodeType,
          },
        }),
        providesTags: ["data"],
      }),
      encodeRecords: build.mutation<
        EncodeRecordsApiResponse,
        EncodeRecordsApiArg
      >({
        query: (queryArg) => ({
          url: `/data/encode-records/${queryArg.projectUid}/${queryArg.sessionUid}`,
          method: "POST",
          params: { encodeType: queryArg.encodeType },
        }),
        invalidatesTags: ["data"],
      }),
      fetchExtractProjects: build.query<
        FetchExtractProjectsApiResponse,
        FetchExtractProjectsApiArg
      >({
        query: (queryArg) => ({
          url: `/import/extract-projects/${queryArg.extractToken}`,
        }),
        providesTags: ["import"],
      }),
      fetchExtractRelease: build.query<
        FetchExtractReleaseApiResponse,
        FetchExtractReleaseApiArg
      >({
        query: (queryArg) => ({
          url: `/import/extract-release/${queryArg.releaseId}`,
        }),
        providesTags: ["import"],
      }),
      initDataImport: build.mutation<
        InitDataImportApiResponse,
        InitDataImportApiArg
      >({
        query: (queryArg) => ({
          url: `/import/records`,
          method: "POST",
          body: queryArg.body,
        }),
        invalidatesTags: ["import"],
      }),
      initDataFileImport: build.mutation<
        InitDataFileImportApiResponse,
        InitDataFileImportApiArg
      >({
        query: (queryArg) => ({
          url: `/import/records/file`,
          method: "POST",
          body: queryArg.body,
        }),
        invalidatesTags: ["import"],
      }),
      initDataReleaseImport: build.mutation<
        InitDataReleaseImportApiResponse,
        InitDataReleaseImportApiArg
      >({
        query: (queryArg) => ({
          url: `/import/records/extract-release`,
          method: "POST",
          body: queryArg.extractReleaseInfoRequest,
        }),
        invalidatesTags: ["import"],
      }),
      importExistingRecordsRedcap: build.mutation<
        ImportExistingRecordsRedcapApiResponse,
        ImportExistingRecordsRedcapApiArg
      >({
        query: (queryArg) => ({
          url: `/import/existing-records/redcap`,
          method: "POST",
          body: queryArg.importExistingRedcapPayload,
        }),
        invalidatesTags: ["import"],
      }),
      importExistingRecordsFile: build.mutation<
        ImportExistingRecordsFileApiResponse,
        ImportExistingRecordsFileApiArg
      >({
        query: (queryArg) => ({
          url: `/import/existing-records/rc-file`,
          method: "POST",
          body: queryArg.body,
        }),
        invalidatesTags: ["import"],
      }),
      initBuildAndImport: build.mutation<
        InitBuildAndImportApiResponse,
        InitBuildAndImportApiArg
      >({
        query: (queryArg) => ({
          url: `/import-build/records/file`,
          method: "POST",
          body: queryArg.body,
        }),
        invalidatesTags: ["import"],
      }),
      getProjectMappings: build.query<
        GetProjectMappingsApiResponse,
        GetProjectMappingsApiArg
      >({
        query: (queryArg) => ({
          url: `/field-mapping/${queryArg.projectUid}`,
          params: {
            page: queryArg.page,
            pageSize: queryArg.pageSize,
            searchTerm: queryArg.searchTerm,
            fieldName: queryArg.fieldName,
          },
        }),
        providesTags: ["mapping"],
      }),
      checkProjectMappingStatus: build.mutation<
        CheckProjectMappingStatusApiResponse,
        CheckProjectMappingStatusApiArg
      >({
        query: (queryArg) => ({
          url: `/field-mapping/project-mapping-status`,
          method: "POST",
          body: queryArg.mappingsStatusPayload,
        }),
        invalidatesTags: ["mapping"],
      }),
      getMappingSettings: build.query<
        GetMappingSettingsApiResponse,
        GetMappingSettingsApiArg
      >({
        query: (queryArg) => ({
          url: `/field-mapping/settings/${queryArg.sessionUid}`,
        }),
        providesTags: ["mapping"],
      }),
      updateMappingSettings: build.mutation<
        UpdateMappingSettingsApiResponse,
        UpdateMappingSettingsApiArg
      >({
        query: (queryArg) => ({
          url: `/field-mapping/settings/${queryArg.sessionUid}`,
          method: "POST",
          body: queryArg.mappingSettings,
        }),
        invalidatesTags: ["mapping"],
      }),
      createFieldMappings: build.mutation<
        CreateFieldMappingsApiResponse,
        CreateFieldMappingsApiArg
      >({
        query: (queryArg) => ({
          url: `/field-mapping/create`,
          method: "POST",
          body: queryArg.newMappingsPayload,
        }),
        invalidatesTags: ["mapping"],
      }),
      checkRemovalEffect: build.query<
        CheckRemovalEffectApiResponse,
        CheckRemovalEffectApiArg
      >({
        query: (queryArg) => ({
          url: `/field-mapping/deletion-check/${queryArg.projectUid}/${queryArg.sessionUid}/${queryArg.mappingUid}`,
        }),
        providesTags: ["mapping"],
      }),
      removeFieldMapping: build.mutation<
        RemoveFieldMappingApiResponse,
        RemoveFieldMappingApiArg
      >({
        query: (queryArg) => ({
          url: `/field-mapping/${queryArg.projectUid}/${queryArg.mappingUid}`,
          method: "DELETE",
          params: { sessionUid: queryArg.sessionUid },
        }),
        invalidatesTags: ["mapping"],
      }),
      unignoreSourceField: build.mutation<
        UnignoreSourceFieldApiResponse,
        UnignoreSourceFieldApiArg
      >({
        query: (queryArg) => ({
          url: `/field-mapping/ignore/undo`,
          method: "POST",
          body: queryArg.unignoreFieldPayload,
        }),
        invalidatesTags: ["mapping"],
      }),
      getFieldsForMapping: build.query<
        GetFieldsForMappingApiResponse,
        GetFieldsForMappingApiArg
      >({
        query: (queryArg) => ({
          url: `/field-mapping/fields/${queryArg.projectUid}/${queryArg.sessionUid}`,
          params: {
            sheet: queryArg.sheet,
            page: queryArg.page,
            pageSize: queryArg.pageSize,
            searchTerm: queryArg.searchTerm,
            unmatchedOnly: queryArg.unmatchedOnly,
            matchedOnly: queryArg.matchedOnly,
            applyMappings: queryArg.applyMappings,
            inferFieldName: queryArg.inferFieldName,
          },
        }),
        providesTags: ["mapping"],
      }),
      getFieldCandidates: build.query<
        GetFieldCandidatesApiResponse,
        GetFieldCandidatesApiArg
      >({
        query: (queryArg) => ({
          url: `/field-mapping/field-candidates/${queryArg.projectUid}/${queryArg.sessionUid}`,
          params: {
            sheet: queryArg.sheet,
            fieldName: queryArg.fieldName,
            page: queryArg.page,
            pageSize: queryArg.pageSize,
            searchTerm: queryArg.searchTerm,
          },
        }),
        providesTags: ["mapping"],
      }),
      applyProjectMappings: build.mutation<
        ApplyProjectMappingsApiResponse,
        ApplyProjectMappingsApiArg
      >({
        query: (queryArg) => ({
          url: `/field-mapping/apply-saved`,
          method: "POST",
          body: queryArg.applyProjectMappingsPayload,
        }),
        invalidatesTags: ["mapping"],
      }),
      getValidationSettings: build.query<
        GetValidationSettingsApiResponse,
        GetValidationSettingsApiArg
      >({
        query: (queryArg) => ({
          url: `/field-validation/settings/${queryArg.sessionUid}`,
        }),
        providesTags: ["validation"],
      }),
      updateValidationSettings: build.mutation<
        UpdateValidationSettingsApiResponse,
        UpdateValidationSettingsApiArg
      >({
        query: (queryArg) => ({
          url: `/field-validation/settings/${queryArg.sessionUid}`,
          method: "POST",
          body: queryArg.validationSettings,
        }),
        invalidatesTags: ["validation"],
      }),
      getValidationErrors: build.query<
        GetValidationErrorsApiResponse,
        GetValidationErrorsApiArg
      >({
        query: (queryArg) => ({
          url: `/field-validation/all/${queryArg.projectUid}/${queryArg.sessionUid}`,
        }),
        providesTags: ["validation"],
      }),
      validateSourceData: build.mutation<
        ValidateSourceDataApiResponse,
        ValidateSourceDataApiArg
      >({
        query: (queryArg) => ({
          url: `/field-validation/all/${queryArg.projectUid}/${queryArg.sessionUid}`,
          method: "POST",
          body: queryArg.validateDataPayload,
        }),
        invalidatesTags: ["validation"],
      }),
      getValidationStatus: build.mutation<
        GetValidationStatusApiResponse,
        GetValidationStatusApiArg
      >({
        query: (queryArg) => ({
          url: `/field-validation/status`,
          method: "POST",
          body: queryArg.validationStatusPayload,
        }),
        invalidatesTags: ["validation"],
      }),
      validateField: build.mutation<
        ValidateFieldApiResponse,
        ValidateFieldApiArg
      >({
        query: (queryArg) => ({
          url: `/field-validation/field`,
          method: "POST",
          body: queryArg.validateFieldPayload,
        }),
        invalidatesTags: ["validation"],
      }),
      validateRecord: build.mutation<
        ValidateRecordApiResponse,
        ValidateRecordApiArg
      >({
        query: (queryArg) => ({
          url: `/field-validation/record`,
          method: "POST",
          body: queryArg.validateRecordPayload,
        }),
        invalidatesTags: ["validation"],
      }),
      resolveValidationError: build.mutation<
        ResolveValidationErrorApiResponse,
        ResolveValidationErrorApiArg
      >({
        query: (queryArg) => ({
          url: `/field-validation/session-correction`,
          method: "POST",
          body: queryArg.resolveValidationPayload,
        }),
        invalidatesTags: ["validation"],
      }),
      deleteSessionValidationCorrection: build.mutation<
        DeleteSessionValidationCorrectionApiResponse,
        DeleteSessionValidationCorrectionApiArg
      >({
        query: (queryArg) => ({
          url: `/field-validation/remove/session-correction`,
          method: "POST",
          body: queryArg.resolveValidationPayload,
        }),
        invalidatesTags: ["validation"],
      }),
      saveValidationCorrections: build.mutation<
        SaveValidationCorrectionsApiResponse,
        SaveValidationCorrectionsApiArg
      >({
        query: (queryArg) => ({
          url: `/field-validation/store-corrections`,
          method: "PUT",
          body: queryArg.saveValidationCorrectionsPayload,
        }),
        invalidatesTags: ["validation"],
      }),
      getRecordValidationStatus: build.mutation<
        GetRecordValidationStatusApiResponse,
        GetRecordValidationStatusApiArg
      >({
        query: (queryArg) => ({
          url: `/record-validation/status/${queryArg.conflictType}/${queryArg.projectUid}/${queryArg.sessionUid}`,
          method: "POST",
          body: queryArg.recordValidationStatusPayload,
        }),
        invalidatesTags: ["cleaning"],
      }),
      getRecordConflicts: build.query<
        GetRecordConflictsApiResponse,
        GetRecordConflictsApiArg
      >({
        query: (queryArg) => ({
          url: `/record-validation/all/${queryArg.conflictType}/${queryArg.projectUid}/${queryArg.sessionUid}`,
        }),
        providesTags: ["cleaning"],
      }),
      calculateRecordConflicts: build.mutation<
        CalculateRecordConflictsApiResponse,
        CalculateRecordConflictsApiArg
      >({
        query: (queryArg) => ({
          url: `/record-validation/all/${queryArg.conflictType}/${queryArg.projectUid}/${queryArg.sessionUid}`,
          method: "POST",
        }),
        invalidatesTags: ["cleaning"],
      }),
      fetchInconsistentConflict: build.mutation<
        FetchInconsistentConflictApiResponse,
        FetchInconsistentConflictApiArg
      >({
        query: (queryArg) => ({
          url: `/record-validation/inconsistent/${queryArg.projectUid}/${queryArg.sessionUid}`,
          method: "POST",
          body: queryArg.inconsistentConflictPayload,
        }),
        invalidatesTags: ["cleaning"],
      }),
      fetchInconsistentFieldValues: build.mutation<
        FetchInconsistentFieldValuesApiResponse,
        FetchInconsistentFieldValuesApiArg
      >({
        query: (queryArg) => ({
          url: `/record-validation/inconsistent/values/${queryArg.projectUid}/${queryArg.sessionUid}`,
          method: "POST",
          body: queryArg.inconsistentFieldValuesPayload,
        }),
        invalidatesTags: ["cleaning"],
      }),
      resolveInconsistentConflict: build.mutation<
        ResolveInconsistentConflictApiResponse,
        ResolveInconsistentConflictApiArg
      >({
        query: (queryArg) => ({
          url: `/record-validation/inconsistent/resolve`,
          method: "POST",
          body: queryArg.resolveInconsistentConflictPayload,
        }),
        invalidatesTags: ["cleaning"],
      }),
      removeInconsistentCorrections: build.mutation<
        RemoveInconsistentCorrectionsApiResponse,
        RemoveInconsistentCorrectionsApiArg
      >({
        query: (queryArg) => ({
          url: `/record-validation/inconsistent/remove-correction`,
          method: "POST",
          body: queryArg.removeInconsistentCorrectionPayload,
        }),
        invalidatesTags: ["cleaning"],
      }),
      fetchDuplicateConflict: build.mutation<
        FetchDuplicateConflictApiResponse,
        FetchDuplicateConflictApiArg
      >({
        query: (queryArg) => ({
          url: `/record-validation/duplicate/${queryArg.projectUid}/${queryArg.sessionUid}`,
          method: "POST",
          body: queryArg.duplicateConflictPayload,
        }),
        invalidatesTags: ["cleaning"],
      }),
      resolveDuplicateConflict: build.mutation<
        ResolveDuplicateConflictApiResponse,
        ResolveDuplicateConflictApiArg
      >({
        query: (queryArg) => ({
          url: `/record-validation/duplicate/resolve`,
          method: "POST",
          body: queryArg.resolveDuplicateConflictPayload,
        }),
        invalidatesTags: ["cleaning"],
      }),
      bulkRemoveDuplicateRecords: build.mutation<
        BulkRemoveDuplicateRecordsApiResponse,
        BulkRemoveDuplicateRecordsApiArg
      >({
        query: (queryArg) => ({
          url: `/record-validation/duplicate/remove-all`,
          method: "POST",
          body: queryArg.bulkRemoveDuplicateRecordsPayload,
        }),
        invalidatesTags: ["cleaning"],
      }),
      removeDuplicateCorrections: build.mutation<
        RemoveDuplicateCorrectionsApiResponse,
        RemoveDuplicateCorrectionsApiArg
      >({
        query: (queryArg) => ({
          url: `/record-validation/duplicate/remove-correction`,
          method: "POST",
          body: queryArg.removeDuplicateCorrectionPayload,
        }),
        invalidatesTags: ["cleaning"],
      }),
      getMergeSettings: build.query<
        GetMergeSettingsApiResponse,
        GetMergeSettingsApiArg
      >({
        query: (queryArg) => ({
          url: `/merge-conflicts/settings/${queryArg.sessionUid}`,
        }),
        providesTags: ["merge"],
      }),
      updateMergeSettings: build.mutation<
        UpdateMergeSettingsApiResponse,
        UpdateMergeSettingsApiArg
      >({
        query: (queryArg) => ({
          url: `/merge-conflicts/settings/${queryArg.sessionUid}`,
          method: "POST",
          body: queryArg.mergeSettings,
        }),
        invalidatesTags: ["merge"],
      }),
      getMergeConflictStatus: build.mutation<
        GetMergeConflictStatusApiResponse,
        GetMergeConflictStatusApiArg
      >({
        query: (queryArg) => ({
          url: `/merge-conflicts/status/${queryArg.projectUid}/${queryArg.sessionUid}`,
          method: "POST",
          body: queryArg.mergeConflictStatusPayload,
        }),
        invalidatesTags: ["merge"],
      }),
      fetchRepeatingForms: build.query<
        FetchRepeatingFormsApiResponse,
        FetchRepeatingFormsApiArg
      >({
        query: (queryArg) => ({
          url: `/merge-conflicts/${queryArg.projectUid}/${queryArg.sessionUid}/repeat-forms`,
          params: { page: queryArg.page, pageSize: queryArg.pageSize },
        }),
        providesTags: ["merge"],
      }),
      fetchRepeatingFormFields: build.query<
        FetchRepeatingFormFieldsApiResponse,
        FetchRepeatingFormFieldsApiArg
      >({
        query: (queryArg) => ({
          url: `/merge-conflicts/${queryArg.projectUid}/${queryArg.sessionUid}/${queryArg.formName}/fields`,
        }),
        providesTags: ["merge"],
      }),
      saveFormIdentifierFields: build.mutation<
        SaveFormIdentifierFieldsApiResponse,
        SaveFormIdentifierFieldsApiArg
      >({
        query: (queryArg) => ({
          url: `/merge-conflicts/${queryArg.projectUid}/${queryArg.sessionUid}/${queryArg.formName}/fields`,
          method: "POST",
          body: queryArg.body,
        }),
        invalidatesTags: ["merge"],
      }),
      getSessionMergeConflicts: build.query<
        GetSessionMergeConflictsApiResponse,
        GetSessionMergeConflictsApiArg
      >({
        query: (queryArg) => ({
          url: `/merge-conflicts/all/${queryArg.projectUid}/${queryArg.sessionUid}`,
          params: { page: queryArg.page, pageSize: queryArg.pageSize },
        }),
        providesTags: ["merge"],
      }),
      calculateMergeConflicts: build.mutation<
        CalculateMergeConflictsApiResponse,
        CalculateMergeConflictsApiArg
      >({
        query: (queryArg) => ({
          url: `/merge-conflicts/all/${queryArg.projectUid}/${queryArg.sessionUid}`,
          method: "POST",
        }),
        invalidatesTags: ["merge"],
      }),
      getIdentifierMergeConflicts: build.mutation<
        GetIdentifierMergeConflictsApiResponse,
        GetIdentifierMergeConflictsApiArg
      >({
        query: (queryArg) => ({
          url: `/merge-conflicts/conflict/${queryArg.projectUid}/${queryArg.sessionUid}`,
          method: "POST",
          body: queryArg.mergeConflictPayload,
        }),
        invalidatesTags: ["merge"],
      }),
      resolveMergeConflict: build.mutation<
        ResolveMergeConflictApiResponse,
        ResolveMergeConflictApiArg
      >({
        query: (queryArg) => ({
          url: `/merge-conflicts/conflict/resolve`,
          method: "POST",
          body: queryArg.resolveMergeConflictPayload,
        }),
        invalidatesTags: ["merge"],
      }),
      bulkResolveMergeConflict: build.mutation<
        BulkResolveMergeConflictApiResponse,
        BulkResolveMergeConflictApiArg
      >({
        query: (queryArg) => ({
          url: `/merge-conflicts/conflict/bulk-resolve`,
          method: "POST",
          body: queryArg.bulkResolveMergeConflictPayload,
        }),
        invalidatesTags: ["merge"],
      }),
      removeMergeConflictCorrection: build.mutation<
        RemoveMergeConflictCorrectionApiResponse,
        RemoveMergeConflictCorrectionApiArg
      >({
        query: (queryArg) => ({
          url: `/merge-conflicts/conflict/remove-correction`,
          method: "POST",
          body: queryArg.removeMergeConflictCorrectionPayload,
        }),
        invalidatesTags: ["merge"],
      }),
      downloadMappings: build.query<
        DownloadMappingsApiResponse,
        DownloadMappingsApiArg
      >({
        query: (queryArg) => ({
          url: `/export/mappings/${queryArg.projectUid}`,
        }),
        providesTags: ["export"],
      }),
      downloadRecords: build.mutation<
        DownloadRecordsApiResponse,
        DownloadRecordsApiArg
      >({
        query: (queryArg) => ({
          url: `/export/validated-records/${queryArg.projectUid}/${queryArg.sessionUid}/redcap-file`,
          method: "POST",
        }),
        invalidatesTags: ["export"],
      }),
      exportRecords: build.mutation<
        ExportRecordsApiResponse,
        ExportRecordsApiArg
      >({
        query: (queryArg) => ({
          url: `/export/validated-records/${queryArg.projectUid}/${queryArg.sessionUid}`,
          method: "POST",
          params: { destination: queryArg.destination },
        }),
        invalidatesTags: ["export"],
      }),
      exportReport: build.mutation<ExportReportApiResponse, ExportReportApiArg>(
        {
          query: (queryArg) => ({
            url: `/export/changelog/${queryArg.projectUid}/${queryArg.sessionUid}/${queryArg.exportType}`,
            method: "POST",
          }),
          invalidatesTags: ["export"],
        }
      ),
    }),
    overrideExisting: false,
  });
export { injectedRtkApi as mskExtractImportApi };
export type OpenApiResponse = /** status 200 successful operation */ object;
export type OpenApiArg = {
  /** Import Session UID */
  taskId: string;
};
export type GetUserApiResponse =
  /** status 200 successful operation */ UserResponse;
export type GetUserApiArg = {
  /** Session Object Payload */
  body: {
    accessToken: string;
  };
};
export type GetUserProjectSessionsDeprecatedApiResponse =
  /** status 200 successful operation */ ProjectsWithSessionsResponse;
export type GetUserProjectSessionsDeprecatedApiArg = {
  /** Extract User ID */
  extractUserId: number;
  /** Extract User Token */
  extractToken: string;
  /** Page */
  page?: number;
  /** Page Size */
  pageSize?: number;
  /** Text Search */
  searchTerm?: string;
  /** Filter Start Date */
  startDate?: string;
  /** Filter End Date */
  endDate?: string;
  /** Session Status Filter */
  sessionStatus?: "inProgress" | "complete";
};
export type GetUserProjectSessionsApiResponse =
  /** status 200 successful operation */ ProjectsWithSessionsResponse;
export type GetUserProjectSessionsApiArg = {
  /** Extract User ID */
  extractUserId: number;
  /** Extract User Token */
  extractToken: string;
  /** Page */
  page?: number;
  /** Page Size */
  pageSize?: number;
  /** Text Search */
  searchTerm?: string;
  /** Filter Start Date */
  startDate?: string;
  /** Filter End Date */
  endDate?: string;
  /** Session Status Filter */
  sessionStatus?: "inProgress" | "complete";
};
export type GetProjectSessionsApiResponse =
  /** status 200 successful operation */ ProjectSessionResponse;
export type GetProjectSessionsApiArg = {
  /** Project UID */
  projectUid: string;
  /** Page */
  page?: number;
  /** Page Size */
  pageSize?: number;
  /** Text Search */
  searchTerm?: string;
  /** Filter Start Date */
  startDate?: string;
  /** Filter End Date */
  endDate?: string;
  /** Session Status Filter */
  sessionStatus?: "inProgress" | "complete";
};
export type GetSessionApiResponse =
  /** status 200 successful operation */ SessionResponse;
export type GetSessionApiArg = {
  /** Session UID */
  sessionUid: string;
};
export type UpdateSessionApiResponse =
  /** status 200 successful operation */ SessionResponse;
export type UpdateSessionApiArg = {
  /** Session UID */
  sessionUid: string;
  /** Project UID */
  projectUid?: string;
  /** Session Object Payload */
  updateSessionPayload: UpdateSessionPayload;
};
export type DeleteSessionApiResponse =
  /** status 200 successful operation */ Response;
export type DeleteSessionApiArg = {
  /** Session UID */
  sessionUid: string;
};
export type GetBaseImportDataApiResponse =
  /** status 200 successful operation */ BaseImportDataResponse;
export type GetBaseImportDataApiArg = {
  /** Project UID */
  projectUid: string;
  /** Session UID */
  sessionUid: string;
};
export type GetSourceDataApiResponse =
  /** status 200 successful operation */ SourceDataResponse;
export type GetSourceDataApiArg = {
  /** Project UID */
  projectUid: string;
  /** Session UID */
  sessionUid: string;
  /** Page */
  page?: number;
  /** Page Size */
  pageSize?: number;
  /** Search Term */
  searchTerm?: string;
  /** Sheet Filter */
  sheetName?: string;
  /** Field Filter */
  fieldName?: string;
  /** Row Index */
  rowIndex?: number[];
};
export type GetMetadataFieldApiResponse =
  /** status 200 successful operation */ FieldMetadataResponse;
export type GetMetadataFieldApiArg = {
  /** Project UID */
  projectUid: string;
  /** Field Name */
  fieldName: string;
  /** Page */
  pvPage?: number;
  /** Page Size */
  pvPageSize?: number;
};
export type GetMetadataApiResponse =
  /** status 200 successful operation */ MetadataResponse;
export type GetMetadataApiArg = {
  /** Project UID */
  projectUid: string;
  /** Page */
  page?: number;
  /** Page Size */
  pageSize?: number;
  /** Search Term */
  searchTerm?: string;
  /** Form Filter */
  formName?: string;
  /** Field Filter */
  fieldName?: string;
  /** Return Field Mappings Counts */
  mappingsCounts?: boolean;
};
export type GetProjectConfigsApiResponse =
  /** status 200 successful operation */ FetchMappingsResponse;
export type GetProjectConfigsApiArg = {
  /** Project UID */
  projectUid: string;
  /** Config Type (Mappings or Corrections) */
  configType: "mappings" | "corrections";
  /** Page */
  page?: number;
  /** Page Size */
  pageSize?: number;
  /** Search Term */
  searchTerm?: string;
};
export type GetSessionValidationDataApiResponse =
  /** status 200 successful operation */ DataTableItemResponse;
export type GetSessionValidationDataApiArg = {
  /** Session UID */
  sessionUid: string;
  /** Data Table Type (ValidationErrorMsg | FormattedItemMsg) */
  itemType: string;
  /** Page */
  page?: number;
  /** Page Size */
  pageSize?: number;
  /** Search Term */
  searchTerm?: string;
};
export type GetRedcapVersionApiResponse =
  /** status 200 successful operation */ RedcapVersionResponse;
export type GetRedcapVersionApiArg = {
  /** REDCap Version Payload */
  redcapVersionPayload: RedcapVersionPayload;
};
export type GetProjectAutoNumberingStatusApiResponse =
  /** status 200 successful operation */ BooleanResponse;
export type GetProjectAutoNumberingStatusApiArg = {
  /** REDCap Version Payload */
  body: {
    redcapInstance: string;
    redcapToken: string;
  };
};
export type DecodeRedcapRecordsApiResponse =
  /** status 200 successful operation */ DecodeResponse;
export type DecodeRedcapRecordsApiArg = {
  /** Decode Redcap Records Request Params */
  decodePayload: DecodePayload;
};
export type GetEncodedRecordsApiResponse =
  /** status 200 successful operation */ EncodedRecordsResponse;
export type GetEncodedRecordsApiArg = {
  /** Project UID */
  projectUid: string;
  /** Session UID */
  sessionUid: string;
  page?: number;
  pageSize?: number;
  searchTerm?: string;
  encodeType?: "plain" | "redcap";
};
export type EncodeRecordsApiResponse =
  /** status 200 successful operation */ BooleanResponse;
export type EncodeRecordsApiArg = {
  /** Project UID */
  projectUid: string;
  /** Session UID */
  sessionUid: string;
  /** Type of Encoding to Apply to Data */
  encodeType: "redcap" | "research-data";
};
export type FetchExtractProjectsApiResponse =
  /** status 200 successful operation */ ExtractProjectsResponse;
export type FetchExtractProjectsApiArg = {
  /** Extract Session Token */
  extractToken: string;
};
export type FetchExtractReleaseApiResponse =
  /** status 200 successful operation */ ReleaseResponse;
export type FetchExtractReleaseApiArg = {
  /** Extract Release Document Object Id */
  releaseId: number;
};
export type InitDataImportApiResponse =
  /** status 200 successful operation */ InitImportResponse;
export type InitDataImportApiArg = {
  body: {};
};
export type InitDataFileImportApiResponse =
  /** status 200 successful operation */ InitImportResponse;
export type InitDataFileImportApiArg = {
  body: {
    source_file?: Blob;
    destination_metadata_file?: Blob;
    destination_metadata_token?: string;
    destination_project_id?: number;
    source_metadata_file?: Blob;
    source_metadata_token?: string;
    mappings_file?: Blob;
    redcap_env?: string;
    extract_token?: string;
    apply_mappings?: string;
    apply_corrections?: string;
    decode_import?: string;
  };
};
export type InitDataReleaseImportApiResponse =
  /** status 200 successful operation */ InitImportResponse;
export type InitDataReleaseImportApiArg = {
  /** Release Info */
  extractReleaseInfoRequest: ExtractReleaseInfoRequest;
};
export type ImportExistingRecordsRedcapApiResponse =
  /** status 200 successful operation (task ID) */ Response;
export type ImportExistingRecordsRedcapApiArg = {
  /** REDCap Info */
  importExistingRedcapPayload: ImportExistingRedcapPayload;
};
export type ImportExistingRecordsFileApiResponse =
  /** status 200 successful operation */ Response;
export type ImportExistingRecordsFileApiArg = {
  body: {
    project_uid?: string;
    record_id_field?: string;
    existing_records_file?: Blob;
    record_id_prefix?: string;
    auto_numbered?: string;
  };
};
export type InitBuildAndImportApiResponse =
  /** status 200 successful operation */ InitImportResponse;
export type InitBuildAndImportApiArg = {
  body: {
    redcap_env?: string;
    source_file?: Blob;
    destination_project_id?: number;
    destination_redcap_token?: string;
    apply_mappings?: string;
    apply_corrections?: string;
    mappings_file?: Blob;
    redcap_pending?: string;
    auto_numbering_enabled?: string;
    record_id_prefix?: string;
    is_multi_sheet_upload?: string;
    checkbox_delimiter?: string;
  };
};
export type GetProjectMappingsApiResponse =
  /** status 200 successful operation */ ProjectMappingsReponse;
export type GetProjectMappingsApiArg = {
  /** Project Mongo Object UID */
  projectUid: string;
  /** Page */
  page?: number;
  /** Page Size */
  pageSize?: number;
  /** Search Term */
  searchTerm?: string;
  /** Project Field Name */
  fieldName: string;
};
export type CheckProjectMappingStatusApiResponse =
  /** status 200 successful operation */ ProjectMappingStatusResponse;
export type CheckProjectMappingStatusApiArg = {
  /** Project Mapping Status Payload */
  mappingsStatusPayload: MappingsStatusPayload;
};
export type GetMappingSettingsApiResponse =
  /** status 200 successful operation */ FieldMappingSettingsResponse;
export type GetMappingSettingsApiArg = {
  /** Session Mongo Object UID */
  sessionUid: string;
};
export type UpdateMappingSettingsApiResponse =
  /** status 200 successful operation */ Response;
export type UpdateMappingSettingsApiArg = {
  /** Session Mongo Object UID */
  sessionUid: string;
  /** Update Mapping Settings Payload */
  mappingSettings: MappingSettings;
};
export type CreateFieldMappingsApiResponse =
  /** status 200 successful operation */ CreateMappingResponse;
export type CreateFieldMappingsApiArg = {
  /** Create Mappings Payload */
  newMappingsPayload: NewMappingsPayload;
};
export type CheckRemovalEffectApiResponse =
  /** status 200 successful operation */ BooleanResponse;
export type CheckRemovalEffectApiArg = {
  /** ObjectId of Project */
  projectUid: string;
  /** ObjectId of Session */
  sessionUid: string;
  /** ObjectId of Mapping to Delete */
  mappingUid: string;
};
export type RemoveFieldMappingApiResponse =
  /** status 200 successful operation */ Response;
export type RemoveFieldMappingApiArg = {
  /** ObjectId of Project */
  projectUid: string;
  /** ObjectId of Mapping to Delete */
  mappingUid: string;
  /** ObjectId of Mapping to Delete */
  sessionUid?: string;
};
export type UnignoreSourceFieldApiResponse =
  /** status 200 successful operation */ IgnoredFieldsResponse;
export type UnignoreSourceFieldApiArg = {
  /** Removes Field from Ignored Session list */
  unignoreFieldPayload: UnignoreFieldPayload;
};
export type GetFieldsForMappingApiResponse =
  /** status 200 successful operation */ FieldsForMappingResponse;
export type GetFieldsForMappingApiArg = {
  /** Project Mongo Object UID */
  projectUid: string;
  /** Session Mongo Object UID */
  sessionUid: string;
  /** Sheet Name */
  sheet?: string;
  /** Page */
  page?: number;
  /** Page Size */
  pageSize?: number;
  /** Search Term */
  searchTerm?: string;
  /** Return Only Unmatched Fields */
  unmatchedOnly?: boolean;
  /** Return Only Matched Fields */
  matchedOnly?: boolean;
  /** Apply Previously Stored Field Mappings */
  applyMappings?: boolean;
  /** Infer Mapping of Source Data to Destination Fields */
  inferFieldName?: boolean;
};
export type GetFieldCandidatesApiResponse =
  /** status 200 successful operation */ FieldCandidatesResponse;
export type GetFieldCandidatesApiArg = {
  /** Project Mongo Object UID */
  projectUid: string;
  /** Session Mongo Object UID */
  sessionUid: string;
  /** Sheet Name */
  sheet?: string;
  /** Field Name */
  fieldName?: string;
  /** Page */
  page?: number;
  /** Page Size */
  pageSize?: number;
  /** Search Term */
  searchTerm?: string;
};
export type ApplyProjectMappingsApiResponse =
  /** status 200 successful operation */ BooleanResponse;
export type ApplyProjectMappingsApiArg = {
  /** Initiate Mapping Data */
  applyProjectMappingsPayload: ApplyProjectMappingsPayload;
};
export type GetValidationSettingsApiResponse =
  /** status 200 successful operation */ FieldValidationSettingsResponse;
export type GetValidationSettingsApiArg = {
  /** Session Mongo Object UID */
  sessionUid: string;
};
export type UpdateValidationSettingsApiResponse =
  /** status 200 successful operation */ Response;
export type UpdateValidationSettingsApiArg = {
  /** Session Mongo Object UID */
  sessionUid: string;
  /** Update Validation Settings Payload */
  validationSettings: ValidationSettings;
};
export type GetValidationErrorsApiResponse =
  /** status 200 successful operation */ ValidateDataResponse;
export type GetValidationErrorsApiArg = {
  /** Project Mongo Object UID */
  projectUid: string;
  /** Session Mongo Object UID */
  sessionUid: string;
};
export type ValidateSourceDataApiResponse =
  /** status 200 successful operation */ ValidateDataResponse;
export type ValidateSourceDataApiArg = {
  /** Project Mongo Object UID */
  projectUid: string;
  /** Session Mongo Object UID */
  sessionUid: string;
  /** Current Spreadsheet Data */
  validateDataPayload: ValidateDataPayload;
};
export type GetValidationStatusApiResponse =
  /** status 200 successful operation */ ValidationStatusResponse;
export type GetValidationStatusApiArg = {
  /** Current Spreadsheet Data */
  validationStatusPayload: ValidationStatusPayload;
};
export type ValidateFieldApiResponse =
  /** status 200 successful operation */ ValidateFieldResponse;
export type ValidateFieldApiArg = {
  /** Current Column and Sheet Data */
  validateFieldPayload: ValidateFieldPayload;
};
export type ValidateRecordApiResponse =
  /** status 200 successful operation */ ValidateRecordResponse;
export type ValidateRecordApiArg = {
  /** Extract Token, Project ID, and Record Data */
  validateRecordPayload: ValidateRecordPayload;
};
export type ResolveValidationErrorApiResponse =
  /** status 200 successful operation */ ResolveValidationResponse;
export type ResolveValidationErrorApiArg = {
  /** Resolve Field Validation Error */
  resolveValidationPayload: ResolveValidationPayload;
};
export type DeleteSessionValidationCorrectionApiResponse =
  /** status 200 successful operation */ BooleanResponse;
export type DeleteSessionValidationCorrectionApiArg = {
  /** Field Validation Error Corrections to Be Deleted */
  resolveValidationPayload: ResolveValidationPayload;
};
export type SaveValidationCorrectionsApiResponse =
  /** status 200 successful operation */ Response;
export type SaveValidationCorrectionsApiArg = {
  /** Data Request Params */
  saveValidationCorrectionsPayload: SaveValidationCorrectionsPayload;
};
export type GetRecordValidationStatusApiResponse =
  /** status 200 successful operation */ RecordValidationStatusResponse;
export type GetRecordValidationStatusApiArg = {
  /** Data Conflict Type */
  conflictType: "duplicate" | "inconsistent";
  /** Project Mongo Object UID */
  projectUid: string;
  /** Session Mongo Object UID */
  sessionUid: string;
  /** Working Sheet and Identifier Values */
  recordValidationStatusPayload: RecordValidationStatusPayload;
};
export type GetRecordConflictsApiResponse =
  /** status 200 successful operation */ CalcRecordConflictsResponse;
export type GetRecordConflictsApiArg = {
  /** Data Conflict Type */
  conflictType: "duplicate" | "inconsistent";
  /** Project Mongo Object UID */
  projectUid: string;
  /** Session Mongo Object UID */
  sessionUid: string;
};
export type CalculateRecordConflictsApiResponse =
  /** status 200 successful operation */ CalcRecordConflictsResponse;
export type CalculateRecordConflictsApiArg = {
  /** Data Conflict Type */
  conflictType: "duplicate" | "inconsistent";
  /** Project Mongo Object UID */
  projectUid: string;
  /** Session Mongo Object UID */
  sessionUid: string;
};
export type FetchInconsistentConflictApiResponse =
  /** status 200 successful operation */ InconsistentConflictsResponse;
export type FetchInconsistentConflictApiArg = {
  /** Project Mongo Object UID */
  projectUid: string;
  /** Session Mongo Object UID */
  sessionUid: string;
  /** Field Validation Error Corrections to Be Deleted */
  inconsistentConflictPayload: InconsistentConflictPayload;
};
export type FetchInconsistentFieldValuesApiResponse =
  /** status 200 successful operation */ InconsistentFieldValuesResponse;
export type FetchInconsistentFieldValuesApiArg = {
  /** Project Mongo Object UID */
  projectUid: string;
  /** Session Mongo Object UID */
  sessionUid: string;
  /** Field Validation Error Corrections to Be Deleted */
  inconsistentFieldValuesPayload: InconsistentFieldValuesPayload;
};
export type ResolveInconsistentConflictApiResponse =
  /** status 200 successful operation */ ResolveInconsistentConflictResponse;
export type ResolveInconsistentConflictApiArg = {
  /** Resolve Accepted Record Validation Conflicts Changes to Identifier */
  resolveInconsistentConflictPayload: ResolveInconsistentConflictPayload;
};
export type RemoveInconsistentCorrectionsApiResponse =
  /** status 200 successful operation */ BooleanResponse;
export type RemoveInconsistentCorrectionsApiArg = {
  /** Remove Inconsistent Record Validation Conflicts Corrections to Identifier */
  removeInconsistentCorrectionPayload: RemoveInconsistentCorrectionPayload;
};
export type FetchDuplicateConflictApiResponse =
  /** status 200 successful operation */ DuplicateConflictsResponse;
export type FetchDuplicateConflictApiArg = {
  /** Project Mongo Object UID */
  projectUid: string;
  /** Session Mongo Object UID */
  sessionUid: string;
  /** Field Validation Error Corrections to Be Deleted */
  duplicateConflictPayload: DuplicateConflictPayload;
};
export type ResolveDuplicateConflictApiResponse =
  /** status 200 successful operation */ ResolveDuplicateConflictResponse;
export type ResolveDuplicateConflictApiArg = {
  /** Resolve Accepted Record Validation Conflicts Changes to Identifier */
  resolveDuplicateConflictPayload: ResolveDuplicateConflictPayload;
};
export type BulkRemoveDuplicateRecordsApiResponse =
  /** status 200 successful operation */ ResolveDuplicateConflictResponse;
export type BulkRemoveDuplicateRecordsApiArg = {
  /** Delete all Duplicate Records in Source Data */
  bulkRemoveDuplicateRecordsPayload: BulkRemoveDuplicateRecordsPayload;
};
export type RemoveDuplicateCorrectionsApiResponse =
  /** status 200 successful operation */ BooleanResponse;
export type RemoveDuplicateCorrectionsApiArg = {
  /** Remove Duplicate Record Validation Conflicts Corrections to Identifier */
  removeDuplicateCorrectionPayload: RemoveDuplicateCorrectionPayload;
};
export type GetMergeSettingsApiResponse =
  /** status 200 successful operation */ MergeSettingsResponse;
export type GetMergeSettingsApiArg = {
  /** Session Mongo Object UID */
  sessionUid: string;
};
export type UpdateMergeSettingsApiResponse =
  /** status 200 successful operation */ MergeSettingsResponse;
export type UpdateMergeSettingsApiArg = {
  /** Session Mongo Object UID */
  sessionUid: string;
  /** Update Merge Settings Payload */
  mergeSettings: MergeSettings;
};
export type GetMergeConflictStatusApiResponse =
  /** status 200 successful operation */ MergeConflictStatusResponse;
export type GetMergeConflictStatusApiArg = {
  /** Project Mongo Object UID */
  projectUid: string;
  /** Session Mongo Object UID */
  sessionUid: string;
  /** Working Sheet and Identifier Values */
  mergeConflictStatusPayload: MergeConflictStatusPayload;
};
export type FetchRepeatingFormsApiResponse =
  /** status 200 successful operation */ RepeatFormsResponse;
export type FetchRepeatingFormsApiArg = {
  /** Project Mongo Object UID */
  projectUid: string;
  /** Session Mongo Object UID */
  sessionUid: string;
  /** Page */
  page?: number;
  /** Page Size */
  pageSize?: number;
};
export type FetchRepeatingFormFieldsApiResponse =
  /** status 200 successful operation */ RepeatFormFieldsResponse;
export type FetchRepeatingFormFieldsApiArg = {
  /** Project Mongo Object UID */
  projectUid: string;
  /** Session Mongo Object UID */
  sessionUid: string;
  /** Session Mongo Object UID */
  formName: string;
};
export type SaveFormIdentifierFieldsApiResponse =
  /** status 200 successful operation */ SaveFormIdentifiersResponse;
export type SaveFormIdentifierFieldsApiArg = {
  /** Project Mongo Object UID */
  projectUid: string;
  /** Session Mongo Object UID */
  sessionUid: string;
  /** Session Mongo Object UID */
  formName: string;
  /** Form Identifier Fields */
  body: string[];
};
export type GetSessionMergeConflictsApiResponse =
  /** status 200 successful operation */ MergeConflictsResponse;
export type GetSessionMergeConflictsApiArg = {
  /** Project Mongo Object UID */
  projectUid: string;
  /** Session Mongo Object UID */
  sessionUid: string;
  /** Page */
  page?: number;
  /** Page Size */
  pageSize?: number;
};
export type CalculateMergeConflictsApiResponse =
  /** status 200 successful operation */ CalcMergeConflictsResponse;
export type CalculateMergeConflictsApiArg = {
  /** Project Mongo Object UID */
  projectUid: string;
  /** Session Mongo Object UID */
  sessionUid: string;
};
export type GetIdentifierMergeConflictsApiResponse =
  /** status 200 successful operation */ MergeConflictResponse;
export type GetIdentifierMergeConflictsApiArg = {
  /** Project Mongo Object UID */
  projectUid: string;
  /** Session Mongo Object UID */
  sessionUid: string;
  /** Calculate Merge Conflicts w/ Existing Records */
  mergeConflictPayload: MergeConflictPayload;
};
export type ResolveMergeConflictApiResponse =
  /** status 200 successful operation */ ResolveMergeConflictResponse;
export type ResolveMergeConflictApiArg = {
  /** Resolve Accepted Merge Changes to Row */
  resolveMergeConflictPayload: ResolveMergeConflictPayload;
};
export type BulkResolveMergeConflictApiResponse =
  /** status 200 successful operation */ ResolveMergeConflictResponse;
export type BulkResolveMergeConflictApiArg = {
  /** Resolve Multiple Field Merge Conflicts in Record */
  bulkResolveMergeConflictPayload: BulkResolveMergeConflictPayload;
};
export type RemoveMergeConflictCorrectionApiResponse =
  /** status 200 successful operation */ BooleanResponse;
export type RemoveMergeConflictCorrectionApiArg = {
  /** Remove Merge Conflict Corrections to Identifier */
  removeMergeConflictCorrectionPayload: RemoveMergeConflictCorrectionPayload;
};
export type DownloadMappingsApiResponse =
  /** status 200 successful operation */ Blob;
export type DownloadMappingsApiArg = {
  /** Project Mongo ID */
  projectUid: string;
};
export type DownloadRecordsApiResponse =
  /** status 200 successful operation */ Blob;
export type DownloadRecordsApiArg = {
  /** Project Mongo ID */
  projectUid: string;
  /** Session Mongo ID */
  sessionUid: string;
};
export type ExportRecordsApiResponse =
  /** status 200 successful operation */ Response;
export type ExportRecordsApiArg = {
  /** Project UID for Report */
  projectUid: string;
  /** Session UID for Report */
  sessionUid: string;
  /** Export Destination */
  destination?: "redcap" | "rdr";
};
export type ExportReportApiResponse =
  /** status 200 successful operation */ Blob;
export type ExportReportApiArg = {
  /** Project UID for Report */
  projectUid: string;
  /** Session UID for Report */
  sessionUid: string;
  /** Export Type (Downloaded or Emailed PDF) */
  exportType: "file" | "email";
};
export type BaseResponse = {
  statusText: string;
  statusCode: number;
  message: string;
  errors?: string[];
  trace?: string;
};
export type ExtractRole = {
  id: number;
  name: string;
  roleLevel: number;
};
export type ExtractUser = {
  id: number;
  firstName: string;
  lastName: string;
  login: string;
  email: string;
  ssoToken: string;
  refreshToken: string;
  role: ExtractRole;
  impersonationRole?: ExtractRole;
  redcapUrl: string;
  isLegacy?: boolean;
};
export type UserResponse = BaseResponse & {
  result: ExtractUser;
};
export type ProjectDetails = {
  _id?: string;
  extractProjectId?: number;
  redcapToken?: string;
  redcapId?: number;
  projectTitle?: string;
  projectIrbNumber?: string;
  recordAutoNumbering: boolean;
  recordIdField: string;
  recordIdPrefix?: string;
  secondaryUniqueFields: string[];
  repeatingInstruments: string[];
  nextRecordName: number;
  hasRepeatingInstrumentsOrEvents?: number;
  customRecordLabel?: string;
  description?: string;
};
export type ProjectWithSessions = {
  total?: number;
  projects?: ProjectDetails[];
};
export type ProjectsWithSessionsResponse = BaseResponse & {
  result: ProjectWithSessions;
};
export type Response = {
  statusText: string;
  statusCode: number;
  result: string;
  message: string;
  errors?: string[];
  trace?: string;
};
export type ImportStepEnum =
  | "dashboard"
  | "import"
  | "setup"
  | "mapping"
  | "validation"
  | "recordConflict"
  | "mergeConflict"
  | "export";
export type SourceDataHeader = {
  sheet: string;
  fields: string[];
};
export type DuplicateFields = {
  sheet?: string;
  fields?: string[];
};
export type DataSourceSheetTypeEnum = "records" | "forms";
export type IgnoredSourceField = {
  sheet: string;
  fieldName: string;
  conceptId?: string;
};
export type SheetIdentifiers = {
  sheet: string;
  fields: string[];
};
export type SessionMappingStatus = {
  mappedSheets?: {
    [key: string]: number;
  };
  mappingComplete?: boolean;
  mappingCompletedOn?: string;
};
export type MappingDisplayEnum = "name" | "label";
export type PvOrderingEnum = "word" | "alpha" | "dictionary";
export type RepeatInstanceColumn = {
  columnName?: string;
  formName?: string;
};
export type MappingSettings = {
  mappingDisplay: MappingDisplayEnum;
  pvOrdering: PvOrderingEnum;
  linkedFieldSelection: boolean;
  repeatInstanceColumns: RepeatInstanceColumn[];
};
export type SessionValidationStatus = {
  validationComplete?: boolean;
  validationCompletedOn?: string;
  resolveComplete?: boolean;
  resolveCompletedOn?: string;
};
export type FieldsWithValidationErrors = {
  sheet: string;
  fields?: string[];
};
export type ValidationSettings = {
  showPrevCorrections: boolean;
  populateSuggestions: boolean;
  pvOrdering: PvOrderingEnum;
  errorFields?: FieldsWithValidationErrors[];
};
export type RepeatingFormIdentifiers = {
  formName: string;
  fields: string[];
};
export type MergeSettings = {
  replaceBlankRc: boolean;
  reconciliationFields?: RepeatingFormIdentifiers[];
  overrideValues: string[];
  overrideFields: string[];
};
export type ImportSession = {
  _id: string;
  _projectUid: string;
  extractUserId: number;
  applyMappings?: boolean;
  applyCorrections?: boolean;
  start: string;
  end?: string;
  lastModified: string;
  redcapPending: boolean;
  currentStep: ImportStepEnum;
  sourceDataName?: string;
  originalDataHeaders?: SourceDataHeader[];
  sourceDataHeaders?: SourceDataHeader[];
  duplicateSourceFields?: DuplicateFields[];
  isMultiSheet?: boolean;
  sheetType?: DataSourceSheetTypeEnum;
  sheetJoinField: string;
  checkboxDelimiter?: string;
  confirmDeletions?: boolean;
  ignoredSourceFields?: IgnoredSourceField[];
  malformedSheets?: string[];
  sheetIdentifiers?: SheetIdentifiers[];
  existingRecordsFetchedOn?: string;
  mappingStatus?: SessionMappingStatus;
  mappingSettings?: MappingSettings;
  fieldValidationStatus?: SessionValidationStatus;
  fieldValidationSettings?: ValidationSettings;
  recordValidationStatus?: SessionValidationStatus;
  mergeStatus?: SessionValidationStatus;
  mergeSettings?: MergeSettings;
  encodedOn?: string;
  encodedDownloadOn?: string;
  encodedRcPushOn?: string;
};
export type UserProjectSessions = {
  total?: number;
  sessions?: ImportSession[];
};
export type ProjectSessionResponse = BaseResponse & {
  result: UserProjectSessions;
};
export type SessionResponse = BaseResponse & {
  result: ImportSession;
};
export type SessionPayload = {
  projectDetails?: ProjectDetails;
  currentStep: ImportStepEnum;
  sourceDataName?: string;
  originalDataHeaders?: SourceDataHeader[];
  sourceDataHeaders?: SourceDataHeader[];
  duplicateSourceFields?: DuplicateFields[];
  isMultiSheet?: boolean;
  sheetType?: DataSourceSheetTypeEnum;
  sheetJoinField?: string;
  checkboxDelimiter?: string;
  confirmDeletions?: boolean;
  ignoredSourceFields?: IgnoredSourceField[];
  malformedSheets?: string[];
  sheetIdentifiers?: SheetIdentifiers[];
  existingRecordsFetchedOn?: string;
  mappingStatus?: SessionMappingStatus;
  mappingSettings?: MappingSettings;
  fieldValidationStatus?: SessionValidationStatus;
  fieldValidationSettings?: ValidationSettings;
  recordValidationStatus?: SessionValidationStatus;
  mergeStatus?: SessionValidationStatus;
  mergeSettings?: MergeSettings;
};
export type UpdateSessionPayload = {
  payload: SessionPayload;
};
export type Metadata = {
  _id?: string;
  _projectUid?: string;
  fieldName: string;
  formName: string;
  conceptId?: string;
  fieldType: string;
  fieldLabel: string;
  choicesCalculationsOrSliderLabels?: string;
  textValidation?: string;
  validationMin?: string;
  validationMax?: string;
  identifier?: string;
  required?: string;
  totalOptions?: number;
  optionsDictionary?: {
    pvValue: string;
    pvCode: string;
  }[];
  sectionHeader?: string;
  fieldNote?: string;
  branchingLogic?: string;
  alignment?: string;
  questionNumber?: string;
  matrixRanking?: string;
  fieldAnnotation?: string;
  definition?: string;
};
export type BaseImportData = {
  redcapToken: string;
  currentStep: ImportStepEnum;
  recordIdField: string;
  projectDetails: ProjectDetails;
  sourceName: string;
  sourceDataHeaders: SourceDataHeader[];
  duplicateSourceFields: DuplicateFields[];
  checkboxDelimiter: string;
  metadataForms: string[];
  metadataHeaders: string[];
  metadata: Metadata[];
  sheetType: DataSourceSheetTypeEnum;
  isMultiSheet: boolean;
  malformedSheets: string[];
  confirmDeletions: boolean;
  mappingStatus: SessionMappingStatus;
  fieldValidationStatus: SessionValidationStatus;
  recordValidationStatus: SessionValidationStatus;
  mergeStatus: SessionValidationStatus;
  existingRecordsFetchedOn?: string;
  sheetJoinField?: string;
  encodedOn?: string;
  encodedDownloadOn?: string;
  encodedRcPushOn?: string;
};
export type BaseImportDataResponse = BaseResponse & {
  result: BaseImportData;
};
export type SourceDataRes = {
  total: number;
  sheet?: string;
  data: {}[];
};
export type SourceDataFieldRowErrors = {
  sheet?: string;
  fieldName?: string;
  rowsWithErrors?: number[];
};
export type SourceDataResponse = BaseResponse & {
  result: {
    recordHeaders: string[];
    records: SourceDataRes[];
    validationErrors?: SourceDataFieldRowErrors[];
  };
};
export type FieldMetadataResponse = BaseResponse & {
  result: Metadata & {
    pvCount?: number;
  };
};
export type MetadataRes = {
  total: number;
  totalPvs?: number;
  data: Metadata[];
  mappingsCounts?: {
    fieldName?: string;
    mappingsCount?: number;
  }[];
};
export type MetadataResponse = BaseResponse & {
  result: MetadataRes;
};
export type NewFieldMapping = {
  _createdOn?: string;
  _modifiedOn?: string;
  ignored?: boolean;
  sheet: string;
  sourceFieldName: string;
  sourceConceptId?: string;
  destinationFieldName?: string;
  destinationConceptId?: string;
  destinationField?: Metadata;
};
export type FieldMapping = NewFieldMapping & {
  _id: string;
  _projectUid: string;
};
export type FetchMappingsResponse = BaseResponse & {
  result: FieldMapping[];
};
export type NewValidationErrorMsg = {
  sheet: string;
  row: number;
  fieldName: string;
  fieldType?: string;
  conceptId?: string;
  error: string;
  invalidValues?: string[];
  corrections?: string[];
};
export type ValidationErrorMsg = NewValidationErrorMsg & {
  _id: string;
  _projectUid: string;
  _sessionUid: string;
};
export type NewFormattedItemMsg = {
  sheet: string;
  row: number;
  fieldName?: string;
  message: string;
};
export type FormattedItemMsg = NewFormattedItemMsg & {
  _id: string;
  _projectUid: string;
  _sessionUid: string;
};
export type DataTableItemRes = {
  total: number;
  data: {
    validationErrors?: ValidationErrorMsg[];
    formattedItems?: FormattedItemMsg[];
  };
};
export type DataTableItemResponse = BaseResponse & {
  result: DataTableItemRes;
};
export type RedcapVersionResponse = BaseResponse & {
  result: string;
};
export type RedcapVersionPayload = {
  payload: {
    redcapEnv?: string;
    redcapToken?: string;
  };
};
export type BooleanResponse = {
  statusText: string;
  statusCode: number;
  result: boolean;
  message: string;
  errors?: string[];
  trace?: string;
};
export type DecodeResponse = BaseResponse & {
  result: {};
};
export type DecodePayload = {
  payload: {
    redcapEnv?: string;
    redcapToken?: string;
  };
};
export type UpdatedFieldValue = {
  identifierValue: string;
  row: number;
  recordId: string;
  formName?: string;
  formInstance?: number;
  fieldName: string;
  fieldLabel?: string;
  original: string;
  originalCoded?: string;
  update: string;
  updatedCoded?: string;
};
export type EncodedRecords = {
  largeChangelogReport: boolean;
  total: number;
  recordHeaders: string[];
  records: {}[];
  updatedRecordItems?: UpdatedFieldValue[];
  recordIdField?: string;
};
export type EncodedRecordsResponse = BaseResponse & {
  result: EncodedRecords;
};
export type ExtractProject = {
  _id: number;
  extractId: number;
  legacyExtractId: number;
  redcapUrl?: string;
  redcapId?: number;
  redcapToken?: string;
  title: string;
  description: string;
  purpose?: number;
  otherPurpose?: number;
  irbNumber?: string;
  inProduction: boolean;
  autonumEnabled: boolean;
  hasRepeatingInstruments: boolean;
  isLongitudinal: boolean;
  isArchived: boolean;
  createdOn?: string;
  createdBy?: ExtractUser;
  importedOn?: string;
  importedBy?: ExtractUser;
  modifiedOn?: string;
  modifiedBy?: ExtractUser;
  publishedOn?: string;
  publishedBy?: ExtractUser;
  isFrozen: number;
  frozenOn?: string;
  frozenBy?: ExtractUser;
  isLocked: boolean;
  lockedBy?: ExtractUser;
  revertedOn?: string;
  revertedBy?: ExtractUser;
  projectUsers?: ExtractUser[];
  projectManagers?: ExtractUser[];
  formsCount: number;
  fieldsCount: number;
  lastSyncedOn: string;
  lastDataSyncAttempted?: string;
  lastDataSyncCompleted?: string;
  isTemporary: boolean;
  isTemplate: boolean;
};
export type ExtractProjectsResponse = BaseResponse & {
  result: ExtractProject[];
};
export type ExtractReleaseInfo = {
  releaseId?: number;
  sourceProject?: {
    id?: number;
    title?: string;
    description?: string;
    modifiedOn?: string;
    _count?: {
      fields?: number;
      forms?: number;
    };
  };
  recordIds?: number[];
  recordRange?: {
    start?: number;
    stop?: number;
  }[];
  initiatingUser?: {
    email?: string;
  };
  recipients?: {
    user?: {
      id?: number;
      email?: string;
    };
  }[];
  destinationProject?: {
    id?: number;
    title?: string;
    redcapToken?: string;
    description?: string;
    modifiedOn?: string;
    _count?: {
      fields?: number;
      forms?: number;
    };
  };
  acceptedFields?: {
    id?: number;
  }[];
  pipingSnapshotFields?: {
    id?: number;
  }[];
  mrns?: string[];
};
export type ReleaseResponse = BaseResponse & {
  result: ExtractReleaseInfo;
};
export type InitImportRes = {
  projectUid?: string;
  sessionUid?: string;
  isMultiSheet?: boolean;
  sourceDataTaskId?: string;
};
export type InitImportResponse = BaseResponse & {
  result: InitImportRes;
};
export type ExtractReleaseInfoRequest = {
  releaseId?: number;
  sourceProjectId?: number;
  sourceProjectName?: string;
  destinationProjectId?: number;
  destinationProjectToken?: string;
  destinationProjectTitle?: string;
  isPipingRequest?: boolean;
};
export type ImportExistingRedcapPayload = {
  payload: {
    projectUid: string;
    rcToken: string;
    rcEnv: string;
  };
};
export type ProjectMappingsReponse = BaseResponse & {
  result: {
    total: number;
    mappings: FieldMapping[];
  };
};
export type ProjectMappingStatusResponse = BaseResponse & {
  result: {
    fieldMappings: boolean;
    validationCorrections: boolean;
  };
};
export type MappingsStatus = {
  redcapToken?: string;
  extractProjectId?: number;
  destinationName?: string;
  isFileImport: boolean;
};
export type MappingsStatusPayload = {
  payload: MappingsStatus;
};
export type FieldMappingSettingsResponse = BaseResponse & {
  result: {
    status: SessionMappingStatus;
    settings: MappingSettings;
  };
};
export type CreateMappingResponse = BaseResponse & {
  result: FieldMapping[];
};
export type NewProjectMappings = {
  projectUid: string;
  sessionUid?: string;
  mappings: NewFieldMapping[];
};
export type NewMappingsPayload = {
  payload: NewProjectMappings;
};
export type IgnoredFieldsResponse = BaseResponse & {
  result: IgnoredSourceField[];
};
export type UnignoreField = {
  sessionUid: string;
  sheetName: string;
  fieldName: string;
};
export type UnignoreFieldPayload = {
  payload: UnignoreField;
};
export type SheetTotal = {
  sheet: string;
  total: number;
};
export type SourceCandidate = {
  name: string;
  label: string;
  form: string;
  conceptId?: string;
  score: number;
};
export type SourceFieldCandidate = {
  sheetName: string;
  fieldName: string;
  conceptId?: string;
  mapping?: FieldMapping;
  candidates?: SourceCandidate[];
};
export type UnmatchedSourceField = {
  sheet: string;
  fieldName: string;
  conceptId: string;
};
export type FieldsForMapping = {
  total?: SheetTotal[];
  unmatchedTotal?: SheetTotal[];
  hasIdentifierMapped?: {};
  sourceDataSheets?: string[];
  sourceFieldCandidates?: SourceFieldCandidate[];
  unmatchedSourceFields?: UnmatchedSourceField[];
  ignoredSourceFields?: IgnoredSourceField[];
};
export type FieldsForMappingResponse = BaseResponse & {
  result: FieldsForMapping;
};
export type FieldCandidatesResponse = BaseResponse & {
  result: {
    total?: number;
    candidate?: SourceFieldCandidate;
  };
};
export type SaveFields = {
  projectUid?: string;
  sessionUid?: string;
};
export type ApplyProjectMappingsPayload = {
  payload: SaveFields;
};
export type FieldValidationSettingsResponse = BaseResponse & {
  result: ValidationSettings;
};
export type RowsWithValidationErrors = {
  sheet: string;
  rows: number[];
};
export type ValidatedData = {
  validationStatus?: SessionValidationStatus;
  rowsWithErrors?: RowsWithValidationErrors[];
  fieldsWithErrors?: FieldsWithValidationErrors[];
  messages?: string;
};
export type ValidateDataResponse = BaseResponse & {
  result: ValidatedData;
};
export type ValidateData = {
  ignoreSheets?: string[];
  ignoreRequiredFields?: string[];
};
export type ValidateDataPayload = {
  payload: ValidateData;
};
export type ValidationStatus = {
  nextSheet?: string;
  nextField?: string;
  remainingFields?: string[];
  completionProgress?: number;
};
export type ValidationStatusResponse = BaseResponse & {
  result: ValidationStatus;
};
export type ValidationStatusPayload = {
  sessionUid?: string;
  ignoreSheets?: string[];
  workingSheet?: string;
  workingField?: string;
  reviewMode?: boolean;
};
export type ValidationErrorTypeEnum = "pv" | "text";
export type PvCandidate = {
  dataSourceValue?: string;
  conceptId?: string;
  pvValue?: string;
  pvCode?: string;
  score?: number;
};
export type CorrectionTypeEnum =
  | "validation"
  | "inconsistentConflict"
  | "duplicateConflict"
  | "mergeConflict"
  | "other";
export type NewValidationCorrection = {
  _createdOn?: string;
  _modifiedOn?: string;
  correctionType: CorrectionTypeEnum;
  sheet: string;
  fieldName: string;
  conceptId?: string;
  original: string;
  update?: string;
};
export type ValueValidationError = {
  value?: string;
  frequency?: number;
  pvCandidates?: PvCandidate[];
  correction?: NewValidationCorrection;
};
export type FieldValidationError = {
  sheetName?: string;
  errorType?: ValidationErrorTypeEnum;
  fieldName?: string;
  fieldType?: string;
  conceptId?: string;
  required?: boolean;
  validationType?: string;
  validationMin?: string;
  validationMax?: string;
  emptyRows?: number[];
  invalidValues?: ValueValidationError[];
  totalInvalid?: number;
  errorMsgs?: string[];
};
export type ValidateFieldResponse = BaseResponse & {
  result: FieldValidationError;
};
export type ValidateField = {
  projectUid: string;
  sessionUid: string;
  sheetName?: string;
  fieldName?: string;
  searchTerm?: string;
  page?: number;
  pageSize?: number;
};
export type ValidateFieldPayload = {
  payload: ValidateField;
};
export type ValidateRecordResponse = BaseResponse & {
  result: FieldValidationError[];
};
export type ValidateRecord = {
  extractToken: string;
  builderProjectId: number;
  record: {};
};
export type ValidateRecordPayload = {
  payload: ValidateRecord;
};
export type ResolveValidationResponse = BaseResponse & {
  result: NewValidationCorrection[];
};
export type LinkedFieldValue = {
  _id?: string;
  _rootUid: string;
  rootValue: string;
  fieldName: string;
  conceptId?: string;
  value: string;
};
export type ResolveValidation = {
  projectUid?: string;
  sessionUid?: string;
  sheetName?: string;
  fieldName?: string;
  corrections?: NewValidationCorrection[];
  linkedValues?: LinkedFieldValue[];
};
export type ResolveValidationPayload = {
  payload: ResolveValidation;
};
export type SaveValidationCorrections = {
  projectUid?: string;
  sessionUid?: string;
};
export type SaveValidationCorrectionsPayload = {
  payload: SaveValidationCorrections;
};
export type RecordValidationStatus = {
  workingIdentifierDict?: {};
  nextSheet?: string;
  nextIdentifier?: string;
  nextIdentifierDict?: {};
  remainingConflicts?: string[];
  completionProgress?: number;
};
export type RecordValidationStatusResponse = BaseResponse & {
  result: RecordValidationStatus;
};
export type RecordValidationStatusPayload = {
  workingSheet?: string;
  workingIdentifier?: string;
  reviewMode?: boolean;
};
export type RecordConflictTypeEnum = "duplicate" | "inconsistent";
export type IdentifierWithConflict = {
  sheetName: string;
  identifierValue: string;
};
export type CalcRecordConflicts = {
  total: number;
  conflictType: RecordConflictTypeEnum;
  identifiersWithConflict: IdentifierWithConflict[];
};
export type CalcRecordConflictsResponse = BaseResponse & {
  result: CalcRecordConflicts;
};
export type InconsistentValue = {
  value?: string[];
  rows?: number[];
};
export type InconsistentFieldCorrection = {
  _createdOn?: string;
  _modifiedOn?: string;
  row?: number;
  sheet: string;
  fieldName: string;
  conceptId?: string;
  original: string[];
  update?: string[];
};
export type InconsistentField = {
  fieldName: string;
  valueCount: number;
  values?: InconsistentValue[];
  correction?: InconsistentFieldCorrection;
};
export type InconsistentFieldConflicts = {
  sheet: string;
  identifierValue: string;
  identifiers?: {};
  record: {};
  fieldTypeMap: {};
  conflictFields?: InconsistentField[];
  totalFields?: number;
  rows?: number[];
};
export type InconsistentConflictsResponse = BaseResponse & {
  result: InconsistentFieldConflicts;
};
export type InconsistentConflictPayload = {
  identifierValue?: string;
  sheetName?: string;
  page?: number;
  pageSize?: number;
  searchTerm?: string;
  conflictsOnly?: boolean;
};
export type InconsistentFieldValuesResponse = BaseResponse & {
  result: InconsistentValue[];
};
export type InconsistentFieldValuesPayload = {
  identifierValue?: string;
  sheetName?: string;
  fieldName?: string;
};
export type ResolveInconsistentConflictResponse = BaseResponse & {
  result: InconsistentFieldCorrection[];
};
export type ResolveInconsistentConflict = {
  projectUid?: string;
  sessionUid?: string;
  sheet?: string;
  identifierValue?: string;
  fieldName?: string;
  correction?: string[];
};
export type ResolveInconsistentConflictPayload = {
  payload: ResolveInconsistentConflict;
};
export type RemoveInconsistentCorrection = {
  conflictType?: RecordConflictTypeEnum;
  projectUid?: string;
  sessionUid?: string;
  sheet?: string;
  identifierValue?: string;
  fieldName?: string[];
};
export type RemoveInconsistentCorrectionPayload = {
  payload: RemoveInconsistentCorrection;
};
export type DuplicateResolveActionEnum = "remove" | "re-assign";
export type DuplicateRecordCorrection = {
  _createdOn?: string;
  _modifiedOn?: string;
  sheet: string;
  row: number;
  action: DuplicateResolveActionEnum;
  newIdentifier?: {};
};
export type DuplicateRecordConflicts = {
  sheet: string;
  identifierValue: string;
  identifiers: {};
  parentRow: number;
  rows: number[];
  totalRows?: number;
  corrections?: DuplicateRecordCorrection[];
};
export type DuplicateConflictsResponse = BaseResponse & {
  result: DuplicateRecordConflicts;
};
export type DuplicateConflictPayload = {
  identifierValue?: string;
  sheetName?: string;
};
export type ResolveDuplicateConflictResponse = BaseResponse & {
  result: DuplicateRecordCorrection[];
};
export type ResolveDuplicateConflict = {
  projectUid?: string;
  sessionUid?: string;
  sheet?: string;
  identifierValue?: string;
  corrections?: DuplicateRecordCorrection[];
};
export type ResolveDuplicateConflictPayload = {
  payload: ResolveDuplicateConflict;
};
export type BulkRemoveDuplicateRecords = {
  projectUid?: string;
  sessionUid?: string;
  identifiersWithConflict?: IdentifierWithConflict[];
};
export type BulkRemoveDuplicateRecordsPayload = {
  payload: BulkRemoveDuplicateRecords;
};
export type RemoveDuplicateCorrection = {
  projectUid?: string;
  sessionUid?: string;
  sheet?: string;
  identifierValue?: string;
  rows?: number[];
};
export type RemoveDuplicateCorrectionPayload = {
  payload: RemoveDuplicateCorrection;
};
export type MergeSettingsResponse = BaseResponse & {
  result: MergeSettings;
};
export type MergeConflictStatus = {
  workingIdentifierDict?: {};
  nextSheet?: string;
  nextIdentifier?: string;
  nextIdentifierRow?: number;
  nextIdentifierDict?: {};
  remainingConflicts?: string[];
  completionProgress?: number;
};
export type MergeConflictStatusResponse = BaseResponse & {
  result: MergeConflictStatus;
};
export type MergeConflictStatusPayload = {
  workingSheet?: string;
  workingIdentifier?: string;
  workingIdentifierRow?: number;
  reviewMode?: boolean;
};
export type RepeatFormsResponse = BaseResponse & {
  result: {
    total: number;
    forms: RepeatingFormIdentifiers[];
  };
};
export type RepeatFormFieldsResponse = BaseResponse & {
  result: Metadata[];
};
export type SaveFormIdentifiersResponse = BaseResponse & {
  result: RepeatingFormIdentifiers;
};
export type IdentifierWithMergeConflict = {
  sheet: string;
  row: number;
  identifierValue: string;
  identifierDict?: {};
};
export type MergeConflictsResponse = BaseResponse & {
  result: {
    total: number;
    identifiers: IdentifierWithMergeConflict[];
  };
};
export type CalcMergeConflictsResponse = BaseResponse & {
  result: {
    validationStatus?: SessionValidationStatus;
    conflicts?: IdentifierWithMergeConflict[];
  };
};
export type MergeConflictCorrection = {
  _createdOn?: string;
  _modifiedOn?: string;
  row?: number;
  sheet: string;
  fieldName: string;
  conceptId?: string;
  original: string[];
  update?: string[];
};
export type NewMergeConflict = {
  sheet: string;
  identifierValue?: string;
  row: number;
  fieldName: string;
  conceptId?: string;
  isRepeatField: boolean;
  destinationValue: string[];
  sourceValue: string[];
  correction?: MergeConflictCorrection;
};
export type MergeConflict = NewMergeConflict & {
  _id: string;
  _projectUid: string;
  _sessionUid: string;
};
export type NewRepeatFormInstanceMapping = {
  sheet?: string;
  identifierValue?: string;
  row?: number;
  formName?: string;
  repeatInstance?: number;
};
export type RepeatFormInstanceMapping = NewRepeatFormInstanceMapping & {
  _id: string;
  _projectUid: string;
  _sessionUid?: string;
};
export type IdentifierMergeConflict = {
  sheet: string;
  row: number;
  identifierValue: string;
  identifiers?: {};
  record?: {};
  fieldTypeMap?: {};
  conflicts: MergeConflict[];
  matchingRepeatInstances?: RepeatFormInstanceMapping[];
  totalFields?: number;
  conflictFields: string[];
  totalConflicts?: number;
};
export type MergeConflictResponse = BaseResponse & {
  result: IdentifierMergeConflict;
};
export type MergeConflictPayload = {
  sheetName: string;
  row?: number;
  identifierValue: string;
  page?: number;
  pageSize?: number;
  searchTerm?: string;
  conflictsOnly?: boolean;
};
export type ResolveMergeConflictResponse = BaseResponse & {
  result: MergeConflictCorrection[];
};
export type ResolveMergeConflict = {
  projectUid: string;
  sessionUid: string;
  conflictUid?: string;
  sheet: string;
  row: number;
  identifierValue: string;
  fieldName: string;
  correction: string[];
};
export type ResolveMergeConflictPayload = {
  payload: ResolveMergeConflict;
};
export type BulkResolveMergeConflict = {
  projectUid: string;
  sessionUid: string;
  sheet: string;
  row: number;
  identifierValue: string;
  valueType: "sourceData" | "existing";
};
export type BulkResolveMergeConflictPayload = {
  payload: BulkResolveMergeConflict;
};
export type RemoveMergeConflictCorrection = {
  conflictType?: RecordConflictTypeEnum;
  projectUid?: string;
  sessionUid?: string;
  sheet?: string;
  row?: number;
  identifierValue?: string;
  fieldName?: string;
};
export type RemoveMergeConflictCorrectionPayload = {
  payload: RemoveMergeConflictCorrection;
};
export const {
  useOpenQuery,
  useLazyOpenQuery,
  useGetUserMutation,
  useGetUserProjectSessionsDeprecatedQuery,
  useLazyGetUserProjectSessionsDeprecatedQuery,
  useGetUserProjectSessionsQuery,
  useLazyGetUserProjectSessionsQuery,
  useGetProjectSessionsQuery,
  useLazyGetProjectSessionsQuery,
  useGetSessionQuery,
  useLazyGetSessionQuery,
  useUpdateSessionMutation,
  useDeleteSessionMutation,
  useGetBaseImportDataQuery,
  useLazyGetBaseImportDataQuery,
  useGetSourceDataQuery,
  useLazyGetSourceDataQuery,
  useGetMetadataFieldQuery,
  useLazyGetMetadataFieldQuery,
  useGetMetadataQuery,
  useLazyGetMetadataQuery,
  useGetProjectConfigsQuery,
  useLazyGetProjectConfigsQuery,
  useGetSessionValidationDataQuery,
  useLazyGetSessionValidationDataQuery,
  useGetRedcapVersionMutation,
  useGetProjectAutoNumberingStatusMutation,
  useDecodeRedcapRecordsMutation,
  useGetEncodedRecordsQuery,
  useLazyGetEncodedRecordsQuery,
  useEncodeRecordsMutation,
  useFetchExtractProjectsQuery,
  useLazyFetchExtractProjectsQuery,
  useFetchExtractReleaseQuery,
  useLazyFetchExtractReleaseQuery,
  useInitDataImportMutation,
  useInitDataFileImportMutation,
  useInitDataReleaseImportMutation,
  useImportExistingRecordsRedcapMutation,
  useImportExistingRecordsFileMutation,
  useInitBuildAndImportMutation,
  useGetProjectMappingsQuery,
  useLazyGetProjectMappingsQuery,
  useCheckProjectMappingStatusMutation,
  useGetMappingSettingsQuery,
  useLazyGetMappingSettingsQuery,
  useUpdateMappingSettingsMutation,
  useCreateFieldMappingsMutation,
  useCheckRemovalEffectQuery,
  useLazyCheckRemovalEffectQuery,
  useRemoveFieldMappingMutation,
  useUnignoreSourceFieldMutation,
  useGetFieldsForMappingQuery,
  useLazyGetFieldsForMappingQuery,
  useGetFieldCandidatesQuery,
  useLazyGetFieldCandidatesQuery,
  useApplyProjectMappingsMutation,
  useGetValidationSettingsQuery,
  useLazyGetValidationSettingsQuery,
  useUpdateValidationSettingsMutation,
  useGetValidationErrorsQuery,
  useLazyGetValidationErrorsQuery,
  useValidateSourceDataMutation,
  useGetValidationStatusMutation,
  useValidateFieldMutation,
  useValidateRecordMutation,
  useResolveValidationErrorMutation,
  useDeleteSessionValidationCorrectionMutation,
  useSaveValidationCorrectionsMutation,
  useGetRecordValidationStatusMutation,
  useGetRecordConflictsQuery,
  useLazyGetRecordConflictsQuery,
  useCalculateRecordConflictsMutation,
  useFetchInconsistentConflictMutation,
  useFetchInconsistentFieldValuesMutation,
  useResolveInconsistentConflictMutation,
  useRemoveInconsistentCorrectionsMutation,
  useFetchDuplicateConflictMutation,
  useResolveDuplicateConflictMutation,
  useBulkRemoveDuplicateRecordsMutation,
  useRemoveDuplicateCorrectionsMutation,
  useGetMergeSettingsQuery,
  useLazyGetMergeSettingsQuery,
  useUpdateMergeSettingsMutation,
  useGetMergeConflictStatusMutation,
  useFetchRepeatingFormsQuery,
  useLazyFetchRepeatingFormsQuery,
  useFetchRepeatingFormFieldsQuery,
  useLazyFetchRepeatingFormFieldsQuery,
  useSaveFormIdentifierFieldsMutation,
  useGetSessionMergeConflictsQuery,
  useLazyGetSessionMergeConflictsQuery,
  useCalculateMergeConflictsMutation,
  useGetIdentifierMergeConflictsMutation,
  useResolveMergeConflictMutation,
  useBulkResolveMergeConflictMutation,
  useRemoveMergeConflictCorrectionMutation,
  useDownloadMappingsQuery,
  useLazyDownloadMappingsQuery,
  useDownloadRecordsMutation,
  useExportRecordsMutation,
  useExportReportMutation,
} = injectedRtkApi;
