import { emptySplitApi as api } from "./emptyApi";
export const addTagTypes = [
  "auth",
  "bulkingestion",
  "cohort",
  "data-piping",
  "domains",
  "email",
  "help",
  "instances",
  "logging",
  "ontology",
  "permissions",
  "project",
  "redcap",
  "redcapAdmin",
  "roles",
  "settings",
  "socket",
  "tools",
  "transactions",
  "users",
] as const;
const injectedRtkApi = api
  .enhanceEndpoints({
    addTagTypes,
  })
  .injectEndpoints({
    endpoints: (build) => ({
      logout: build.mutation<LogoutApiResponse, LogoutApiArg>({
        query: () => ({ url: `/authentication`, method: "DELETE" }),
        invalidatesTags: ["auth"],
      }),
      getUser: build.query<GetUserApiResponse, GetUserApiArg>({
        query: () => ({ url: `/authentication` }),
        providesTags: ["auth"],
      }),
      login: build.mutation<LoginApiResponse, LoginApiArg>({
        query: (queryArg) => ({
          url: `/authentication`,
          method: "POST",
          body: queryArg.loginPayload,
        }),
        invalidatesTags: ["auth"],
      }),
      getActiveSessionsProjects: build.query<
        GetActiveSessionsProjectsApiResponse,
        GetActiveSessionsProjectsApiArg
      >({
        query: () => ({ url: `/authentication/active-sessions-projects` }),
        providesTags: ["auth"],
      }),
      switchAdminMode: build.mutation<
        SwitchAdminModeApiResponse,
        SwitchAdminModeApiArg
      >({
        query: (queryArg) => ({
          url: `/authentication/admin-edit-mode/${queryArg.modeId}`,
          method: "PUT",
        }),
        invalidatesTags: ["auth"],
      }),
      enterAdminScreen: build.mutation<
        EnterAdminScreenApiResponse,
        EnterAdminScreenApiArg
      >({
        query: () => ({
          url: `/authentication/admin-screen/enter`,
          method: "PUT",
        }),
        invalidatesTags: ["auth"],
      }),
      leaveAdminScreen: build.mutation<
        LeaveAdminScreenApiResponse,
        LeaveAdminScreenApiArg
      >({
        query: () => ({
          url: `/authentication/admin-screen/leave`,
          method: "PUT",
        }),
        invalidatesTags: ["auth"],
      }),
      getExtractAppUsage: build.query<
        GetExtractAppUsageApiResponse,
        GetExtractAppUsageApiArg
      >({
        query: () => ({ url: `/authentication/app-usage` }),
        providesTags: ["auth"],
      }),
      enterExtractApp: build.mutation<
        EnterExtractAppApiResponse,
        EnterExtractAppApiArg
      >({
        query: (queryArg) => ({
          url: `/authentication/app/enter/${queryArg.app}`,
          method: "PUT",
        }),
        invalidatesTags: ["auth"],
      }),
      leaveExtractApp: build.mutation<
        LeaveExtractAppApiResponse,
        LeaveExtractAppApiArg
      >({
        query: (queryArg) => ({
          url: `/authentication/app/leave/${queryArg.app}`,
          method: "PUT",
        }),
        invalidatesTags: ["auth"],
      }),
      cancelImpersonation: build.mutation<
        CancelImpersonationApiResponse,
        CancelImpersonationApiArg
      >({
        query: () => ({
          url: `/authentication/cancel-impersonation`,
          method: "DELETE",
        }),
        invalidatesTags: ["auth"],
      }),
      endSession: build.mutation<EndSessionApiResponse, EndSessionApiArg>({
        query: (queryArg) => ({
          url: `/authentication/end-session/${queryArg.token}`,
          method: "POST",
        }),
        invalidatesTags: ["auth"],
      }),
      extend: build.mutation<ExtendApiResponse, ExtendApiArg>({
        query: () => ({ url: `/authentication/extend-session`, method: "PUT" }),
        invalidatesTags: ["auth"],
      }),
      updateImpersonation: build.mutation<
        UpdateImpersonationApiResponse,
        UpdateImpersonationApiArg
      >({
        query: (queryArg) => ({
          url: `/authentication/impersonate/${queryArg.roleId}`,
          method: "PUT",
        }),
        invalidatesTags: ["auth"],
      }),
      launchRedcapAfterPublish: build.mutation<
        LaunchRedcapAfterPublishApiResponse,
        LaunchRedcapAfterPublishApiArg
      >({
        query: (queryArg) => ({
          url: `/authentication/launch-redcap-after-publish/${queryArg.launchValue}`,
          method: "PUT",
        }),
        invalidatesTags: ["auth"],
      }),
      authenticateExternalServices: build.query<
        AuthenticateExternalServicesApiResponse,
        AuthenticateExternalServicesApiArg
      >({
        query: () => ({ url: `/authentication/load-external-service-tokens` }),
        providesTags: ["auth"],
      }),
      changeRedcapInstance: build.mutation<
        ChangeRedcapInstanceApiResponse,
        ChangeRedcapInstanceApiArg
      >({
        query: (queryArg) => ({
          url: `/authentication/redcap-instance/${queryArg.redcapInstanceId}`,
          method: "PUT",
        }),
        invalidatesTags: ["auth"],
      }),
      unlockAllProjects: build.mutation<
        UnlockAllProjectsApiResponse,
        UnlockAllProjectsApiArg
      >({
        query: () => ({
          url: `/authentication/unlock-projects`,
          method: "PUT",
        }),
        invalidatesTags: ["auth"],
      }),
      unlockProjects: build.mutation<
        UnlockProjectsApiResponse,
        UnlockProjectsApiArg
      >({
        query: (queryArg) => ({
          url: `/authentication/unlock-projects/${queryArg.token}`,
          method: "POST",
        }),
        invalidatesTags: ["auth"],
      }),
      downloadFile: build.mutation<DownloadFileApiResponse, DownloadFileApiArg>(
        {
          query: (queryArg) => ({
            url: `/bulkingestion/download`,
            method: "POST",
            body: queryArg.fileInfoPayload,
          }),
          invalidatesTags: ["bulkingestion"],
        }
      ),
      getFileProcessLogs: build.query<
        GetFileProcessLogsApiResponse,
        GetFileProcessLogsApiArg
      >({
        query: (queryArg) => ({
          url: `/bulkingestion/processlogs`,
          params: {
            term: queryArg.term,
            pageNumber: queryArg.pageNumber,
            pageSize: queryArg.pageSize,
            sortBy: queryArg.sortBy,
            sortOrder: queryArg.sortOrder,
          },
        }),
        providesTags: ["bulkingestion"],
      }),
      createFileProcessLog: build.mutation<
        CreateFileProcessLogApiResponse,
        CreateFileProcessLogApiArg
      >({
        query: (queryArg) => ({
          url: `/bulkingestion/processlogs`,
          method: "POST",
          body: queryArg.fileProcessLogPayload,
        }),
        invalidatesTags: ["bulkingestion"],
      }),
      updateFileProcessLog: build.mutation<
        UpdateFileProcessLogApiResponse,
        UpdateFileProcessLogApiArg
      >({
        query: (queryArg) => ({
          url: `/bulkingestion/processlogs/${queryArg.processId}`,
          method: "PUT",
          body: queryArg.fileProcessLogUpdatePayload,
        }),
        invalidatesTags: ["bulkingestion"],
      }),
      approveIngestion: build.mutation<
        ApproveIngestionApiResponse,
        ApproveIngestionApiArg
      >({
        query: (queryArg) => ({
          url: `/bulkingestion/processlogs/${queryArg.processId}/approve`,
          method: "PUT",
        }),
        invalidatesTags: ["bulkingestion"],
      }),
      rollbackIngestion: build.mutation<
        RollbackIngestionApiResponse,
        RollbackIngestionApiArg
      >({
        query: (queryArg) => ({
          url: `/bulkingestion/processlogs/${queryArg.processId}/rollback`,
          method: "PUT",
        }),
        invalidatesTags: ["bulkingestion"],
      }),
      uploadFile: build.mutation<UploadFileApiResponse, UploadFileApiArg>({
        query: (queryArg) => ({
          url: `/bulkingestion/upload`,
          method: "POST",
          body: queryArg.body,
        }),
        invalidatesTags: ["bulkingestion"],
      }),
      cohort: build.mutation<CohortApiResponse, CohortApiArg>({
        query: (queryArg) => ({
          url: `/cohort`,
          method: "POST",
          body: queryArg.cohortPayload,
        }),
        invalidatesTags: ["cohort"],
      }),
      invoke: build.mutation<InvokeApiResponse, InvokeApiArg>({
        query: () => ({ url: `/data-piping/invoke`, method: "POST" }),
        invalidatesTags: ["data-piping"],
      }),
      getDomains: build.query<GetDomainsApiResponse, GetDomainsApiArg>({
        query: () => ({ url: `/domains` }),
        providesTags: ["domains"],
      }),
      updateDomains: build.mutation<
        UpdateDomainsApiResponse,
        UpdateDomainsApiArg
      >({
        query: (queryArg) => ({
          url: `/domains`,
          method: "PUT",
          body: queryArg.updateDomainsPayload,
        }),
        invalidatesTags: ["domains"],
      }),
      sendEmail: build.mutation<SendEmailApiResponse, SendEmailApiArg>({
        query: (queryArg) => ({
          url: `/email`,
          method: "POST",
          body: queryArg.emailInfoPayload,
        }),
        invalidatesTags: ["email"],
      }),
      fetchHelpItems: build.query<
        FetchHelpItemsApiResponse,
        FetchHelpItemsApiArg
      >({
        query: (queryArg) => ({
          url: `/help/items`,
          params: { itemType: queryArg.itemType, search: queryArg.search },
        }),
        providesTags: ["help"],
      }),
      createHelpItem: build.mutation<
        CreateHelpItemApiResponse,
        CreateHelpItemApiArg
      >({
        query: (queryArg) => ({
          url: `/help/items`,
          method: "POST",
          body: queryArg.helpItem,
        }),
        invalidatesTags: ["help"],
      }),
      deleteHelpItem: build.mutation<
        DeleteHelpItemApiResponse,
        DeleteHelpItemApiArg
      >({
        query: (queryArg) => ({
          url: `/help/items/${queryArg.itemId}`,
          method: "DELETE",
          params: { itemType: queryArg.itemType },
        }),
        invalidatesTags: ["help"],
      }),
      editHelpItem: build.mutation<EditHelpItemApiResponse, EditHelpItemApiArg>(
        {
          query: (queryArg) => ({
            url: `/help/items/${queryArg.itemId}`,
            method: "PUT",
            body: queryArg.helpItem,
          }),
          invalidatesTags: ["help"],
        }
      ),
      fetchHelpSelectItems: build.query<
        FetchHelpSelectItemsApiResponse,
        FetchHelpSelectItemsApiArg
      >({
        query: (queryArg) => ({
          url: `/help/section-titles`,
          params: { itemType: queryArg.itemType },
        }),
        providesTags: ["help"],
      }),
      getInstances: build.query<GetInstancesApiResponse, GetInstancesApiArg>({
        query: () => ({ url: `/instances` }),
        providesTags: ["instances"],
      }),
      addInstance: build.mutation<AddInstanceApiResponse, AddInstanceApiArg>({
        query: (queryArg) => ({
          url: `/instances`,
          method: "POST",
          body: queryArg.addRedcapInstancePayload,
        }),
        invalidatesTags: ["instances"],
      }),
      addLogging: build.mutation<AddLoggingApiResponse, AddLoggingApiArg>({
        query: (queryArg) => ({
          url: `/logging`,
          method: "POST",
          body: queryArg.addLoggingPayload,
        }),
        invalidatesTags: ["logging"],
      }),
      getAbbreviations: build.query<
        GetAbbreviationsApiResponse,
        GetAbbreviationsApiArg
      >({
        query: () => ({ url: `/ontology/abbreviations` }),
        providesTags: ["ontology"],
      }),
      addAbbreviation: build.mutation<
        AddAbbreviationApiResponse,
        AddAbbreviationApiArg
      >({
        query: (queryArg) => ({
          url: `/ontology/abbreviations`,
          method: "POST",
          body: queryArg.addOntologyAbbreviationPayload,
        }),
        invalidatesTags: ["ontology"],
      }),
      updateAbbreviation: build.mutation<
        UpdateAbbreviationApiResponse,
        UpdateAbbreviationApiArg
      >({
        query: (queryArg) => ({
          url: `/ontology/abbreviations/${queryArg.abbreviationId}`,
          method: "PUT",
          body: queryArg.updateOntologyAbbreviationPayload,
        }),
        invalidatesTags: ["ontology"],
      }),
      downloadBulkIngestionTemplate: build.query<
        DownloadBulkIngestionTemplateApiResponse,
        DownloadBulkIngestionTemplateApiArg
      >({
        query: () => ({ url: `/ontology/bulk-ingestion-template` }),
        providesTags: ["ontology"],
      }),
      downloadCache: build.query<DownloadCacheApiResponse, DownloadCacheApiArg>(
        {
          query: (queryArg) => ({
            url: `/ontology/cache`,
            params: { ontologyIndex: queryArg.ontologyIndex },
          }),
          providesTags: ["ontology"],
        }
      ),
      getOntologyDomains: build.query<
        GetOntologyDomainsApiResponse,
        GetOntologyDomainsApiArg
      >({
        query: () => ({ url: `/ontology/domains` }),
        providesTags: ["ontology"],
      }),
      duplicatePrimaryLabelInAlternativeLabel: build.mutation<
        DuplicatePrimaryLabelInAlternativeLabelApiResponse,
        DuplicatePrimaryLabelInAlternativeLabelApiArg
      >({
        query: () => ({ url: `/ontology/dupAlternativeLabel`, method: "PUT" }),
        invalidatesTags: ["ontology"],
      }),
      updateOntologyField: build.mutation<
        UpdateOntologyFieldApiResponse,
        UpdateOntologyFieldApiArg
      >({
        query: (queryArg) => ({
          url: `/ontology/field`,
          method: "PUT",
          body: queryArg.updateOntologyFieldPayload,
        }),
        invalidatesTags: ["ontology"],
      }),
      favoriteField: build.mutation<
        FavoriteFieldApiResponse,
        FavoriteFieldApiArg
      >({
        query: (queryArg) => ({
          url: `/ontology/field/favorite`,
          method: "PUT",
          body: queryArg.favoriteOntologyFieldPayload,
        }),
        invalidatesTags: ["ontology"],
      }),
      getOntologyDomainsFields: build.query<
        GetOntologyDomainsFieldsApiResponse,
        GetOntologyDomainsFieldsApiArg
      >({
        query: (queryArg) => ({
          url: `/ontology/fields`,
          params: {
            fieldId: queryArg.fieldId,
            projectId: queryArg.projectId,
            domainId: queryArg.domainId,
            term: queryArg.term,
            fav: queryArg.fav,
            startIndex: queryArg.startIndex,
            size: queryArg.size,
            soryBy: queryArg.soryBy,
            soryOrder: queryArg.soryOrder,
            ontologyIndex: queryArg.ontologyIndex,
            includeZeroDataElementDomains:
              queryArg.includeZeroDataElementDomains,
          },
        }),
        providesTags: ["ontology"],
      }),
      getOntologyField: build.query<
        GetOntologyFieldApiResponse,
        GetOntologyFieldApiArg
      >({
        query: (queryArg) => ({
          url: `/ontology/fields/field`,
          params: {
            fieldId: queryArg.fieldId,
            ontologyIndex: queryArg.ontologyIndex,
          },
        }),
        providesTags: ["ontology"],
      }),
      getOntologyFieldPaginatedPvs: build.query<
        GetOntologyFieldPaginatedPvsApiResponse,
        GetOntologyFieldPaginatedPvsApiArg
      >({
        query: (queryArg) => ({
          url: `/ontology/fields/field/pvs`,
          params: {
            fieldId: queryArg.fieldId,
            term: queryArg.term,
            pageSize: queryArg.pageSize,
            pageNumber: queryArg.pageNumber,
            ontologyIndex: queryArg.ontologyIndex,
          },
        }),
        providesTags: ["ontology"],
      }),
      refreshSl: build.mutation<RefreshSlApiResponse, RefreshSlApiArg>({
        query: (queryArg) => ({
          url: `/ontology/slrefresh`,
          method: "PUT",
          params: { days: queryArg.days, isRC: queryArg.isRc },
        }),
        invalidatesTags: ["ontology"],
      }),
      getOntologySuggestions: build.query<
        GetOntologySuggestionsApiResponse,
        GetOntologySuggestionsApiArg
      >({
        query: (queryArg) => ({
          url: `/ontology/suggestions`,
          params: { projectId: queryArg.projectId },
        }),
        providesTags: ["ontology"],
      }),
      getPermissions: build.query<
        GetPermissionsApiResponse,
        GetPermissionsApiArg
      >({
        query: () => ({ url: `/permissions` }),
        providesTags: ["permissions"],
      }),
      getProjectByRedcap: build.query<
        GetProjectByRedcapApiResponse,
        GetProjectByRedcapApiArg
      >({
        query: (queryArg) => ({
          url: `/project/get-by-redcap`,
          params: {
            redcapId: queryArg.redcapId,
            redcapUrl: queryArg.redcapUrl,
          },
        }),
        providesTags: ["project"],
      }),
      importRecords: build.mutation<
        ImportRecordsApiResponse,
        ImportRecordsApiArg
      >({
        query: (queryArg) => ({
          url: `/project/import/records`,
          method: "POST",
          body: queryArg.importRecordsPayload,
        }),
        invalidatesTags: ["redcap"],
      }),
      getFields: build.query<GetFieldsApiResponse, GetFieldsApiArg>({
        query: (queryArg) => ({
          url: `/project/${queryArg.projectId}/fields`,
          params: {
            sortIndex: queryArg.sortIndex,
            sortOrder: queryArg.sortOrder,
            term: queryArg.term,
            filterType: queryArg.filterType,
            sharedProject: queryArg.sharedProject,
            excludeProjectId: queryArg.excludeProjectId,
            excludePermissibleValues: queryArg.excludePermissibleValues,
          },
        }),
        providesTags: ["project"],
      }),
      addField: build.mutation<AddFieldApiResponse, AddFieldApiArg>({
        query: (queryArg) => ({
          url: `/project/${queryArg.projectId}/fields`,
          method: "POST",
          body: queryArg.addFieldsPayload,
        }),
        invalidatesTags: ["project"],
      }),
      setFieldAccess: build.mutation<
        SetFieldAccessApiResponse,
        SetFieldAccessApiArg
      >({
        query: (queryArg) => ({
          url: `/project/${queryArg.projectId}/fields/accesses`,
          method: "PUT",
          body: queryArg.setFieldAccessPayload,
        }),
        invalidatesTags: ["project"],
      }),
      bulkDeleteFields: build.mutation<
        BulkDeleteFieldsApiResponse,
        BulkDeleteFieldsApiArg
      >({
        query: (queryArg) => ({
          url: `/project/${queryArg.projectId}/fields/bulk-delete`,
          method: "POST",
          body: queryArg.fieldIdArray,
        }),
        invalidatesTags: ["project"],
      }),
      getDeletedButHaveData: build.query<
        GetDeletedButHaveDataApiResponse,
        GetDeletedButHaveDataApiArg
      >({
        query: (queryArg) => ({
          url: `/project/${queryArg.projectId}/fields/deleted-but-have-data`,
        }),
        providesTags: ["project"],
      }),
      getForSetAccess: build.query<
        GetForSetAccessApiResponse,
        GetForSetAccessApiArg
      >({
        query: (queryArg) => ({
          url: `/project/${queryArg.projectId}/fields/for-set-access`,
          params: {
            term: queryArg.term,
            sortIndex: queryArg.sortIndex,
            sortOrder: queryArg.sortOrder,
          },
        }),
        providesTags: ["project"],
      }),
      getFieldsForVetting: build.query<
        GetFieldsForVettingApiResponse,
        GetFieldsForVettingApiArg
      >({
        query: (queryArg) => ({
          url: `/project/${queryArg.projectId}/fields/forVetting`,
          params: {
            sortIndex: queryArg.sortIndex,
            sortOrder: queryArg.sortOrder,
            term: queryArg.term,
            dataType: queryArg.dataType,
            formId: queryArg.formId,
            showUnvetted: queryArg.showUnvetted,
            pageSize: queryArg.pageSize,
            pageNumber: queryArg.pageNumber,
          },
        }),
        providesTags: ["project"],
      }),
      getGroupedByScreens: build.query<
        GetGroupedByScreensApiResponse,
        GetGroupedByScreensApiArg
      >({
        query: (queryArg) => ({
          url: `/project/${queryArg.projectId}/fields/grouped-by-screens`,
        }),
        providesTags: ["project"],
      }),
      getMaxFieldInstance: build.mutation<
        GetMaxFieldInstanceApiResponse,
        GetMaxFieldInstanceApiArg
      >({
        query: (queryArg) => ({
          url: `/project/${queryArg.projectId}/fields/max-instance`,
          method: "POST",
          body: queryArg.maxInstancePayload,
        }),
        invalidatesTags: ["project"],
      }),
      getFieldsPagination: build.query<
        GetFieldsPaginationApiResponse,
        GetFieldsPaginationApiArg
      >({
        query: (queryArg) => ({
          url: `/project/${queryArg.projectId}/fields/pagination`,
          params: {
            sortIndex: queryArg.sortIndex,
            sortOrder: queryArg.sortOrder,
            term: queryArg.term,
            pageSize: queryArg.pageSize,
            pageNumber: queryArg.pageNumber,
            filterType: queryArg.filterType,
            sharedProject: queryArg.sharedProject,
            excludeProjectId: queryArg.excludeProjectId,
            excludePermissibleValues: queryArg.excludePermissibleValues,
          },
        }),
        providesTags: ["project"],
      }),
      getScreensWithoutField: build.query<
        GetScreensWithoutFieldApiResponse,
        GetScreensWithoutFieldApiArg
      >({
        query: (queryArg) => ({
          url: `/project/${queryArg.projectId}/fields/screens-without-field`,
        }),
        providesTags: ["project"],
      }),
      getWithoutScreens: build.query<
        GetWithoutScreensApiResponse,
        GetWithoutScreensApiArg
      >({
        query: (queryArg) => ({
          url: `/project/${queryArg.projectId}/fields/without-screens`,
        }),
        providesTags: ["project"],
      }),
      deleteField: build.mutation<DeleteFieldApiResponse, DeleteFieldApiArg>({
        query: (queryArg) => ({
          url: `/project/${queryArg.projectId}/fields/${queryArg.fieldId}`,
          method: "DELETE",
        }),
        invalidatesTags: ["project"],
      }),
      getField: build.query<GetFieldApiResponse, GetFieldApiArg>({
        query: (queryArg) => ({
          url: `/project/${queryArg.projectId}/fields/${queryArg.fieldId}`,
        }),
        providesTags: ["project"],
      }),
      updateField: build.mutation<UpdateFieldApiResponse, UpdateFieldApiArg>({
        query: (queryArg) => ({
          url: `/project/${queryArg.projectId}/fields/${queryArg.fieldId}`,
          method: "PUT",
          body: queryArg.updateFieldPayload,
        }),
        invalidatesTags: ["project"],
      }),
      checkFieldRecords: build.query<
        CheckFieldRecordsApiResponse,
        CheckFieldRecordsApiArg
      >({
        query: (queryArg) => ({
          url: `/project/${queryArg.projectId}/fields/${queryArg.fieldId}/fieldrecords`,
        }),
        providesTags: ["project"],
      }),
      getFieldPaginatedPvs: build.query<
        GetFieldPaginatedPvsApiResponse,
        GetFieldPaginatedPvsApiArg
      >({
        query: (queryArg) => ({
          url: `/project/${queryArg.projectId}/fields/${queryArg.fieldId}/pvs`,
          params: {
            term: queryArg.term,
            pageSize: queryArg.pageSize,
            pageNumber: queryArg.pageNumber,
          },
        }),
        providesTags: ["project"],
      }),
      getPermissibleValuesPagination: build.query<
        GetPermissibleValuesPaginationApiResponse,
        GetPermissibleValuesPaginationApiArg
      >({
        query: (queryArg) => ({
          url: `/project/${queryArg.projectId}/fields/${queryArg.fieldId}/pvs/pagination`,
          params: {
            term: queryArg.term,
            pageSize: queryArg.pageSize,
            pageNumber: queryArg.pageNumber,
          },
        }),
        providesTags: ["project"],
      }),
      getAllFormsByProject: build.query<
        GetAllFormsByProjectApiResponse,
        GetAllFormsByProjectApiArg
      >({
        query: (queryArg) => ({ url: `/project/${queryArg.projectId}/forms` }),
        providesTags: ["project"],
      }),
      getFormsByProjectForVetting: build.query<
        GetFormsByProjectForVettingApiResponse,
        GetFormsByProjectForVettingApiArg
      >({
        query: (queryArg) => ({
          url: `/project/${queryArg.projectId}/forms/forVetting`,
        }),
        providesTags: ["project"],
      }),
      getProjects: build.query<GetProjectsApiResponse, GetProjectsApiArg>({
        query: (queryArg) => ({
          url: `/projects/`,
          params: {
            filterType: queryArg.filterType,
            term: queryArg.term,
            sortIndex: queryArg.sortIndex,
            sortOrder: queryArg.sortOrder,
            favourite: queryArg.favourite,
            excludeProjectId: queryArg.excludeProjectId,
          },
        }),
        providesTags: ["project"],
      }),
      importProjects: build.mutation<
        ImportProjectsApiResponse,
        ImportProjectsApiArg
      >({
        query: (queryArg) => ({
          url: `/projects/`,
          method: "POST",
          body: queryArg.importProjectsPayload,
        }),
        invalidatesTags: ["project"],
      }),
      createProject: build.mutation<
        CreateProjectApiResponse,
        CreateProjectApiArg
      >({
        query: (queryArg) => ({
          url: `/projects/create`,
          method: "POST",
          body: queryArg.createProjectPayload,
        }),
        invalidatesTags: ["project"],
      }),
      downloadProjects: build.mutation<
        DownloadProjectsApiResponse,
        DownloadProjectsApiArg
      >({
        query: (queryArg) => ({
          url: `/projects/download`,
          method: "PUT",
          body: queryArg.downloadProjectsPayload,
        }),
        invalidatesTags: ["project"],
      }),
      getProjectsForVetting: build.query<
        GetProjectsForVettingApiResponse,
        GetProjectsForVettingApiArg
      >({
        query: (queryArg) => ({
          url: `/projects/forVetting`,
          params: {
            sortIndex: queryArg.sortIndex,
            sortOrder: queryArg.sortOrder,
            term: queryArg.term,
            favorite: queryArg.favorite,
            pageSize: queryArg.pageSize,
            pageNumber: queryArg.pageNumber,
          },
        }),
        providesTags: ["project"],
      }),
      getAllRedcapProjects: build.query<
        GetAllRedcapProjectsApiResponse,
        GetAllRedcapProjectsApiArg
      >({
        query: () => ({ url: `/projects/redcap/all` }),
        providesTags: ["project"],
      }),
      getUserRedcapProjects: build.query<
        GetUserRedcapProjectsApiResponse,
        GetUserRedcapProjectsApiArg
      >({
        query: () => ({ url: `/projects/redcap/current-user` }),
        providesTags: ["project"],
      }),
      requestNewRedcapProject: build.mutation<
        RequestNewRedcapProjectApiResponse,
        RequestNewRedcapProjectApiArg
      >({
        query: (queryArg) => ({
          url: `/projects/redcap/new-project-request`,
          method: "POST",
          body: queryArg.redcapProjectRequestPayload,
        }),
        invalidatesTags: ["project"],
      }),
      getRedcapTokenRequests: build.query<
        GetRedcapTokenRequestsApiResponse,
        GetRedcapTokenRequestsApiArg
      >({
        query: (queryArg) => ({
          url: `/projects/redcap/token-requests`,
          params: { currentUserOnly: queryArg.currentUserOnly },
        }),
        providesTags: ["project"],
      }),
      createRedcapTokenRequest: build.mutation<
        CreateRedcapTokenRequestApiResponse,
        CreateRedcapTokenRequestApiArg
      >({
        query: (queryArg) => ({
          url: `/projects/redcap/token-requests`,
          method: "POST",
          body: queryArg.redcapTokenRequestPayload,
        }),
        invalidatesTags: ["project"],
      }),
      sendRedcapTokenCreationRequestEmail: build.mutation<
        SendRedcapTokenCreationRequestEmailApiResponse,
        SendRedcapTokenCreationRequestEmailApiArg
      >({
        query: (queryArg) => ({
          url: `/projects/redcap/${queryArg.redcapId}/token-creation-request-email`,
          method: "POST",
          body: queryArg.redcapProjectInfoPayload,
        }),
        invalidatesTags: ["project"],
      }),
      getRedcapSurveyInfo: build.query<
        GetRedcapSurveyInfoApiResponse,
        GetRedcapSurveyInfoApiArg
      >({
        query: (queryArg) => ({
          url: `/projects/survey/${queryArg.surveyType}`,
        }),
        providesTags: ["project"],
      }),
      updateProject: build.mutation<
        UpdateProjectApiResponse,
        UpdateProjectApiArg
      >({
        query: (queryArg) => ({
          url: `/projects/${queryArg.projectId}`,
          method: "PUT",
          body: queryArg.updateProjectPayload,
        }),
        invalidatesTags: ["project"],
      }),
      setProjectAccess: build.mutation<
        SetProjectAccessApiResponse,
        SetProjectAccessApiArg
      >({
        query: (queryArg) => ({
          url: `/projects/${queryArg.projectId}/accesses`,
          method: "PUT",
        }),
        invalidatesTags: ["project"],
      }),
      archiveProject: build.mutation<
        ArchiveProjectApiResponse,
        ArchiveProjectApiArg
      >({
        query: (queryArg) => ({
          url: `/projects/${queryArg.projectId}/archive`,
          method: "PUT",
        }),
        invalidatesTags: ["project"],
      }),
      checkRecords: build.mutation<CheckRecordsApiResponse, CheckRecordsApiArg>(
        {
          query: (queryArg) => ({
            url: `/projects/${queryArg.projectId}/checkrecords`,
            method: "PUT",
            body: queryArg.checkRecordsPayload,
          }),
          invalidatesTags: ["project"],
        }
      ),
      convert: build.mutation<ConvertApiResponse, ConvertApiArg>({
        query: (queryArg) => ({
          url: `/projects/${queryArg.projectId}/convert`,
          method: "PUT",
          body: queryArg.conversionPayload,
        }),
        invalidatesTags: ["project"],
      }),
      getProjectDataTypes: build.query<
        GetProjectDataTypesApiResponse,
        GetProjectDataTypesApiArg
      >({
        query: (queryArg) => ({
          url: `/projects/${queryArg.projectId}/dataTypes`,
        }),
        providesTags: ["project"],
      }),
      deleteProject: build.mutation<
        DeleteProjectApiResponse,
        DeleteProjectApiArg
      >({
        query: (queryArg) => ({
          url: `/projects/${queryArg.projectId}/delete`,
          method: "DELETE",
        }),
        invalidatesTags: ["project"],
      }),
      downloadProject: build.query<
        DownloadProjectApiResponse,
        DownloadProjectApiArg
      >({
        query: (queryArg) => ({
          url: `/projects/${queryArg.projectId}/download`,
        }),
        providesTags: ["project"],
      }),
      downloadMappingTemplate: build.query<
        DownloadMappingTemplateApiResponse,
        DownloadMappingTemplateApiArg
      >({
        query: (queryArg) => ({
          url: `/projects/${queryArg.projectId}/downloadMappingTemp`,
        }),
        providesTags: ["project"],
      }),
      favouriteProject: build.mutation<
        FavouriteProjectApiResponse,
        FavouriteProjectApiArg
      >({
        query: (queryArg) => ({
          url: `/projects/${queryArg.projectId}/favourite`,
          method: "PUT",
        }),
        invalidatesTags: ["project"],
      }),
      getFieldNameSuggestion: build.query<
        GetFieldNameSuggestionApiResponse,
        GetFieldNameSuggestionApiArg
      >({
        query: (queryArg) => ({
          url: `/projects/${queryArg.projectId}/fields/fieldNameSuggestion`,
          params: { label: queryArg.label },
        }),
        providesTags: ["project"],
      }),
      duplicateField: build.mutation<
        DuplicateFieldApiResponse,
        DuplicateFieldApiArg
      >({
        query: (queryArg) => ({
          url: `/projects/${queryArg.projectId}/fields/${queryArg.fieldId}/duplicate`,
          method: "POST",
          body: queryArg.duplicateFieldPayload,
        }),
        invalidatesTags: ["project"],
      }),
      getFormByProject: build.query<
        GetFormByProjectApiResponse,
        GetFormByProjectApiArg
      >({
        query: (queryArg) => ({
          url: `/projects/${queryArg.projectId}/form/${queryArg.formId}`,
        }),
        providesTags: ["project"],
      }),
      getFormFieldsByProject: build.query<
        GetFormFieldsByProjectApiResponse,
        GetFormFieldsByProjectApiArg
      >({
        query: (queryArg) => ({
          url: `/projects/${queryArg.projectId}/form/${queryArg.formId}/fields`,
        }),
        providesTags: ["project"],
      }),
      getProjectInfo: build.query<
        GetProjectInfoApiResponse,
        GetProjectInfoApiArg
      >({
        query: (queryArg) => ({ url: `/projects/${queryArg.projectId}/info` }),
        providesTags: ["project"],
      }),
      lockProject: build.mutation<LockProjectApiResponse, LockProjectApiArg>({
        query: (queryArg) => ({
          url: `/projects/${queryArg.projectId}/lock`,
          method: "PUT",
        }),
        invalidatesTags: ["project"],
      }),
      openProject: build.query<OpenProjectApiResponse, OpenProjectApiArg>({
        query: (queryArg) => ({ url: `/projects/${queryArg.projectId}/open` }),
        providesTags: ["project"],
      }),
      organizeProject: build.mutation<
        OrganizeProjectApiResponse,
        OrganizeProjectApiArg
      >({
        query: (queryArg) => ({
          url: `/projects/${queryArg.projectId}/organize`,
          method: "PUT",
          body: queryArg.formPayload,
        }),
        invalidatesTags: ["project"],
      }),
      prepareProject: build.query<
        PrepareProjectApiResponse,
        PrepareProjectApiArg
      >({
        query: (queryArg) => ({
          url: `/projects/${queryArg.projectId}/prepare`,
        }),
        providesTags: ["project"],
      }),
      publishProject: build.mutation<
        PublishProjectApiResponse,
        PublishProjectApiArg
      >({
        query: (queryArg) => ({
          url: `/projects/${queryArg.projectId}/publish`,
          method: "PUT",
        }),
        invalidatesTags: ["project"],
      }),
      publishProjectInRedcap: build.mutation<
        PublishProjectInRedcapApiResponse,
        PublishProjectInRedcapApiArg
      >({
        query: (queryArg) => ({
          url: `/projects/${queryArg.projectId}/publish/redcap`,
          method: "PUT",
        }),
        invalidatesTags: ["project"],
      }),
      publishProjectInTopbraid: build.mutation<
        PublishProjectInTopbraidApiResponse,
        PublishProjectInTopbraidApiArg
      >({
        query: (queryArg) => ({
          url: `/projects/${queryArg.projectId}/publish/topbraid`,
          method: "PUT",
          body: queryArg.publishToTopBraidPayload,
        }),
        invalidatesTags: ["project"],
      }),
      getProjectFromRedcap: build.query<
        GetProjectFromRedcapApiResponse,
        GetProjectFromRedcapApiArg
      >({
        query: (queryArg) => ({
          url: `/projects/${queryArg.projectId}/redcap`,
        }),
        providesTags: ["project"],
      }),
      updateProjectRedcapInfo: build.mutation<
        UpdateProjectRedcapInfoApiResponse,
        UpdateProjectRedcapInfoApiArg
      >({
        query: (queryArg) => ({
          url: `/projects/${queryArg.projectId}/redcap`,
          method: "PUT",
          body: queryArg.redcapInfoPayload,
        }),
        invalidatesTags: ["project"],
      }),
      replaceProjectWithRedcap: build.mutation<
        ReplaceProjectWithRedcapApiResponse,
        ReplaceProjectWithRedcapApiArg
      >({
        query: (queryArg) => ({
          url: `/projects/${queryArg.projectId}/replace/redcap`,
          method: "PUT",
        }),
        invalidatesTags: ["project"],
      }),
      replaceProjectWithRedcapAndPublishToTopbraid: build.mutation<
        ReplaceProjectWithRedcapAndPublishToTopbraidApiResponse,
        ReplaceProjectWithRedcapAndPublishToTopbraidApiArg
      >({
        query: (queryArg) => ({
          url: `/projects/${queryArg.projectId}/replace/redcap/publish/topbraid`,
          method: "PUT",
        }),
        invalidatesTags: ["project"],
      }),
      requestProjectAccess: build.mutation<
        RequestProjectAccessApiResponse,
        RequestProjectAccessApiArg
      >({
        query: (queryArg) => ({
          url: `/projects/${queryArg.projectId}/request-access`,
          method: "PUT",
        }),
        invalidatesTags: ["project"],
      }),
      sendRequestAccessEmail: build.mutation<
        SendRequestAccessEmailApiResponse,
        SendRequestAccessEmailApiArg
      >({
        query: (queryArg) => ({
          url: `/projects/${queryArg.projectId}/request-access-email`,
          method: "PUT",
        }),
        invalidatesTags: ["project"],
      }),
      getProjectStatisticsData: build.query<
        GetProjectStatisticsDataApiResponse,
        GetProjectStatisticsDataApiArg
      >({
        query: (queryArg) => ({
          url: `/projects/${queryArg.projectId}/statistics`,
        }),
        providesTags: ["project"],
      }),
      syncProject: build.query<SyncProjectApiResponse, SyncProjectApiArg>({
        query: (queryArg) => ({ url: `/projects/${queryArg.projectId}/sync` }),
        providesTags: ["project"],
      }),
      getProjectFromTopbraid: build.query<
        GetProjectFromTopbraidApiResponse,
        GetProjectFromTopbraidApiArg
      >({
        query: (queryArg) => ({
          url: `/projects/${queryArg.projectId}/topbraid`,
        }),
        providesTags: ["project"],
      }),
      undoProject: build.mutation<UndoProjectApiResponse, UndoProjectApiArg>({
        query: (queryArg) => ({
          url: `/projects/${queryArg.projectId}/undo`,
          method: "PUT",
          body: queryArg.undoDeletedFieldsPayload,
        }),
        invalidatesTags: ["project"],
      }),
      unfavouriteProject: build.mutation<
        UnfavouriteProjectApiResponse,
        UnfavouriteProjectApiArg
      >({
        query: (queryArg) => ({
          url: `/projects/${queryArg.projectId}/unfavourite`,
          method: "PUT",
        }),
        invalidatesTags: ["project"],
      }),
      unlockProject: build.mutation<
        UnlockProjectApiResponse,
        UnlockProjectApiArg
      >({
        query: (queryArg) => ({
          url: `/projects/${queryArg.projectId}/unlock`,
          method: "PUT",
        }),
        invalidatesTags: ["project"],
      }),
      updateProjectToken: build.mutation<
        UpdateProjectTokenApiResponse,
        UpdateProjectTokenApiArg
      >({
        query: (queryArg) => ({
          url: `/projects/${queryArg.projectId}/update-token/${queryArg.token}`,
          method: "PUT",
        }),
        invalidatesTags: ["project"],
      }),
      setUserSurveyShowed: build.mutation<
        SetUserSurveyShowedApiResponse,
        SetUserSurveyShowedApiArg
      >({
        query: (queryArg) => ({
          url: `/projects/${queryArg.projectId}/user-survey-showed`,
          method: "PUT",
        }),
        invalidatesTags: ["project"],
      }),
      updateExtractUsers: build.mutation<
        UpdateExtractUsersApiResponse,
        UpdateExtractUsersApiArg
      >({
        query: (queryArg) => ({
          url: `/projects/${queryArg.projectId}/users`,
          method: "PUT",
          body: queryArg.updateExtractUsersPayload,
        }),
        invalidatesTags: ["project"],
      }),
      verifyRedcapConnection: build.query<
        VerifyRedcapConnectionApiResponse,
        VerifyRedcapConnectionApiArg
      >({
        query: (queryArg) => ({
          url: `/projects/${queryArg.projectId}/verify-redcap-connection`,
        }),
        providesTags: ["project"],
      }),
      getCompleted: build.query<GetCompletedApiResponse, GetCompletedApiArg>({
        query: (queryArg) => ({
          url: `/redcap-admin/projects`,
          params: {
            sortBy: queryArg.sortBy,
            sortOrder: queryArg.sortOrder,
            searchTerm: queryArg.searchTerm,
            pageSize: queryArg.pageSize,
            pageNumber: queryArg.pageNumber,
            filterType: queryArg.filterType,
          },
        }),
        providesTags: ["redcapAdmin"],
      }),
      buildProjects: build.mutation<
        BuildProjectsApiResponse,
        BuildProjectsApiArg
      >({
        query: (queryArg) => ({
          url: `/redcap-admin/projects`,
          method: "POST",
          body: queryArg.buildRedcapProjectsPayload,
        }),
        invalidatesTags: ["redcapAdmin"],
      }),
      getRequests: build.query<GetRequestsApiResponse, GetRequestsApiArg>({
        query: (queryArg) => ({
          url: `/redcap-admin/requests`,
          params: {
            sortBy: queryArg.sortBy,
            sortOrder: queryArg.sortOrder,
            searchTerm: queryArg.searchTerm,
            pageSize: queryArg.pageSize,
            pageNumber: queryArg.pageNumber,
            filterType: queryArg.filterType,
          },
        }),
        providesTags: ["redcapAdmin"],
      }),
      isCatEnabled: build.query<IsCatEnabledApiResponse, IsCatEnabledApiArg>({
        query: (queryArg) => ({
          url: `/redcap/${queryArg.redcapId}/cat-enabled`,
        }),
        providesTags: ["project"],
      }),
      getRoles: build.query<GetRolesApiResponse, GetRolesApiArg>({
        query: () => ({ url: `/roles` }),
        providesTags: ["roles"],
      }),
      getGroupedRolePermissions: build.query<
        GetGroupedRolePermissionsApiResponse,
        GetGroupedRolePermissionsApiArg
      >({
        query: () => ({ url: `/roles/grouped-permissions` }),
        providesTags: ["roles"],
      }),
      getRolePermissions: build.query<
        GetRolePermissionsApiResponse,
        GetRolePermissionsApiArg
      >({
        query: () => ({ url: `/roles/permissions` }),
        providesTags: ["roles"],
      }),
      setRolePermissions: build.mutation<
        SetRolePermissionsApiResponse,
        SetRolePermissionsApiArg
      >({
        query: (queryArg) => ({
          url: `/roles/permissions`,
          method: "PUT",
          body: queryArg.rolePermissionsPayload,
        }),
        invalidatesTags: ["roles"],
      }),
      getAutomatedEmailLists: build.query<
        GetAutomatedEmailListsApiResponse,
        GetAutomatedEmailListsApiArg
      >({
        query: () => ({ url: `/settings/automated-email-lists` }),
        providesTags: ["settings"],
      }),
      updateAutomatedEmailLists: build.mutation<
        UpdateAutomatedEmailListsApiResponse,
        UpdateAutomatedEmailListsApiArg
      >({
        query: (queryArg) => ({
          url: `/settings/automated-email-lists`,
          method: "PUT",
          body: queryArg.updateAutomatedEmailListPayload,
        }),
        invalidatesTags: ["settings"],
      }),
      updateFormName: build.mutation<
        UpdateFormNameApiResponse,
        UpdateFormNameApiArg
      >({
        query: (queryArg) => ({
          url: `/settings/formname`,
          method: "PUT",
          body: queryArg.formNameNcfPayload,
        }),
        invalidatesTags: ["settings"],
      }),
      deleteRedisCache: build.mutation<
        DeleteRedisCacheApiResponse,
        DeleteRedisCacheApiArg
      >({
        query: (queryArg) => ({
          url: `/settings/redis-cache/${queryArg.key}`,
          method: "DELETE",
        }),
        invalidatesTags: ["settings"],
      }),
      updateSlMode: build.mutation<UpdateSlModeApiResponse, UpdateSlModeApiArg>(
        {
          query: (queryArg) => ({
            url: `/settings/slmode`,
            method: "PUT",
            body: queryArg.slModePayload,
          }),
          invalidatesTags: ["settings"],
        }
      ),
      getRefreshedOn: build.query<
        GetRefreshedOnApiResponse,
        GetRefreshedOnApiArg
      >({
        query: () => ({ url: `/settings/slrefreshedon` }),
        providesTags: ["settings"],
      }),
      getStatus: build.query<GetStatusApiResponse, GetStatusApiArg>({
        query: () => ({ url: `/settings/status` }),
        providesTags: ["settings"],
      }),
      setStatus: build.mutation<SetStatusApiResponse, SetStatusApiArg>({
        query: (queryArg) => ({
          url: `/settings/status`,
          method: "POST",
          body: queryArg.statusPayload,
        }),
        invalidatesTags: ["settings"],
      }),
      updateTasks: build.mutation<UpdateTasksApiResponse, UpdateTasksApiArg>({
        query: (queryArg) => ({
          url: `/settings/tasks`,
          method: "PUT",
          body: queryArg.taskPayload,
        }),
        invalidatesTags: ["settings"],
      }),
      getTopBraidSettings: build.query<
        GetTopBraidSettingsApiResponse,
        GetTopBraidSettingsApiArg
      >({
        query: () => ({ url: `/settings/topbraid` }),
        providesTags: ["settings"],
      }),
      updateTopBraidSettings: build.mutation<
        UpdateTopBraidSettingsApiResponse,
        UpdateTopBraidSettingsApiArg
      >({
        query: (queryArg) => ({
          url: `/settings/topbraid`,
          method: "PUT",
          body: queryArg.topBraidPayload,
        }),
        invalidatesTags: ["settings"],
      }),
      getVersion: build.query<GetVersionApiResponse, GetVersionApiArg>({
        query: () => ({ url: `/settings/version` }),
        providesTags: ["settings"],
      }),
      setVersion: build.mutation<SetVersionApiResponse, SetVersionApiArg>({
        query: (queryArg) => ({
          url: `/settings/version`,
          method: "PUT",
          body: queryArg.setExtractVersionPayload,
        }),
        invalidatesTags: ["settings"],
      }),
      onMessage: build.query<OnMessageApiResponse, OnMessageApiArg>({
        query: () => ({ url: `/socket` }),
        providesTags: ["socket"],
      }),
      open: build.query<OpenApiResponse, OpenApiArg>({
        query: (queryArg) => ({ url: `/socket/${queryArg.sessionId}` }),
        providesTags: ["socket"],
      }),
      downloadFlattenFile: build.mutation<
        DownloadFlattenFileApiResponse,
        DownloadFlattenFileApiArg
      >({
        query: (queryArg) => ({
          url: `/tools/export/download`,
          method: "POST",
          body: queryArg.downloadExportFile,
        }),
        invalidatesTags: ["tools"],
      }),
      flattenProjectData: build.mutation<
        FlattenProjectDataApiResponse,
        FlattenProjectDataApiArg
      >({
        query: (queryArg) => ({
          url: `/tools/export/flatten`,
          method: "POST",
          body: queryArg.body,
        }),
        invalidatesTags: ["tools"],
      }),
      groupRepeatingInstruments: build.mutation<
        GroupRepeatingInstrumentsApiResponse,
        GroupRepeatingInstrumentsApiArg
      >({
        query: (queryArg) => ({
          url: `/tools/export/repeating-groups`,
          method: "POST",
          body: queryArg.body,
        }),
        invalidatesTags: ["tools"],
      }),
      endImportSession: build.mutation<
        EndImportSessionApiResponse,
        EndImportSessionApiArg
      >({
        query: () => ({
          url: `/tools/import/end-import-session`,
          method: "POST",
        }),
        invalidatesTags: ["tools"],
      }),
      getAppUsageReport: build.mutation<
        GetAppUsageReportApiResponse,
        GetAppUsageReportApiArg
      >({
        query: (queryArg) => ({
          url: `/tools/reports/app-usage`,
          method: "POST",
          body: queryArg.reportDataRequestPayload,
        }),
        invalidatesTags: ["tools"],
      }),
      getChangeLog: build.query<GetChangeLogApiResponse, GetChangeLogApiArg>({
        query: () => ({ url: `/tools/reports/changelog` }),
        providesTags: ["tools"],
      }),
      getErrorsReport: build.mutation<
        GetErrorsReportApiResponse,
        GetErrorsReportApiArg
      >({
        query: (queryArg) => ({
          url: `/tools/reports/errors`,
          method: "POST",
          body: queryArg.reportDataRequestPayload,
        }),
        invalidatesTags: ["tools"],
      }),
      exportReportData: build.mutation<
        ExportReportDataApiResponse,
        ExportReportDataApiArg
      >({
        query: (queryArg) => ({
          url: `/tools/reports/export`,
          method: "POST",
          body: queryArg.exportReportPayload,
        }),
        invalidatesTags: ["tools"],
      }),
      getInQueueReport: build.mutation<
        GetInQueueReportApiResponse,
        GetInQueueReportApiArg
      >({
        query: (queryArg) => ({
          url: `/tools/reports/in-queue`,
          method: "POST",
          body: queryArg.reportDataRequestPayload,
        }),
        invalidatesTags: ["tools"],
      }),
      getMapIngestReport: build.mutation<
        GetMapIngestReportApiResponse,
        GetMapIngestReportApiArg
      >({
        query: (queryArg) => ({
          url: `/tools/reports/map-ingest`,
          method: "POST",
          body: queryArg.reportDataRequestPayload,
        }),
        invalidatesTags: ["tools"],
      }),
      getMapIngestErrorReport: build.query<
        GetMapIngestErrorReportApiResponse,
        GetMapIngestErrorReportApiArg
      >({
        query: (queryArg) => ({
          url: `/tools/reports/map-ingest-error/${queryArg.processId}`,
        }),
        providesTags: ["tools"],
      }),
      getMonthlyReport: build.mutation<
        GetMonthlyReportApiResponse,
        GetMonthlyReportApiArg
      >({
        query: (queryArg) => ({
          url: `/tools/reports/monthly`,
          method: "POST",
          body: queryArg.reportDataRequestPayload,
        }),
        invalidatesTags: ["tools"],
      }),
      getProjectsReport: build.mutation<
        GetProjectsReportApiResponse,
        GetProjectsReportApiArg
      >({
        query: (queryArg) => ({
          url: `/tools/reports/projects`,
          method: "POST",
          body: queryArg.reportDataRequestPayload,
        }),
        invalidatesTags: ["tools"],
      }),
      getSlReport: build.mutation<GetSlReportApiResponse, GetSlReportApiArg>({
        query: (queryArg) => ({
          url: `/tools/reports/sl`,
          method: "POST",
          body: queryArg.reportDataRequestPayload,
        }),
        invalidatesTags: ["tools"],
      }),
      getSlReportComparison: build.mutation<
        GetSlReportComparisonApiResponse,
        GetSlReportComparisonApiArg
      >({
        query: (queryArg) => ({
          url: `/tools/reports/sl/comparison`,
          method: "POST",
          body: queryArg.slReportComparisonRequestPayload,
        }),
        invalidatesTags: ["tools"],
      }),
      getSlReportConcepts: build.mutation<
        GetSlReportConceptsApiResponse,
        GetSlReportConceptsApiArg
      >({
        query: (queryArg) => ({
          url: `/tools/reports/sl/concepts`,
          method: "POST",
          body: queryArg.slReportConceptsRequestPayload,
        }),
        invalidatesTags: ["tools"],
      }),
      getSusReport: build.mutation<GetSusReportApiResponse, GetSusReportApiArg>(
        {
          query: (queryArg) => ({
            url: `/tools/reports/sus`,
            method: "POST",
            body: queryArg.reportDataRequestPayload,
          }),
          invalidatesTags: ["tools"],
        }
      ),
      getTransactions: build.query<
        GetTransactionsApiResponse,
        GetTransactionsApiArg
      >({
        query: (queryArg) => ({
          url: `/transactions`,
          params: {
            startDate: queryArg.startDate,
            endDate: queryArg.endDate,
            types: queryArg.types,
          },
        }),
        providesTags: ["transactions"],
      }),
      getUsers: build.query<GetUsersApiResponse, GetUsersApiArg>({
        query: () => ({ url: `/users` }),
        providesTags: ["users"],
      }),
      syncUsers: build.mutation<SyncUsersApiResponse, SyncUsersApiArg>({
        query: () => ({ url: `/users/sync`, method: "PUT" }),
        invalidatesTags: ["users"],
      }),
      updateUsers: build.mutation<UpdateUsersApiResponse, UpdateUsersApiArg>({
        query: (queryArg) => ({
          url: `/users/update`,
          method: "PUT",
          body: queryArg.updateUsersPayload,
        }),
        invalidatesTags: ["users"],
      }),
      getUsersWithoutAdAccess: build.query<
        GetUsersWithoutAdAccessApiResponse,
        GetUsersWithoutAdAccessApiArg
      >({
        query: () => ({ url: `/users/withoutADAccess` }),
        providesTags: ["users"],
      }),
    }),
    overrideExisting: false,
  });
export { injectedRtkApi as BuilderAPI };
export type LogoutApiResponse = /** status 200 successful operation */ Response;
export type LogoutApiArg = void;
export type GetUserApiResponse =
  /** status 200 successful operation */ UserResponse;
export type GetUserApiArg = void;
export type LoginApiResponse =
  /** status 200 successful operation */ UserResponse;
export type LoginApiArg = {
  /** Login information */
  loginPayload: LoginPayload;
};
export type GetActiveSessionsProjectsApiResponse =
  /** status 200 successful operation */ ActiveSessionsProjectsResponse;
export type GetActiveSessionsProjectsApiArg = void;
export type SwitchAdminModeApiResponse =
  /** status 200 successful operation */ UserResponse;
export type SwitchAdminModeApiArg = {
  /** Edit Mode */
  modeId: 1 | 2;
};
export type EnterAdminScreenApiResponse =
  /** status 200 successful operation */ UserResponse;
export type EnterAdminScreenApiArg = void;
export type LeaveAdminScreenApiResponse =
  /** status 200 successful operation */ UserResponse;
export type LeaveAdminScreenApiArg = void;
export type GetExtractAppUsageApiResponse =
  /** status 200 sucessful operation */ AppUsageResponse;
export type GetExtractAppUsageApiArg = void;
export type EnterExtractAppApiResponse =
  /** status 200 successful operation */ UserResponse;
export type EnterExtractAppApiArg = {
  /** app */
  app: string;
};
export type LeaveExtractAppApiResponse =
  /** status 200 successful operation */ UserResponse;
export type LeaveExtractAppApiArg = {
  /** app */
  app: string;
};
export type CancelImpersonationApiResponse =
  /** status 200 successful operation */ UserResponse;
export type CancelImpersonationApiArg = void;
export type EndSessionApiResponse =
  /** status 200 successful operation */ Response;
export type EndSessionApiArg = {
  /** token */
  token: string;
};
export type ExtendApiResponse =
  /** status 200 successful operation */ UserResponse;
export type ExtendApiArg = void;
export type UpdateImpersonationApiResponse =
  /** status 200 successful operation */ UserResponse;
export type UpdateImpersonationApiArg = {
  /** User role id */
  roleId: number;
};
export type LaunchRedcapAfterPublishApiResponse =
  /** status 200 successful operation */ UserResponse;
export type LaunchRedcapAfterPublishApiArg = {
  /** 1 if it will launch, 0 otherwise */
  launchValue: 0 | 1;
};
export type AuthenticateExternalServicesApiResponse =
  /** status 200 successful operation */ ExternalSessionResponse;
export type AuthenticateExternalServicesApiArg = void;
export type ChangeRedcapInstanceApiResponse =
  /** status 200 successful operation */ UserResponse;
export type ChangeRedcapInstanceApiArg = {
  /** Redcap Instance Id */
  redcapInstanceId: number;
};
export type UnlockAllProjectsApiResponse =
  /** status 200 successful operation */ UserResponse;
export type UnlockAllProjectsApiArg = void;
export type UnlockProjectsApiResponse =
  /** status 200 successful operation */ UserResponse;
export type UnlockProjectsApiArg = {
  /** token */
  token: string;
};
export type DownloadFileApiResponse = unknown;
export type DownloadFileApiArg = {
  /** Download file info */
  fileInfoPayload: FileInfoPayload;
};
export type GetFileProcessLogsApiResponse =
  /** status 200 successful operation */ FileProcessLogsResponse;
export type GetFileProcessLogsApiArg = {
  /** Search Term */
  term?: string;
  /** Page number */
  pageNumber?: number;
  /** Page Size */
  pageSize?: number;
  /** Sort column */
  sortBy?: string;
  /** Sort order */
  sortOrder?: string;
};
export type CreateFileProcessLogApiResponse =
  /** status 200 successful operation */ Response;
export type CreateFileProcessLogApiArg = {
  /** file process log data */
  fileProcessLogPayload: FileProcessLogPayload;
};
export type UpdateFileProcessLogApiResponse =
  /** status 200 successful operation */ Response;
export type UpdateFileProcessLogApiArg = {
  /** Id of bulk ingestion process */
  processId: number;
  /** file process log data */
  fileProcessLogUpdatePayload: FileProcessLogUpdatePayload;
};
export type ApproveIngestionApiResponse =
  /** status 200 successful operation */ Response;
export type ApproveIngestionApiArg = {
  /** Id of bulk ingestion process */
  processId: number;
};
export type RollbackIngestionApiResponse =
  /** status 200 successful operation */ Response;
export type RollbackIngestionApiArg = {
  /** Id of bulk ingestion process */
  processId: number;
};
export type UploadFileApiResponse =
  /** status 200 successful operation */ Response;
export type UploadFileApiArg = {
  body: {
    /** File to upload */
    file: Blob;
    /** File Type to upload */
    file_type?: string;
  };
};
export type CohortApiResponse = /** status 200 successful operation */ Response;
export type CohortApiArg = {
  /** Cohort information */
  cohortPayload: CohortPayload;
};
export type InvokeApiResponse = /** status 200 successful operation */ Response;
export type InvokeApiArg = void;
export type GetDomainsApiResponse =
  /** status 200 successful operation */ OntologyDomainsResponse;
export type GetDomainsApiArg = void;
export type UpdateDomainsApiResponse =
  /** status 200 successful operation */ Response;
export type UpdateDomainsApiArg = {
  /** Update domains */
  updateDomainsPayload: UpdateDomainsPayload;
};
export type SendEmailApiResponse =
  /** status 200 successful operation */ Response;
export type SendEmailApiArg = {
  /** Email content and parameters */
  emailInfoPayload: EmailInfoPayload;
};
export type FetchHelpItemsApiResponse =
  /** status 200 successful operation */ ItemsResponse;
export type FetchHelpItemsApiArg = {
  /** fetch item type */
  itemType: "faq" | "term";
  /** fetch search */
  search?: string;
};
export type CreateHelpItemApiResponse =
  /** status 200 successful operation */ Response;
export type CreateHelpItemApiArg = {
  /** create help item data */
  helpItem: HelpItem;
};
export type DeleteHelpItemApiResponse =
  /** status 200 successful operation */ Response;
export type DeleteHelpItemApiArg = {
  /** delete item id */
  itemId: number;
  /** delete item type */
  itemType: "faq" | "term";
};
export type EditHelpItemApiResponse =
  /** status 200 successful operation */ Response;
export type EditHelpItemApiArg = {
  itemId: number;
  /** update help item data */
  helpItem: HelpItem;
};
export type FetchHelpSelectItemsApiResponse =
  /** status 200 successful operation */ SectionTitleResponse;
export type FetchHelpSelectItemsApiArg = {
  /** fetch help select type items data */
  itemType: "faq" | "term";
};
export type GetInstancesApiResponse =
  /** status 200 successful operation */ RedcapInstancesResponse;
export type GetInstancesApiArg = void;
export type AddInstanceApiResponse =
  /** status 200 successful operation */ RedcapInstancesResponse;
export type AddInstanceApiArg = {
  /** Redcap Instance */
  addRedcapInstancePayload: AddRedcapInstancePayload;
};
export type AddLoggingApiResponse =
  /** status 200 successful operation */ Response;
export type AddLoggingApiArg = {
  /** Logging details */
  addLoggingPayload: AddLoggingPayload;
};
export type GetAbbreviationsApiResponse =
  /** status 200 successful operation */ OntologyAbbreviationsResponse;
export type GetAbbreviationsApiArg = void;
export type AddAbbreviationApiResponse =
  /** status 200 successful operation */ AddOntologyAbbreviationResponse;
export type AddAbbreviationApiArg = {
  /** Abbreviation */
  addOntologyAbbreviationPayload: AddOntologyAbbreviationPayload;
};
export type UpdateAbbreviationApiResponse =
  /** status 200 successful operation */ OntologyFieldResponse;
export type UpdateAbbreviationApiArg = {
  /** Id of abbreviation */
  abbreviationId: number;
  /** Abbreviation */
  updateOntologyAbbreviationPayload: UpdateOntologyAbbreviationPayload;
};
export type DownloadBulkIngestionTemplateApiResponse = unknown;
export type DownloadBulkIngestionTemplateApiArg = void;
export type DownloadCacheApiResponse = unknown;
export type DownloadCacheApiArg = {
  /** ontology index name */
  ontologyIndex?: string;
};
export type GetOntologyDomainsApiResponse =
  /** status 200 successful operation */ OntologyDomainsResponse;
export type GetOntologyDomainsApiArg = void;
export type DuplicatePrimaryLabelInAlternativeLabelApiResponse =
  /** status 200 successful operation */ FavoriteOntologyFieldResponse;
export type DuplicatePrimaryLabelInAlternativeLabelApiArg = void;
export type UpdateOntologyFieldApiResponse =
  /** status 200 successful operation */ OntologyFieldResponse;
export type UpdateOntologyFieldApiArg = {
  /** Fields */
  updateOntologyFieldPayload: UpdateOntologyFieldPayload;
};
export type FavoriteFieldApiResponse =
  /** status 200 successful operation */ FavoriteOntologyFieldResponse;
export type FavoriteFieldApiArg = {
  /** Field */
  favoriteOntologyFieldPayload: FavoriteOntologyFieldPayload;
};
export type GetOntologyDomainsFieldsApiResponse =
  /** status 200 successful operation */ OntologyDomainsFieldsResponse;
export type GetOntologyDomainsFieldsApiArg = {
  /** id of field */
  fieldId?: string;
  /** Id of project */
  projectId?: number;
  /** Id of domain */
  domainId?: string;
  /** Term */
  term?: string;
  /** FavoriteOntologyField */
  fav?: number;
  /** Start Index */
  startIndex?: number;
  /** Size */
  size?: number;
  /** Sort column */
  soryBy?: string;
  /** Sort order */
  soryOrder?: string;
  /** ontology index name */
  ontologyIndex?: string;
  /** Include Domains with zero data element or not */
  includeZeroDataElementDomains?: boolean;
};
export type GetOntologyFieldApiResponse =
  /** status 200 successful operation */ OntologyFieldResponse;
export type GetOntologyFieldApiArg = {
  /** id of field */
  fieldId: string;
  /** ontology index name */
  ontologyIndex?: string;
};
export type GetOntologyFieldPaginatedPvsApiResponse =
  /** status 200 successful operation */ OntologyFieldResponse;
export type GetOntologyFieldPaginatedPvsApiArg = {
  /** id of field */
  fieldId: string;
  /** search term */
  term?: string;
  /** page size */
  pageSize?: number;
  /** page number */
  pageNumber?: number;
  /** ontology index name */
  ontologyIndex?: string;
};
export type RefreshSlApiResponse =
  /** status 200 successful operation */ Response;
export type RefreshSlApiArg = {
  /** Days */
  days?: number;
  /** Refresh release candidate? */
  isRc?: boolean;
};
export type GetOntologySuggestionsApiResponse =
  /** status 200 successful operation */ OntologySuggestionsResponse;
export type GetOntologySuggestionsApiArg = {
  /** Id of project */
  projectId: number;
};
export type GetPermissionsApiResponse =
  /** status 200 successful operation */ PermissionsResponse;
export type GetPermissionsApiArg = void;
export type GetProjectByRedcapApiResponse =
  /** status 200 successful operation */ ProjectResponse;
export type GetProjectByRedcapApiArg = {
  /** REDCap project id */
  redcapId: number;
  /** REDCap URL */
  redcapUrl: string;
};
export type ImportRecordsApiResponse =
  /** status 200 successful upload */ Response;
export type ImportRecordsApiArg = {
  /** record(s) to import */
  importRecordsPayload: ImportRecordsPayload;
};
export type GetFieldsApiResponse =
  /** status 200 successful operation */ FieldsResponse;
export type GetFieldsApiArg = {
  /** Id of project */
  projectId: number;
  /** Column name */
  sortIndex?: string;
  /** Asc or desc */
  sortOrder?: string;
  /** Term */
  term?: string;
  /** Filter */
  filterType?: number;
  /** true of false (public and vetted fields if true) */
  sharedProject?: string;
  /** Get list of project fields for "Add Fields from Another Template" screen. */
  excludeProjectId?: number;
  /** Boolean to avoid fetching permissible values for all fields */
  excludePermissibleValues?: boolean;
};
export type AddFieldApiResponse =
  /** status 200 successful operation */ FieldResponse;
export type AddFieldApiArg = {
  /** Id of project */
  projectId: number;
  /** Fields */
  addFieldsPayload: AddFieldsPayload;
};
export type SetFieldAccessApiResponse =
  /** status 200 successful operation */ FieldsResponse;
export type SetFieldAccessApiArg = {
  /** Id of project */
  projectId: number;
  /** Set Field Access */
  setFieldAccessPayload: SetFieldAccessPayload;
};
export type BulkDeleteFieldsApiResponse =
  /** status 200 successful operation */ Response;
export type BulkDeleteFieldsApiArg = {
  /** Id of project */
  projectId: number;
  /** Field Ids to Delete */
  fieldIdArray: FieldIdArray;
};
export type GetDeletedButHaveDataApiResponse =
  /** status 200 successful operation */ FieldsResponse;
export type GetDeletedButHaveDataApiArg = {
  /** Id of project */
  projectId: number;
};
export type GetForSetAccessApiResponse =
  /** status 200 successful operation */ FieldsResponse;
export type GetForSetAccessApiArg = {
  /** Id of project */
  projectId: number;
  /** search term */
  term?: string;
  /** Column name */
  sortIndex?: string;
  /** Asc or desc */
  sortOrder?: string;
};
export type GetFieldsForVettingApiResponse =
  /** status 200 successful operation */ FieldsForVettingResponse;
export type GetFieldsForVettingApiArg = {
  /** Id of project */
  projectId: number;
  /** Column name */
  sortIndex?: string;
  /** Asc or desc */
  sortOrder?: string;
  /** Term */
  term?: string;
  /** Data Type */
  dataType?: string;
  /** Form ID */
  formId?: number;
  /** Show only unvetted fields */
  showUnvetted?: boolean;
  /** Page size */
  pageSize?: number;
  /** Page number */
  pageNumber?: number;
};
export type GetGroupedByScreensApiResponse =
  /** status 200 successful operation */ FormsResponse;
export type GetGroupedByScreensApiArg = {
  /** Id of project */
  projectId: number;
};
export type GetMaxFieldInstanceApiResponse =
  /** status 200 successful operation */ MaxInstanceResponse;
export type GetMaxFieldInstanceApiArg = {
  /** Id of project */
  projectId: number;
  /** Field Concept ID & Name */
  maxInstancePayload: MaxInstancePayload;
};
export type GetFieldsPaginationApiResponse =
  /** status 200 successful operation */ PaginatedFieldsResponse;
export type GetFieldsPaginationApiArg = {
  /** Id of project */
  projectId: number;
  /** Column name */
  sortIndex?: string;
  /** Asc or desc */
  sortOrder?: string;
  /** Term */
  term?: string;
  /** Page size */
  pageSize?: number;
  /** Page number */
  pageNumber?: number;
  /** Filter */
  filterType?: number;
  /** true of false (public and vetted fields if true) */
  sharedProject?: string;
  /** Get list of project fields for "Add Fields from Another Template" screen. */
  excludeProjectId?: number;
  /** Boolean to avoid fetching permissible values for all fields */
  excludePermissibleValues?: boolean;
};
export type GetScreensWithoutFieldApiResponse =
  /** status 200 successful operation */ FormsResponse;
export type GetScreensWithoutFieldApiArg = {
  /** Id of project */
  projectId: number;
};
export type GetWithoutScreensApiResponse =
  /** status 200 successful operation */ FieldsResponse;
export type GetWithoutScreensApiArg = {
  /** Id of project */
  projectId: number;
};
export type DeleteFieldApiResponse =
  /** status 200 successful operation */ Response;
export type DeleteFieldApiArg = {
  /** Id of project */
  projectId: number;
  /** Id of the project */
  fieldId: number;
};
export type GetFieldApiResponse =
  /** status 200 successful operation */ FieldResponse;
export type GetFieldApiArg = {
  /** Id of project */
  projectId: number;
  /** Id of the field */
  fieldId: number;
};
export type UpdateFieldApiResponse =
  /** status 200 successful operation */ FieldResponse;
export type UpdateFieldApiArg = {
  /** Id of project */
  projectId: number;
  /** Id of the field */
  fieldId: number;
  /** Fields */
  updateFieldPayload: UpdateFieldPayload;
};
export type CheckFieldRecordsApiResponse =
  /** status 200 successful operation */ Response;
export type CheckFieldRecordsApiArg = {
  /** Id of project */
  projectId: number;
  /** Id of the field */
  fieldId: number;
};
export type GetFieldPaginatedPvsApiResponse =
  /** status 200 successful operation */ FieldResponse;
export type GetFieldPaginatedPvsApiArg = {
  /** Id of project */
  projectId: number;
  /** Id of the field */
  fieldId: number;
  /** search term */
  term?: string;
  /** page size */
  pageSize?: number;
  /** page number */
  pageNumber?: number;
};
export type GetPermissibleValuesPaginationApiResponse =
  /** status 200 successful operation */ PermissibleValuesResponse;
export type GetPermissibleValuesPaginationApiArg = {
  /** Id of project */
  projectId: number;
  /** Id of the field */
  fieldId: number;
  /** search term */
  term?: string;
  /** page size */
  pageSize?: number;
  /** page number */
  pageNumber?: number;
};
export type GetAllFormsByProjectApiResponse =
  /** status 200 successful operation */ FormsResponse;
export type GetAllFormsByProjectApiArg = {
  /** Id of the project */
  projectId: number;
};
export type GetFormsByProjectForVettingApiResponse =
  /** status 200 successful operation */ FormsResponse;
export type GetFormsByProjectForVettingApiArg = {
  /** Id of the project */
  projectId: number;
};
export type GetProjectsApiResponse =
  /** status 200 successful operation */ ProjectsWithCountsAndProjectsAndCountsResponse;
export type GetProjectsApiArg = {
  /** 1, 2 or 3 */
  filterType?: number;
  /** term */
  term?: string;
  /** column name */
  sortIndex?: string;
  /** asc or desc */
  sortOrder?: string;
  /** true or false */
  favourite?: boolean;
  /** Get list of projects for "Add Fields from Another Template" */
  excludeProjectId?: number;
};
export type ImportProjectsApiResponse =
  /** status 200 successful operation */ Response;
export type ImportProjectsApiArg = {
  /** Project info needed for import */
  importProjectsPayload: ImportProjectsPayload;
};
export type CreateProjectApiResponse =
  /** status 200 successful operation */ ProjectResponse;
export type CreateProjectApiArg = {
  /** Initiate project w/ required params */
  createProjectPayload: CreateProjectPayload;
};
export type DownloadProjectsApiResponse = unknown;
export type DownloadProjectsApiArg = {
  /** Download Projects Payload */
  downloadProjectsPayload: DownloadProjectsPayload;
};
export type GetProjectsForVettingApiResponse =
  /** status 200 successful operation */ ProjectsForVettingResponse;
export type GetProjectsForVettingApiArg = {
  /** Column name */
  sortIndex?: string;
  /** Asc or desc */
  sortOrder?: string;
  /** Term */
  term?: string;
  /** Favorite */
  favorite?: boolean;
  /** Page size */
  pageSize?: number;
  /** Page number */
  pageNumber?: number;
};
export type GetAllRedcapProjectsApiResponse =
  /** status 200 successful operation */ ProjectsGeneralInfoResponse;
export type GetAllRedcapProjectsApiArg = void;
export type GetUserRedcapProjectsApiResponse =
  /** status 200 successful operation */ ProjectsGeneralInfoResponse;
export type GetUserRedcapProjectsApiArg = void;
export type RequestNewRedcapProjectApiResponse =
  /** status 200 successful operation */ Response;
export type RequestNewRedcapProjectApiArg = {
  /** New REDCap Project Request object */
  redcapProjectRequestPayload: RedcapProjectRequestPayload;
};
export type GetRedcapTokenRequestsApiResponse =
  /** status 200 successful operation */ RedcapTokenRequestsResponse;
export type GetRedcapTokenRequestsApiArg = {
  /** Whether or not to get all token requests or just the ones for the current user. */
  currentUserOnly: boolean;
};
export type CreateRedcapTokenRequestApiResponse =
  /** status 200 successful operation */ Response;
export type CreateRedcapTokenRequestApiArg = {
  /** The REDCap token request object */
  redcapTokenRequestPayload: RedcapTokenRequestPayload;
};
export type SendRedcapTokenCreationRequestEmailApiResponse =
  /** status 200 successful operation */ Response;
export type SendRedcapTokenCreationRequestEmailApiArg = {
  /** Id of REDCap project */
  redcapId: number;
  /** REDCap project info */
  redcapProjectInfoPayload: RedcapProjectInfoPayload;
};
export type GetRedcapSurveyInfoApiResponse =
  /** status 200 successful operation */ RedcapSurveyInfoResponse;
export type GetRedcapSurveyInfoApiArg = {
  /** survey type */
  surveyType: "feedback" | "usability";
};
export type UpdateProjectApiResponse =
  /** status 200 successful operation */ ProjectResponse;
export type UpdateProjectApiArg = {
  /** Id of project to return */
  projectId: number;
  /** Update Project information */
  updateProjectPayload: UpdateProjectPayload;
};
export type SetProjectAccessApiResponse =
  /** status 200 successful operation */ ProjectResponse;
export type SetProjectAccessApiArg = {
  /** Id of project */
  projectId: number;
};
export type ArchiveProjectApiResponse =
  /** status 200 successful operation */ ProjectResponse;
export type ArchiveProjectApiArg = {
  /** Id of project */
  projectId: number;
};
export type CheckRecordsApiResponse =
  /** status 200 successful operation */ ProjectResponse;
export type CheckRecordsApiArg = {
  /** Id of project */
  projectId: number;
  /** Form name */
  checkRecordsPayload: CheckRecordsPayload;
};
export type ConvertApiResponse =
  /** status 200 successful operation */ ProjectResponse;
export type ConvertApiArg = {
  /** Id of project to return */
  projectId: number;
  /** Information about the desired conversion */
  conversionPayload: ConversionPayload;
};
export type GetProjectDataTypesApiResponse =
  /** status 200 successful operation */ ProjectDataTypesResponse;
export type GetProjectDataTypesApiArg = {
  /** Id of project */
  projectId: number;
};
export type DeleteProjectApiResponse =
  /** status 200 successful operation */ Response;
export type DeleteProjectApiArg = {
  /** Id of project */
  projectId: number;
};
export type DownloadProjectApiResponse = unknown;
export type DownloadProjectApiArg = {
  /** Id of the project */
  projectId: number;
};
export type DownloadMappingTemplateApiResponse = unknown;
export type DownloadMappingTemplateApiArg = {
  /** Id of the project */
  projectId: number;
};
export type FavouriteProjectApiResponse =
  /** status 200 successful operation */ ProjectResponse;
export type FavouriteProjectApiArg = {
  /** Id of project */
  projectId: number;
};
export type GetFieldNameSuggestionApiResponse =
  /** status 200 successful operation */ FieldNameSuggestionResponse;
export type GetFieldNameSuggestionApiArg = {
  /** Id of project */
  projectId: number;
  /** label of the field */
  label: string;
};
export type DuplicateFieldApiResponse =
  /** status 200 successful operation */ FieldsResponse;
export type DuplicateFieldApiArg = {
  /** Id of project */
  projectId: number;
  /** Id of field */
  fieldId: number;
  /** Duplication Info */
  duplicateFieldPayload: DuplicateFieldPayload;
};
export type GetFormByProjectApiResponse =
  /** status 200 successful operation */ FormResponse;
export type GetFormByProjectApiArg = {
  /** Id of the project */
  projectId: number;
  /** Id of the form */
  formId: number;
};
export type GetFormFieldsByProjectApiResponse =
  /** status 200 successful operation */ FieldsResponse;
export type GetFormFieldsByProjectApiArg = {
  /** Id of the project */
  projectId: number;
  /** Id of the form */
  formId: number;
};
export type GetProjectInfoApiResponse =
  /** status 200 successful operation */ ProjectInfoResponse;
export type GetProjectInfoApiArg = {
  /** Id of the project */
  projectId: number;
};
export type LockProjectApiResponse =
  /** status 200 successful operation */ ProjectResponse;
export type LockProjectApiArg = {
  /** Id of project */
  projectId: number;
};
export type OpenProjectApiResponse =
  /** status 200 successful operation */ ProjectResponse;
export type OpenProjectApiArg = {
  /** Id of the project */
  projectId: number;
};
export type OrganizeProjectApiResponse =
  /** status 200 successful operation */ ProjectResponse;
export type OrganizeProjectApiArg = {
  /** Id of project */
  projectId: number;
  /** Organize Project forms */
  formPayload: FormPayload;
};
export type PrepareProjectApiResponse =
  /** status 200 successful operation */ ProjectResponse;
export type PrepareProjectApiArg = {
  /** Id of the project */
  projectId: number;
};
export type PublishProjectApiResponse =
  /** status 200 successful operation */ ProjectResponse;
export type PublishProjectApiArg = {
  /** Id of project */
  projectId: number;
};
export type PublishProjectInRedcapApiResponse =
  /** status 200 successful operation */ ProjectResponse;
export type PublishProjectInRedcapApiArg = {
  /** Id of project */
  projectId: number;
};
export type PublishProjectInTopbraidApiResponse =
  /** status 200 successful operation */ ProjectResponse;
export type PublishProjectInTopbraidApiArg = {
  /** Id of project */
  projectId: number;
  /** Publish to TopBraid Arguments */
  publishToTopBraidPayload: PublishToTopBraidPayload;
};
export type GetProjectFromRedcapApiResponse =
  /** status 200 successful operation */ ProjectResponse;
export type GetProjectFromRedcapApiArg = {
  /** Id of the project */
  projectId: number;
};
export type UpdateProjectRedcapInfoApiResponse =
  /** status 200 successful operation */ Response;
export type UpdateProjectRedcapInfoApiArg = {
  /** The Extract Project Id */
  projectId: number;
  /** REDCap Info */
  redcapInfoPayload: RedcapInfoPayload;
};
export type ReplaceProjectWithRedcapApiResponse =
  /** status 200 successful operation */ ProjectResponse;
export type ReplaceProjectWithRedcapApiArg = {
  /** Id of project */
  projectId: number;
};
export type ReplaceProjectWithRedcapAndPublishToTopbraidApiResponse =
  /** status 200 successful operation */ ProjectResponse;
export type ReplaceProjectWithRedcapAndPublishToTopbraidApiArg = {
  /** Id of project */
  projectId: number;
};
export type RequestProjectAccessApiResponse =
  /** status 200 successful operation */ RequestAccessResponse;
export type RequestProjectAccessApiArg = {
  /** Id of project */
  projectId: number;
};
export type SendRequestAccessEmailApiResponse =
  /** status 200 successful operation */ Response;
export type SendRequestAccessEmailApiArg = {
  /** Id of project */
  projectId: number;
};
export type GetProjectStatisticsDataApiResponse =
  /** status 200 successful operation */ ProjectStatisticsDataResponse;
export type GetProjectStatisticsDataApiArg = {
  /** Id of project */
  projectId: number;
};
export type SyncProjectApiResponse =
  /** status 200 successful operation */ ProjectResponse;
export type SyncProjectApiArg = {
  /** Id of the project */
  projectId: number;
};
export type GetProjectFromTopbraidApiResponse =
  /** status 200 successful operation */ ProjectResponse;
export type GetProjectFromTopbraidApiArg = {
  /** Id of the project */
  projectId: number;
};
export type UndoProjectApiResponse =
  /** status 200 successful operation */ ProjectResponse;
export type UndoProjectApiArg = {
  /** Id of project */
  projectId: number;
  /** Undo deleted fields */
  undoDeletedFieldsPayload: UndoDeletedFieldsPayload;
};
export type UnfavouriteProjectApiResponse =
  /** status 200 successful operation */ ProjectResponse;
export type UnfavouriteProjectApiArg = {
  /** Id of project */
  projectId: number;
};
export type UnlockProjectApiResponse =
  /** status 200 successful operation */ ProjectResponse;
export type UnlockProjectApiArg = {
  /** Id of project */
  projectId: number;
};
export type UpdateProjectTokenApiResponse =
  /** status 200 successful operation */ ProjectResponse;
export type UpdateProjectTokenApiArg = {
  /** Id of project */
  projectId: number;
  /** token */
  token: string;
};
export type SetUserSurveyShowedApiResponse =
  /** status 200 successful operation */ Response;
export type SetUserSurveyShowedApiArg = {
  /** Id of project */
  projectId: number;
};
export type UpdateExtractUsersApiResponse =
  /** status 200 successful operation */ ProjectResponse;
export type UpdateExtractUsersApiArg = {
  /** Id of project */
  projectId: number;
  /** Update Users Payload */
  updateExtractUsersPayload: UpdateExtractUsersPayload;
};
export type VerifyRedcapConnectionApiResponse =
  /** status 200 successful operation */ RedcapConnectionResponse;
export type VerifyRedcapConnectionApiArg = {
  /** Id of the project */
  projectId: number;
};
export type GetCompletedApiResponse =
  /** status 200 successful operation */ RedcapCreatedProjectsResponse;
export type GetCompletedApiArg = {
  /** Column name */
  sortBy?: string;
  /** Asc or Desc */
  sortOrder?: "ASC" | "DESC";
  /** Search term */
  searchTerm?: string;
  /** Page size */
  pageSize?: number;
  /** Page number */
  pageNumber?: number;
  /** Filter */
  filterType?: number;
};
export type BuildProjectsApiResponse =
  /** status 200 successful operation */ BuiltRedcapProjectsResponse;
export type BuildProjectsApiArg = {
  /** Info on the project requests to build */
  buildRedcapProjectsPayload: BuildRedcapProjectsPayload;
};
export type GetRequestsApiResponse =
  /** status 200 successful operation */ RedcapProjectRequestsResponse;
export type GetRequestsApiArg = {
  /** Column name */
  sortBy?: string;
  /** ASC or DESC */
  sortOrder?: "ASC" | "DESC";
  /** Search term */
  searchTerm?: string;
  /** Page size */
  pageSize?: number;
  /** Page number */
  pageNumber?: number;
  /** Filter */
  filterType?: number;
};
export type IsCatEnabledApiResponse =
  /** status 200 successful operation */ CatEnabledResponse;
export type IsCatEnabledApiArg = {
  /** REDCap project id */
  redcapId: number;
};
export type GetRolesApiResponse =
  /** status 200 successful operation */ RolesResponse;
export type GetRolesApiArg = void;
export type GetGroupedRolePermissionsApiResponse =
  /** status 200 successful operation */ GroupedRolePermissionsResponse;
export type GetGroupedRolePermissionsApiArg = void;
export type GetRolePermissionsApiResponse =
  /** status 200 successful operation */ RolePermissionsResponse;
export type GetRolePermissionsApiArg = void;
export type SetRolePermissionsApiResponse =
  /** status 200 successful operation */ Response;
export type SetRolePermissionsApiArg = {
  /** Role Permissions */
  rolePermissionsPayload: RolePermissionsPayload;
};
export type GetAutomatedEmailListsApiResponse =
  /** status 200 successful operation */ AutomatedEmailListsResponse;
export type GetAutomatedEmailListsApiArg = void;
export type UpdateAutomatedEmailListsApiResponse =
  /** status 200 successful operation */ AutomatedEmailListsResponse;
export type UpdateAutomatedEmailListsApiArg = {
  /** Update information. */
  updateAutomatedEmailListPayload: UpdateAutomatedEmailListPayload;
};
export type UpdateFormNameApiResponse =
  /** status 200 successful operation */ Response;
export type UpdateFormNameApiArg = {
  /** Form name information */
  formNameNcfPayload: FormNameNcfPayload;
};
export type DeleteRedisCacheApiResponse =
  /** status 200 successful operation */ Response;
export type DeleteRedisCacheApiArg = {
  /** Redis cache key */
  key: string;
};
export type UpdateSlModeApiResponse =
  /** status 200 successful operation */ Response;
export type UpdateSlModeApiArg = {
  /** standard library mode */
  slModePayload: SlModePayload;
};
export type GetRefreshedOnApiResponse =
  /** status 200 successful operation */ SlSettingsResponse;
export type GetRefreshedOnApiArg = void;
export type GetStatusApiResponse =
  /** status 200 successful operation */ StatusResponse;
export type GetStatusApiArg = void;
export type SetStatusApiResponse =
  /** status 200 successful operation */ StatusResponse;
export type SetStatusApiArg = {
  /** Status information */
  statusPayload: StatusPayload;
};
export type UpdateTasksApiResponse =
  /** status 200 successful operation */ Response;
export type UpdateTasksApiArg = {
  /** Tasks information */
  taskPayload: TaskPayload;
};
export type GetTopBraidSettingsApiResponse =
  /** status 200 successful operation */ TopBraidSettingsResponse;
export type GetTopBraidSettingsApiArg = void;
export type UpdateTopBraidSettingsApiResponse =
  /** status 200 successful operation */ Response;
export type UpdateTopBraidSettingsApiArg = {
  /** TopBraid Settings */
  topBraidPayload: TopBraidPayload;
};
export type GetVersionApiResponse =
  /** status 200 successful operation */ Response;
export type GetVersionApiArg = void;
export type SetVersionApiResponse =
  /** status 200 successful operation */ Response;
export type SetVersionApiArg = {
  /** Version information */
  setExtractVersionPayload: SetExtractVersionPayload;
};
export type OnMessageApiResponse =
  /** status 200 successful operation */ object;
export type OnMessageApiArg = void;
export type OpenApiResponse = /** status 200 successful operation */ object;
export type OpenApiArg = {
  /** Session Id */
  sessionId: number;
};
export type DownloadFlattenFileApiResponse =
  /** status 200 download upload */ Blob;
export type DownloadFlattenFileApiArg = {
  /** params to alter query */
  downloadExportFile: DownloadExportFile;
};
export type FlattenProjectDataApiResponse =
  /** status 200 flatten successful */ ExportPreviewResponse;
export type FlattenProjectDataApiArg = {
  body: {
    /** Redcap Instance */
    redcap_instance?: string;
    /** Redcap Project Token */
    redcap_token?: string;
    /** Redcap Project Report ID */
    redcap_report_id?: string;
    /** File for Flattening/Export */
    data_file?: Blob;
    /** REDCap Data Dict File for Flattening/Export */
    data_dictionary?: Blob;
    /** Whether Tool Should Export Records from Redcap (redcap_instance & redcap_instance required) */
    pull_rc_records?: string;
    /** Remove Identifiers */
    remove_identifiers?: string;
    /** Expected Export Format */
    export_format?: "raw" | "labelled";
    /** Uploaded DataFile Format */
    data_file_format?: "raw" | "labelled";
    /** Whether Output File Should Be Emailed (boolean as string) */
    email_output?: string;
  };
};
export type GroupRepeatingInstrumentsApiResponse =
  /** status 200 get repeating instruments successful */ RepeatingInstrumentsResponse;
export type GroupRepeatingInstrumentsApiArg = {
  body: {
    /** Redcap Instance */
    redcap_instance?: string;
    /** Redcap Project Token */
    redcap_token?: string;
    /** Redcap Project Report ID */
    redcap_report_id?: string;
    /** File for Flattening/Export */
    data_file?: Blob;
    /** REDCap Data Dict File for Flattening/Export */
    data_dictionary?: Blob;
    /** Whether Tool Should Export Records from Redcap (redcap_instance & redcap_instance required) */
    pull_rc_records?: string;
    /** Remove Identifiers */
    remove_identifiers?: string;
    /** Expected Export Format */
    export_format?: "raw" | "labelled";
    /** Uploaded DataFile Format */
    data_file_format?: "raw" | "labelled";
  };
};
export type EndImportSessionApiResponse =
  /** status 200 successful operation */ Response;
export type EndImportSessionApiArg = void;
export type GetAppUsageReportApiResponse =
  /** status 200 successful operation */ ReportsDataResponse;
export type GetAppUsageReportApiArg = {
  /** params to alter query */
  reportDataRequestPayload: ReportDataRequestPayload;
};
export type GetChangeLogApiResponse =
  /** status 200 successful operation */ ChangeLogResponse;
export type GetChangeLogApiArg = void;
export type GetErrorsReportApiResponse =
  /** status 200 successful operation */ ReportsDataResponse;
export type GetErrorsReportApiArg = {
  /** params to alter query */
  reportDataRequestPayload: ReportDataRequestPayload;
};
export type ExportReportDataApiResponse =
  /** status 200 successful operation */ Blob;
export type ExportReportDataApiArg = {
  /** list of objects to export to excel */
  exportReportPayload: ExportReportPayload;
};
export type GetInQueueReportApiResponse =
  /** status 200 successful operation */ ReportsDataResponse;
export type GetInQueueReportApiArg = {
  /** params to alter query */
  reportDataRequestPayload: ReportDataRequestPayload;
};
export type GetMapIngestReportApiResponse =
  /** status 200 successful operation */ ReportsDataResponse;
export type GetMapIngestReportApiArg = {
  /** params to alter query */
  reportDataRequestPayload: ReportDataRequestPayload;
};
export type GetMapIngestErrorReportApiResponse =
  /** status 200 successful operation */ MappingErrorReportResponse;
export type GetMapIngestErrorReportApiArg = {
  /** Id of ingestion item */
  processId: number;
};
export type GetMonthlyReportApiResponse =
  /** status 200 successful operation */ ReportsDataResponse;
export type GetMonthlyReportApiArg = {
  /** params to alter query */
  reportDataRequestPayload: ReportDataRequestPayload;
};
export type GetProjectsReportApiResponse =
  /** status 200 successful operation */ ReportsDataResponse;
export type GetProjectsReportApiArg = {
  /** params to alter query */
  reportDataRequestPayload: ReportDataRequestPayload;
};
export type GetSlReportApiResponse =
  /** status 200 successful operation */ ReportsDataResponse;
export type GetSlReportApiArg = {
  /** params to alter query */
  reportDataRequestPayload: ReportDataRequestPayload;
};
export type GetSlReportComparisonApiResponse =
  /** status 200 successful operation */ SlReportComparisonResponse;
export type GetSlReportComparisonApiArg = {
  /** params to alter query */
  slReportComparisonRequestPayload: SlReportComparisonRequestPayload;
};
export type GetSlReportConceptsApiResponse =
  /** status 200 successful operation */ SlReportConceptsResponse;
export type GetSlReportConceptsApiArg = {
  /** params to alter query */
  slReportConceptsRequestPayload: SlReportConceptsRequestPayload;
};
export type GetSusReportApiResponse =
  /** status 200 successful operation */ ReportsDataResponse;
export type GetSusReportApiArg = {
  /** params to alter query */
  reportDataRequestPayload: ReportDataRequestPayload;
};
export type GetTransactionsApiResponse =
  /** status 200 successful operation */ TransactionResponse;
export type GetTransactionsApiArg = {
  /** Start date */
  startDate?: string;
  /** End date */
  endDate?: string;
  /** Types */
  types?: string;
};
export type GetUsersApiResponse =
  /** status 200 successful operation */ UsersResponse;
export type GetUsersApiArg = void;
export type SyncUsersApiResponse =
  /** status 200 successful operation */ Response;
export type SyncUsersApiArg = void;
export type UpdateUsersApiResponse =
  /** status 200 successful operation */ Response;
export type UpdateUsersApiArg = {
  /** Update users */
  updateUsersPayload: UpdateUsersPayload;
};
export type GetUsersWithoutAdAccessApiResponse =
  /** status 200 successful operation */ UsersResponse;
export type GetUsersWithoutAdAccessApiArg = void;
export type ResponseBase = {
  statusText: string;
  statusCode: number;
  result: string;
  message: string;
  errors?: string[];
  trace?: string;
};
export type Role = {
  id: number;
  name: string;
  roleLevel: number;
};
export type RedcapInstance = {
  id?: number;
  url: string;
  isDefault?: number;
  token?: string;
};
export type SessionInfo = {
  id?: number;
  sessionId?: number;
  infoKey?: string;
  infoValue?: string;
};
export type Session = {
  id: number;
  userId: number;
  openedOn: string;
  closedOn?: string;
  token?: string;
  redcapInstanceId: number;
  redcapInstance: RedcapInstance;
  sessionInfo: SessionInfo[];
  webSocket?: {};
};
export type User = {
  id: number;
  login: string;
  firstName: string;
  lastName: string;
  email: string;
  isActive?: number;
  hasADAccess?: number;
  role: Role;
  session?: Session;
  launchRedcap?: number;
  isRequestSent?: number;
};
export type UserResponseAllOf = {
  result?: User;
};
export type UserResponse = {
  result: "UserResponse";
} & ResponseBase &
  UserResponseAllOf;
export type UsersResponseAllOf = {
  result?: User[];
};
export type UsersResponse = {
  result: "UsersResponse";
} & ResponseBase &
  UsersResponseAllOf;
export type RolePermission = {
  rolePermissionId?: number;
  roleId: number;
  permissionId: number;
  access: number;
  createdOn?: string;
  modifiedOn?: string;
};
export type RolePermissionsResponseAllOf = {
  result?: RolePermission[];
};
export type RolePermissionsResponse = {
  result: "RolePermissionsResponse";
} & ResponseBase &
  RolePermissionsResponseAllOf;
export type Permission = {
  permissionId: number;
  permissionName: string;
  permissionCode: string;
  permissionType: string;
  createdOn: string;
};
export type GroupedRolePermissionAllOf = {
  roles?: RolePermission[];
};
export type GroupedRolePermission = Permission & GroupedRolePermissionAllOf;
export type GroupedRolePermissionsResponseAllOf = {
  result?: GroupedRolePermission[];
};
export type GroupedRolePermissionsResponse = {
  result: "GroupedRolePermissionsResponse";
} & ResponseBase &
  GroupedRolePermissionsResponseAllOf;
export type RolesResponseAllOf = {
  result?: Role[];
};
export type RolesResponse = {
  result: "RolesResponse";
} & ResponseBase &
  RolesResponseAllOf;
export type ExternalSessionResponseAllOfResultTokens = {
  name?: string;
  value?: string;
  key?: string;
  domain?: string;
  path?: string;
};
export type ExternalSessionResponseAllOfResult = {
  tokens?: ExternalSessionResponseAllOfResultTokens[];
};
export type ExternalSessionResponseAllOf = {
  result?: ExternalSessionResponseAllOfResult;
};
export type ExternalSessionResponse = {
  result: "ExternalSessionResponse";
} & ResponseBase &
  ExternalSessionResponseAllOf;
export type FieldSynonym = {
  id?: number;
  fieldId?: number;
  label: string;
  createdOn?: string;
  isVetted: number;
  userId?: string;
  isDeleted?: number;
  modifiedOn?: string;
  modifiedByEmail?: string;
};
export type PermissibleValue = {
  id: number;
  fieldId: number;
  topBraidId?: string;
  code?: string;
  label?: string;
  synonyms?: string[];
  orderIndex?: number;
  isDeleted?: number;
  isVetted?: number;
  conceptId?: string;
  conceptIdUri?: string;
  suggestedConceptId?: string;
  createdOn?: string;
  modifiedOn?: string;
  modifiedBy?: number;
  modifiedByEmail?: string;
  isDisabled?: number;
};
export type Field = {
  id?: number;
  conceptId?: string;
  suggestedConceptId?: string;
  conceptIdUri?: string;
  projectId?: number;
  topBraidId?: string;
  observationGroupId?: string;
  formName?: string;
  formId?: number;
  formOrder?: number;
  formIsRepeatable?: number;
  formNameSuggestion?: string;
  formFriendlyLabels?: string;
  fieldOrder?: number;
  name?: string;
  label?: string;
  synonyms?: string[];
  synonymsFull?: FieldSynonym[];
  definition?: string;
  type?: string;
  dataType?: string;
  dataFormat?: string;
  note?: string;
  identifier?: number;
  required?: number;
  alignment?: string;
  annotation?: string;
  priority?: number;
  validationMin?: string;
  validationMax?: string;
  sectionHeader?: string;
  matrixGroupName?: string;
  matrixRanking?: number;
  branchingLogic?: string;
  questionNumber?: string;
  calculationEquation?: string;
  isVetted?: number;
  needTerminologistReview?: number;
  isPrivate?: number;
  isDeleted?: number;
  isDisabled?: number;
  isProjectId?: number;
  isLocked?: number;
  isPrimaryId?: number;
  isDateFieldId?: number;
  isDeletable?: number;
  hoverMessage?: string;
  charColor?: string;
  badgeColor?: string;
  createdOn?: string;
  modifiedOn?: string;
  modifiedBy?: number;
  modifiedByEmail?: string;
  permissibleValues?: PermissibleValue[];
  permissibleValuesStr?: string;
  status?: string;
  visibility?: string;
  alreadyAdded?: boolean;
  deprecatedConcept?: boolean;
  firstPermissibleValue?: string;
  permissibleValuesCount?: number;
  sources?: string[];
  isEngageField?: boolean;
  fieldInstance?: number;
};
export type Form = {
  id?: number | null;
  projectId?: number;
  title?: string;
  formName?: string;
  ordering?: number;
  isDummyScreen?: boolean;
  isRepeatable?: boolean;
  friendlyLabels?: string;
  fields?: Field[];
};
export type FormResponseAllOf = {
  result?: Form;
};
export type FormResponse = {
  result: "FormResponse";
} & ResponseBase &
  FormResponseAllOf;
export type FormsResponseAllOf = {
  result?: Form[];
};
export type FormsResponse = {
  result: "FormsResponse";
} & ResponseBase &
  FormsResponseAllOf;
export type PermissionsResponseAllOf = {
  result?: Permission[];
};
export type PermissionsResponse = {
  result: "PermissionsResponse";
} & ResponseBase &
  PermissionsResponseAllOf;
export type ProjectUser = {
  login: string;
  designer: number;
  surveyShowed?: number;
  firstName: string;
  lastName: string;
  email?: string;
};
export type Project = {
  id: number;
  redCapInstanceId?: number;
  redCapId?: number;
  redCapToken?: string;
  redCapProjectURL?: string;
  topBraidId?: string;
  title: string;
  description: string;
  purpose: number;
  otherPurpose: string;
  irbNumber: string;
  inProduction: number;
  autonumEnabled: number;
  hasRepeatingInstruments?: number;
  isLongitudinal?: number;
  isArchived: number;
  createdOn: string;
  importedOn: string;
  importedBy: number;
  importedByEmail?: string;
  modifiedOn: string;
  modifiedBy: number;
  modifiedByEmail?: string;
  publishedOn?: string;
  publishedBy?: number;
  publishedByEmail?: string;
  revertedOn?: string;
  revertedBy?: number;
  revertedByEmail?: string;
  isFreezed: number;
  freezedOn?: string;
  freezedBy?: number;
  freezedByEmail?: string;
  isLocked?: number;
  users: ProjectUser[];
  forms: Form[];
  formsCount?: number;
  fields: Field[];
  fieldsCount: string;
  sharedFieldsFormsCount?: number;
  sharedFieldsCount?: string;
  designers?: string;
  mode: number;
  filter: number;
  lockedBy?: number;
  lockedByEmail?: string;
  recipientsList: {}[];
  favourite?: boolean;
  userSurveyShowed?: boolean;
  lastSyncedOn?: string;
  isTemporary: number;
};
export type ProjectCounts = {
  count?: number;
  label?: string;
  title?: string;
  value?: number;
  data?: Project[];
};
export type ProjectsWithCounts = {
  projects?: ProjectCounts[];
};
export type ProjectsAndCounts = {
  counts?: ProjectCounts[];
  projects?: Project[];
};
export type ProjectsWithCountsAndProjectsAndCounts = ProjectsWithCounts &
  ProjectsAndCounts;
export type ProjectsWithCountsAndProjectsAndCountsResponseAllOf = {
  result?: ProjectsWithCountsAndProjectsAndCounts;
};
export type ProjectsWithCountsAndProjectsAndCountsResponse = {
  result: "ProjectsWithCountsAndProjectsAndCountsResponse";
} & ResponseBase &
  ProjectsWithCountsAndProjectsAndCountsResponseAllOf;
export type ProjectResponseAllOf = {
  result?: Project;
};
export type ProjectResponse = {
  result: "ProjectResponse";
} & ResponseBase &
  ProjectResponseAllOf;
export type ProjectInfo = {
  id: number;
  title: string;
  description: string;
  autonumEnabled: number;
  message?: string;
  isArchived?: number;
  hasRepeatingInstruments?: number;
  isLongitudinal?: number;
  slIsEnabled?: number;
};
export type ProjectInfoResponseAllOf = {
  result?: ProjectInfo;
};
export type ProjectInfoResponse = {
  result: "ProjectInfoResponse";
} & ResponseBase &
  ProjectInfoResponseAllOf;
export type RequestAccess = {
  projectId?: number;
  hasAccess?: boolean;
};
export type RequestAccessResponseAllOf = {
  result?: RequestAccess;
};
export type RequestAccessResponse = {
  result: "RequestAccessResponse";
} & ResponseBase &
  RequestAccessResponseAllOf;
export type ScreenStatistics = {
  name?: string;
  numOfFields?: number;
  numOfConcepts?: number;
  numOfConceptIds?: number;
};
export type FieldsAndConceptChartData = {
  date?: string;
  fields?: number;
  concepts?: number;
};
export type RecordsChartData = {
  date?: string;
  records?: number;
};
export type ProjectStatisticsData = {
  projectId?: number;
  numOfFields?: number;
  numOfNonUniquePvs?: number;
  numOfUnvettedConcepts?: number;
  numOfConceptIds?: number;
  numOfPublicFields?: number;
  numOfPrivateFields?: number;
  numOfBeingVettedFields?: number;
  numOfRadioButtonFields?: number;
  numOfCheckboxFields?: number;
  numOfTextFields?: number;
  numOfDropdownFields?: number;
  numOfDateFields?: number;
  screens?: ScreenStatistics[];
  dateOfFirstField?: string;
  dateOfLastField?: string;
  projectBuildTime?: number;
  dateOfFirstPublicField?: string;
  dateOfLastPublicField?: string;
  averageVettingTime?: string;
  usedAsTemplate?: number;
  usedAsTemplateByUsers?: string[];
  curationDate?: string;
  curationTime?: number;
  numOfCurrentRecords?: number;
  lastLogin?: string;
  lastLoggedInUser?: string;
  fieldsAndConceptChart?: FieldsAndConceptChartData[];
  recordsChart?: RecordsChartData[];
};
export type ProjectStatisticsDataResponseAllOf = {
  result?: ProjectStatisticsData;
};
export type ProjectStatisticsDataResponse = {
  result: "ProjectStatisticsDataResponse";
} & ResponseBase &
  ProjectStatisticsDataResponseAllOf;
export type ProjectGeneralInfo = {
  projectId?: number;
  redcapId?: number;
  name?: string;
  managedBy?: string[];
  otherUsers?: string[];
  purpose?: string;
  pi?: string;
  irb?: string;
  apiToken?: string;
  apiTokenFromExtract?: string;
  inProduction?: boolean;
  productionTime?: string;
  createdOn?: string;
  importedOn?: string;
};
export type ProjectsGeneralInfoResponseAllOf = {
  result?: ProjectGeneralInfo[];
};
export type ProjectsGeneralInfoResponse = {
  result: "ProjectsGeneralInfoResponse";
} & ResponseBase &
  ProjectsGeneralInfoResponseAllOf;
export type FieldNameSuggestionResponseAllOf = {
  result?: string;
};
export type FieldNameSuggestionResponse = {
  result: "FieldNameSuggestionResponse";
} & ResponseBase &
  FieldNameSuggestionResponseAllOf;
export type FieldsResponseAllOf = {
  result?: Field[];
};
export type FieldsResponse = {
  result: "FieldsResponse";
} & ResponseBase &
  FieldsResponseAllOf;
export type PaginatedFields = {
  total?: number;
  fields?: Field[];
};
export type PaginatedFieldsResponseAllOf = {
  result?: PaginatedFields;
};
export type PaginatedFieldsResponse = {
  result: "PaginatedFieldsResponse";
} & ResponseBase &
  PaginatedFieldsResponseAllOf;
export type FieldResponseAllOf = {
  result?: Field;
};
export type FieldResponse = {
  result: "FieldResponse";
} & ResponseBase &
  FieldResponseAllOf;
export type PermissibleValuesWithTotal = {
  permissibleValues?: PermissibleValue[];
  total?: number;
};
export type PermissibleValuesResponseAllOf = {
  result?: PermissibleValuesWithTotal;
};
export type PermissibleValuesResponse = {
  result: "PermissibleValuesResponse";
} & ResponseBase &
  PermissibleValuesResponseAllOf;
export type OntologyDomain = {
  id: number;
  domainName: string;
  domainId: string;
  badgeColor?: string;
  charColor?: string;
  sortOrder?: number;
  source?: string;
  notation?: string;
  subDomains?: {}[];
};
export type KeyValue = {
  key: string;
  value: string;
};
export type OntologyPermissibleValue = {
  id?: string;
  label?: string;
  isVetted?: number;
  conceptId?: string;
  conceptIdUri?: string;
  suggestedConceptId?: string;
  synonyms?: string[];
  isDisabled?: number;
};
export type OntologyField = {
  id?: string;
  type?: string;
  typeLabel?: string;
  primaryLabel?: string;
  abbreviation?: string;
  definition?: string;
  synonyms?: string[];
  conceptId?: string;
  domains?: OntologyDomain[];
  extractDefaultType?: KeyValue;
  extractType?: KeyValue;
  extractAvailableTypes?: KeyValue[];
  permissibleValuesCount?: number;
  inProject?: number;
  favorited?: boolean;
  firstPermissibleValue?: string;
  permissibleValues?: OntologyPermissibleValue[];
  createdOn?: string;
  importedAt?: string;
  sources?: string[];
};
export type OntologyFieldResponseAllOf = {
  result?: OntologyField;
};
export type OntologyFieldResponse = {
  result: "OntologyFieldResponse";
} & ResponseBase &
  OntologyFieldResponseAllOf;
export type OntologyDomainFields = {
  id: string;
  name: string;
  source?: string;
  notation?: string;
  fields?: OntologyField[];
  elementCount?: number;
  domainTotal?: number;
  sortOrder?: number;
  allIDs?: string[];
  subDomains?: {}[];
};
export type PvCount = {
  all: number;
  unique: number;
};
export type OntologyDomainsFieldsResponseAllOfResult = {
  fields: OntologyDomainFields[];
  pvs: PvCount;
};
export type OntologyDomainsFieldsResponseAllOf = {
  result?: OntologyDomainsFieldsResponseAllOfResult;
};
export type OntologyDomainsFieldsResponse = {
  result: "OntologyDomainsFieldsResponse";
} & ResponseBase &
  OntologyDomainsFieldsResponseAllOf;
export type OntologyDomainsResponseAllOf = {
  result?: OntologyDomain[];
};
export type OntologyDomainsResponse = {
  result: "OntologyDomainsResponse";
} & ResponseBase &
  OntologyDomainsResponseAllOf;
export type OntologySuggestion = {
  formNameSuggestion: string;
  count: number;
};
export type OntologySuggestionsResponseAllOf = {
  result?: OntologySuggestion[];
};
export type OntologySuggestionsResponse = {
  result: "OntologySuggestionsResponse";
} & ResponseBase &
  OntologySuggestionsResponseAllOf;
export type OntologyAbbreviation = {
  abbreviationId?: number;
  word?: string;
  abbreviation?: string;
  createdAt?: string;
  modifiedAt?: string;
};
export type OntologyAbbreviationsResponseAllOf = {
  result?: OntologyAbbreviation[];
};
export type OntologyAbbreviationsResponse = {
  result: "OntologyAbbreviationsResponse";
} & ResponseBase &
  OntologyAbbreviationsResponseAllOf;
export type FavoriteOntologyFieldResponse = {
  result: "FavoriteOntologyFieldResponse";
} & ResponseBase &
  OntologyFieldResponseAllOf;
export type AddOntologyAbbreviationResult = {
  abbreviationId?: number;
};
export type AddOntologyAbbreviationResponseAllOf = {
  result?: AddOntologyAbbreviationResult;
};
export type AddOntologyAbbreviationResponse = {
  result: "AddOntologyAbbreviationResponse";
} & ResponseBase &
  AddOntologyAbbreviationResponseAllOf;
export type RedcapInstancesResponseAllOf = {
  result?: RedcapInstance[];
};
export type RedcapInstancesResponse = {
  result: "RedcapInstancesResponse";
} & ResponseBase &
  RedcapInstancesResponseAllOf;
export type TransactionType = {
  target?: string;
  operation?: string;
  checked?: number;
  id?: number;
  dataKey?: string;
  colour?: string;
  label?: string;
};
export type TransactionInfo = {
  startDate?: string;
  endDate?: string;
  typeIds?: string;
  types?: TransactionType[];
  datesRange?: string[];
};
export type TransactionGraph = {
  date?: string;
  rd?: number;
  wd?: number;
  rt?: number;
  wt?: number;
  rr?: number;
  wr?: number;
  uli?: number;
};
export type Transaction = {
  info: TransactionInfo;
  graphs: TransactionGraph[];
};
export type TransactionResponseAllOf = {
  result?: Transaction;
};
export type TransactionResponse = {
  result: "TransactionResponse";
} & ResponseBase &
  TransactionResponseAllOf;
export type SlSettings = {
  slRefreshedOn?: string;
  runEvery?: string;
  slIsEnabled?: string;
  daysOfChanges?: string;
};
export type SlSettingsResponseAllOf = {
  result?: SlSettings;
};
export type SlSettingsResponse = {
  result: "SLSettingsResponse";
} & ResponseBase &
  SlSettingsResponseAllOf;
export type AutomatedEmailListUser = {
  email: string;
  ldapUser: boolean;
  login?: string;
  firstName?: string;
  lastName?: string;
};
export type AutomatedEmailList = {
  listName?: string;
  users?: AutomatedEmailListUser[];
};
export type AutomatedEmailListsResponseAllOf = {
  result?: AutomatedEmailList[];
};
export type AutomatedEmailListsResponse = {
  result: "AutomatedEmailListsResponse";
} & ResponseBase &
  AutomatedEmailListsResponseAllOf;
export type TopBraidSettings = {
  connectionTimeout?: string;
};
export type TopBraidSettingsResponseAllOf = {
  result?: TopBraidSettings;
};
export type TopBraidSettingsResponse = {
  result: "TopBraidSettingsResponse";
} & ResponseBase &
  TopBraidSettingsResponseAllOf;
export type Status = {
  offline?: boolean;
};
export type StatusResponseAllOf = {
  result?: Status;
};
export type StatusResponse = {
  result: "StatusResponse";
} & ResponseBase &
  StatusResponseAllOf;
export type ActiveSessionProject = {
  projectId?: number;
  projectTitle?: string;
  redcapInstance?: string;
  numberOfUsers?: number;
  users?: string[];
  editingUser?: string;
};
export type ActiveSessionsProjects = {
  numberOfSessions?: number;
  numberOfUsers?: number;
  projects?: ActiveSessionProject[];
};
export type ActiveSessionsProjectsResponseAllOf = {
  result?: ActiveSessionsProjects;
};
export type ActiveSessionsProjectsResponse = {
  result: "ActiveSessionsProjectsResponse";
} & ResponseBase &
  ActiveSessionsProjectsResponseAllOf;
export type AppUsage = {
  app?: string;
  numberOfUsers?: number;
  users?: string[];
  sessions?: string[];
};
export type AppUsageResponseAllOf = {
  result?: AppUsage[];
};
export type AppUsageResponse = {
  result: "AppUsageResponse";
} & ResponseBase &
  AppUsageResponseAllOf;
export type ChangeLog = {
  markdown?: string;
  version?: string;
  date?: string;
  description?: string;
};
export type ChangeLogResponseAllOf = {
  result?: ChangeLog[];
};
export type ChangeLogResponse = {
  result: "ChangeLogResponse";
} & ResponseBase &
  ChangeLogResponseAllOf;
export type ReportData = {
  name?: string;
  type?: "time_series" | "number" | "object" | "array";
  value?: object;
};
export type ReportsDataResponseAllOf = {
  result?: ReportData[];
};
export type ReportsDataResponse = {
  result: "ReportsDataResponse";
} & ResponseBase &
  ReportsDataResponseAllOf;
export type SlReportConceptsData = {
  total?: number;
  concepts?: {};
  domains?: string[];
};
export type SlReportConceptsResponseAllOf = {
  result?: SlReportConceptsData;
};
export type SlReportConceptsResponse = {
  result: "SLReportConceptsResponse";
} & ResponseBase &
  SlReportConceptsResponseAllOf;
export type ElementExtractType = {
  key?: string;
  value?: string;
};
export type Element = {
  id: string;
  type?: string;
  typeLabel?: string;
  primaryLabel?: string;
  alternativeLabel?: string[];
  abbreviation?: string;
  effectiveEndDate?: string;
  identifier?: boolean;
  domains?: {}[];
  valueIds?: {}[];
  created?: string;
  lastModified?: string;
  modifiedBy?: string;
  inProject?: number;
  description?: string;
  sortOrder?: number;
  conceptCode?: string;
  extractType?: ElementExtractType;
  permissibleValues?: {}[];
  permissibleValuesStr?: string;
  importedAt?: string;
  sources?: string;
};
export type SlComparisonObject = {
  count?: number;
  data?: Element[];
};
export type SlComparisonUpdates = {
  fields?: Element[];
  updates?: {}[];
};
export type SlReportComparisonsData = {
  added?: SlComparisonObject;
  deleted?: SlComparisonObject;
  updated?: SlComparisonUpdates;
};
export type SlReportComparisonResponseAllOf = {
  result?: SlReportComparisonsData;
};
export type SlReportComparisonResponse = {
  result: "SLReportComparisonResponse";
} & ResponseBase &
  SlReportComparisonResponseAllOf;
export type RepeatInstrumentField = {
  fieldName?: string;
  fieldLabel?: string;
  fieldType?: string;
  validationType?: string;
  options?: boolean;
};
export type RepeatInstrumentFields = {
  formName?: string;
  fields?: RepeatInstrumentField[];
};
export type RepeatingInstrumentsResponseAllOf = {
  result?: RepeatInstrumentFields[];
};
export type RepeatingInstrumentsResponse = {
  result: "RepeatingInstrumentsResponse";
} & ResponseBase &
  RepeatingInstrumentsResponseAllOf;
export type RedcapTokenRequest = {
  requestId: number;
  redcapId: number;
  redcapInstanceId: number;
  requestorId: number;
  requestedOn?: string;
  grantedOn?: string;
};
export type RedcapTokenRequests = {
  tokenRequests: RedcapTokenRequest[];
};
export type RedcapTokenRequestsResponseAllOf = {
  result?: RedcapTokenRequests;
};
export type RedcapTokenRequestsResponse = {
  result: "RedcapTokenRequestsResponse";
} & ResponseBase &
  RedcapTokenRequestsResponseAllOf;
export type BuiltRedcapProject = {
  redcapId?: string;
  extractId?: string;
};
export type BuiltRedcapProjects = {
  projects?: BuiltRedcapProject[];
};
export type BuiltRedcapProjectsResponseAllOf = {
  result?: BuiltRedcapProjects;
};
export type BuiltRedcapProjectsResponse = {
  result: "BuiltRedcapProjectsResponse";
} & ResponseBase &
  BuiltRedcapProjectsResponseAllOf;
export type RedcapProjectRequestFromExtract = {
  requester: string;
  email: string;
  title: string;
  projectType: string;
  pi?: string;
  piEmail?: string;
  studyType?: string;
  projectDescription: string;
  pimsIdentifier?: string;
  reviewStatus?: string;
  consentYn: string;
  mskPatientSurveysYn: string;
  engageNotice?: string;
  phi: string;
  phiElements?: string[];
  phiConfirmation?: string[];
  projectManager: string;
  pmEmail: string;
  confirmAccess: string;
  studyBuilders?: string;
  extractProjectId?: string;
  extractEnvironment?: string;
  userId: string;
  requestDate?: string;
};
export type RedcapProjectRequestAllOf = {
  recordId?: string;
  backupProjectManager?: string;
  backupPmEmail?: string;
  review?: string;
  approved?: string;
  created?: string;
  createdProjectId?: string;
  createdProjectToken?: string;
  createdProjectDate?: string;
  projectRequestComplete?: string;
  redcapRequestUrl?: string;
  extractUrl?: string;
  createdRedcapUrl?: string;
  mskExtractProject?: string;
  purpose?: string;
  requesterUserLink?: string;
  piUserLink?: string;
  pmUserLink?: string;
  backupPmUserLink?: string;
};
export type RedcapProjectRequest = RedcapProjectRequestFromExtract &
  RedcapProjectRequestAllOf;
export type RedcapProjectRequests = {
  projectRequests?: RedcapProjectRequest[];
  total?: number;
  filteredTotal?: number;
};
export type RedcapProjectRequestsResponseAllOf = {
  result?: RedcapProjectRequests;
};
export type RedcapProjectRequestsResponse = {
  result: "RedcapProjectRequestsResponse";
} & ResponseBase &
  RedcapProjectRequestsResponseAllOf;
export type RedcapCreatedProjects = {
  createdProjects?: RedcapProjectRequest[];
  total?: number;
  filteredTotal?: number;
};
export type RedcapCreatedProjectsResponseAllOf = {
  result?: RedcapCreatedProjects;
};
export type RedcapCreatedProjectsResponse = {
  result: "RedcapCreatedProjectsResponse";
} & ResponseBase &
  RedcapCreatedProjectsResponseAllOf;
export type RedcapMetaData = {
  fieldName: string;
  formName: string;
  sectionHeader?: string;
  fieldType: string;
  fieldLabel: string;
  selectChoicesOrCalculations: string;
  fieldNote?: string;
  textValidationTypeOrShowSliderNumber: string;
  textValidationMin?: string;
  textValidationMax?: string;
  identifier?: string;
  branchingLogic?: string;
  requiredField?: string;
  customAlignment?: string;
  questionNumber?: string;
  matrixGroupName?: string;
  matrixRanking?: string;
  fieldAnnotation: string;
};
export type RedcapSurveyInfo = {
  token: string;
  metadata: RedcapMetaData[];
  nextRecord: string;
};
export type RedcapSurveyInfoResponseAllOf = {
  result?: RedcapSurveyInfo;
};
export type RedcapSurveyInfoResponse = {
  result: "RedcapSurveyInfoResponse";
} & ResponseBase &
  RedcapSurveyInfoResponseAllOf;
export type BulkIngestionFileType = "SL" | "Mapping";
export type BulkIngestionProcessStatus =
  | "In Progress"
  | "Ingestion Success"
  | "Ingestion Error"
  | "Refreshing Error"
  | "In Review"
  | "Success"
  | "Rolled Back"
  | "Rollback Error";
export type FileProcessLog = {
  processId?: number;
  fileName?: string;
  fileVersion?: number;
  fileType?: BulkIngestionFileType;
  processStatus?: BulkIngestionProcessStatus;
  startedAt?: string;
  endedAt?: string;
  reportFileName?: string;
  rollbackFolderId?: string;
  backupIndex?: string;
  createdBy?: string;
  modifiedBy?: string;
};
export type FileProcessLogsAndTotal = {
  total?: number;
  isFileInProcess?: boolean;
  lastIngestionMessage?: string;
  fileProcessLogs?: FileProcessLog[];
};
export type FileProcessLogsResponseAllOf = {
  result?: FileProcessLogsAndTotal;
};
export type FileProcessLogsResponse = {
  result: "FileProcessLogsResponse";
} & ResponseBase &
  FileProcessLogsResponseAllOf;
export type RedcapConnectionStatus = 0 | 1 | 2;
export type RedcapConnection = {
  status?: RedcapConnectionStatus;
};
export type RedcapConnectionResponseAllOf = {
  result?: RedcapConnection;
};
export type RedcapConnectionResponse = {
  result: "RedcapConnectionResponse";
} & ResponseBase &
  RedcapConnectionResponseAllOf;
export type MappingErrorReportResponseAllOf = {
  result?: {}[];
};
export type MappingErrorReportResponse = {
  result: "MappingErrorReportResponse";
} & ResponseBase &
  MappingErrorReportResponseAllOf;
export type ProjectForVetting = {
  projectId?: number;
  projectTitle?: string;
  projectDesc?: string;
  favorite?: boolean;
  lastModified?: string;
  totalScreens?: number;
  totalConcepts?: number;
  queuedConcepts?: number;
  vettedConcepts?: number;
  mappedConcepts?: number;
};
export type ProjectsForVettingAndTotal = {
  total?: number;
  projects?: ProjectForVetting[];
};
export type ProjectsForVettingResponseAllOf = {
  result?: ProjectsForVettingAndTotal;
};
export type ProjectsForVettingResponse = {
  result: "ProjectsForVettingResponse";
} & ResponseBase &
  ProjectsForVettingResponseAllOf;
export type FieldForVetting = {
  projectId?: number;
  fieldId?: number;
  name?: string;
  label?: string;
  formName?: string;
  dataType?: string;
  mapped?: boolean;
  vetted?: boolean;
  mappedPvCount?: number;
  vettedPvCount?: number;
  permissibleValuesCount?: number;
  firstPermissibleValue?: string;
};
export type FieldsForVettingAndTotal = {
  total?: number;
  fields?: FieldForVetting[];
};
export type FieldsForVettingResponseAllOf = {
  result?: FieldsForVettingAndTotal;
};
export type FieldsForVettingResponse = {
  result: "FieldsForVettingResponse";
} & ResponseBase &
  FieldsForVettingResponseAllOf;
export type ProjectDataTypesResponseAllOf = {
  result?: string[];
};
export type ProjectDataTypesResponse = {
  result: "ProjectDataTypesResponse";
} & ResponseBase &
  ProjectDataTypesResponseAllOf;
export type MaxInstance = {
  baseFieldName?: string;
  instance: number;
};
export type MaxInstanceResponseAllOf = {
  result?: MaxInstance;
};
export type MaxInstanceResponse = {
  result: "MaxInstanceResponse";
} & ResponseBase &
  MaxInstanceResponseAllOf;
export type CatEnabled = {
  catEnabled: boolean;
  inExtract: boolean;
};
export type CatEnabledResponseAllOf = {
  result?: CatEnabled;
};
export type CatEnabledResponse = {
  result: "CATEnabledResponse";
} & ResponseBase &
  CatEnabledResponseAllOf;
export type ExportPreviewResponseAllOf = {
  result?: {};
};
export type ExportPreviewResponse = {
  result: "ExportPreviewResponse";
} & ResponseBase &
  ExportPreviewResponseAllOf;
export type SectionTitleResponse = {
  result: "SectionTitleResponse";
} & ResponseBase &
  ProjectDataTypesResponseAllOf;
export type ItemsResponseObject = {
  question?: string;
  answer?: string;
  section?: string;
  definition?: string;
  term?: string;
  faqId?: number;
  termId?: number;
};
export type ItemsResponseAllOf = {
  result?: ItemsResponseObject[];
};
export type ItemsResponse = {
  result: "ItemsResponse";
} & ResponseBase &
  ItemsResponseAllOf;
export type Response =
  | UserResponse
  | UsersResponse
  | RolePermissionsResponse
  | GroupedRolePermissionsResponse
  | RolesResponse
  | ExternalSessionResponse
  | FormResponse
  | FormsResponse
  | PermissionsResponse
  | ProjectsWithCountsAndProjectsAndCountsResponse
  | ProjectResponse
  | ProjectInfoResponse
  | RequestAccessResponse
  | ProjectStatisticsDataResponse
  | ProjectsGeneralInfoResponse
  | FieldNameSuggestionResponse
  | FieldsResponse
  | PaginatedFieldsResponse
  | FieldResponse
  | PermissibleValuesResponse
  | OntologyFieldResponse
  | OntologyDomainsFieldsResponse
  | OntologyDomainsResponse
  | OntologySuggestionsResponse
  | OntologyAbbreviationsResponse
  | FavoriteOntologyFieldResponse
  | AddOntologyAbbreviationResponse
  | RedcapInstancesResponse
  | TransactionResponse
  | SlSettingsResponse
  | AutomatedEmailListsResponse
  | TopBraidSettingsResponse
  | StatusResponse
  | ActiveSessionsProjectsResponse
  | AppUsageResponse
  | ChangeLogResponse
  | ReportsDataResponse
  | SlReportConceptsResponse
  | SlReportComparisonResponse
  | RepeatingInstrumentsResponse
  | RedcapTokenRequestsResponse
  | BuiltRedcapProjectsResponse
  | RedcapProjectRequestsResponse
  | RedcapCreatedProjectsResponse
  | RedcapSurveyInfoResponse
  | FileProcessLogsResponse
  | RedcapConnectionResponse
  | MappingErrorReportResponse
  | ProjectsForVettingResponse
  | FieldsForVettingResponse
  | ProjectDataTypesResponse
  | MaxInstanceResponse
  | CatEnabledResponse
  | ExportPreviewResponse
  | SectionTitleResponse
  | ItemsResponse;
export type Login = {
  login: string;
  password: string;
};
export type LoginPayload = {
  payload: Login;
};
export type BulkIngestionFileContentType = "Data" | "Error" | "Template";
export type FileInfo = {
  fileName?: string;
  fileType?: BulkIngestionFileType;
  fileContentType?: BulkIngestionFileContentType;
  fileVersion?: number;
};
export type FileInfoPayload = {
  payload?: FileInfo;
};
export type FileProcessLogPayload = {
  payload: FileProcessLog;
};
export type FileProcessLogUpdate = {
  processId?: number;
  processStatus?: BulkIngestionProcessStatus;
  endedAt?: string;
  reportFileName?: string;
  rollbackFolderId?: string;
  backupIndex?: string;
  createdBy?: string;
  modifiedBy?: string;
};
export type FileProcessLogUpdatePayload = {
  payload: FileProcessLogUpdate;
};
export type Cohort = {
  id: string;
  query: string;
};
export type CohortPayload = {
  payload: Cohort;
};
export type UpdateDomainsPayload = {
  payload: OntologyDomain[];
};
export type EmailInfo = {
  subject: string;
  to: string[];
  body: string;
};
export type EmailInfoPayload = {
  payload: EmailInfo;
};
export type HelpItemEnum = "term" | "faq";
export type HelpItem = {
  question?: string;
  answer?: string;
  section?: string;
  definition?: string;
  term?: string;
  type?: HelpItemEnum;
};
export type AddRedcapInstancePayload = {
  payload: RedcapInstance;
};
export type Logging = {
  action: string;
  details?: {} | null;
  projectId?: number | null;
  dateTime: string;
  screenName: string;
  sectionName: string;
  elementName: string;
};
export type AddLoggingPayload = {
  payload: Logging;
};
export type AddOntologyAbbreviation = {
  word?: string;
  abbreviation?: string;
};
export type AddOntologyAbbreviationPayload = {
  payload: AddOntologyAbbreviation;
};
export type UpdateOntologyAbbreviation = {
  abbreviation?: string;
};
export type UpdateOntologyAbbreviationPayload = {
  payload: UpdateOntologyAbbreviation;
};
export type UpdateOntologyField = {
  fieldId?: string;
  extractType?: string;
};
export type UpdateOntologyFieldPayload = {
  payload: UpdateOntologyField;
};
export type FavoriteOntologyField = {
  conceptIdUri?: string;
  status?: number;
};
export type FavoriteOntologyFieldPayload = {
  payload: FavoriteOntologyField;
};
export type ImportRecordsPayload = {
  token: string;
  records: {}[];
};
export type AddFieldsDomainSelections = {
  slFieldID?: string;
  domainName?: string;
  source?: string;
};
export type DuplicateSlField = {
  count: number;
  prefix?: string;
  conceptId?: string;
};
export type AddField = Field & OntologyField;
export type AddFields = {
  source: string;
  copyScreens?: boolean;
  domainSelections?: AddFieldsDomainSelections[];
  quantities: DuplicateSlField[];
  fields: AddField[];
};
export type AddFieldsPayload = {
  payload: AddFields;
};
export type SetFieldAccess = {
  fields?: Field[];
};
export type SetFieldAccessPayload = {
  payload: SetFieldAccess;
};
export type FieldIdArray = number[];
export type MaxFieldInstance = {
  conceptId?: string;
  fieldName?: string;
};
export type MaxInstancePayload = {
  payload: MaxFieldInstance;
};
export type UpdateField = {
  field?: Field;
  mode?: string;
};
export type UpdateFieldPayload = {
  payload: UpdateField;
};
export type ImportProject = {
  /** REDCap API Token Value */
  token: string;
  /** REDCap Project Id */
  projectId?: number;
  /** REDCap Instance URL */
  redcapInstanceURL?: string;
};
export type ImportProjects = {
  projects: ImportProject[];
};
export type ImportProjectsPayload = {
  payload: ImportProjects;
};
export type StudyBuilder = {
  username?: string;
  firstname?: string;
  lastname?: string;
  email?: string;
};
export type CreateProject = {
  /** The title of your Extract Project */
  title?: string;
  /** The description for the project */
  description?: string;
  /** Whether or not the project is temporary */
  isTemporary: boolean;
  /** Whether or not a REDCap project was requested along with this */
  redcapRequested?: boolean;
  /** The purpose of the REDCap project */
  purpose?: number;
  users: StudyBuilder[];
};
export type CreateProjectPayload = {
  payload: CreateProject;
};
export type DownloadProjectsPayload = {
  payload: ProjectGeneralInfo[];
};
export type RedcapProjectRequestPayload = {
  payload: RedcapProjectRequestFromExtract;
};
export type RedcapTokenRequestInfo = {
  redcapId: number;
  projectTitle: string;
};
export type RedcapTokenRequestPayload = {
  payload: RedcapTokenRequestInfo;
};
export type RedcapProjectInfo = {
  /** The REDCap project title */
  title: string;
};
export type RedcapProjectInfoPayload = {
  payload: RedcapProjectInfo;
};
export type UpdateProjectPayloadPayload = {
  project?: Project;
};
export type UpdateProjectPayload = {
  payload: UpdateProjectPayloadPayload;
};
export type CheckRecords = {
  formId?: number;
  formName?: string;
};
export type CheckRecordsPayload = {
  payload: CheckRecords;
};
export type ConversionType = {
  from: "Project" | "Template" | "Temporary Workspace";
  to: "Project" | "Template";
};
export type ConversionPayloadPayload = {
  conversionType?: ConversionType;
  project?: Project;
};
export type ConversionPayload = {
  payload: ConversionPayloadPayload;
};
export type DuplicateField = {
  count: number;
  prefix?: string;
  baseFieldName: string;
  nextInstance: number;
};
export type DuplicateFieldPayload = {
  payload: DuplicateField;
};
export type FormPayload = {
  payload: Form[];
};
export type PublishToTopBraidPayloadPayload = {
  freezeWhenFail?: boolean;
};
export type PublishToTopBraidPayload = {
  payload: PublishToTopBraidPayloadPayload;
};
export type RedcapInfo = {
  redcapToken?: string;
  redcapId?: number;
  redcapInstanceUrl?: string;
};
export type RedcapInfoPayload = {
  payload: RedcapInfo;
};
export type UndoDeletedFields = {
  undoDeletedFieldIds?: number[];
};
export type UndoDeletedFieldsPayload = {
  payload: UndoDeletedFields;
};
export type UpdateExtractUsers = {
  users?: ProjectUser[];
};
export type UpdateExtractUsersPayload = {
  payload?: UpdateExtractUsers;
};
export type BuildRedcapProjectsPayload = {
  payload: RedcapProjectRequest[];
};
export type RolePermissionsPayload = {
  payload: RolePermission[];
};
export type UpdateAutomatedEmailList = {
  listName?: string;
  emails?: string[];
};
export type UpdateAutomatedEmailListPayload = {
  payload?: UpdateAutomatedEmailList;
};
export type FormNameNcf = {
  formNameForNcf?: string;
};
export type FormNameNcfPayload = {
  payload: FormNameNcf;
};
export type SlMode = {
  slIsEnabled?: string;
};
export type SlModePayload = {
  payload: SlMode;
};
export type StatusPayload = {
  payload?: Status;
};
export type TaskStandardLibrary = {
  runEvery?: number;
  daysOfChanges?: number;
};
export type Task = {
  standardLibrary?: TaskStandardLibrary;
};
export type TaskPayload = {
  payload: Task;
};
export type TopBraid = {
  connectionTimeout?: number;
};
export type TopBraidPayload = {
  payload: TopBraid;
};
export type ExtractVersion = {
  version?: string;
};
export type SetExtractVersionPayload = {
  payload: ExtractVersion;
};
export type DownloadExportFile = {
  fileName?: string;
  filePath?: string;
};
export type Filter = {
  searchTerm?: string;
  status?: string[];
  domains?: string[];
  inProject?: boolean;
  comparisonType?: "added" | "deleted" | "updated" | "all";
  isIngestion?: boolean;
  project?: string;
  monthlyType?: string;
  user?: User;
};
export type ReportDataRequest = {
  startDate: string;
  endDate: string;
  pageSize?: number;
  pageNumber?: number;
  filters?: Filter;
};
export type ReportDataRequestPayload = {
  payload: ReportDataRequest;
};
export type ExportReportObject = {
  report?: string;
  data?: {}[];
};
export type ExportReportPayload = {
  payload: ExportReportObject;
};
export type SlReportComparisonRequest = {
  startDate: string;
  endDate: string;
  type: "added" | "deleted" | "updated" | "all";
  pageSize?: number;
  pageNumber?: number;
  search?: string;
  ingest?: boolean;
};
export type SlReportComparisonRequestPayload = {
  payload: SlReportComparisonRequest;
};
export type SlReportConceptsRequest = {
  startDate?: string;
  endDate?: string;
  filters?: {};
  pageSize?: number;
  pageNumber?: number;
};
export type SlReportConceptsRequestPayload = {
  payload: SlReportConceptsRequest;
};
export type UpdateUser = {
  id: number;
  isActive: number;
  updatedRoleId: number;
};
export type UpdateUsersPayload = {
  payload: UpdateUser[];
};
export const {
  useLogoutMutation,
  useGetUserQuery,
  useLazyGetUserQuery,
  useLoginMutation,
  useGetActiveSessionsProjectsQuery,
  useLazyGetActiveSessionsProjectsQuery,
  useSwitchAdminModeMutation,
  useEnterAdminScreenMutation,
  useLeaveAdminScreenMutation,
  useGetExtractAppUsageQuery,
  useLazyGetExtractAppUsageQuery,
  useEnterExtractAppMutation,
  useLeaveExtractAppMutation,
  useCancelImpersonationMutation,
  useEndSessionMutation,
  useExtendMutation,
  useUpdateImpersonationMutation,
  useLaunchRedcapAfterPublishMutation,
  useAuthenticateExternalServicesQuery,
  useLazyAuthenticateExternalServicesQuery,
  useChangeRedcapInstanceMutation,
  useUnlockAllProjectsMutation,
  useUnlockProjectsMutation,
  useDownloadFileMutation,
  useGetFileProcessLogsQuery,
  useLazyGetFileProcessLogsQuery,
  useCreateFileProcessLogMutation,
  useUpdateFileProcessLogMutation,
  useApproveIngestionMutation,
  useRollbackIngestionMutation,
  useUploadFileMutation,
  useCohortMutation,
  useInvokeMutation,
  useGetDomainsQuery,
  useLazyGetDomainsQuery,
  useUpdateDomainsMutation,
  useSendEmailMutation,
  useFetchHelpItemsQuery,
  useLazyFetchHelpItemsQuery,
  useCreateHelpItemMutation,
  useDeleteHelpItemMutation,
  useEditHelpItemMutation,
  useFetchHelpSelectItemsQuery,
  useLazyFetchHelpSelectItemsQuery,
  useGetInstancesQuery,
  useLazyGetInstancesQuery,
  useAddInstanceMutation,
  useAddLoggingMutation,
  useGetAbbreviationsQuery,
  useLazyGetAbbreviationsQuery,
  useAddAbbreviationMutation,
  useUpdateAbbreviationMutation,
  useDownloadBulkIngestionTemplateQuery,
  useLazyDownloadBulkIngestionTemplateQuery,
  useDownloadCacheQuery,
  useLazyDownloadCacheQuery,
  useGetOntologyDomainsQuery,
  useLazyGetOntologyDomainsQuery,
  useDuplicatePrimaryLabelInAlternativeLabelMutation,
  useUpdateOntologyFieldMutation,
  useFavoriteFieldMutation,
  useGetOntologyDomainsFieldsQuery,
  useLazyGetOntologyDomainsFieldsQuery,
  useGetOntologyFieldQuery,
  useLazyGetOntologyFieldQuery,
  useGetOntologyFieldPaginatedPvsQuery,
  useLazyGetOntologyFieldPaginatedPvsQuery,
  useRefreshSlMutation,
  useGetOntologySuggestionsQuery,
  useLazyGetOntologySuggestionsQuery,
  useGetPermissionsQuery,
  useLazyGetPermissionsQuery,
  useGetProjectByRedcapQuery,
  useLazyGetProjectByRedcapQuery,
  useImportRecordsMutation,
  useGetFieldsQuery,
  useLazyGetFieldsQuery,
  useAddFieldMutation,
  useSetFieldAccessMutation,
  useBulkDeleteFieldsMutation,
  useGetDeletedButHaveDataQuery,
  useLazyGetDeletedButHaveDataQuery,
  useGetForSetAccessQuery,
  useLazyGetForSetAccessQuery,
  useGetFieldsForVettingQuery,
  useLazyGetFieldsForVettingQuery,
  useGetGroupedByScreensQuery,
  useLazyGetGroupedByScreensQuery,
  useGetMaxFieldInstanceMutation,
  useGetFieldsPaginationQuery,
  useLazyGetFieldsPaginationQuery,
  useGetScreensWithoutFieldQuery,
  useLazyGetScreensWithoutFieldQuery,
  useGetWithoutScreensQuery,
  useLazyGetWithoutScreensQuery,
  useDeleteFieldMutation,
  useGetFieldQuery,
  useLazyGetFieldQuery,
  useUpdateFieldMutation,
  useCheckFieldRecordsQuery,
  useLazyCheckFieldRecordsQuery,
  useGetFieldPaginatedPvsQuery,
  useLazyGetFieldPaginatedPvsQuery,
  useGetPermissibleValuesPaginationQuery,
  useLazyGetPermissibleValuesPaginationQuery,
  useGetAllFormsByProjectQuery,
  useLazyGetAllFormsByProjectQuery,
  useGetFormsByProjectForVettingQuery,
  useLazyGetFormsByProjectForVettingQuery,
  useGetProjectsQuery,
  useLazyGetProjectsQuery,
  useImportProjectsMutation,
  useCreateProjectMutation,
  useDownloadProjectsMutation,
  useGetProjectsForVettingQuery,
  useLazyGetProjectsForVettingQuery,
  useGetAllRedcapProjectsQuery,
  useLazyGetAllRedcapProjectsQuery,
  useGetUserRedcapProjectsQuery,
  useLazyGetUserRedcapProjectsQuery,
  useRequestNewRedcapProjectMutation,
  useGetRedcapTokenRequestsQuery,
  useLazyGetRedcapTokenRequestsQuery,
  useCreateRedcapTokenRequestMutation,
  useSendRedcapTokenCreationRequestEmailMutation,
  useGetRedcapSurveyInfoQuery,
  useLazyGetRedcapSurveyInfoQuery,
  useUpdateProjectMutation,
  useSetProjectAccessMutation,
  useArchiveProjectMutation,
  useCheckRecordsMutation,
  useConvertMutation,
  useGetProjectDataTypesQuery,
  useLazyGetProjectDataTypesQuery,
  useDeleteProjectMutation,
  useDownloadProjectQuery,
  useLazyDownloadProjectQuery,
  useDownloadMappingTemplateQuery,
  useLazyDownloadMappingTemplateQuery,
  useFavouriteProjectMutation,
  useGetFieldNameSuggestionQuery,
  useLazyGetFieldNameSuggestionQuery,
  useDuplicateFieldMutation,
  useGetFormByProjectQuery,
  useLazyGetFormByProjectQuery,
  useGetFormFieldsByProjectQuery,
  useLazyGetFormFieldsByProjectQuery,
  useGetProjectInfoQuery,
  useLazyGetProjectInfoQuery,
  useLockProjectMutation,
  useOpenProjectQuery,
  useLazyOpenProjectQuery,
  useOrganizeProjectMutation,
  usePrepareProjectQuery,
  useLazyPrepareProjectQuery,
  usePublishProjectMutation,
  usePublishProjectInRedcapMutation,
  usePublishProjectInTopbraidMutation,
  useGetProjectFromRedcapQuery,
  useLazyGetProjectFromRedcapQuery,
  useUpdateProjectRedcapInfoMutation,
  useReplaceProjectWithRedcapMutation,
  useReplaceProjectWithRedcapAndPublishToTopbraidMutation,
  useRequestProjectAccessMutation,
  useSendRequestAccessEmailMutation,
  useGetProjectStatisticsDataQuery,
  useLazyGetProjectStatisticsDataQuery,
  useSyncProjectQuery,
  useLazySyncProjectQuery,
  useGetProjectFromTopbraidQuery,
  useLazyGetProjectFromTopbraidQuery,
  useUndoProjectMutation,
  useUnfavouriteProjectMutation,
  useUnlockProjectMutation,
  useUpdateProjectTokenMutation,
  useSetUserSurveyShowedMutation,
  useUpdateExtractUsersMutation,
  useVerifyRedcapConnectionQuery,
  useLazyVerifyRedcapConnectionQuery,
  useGetCompletedQuery,
  useLazyGetCompletedQuery,
  useBuildProjectsMutation,
  useGetRequestsQuery,
  useLazyGetRequestsQuery,
  useIsCatEnabledQuery,
  useLazyIsCatEnabledQuery,
  useGetRolesQuery,
  useLazyGetRolesQuery,
  useGetGroupedRolePermissionsQuery,
  useLazyGetGroupedRolePermissionsQuery,
  useGetRolePermissionsQuery,
  useLazyGetRolePermissionsQuery,
  useSetRolePermissionsMutation,
  useGetAutomatedEmailListsQuery,
  useLazyGetAutomatedEmailListsQuery,
  useUpdateAutomatedEmailListsMutation,
  useUpdateFormNameMutation,
  useDeleteRedisCacheMutation,
  useUpdateSlModeMutation,
  useGetRefreshedOnQuery,
  useLazyGetRefreshedOnQuery,
  useGetStatusQuery,
  useLazyGetStatusQuery,
  useSetStatusMutation,
  useUpdateTasksMutation,
  useGetTopBraidSettingsQuery,
  useLazyGetTopBraidSettingsQuery,
  useUpdateTopBraidSettingsMutation,
  useGetVersionQuery,
  useLazyGetVersionQuery,
  useSetVersionMutation,
  useOnMessageQuery,
  useLazyOnMessageQuery,
  useOpenQuery,
  useLazyOpenQuery,
  useDownloadFlattenFileMutation,
  useFlattenProjectDataMutation,
  useGroupRepeatingInstrumentsMutation,
  useEndImportSessionMutation,
  useGetAppUsageReportMutation,
  useGetChangeLogQuery,
  useLazyGetChangeLogQuery,
  useGetErrorsReportMutation,
  useExportReportDataMutation,
  useGetInQueueReportMutation,
  useGetMapIngestReportMutation,
  useGetMapIngestErrorReportQuery,
  useLazyGetMapIngestErrorReportQuery,
  useGetMonthlyReportMutation,
  useGetProjectsReportMutation,
  useGetSlReportMutation,
  useGetSlReportComparisonMutation,
  useGetSlReportConceptsMutation,
  useGetSusReportMutation,
  useGetTransactionsQuery,
  useLazyGetTransactionsQuery,
  useGetUsersQuery,
  useLazyGetUsersQuery,
  useSyncUsersMutation,
  useUpdateUsersMutation,
  useGetUsersWithoutAdAccessQuery,
  useLazyGetUsersWithoutAdAccessQuery,
} = injectedRtkApi;
