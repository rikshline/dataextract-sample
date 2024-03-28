import type { ConfigFile } from "@rtk-query/codegen-openapi";

const config: ConfigFile = {
  schemaFile: "./openapi.yaml",
  apiFile: "../../store/builderSlices/BuilderRTK/emptyApi.ts",
  apiImport: "emptySplitApi",
  outputFile: "../../store/builderSlices/BuilderRTK/index.ts",
  exportName: "BuilderAPI",
  //hooks: true,
  hooks: { queries: true, lazyQueries: true, mutations: true },
  tag: true,
  /*endpointOverrides: [
    {
      pattern: "searchOntology",
      type: "query",
    },
  ],*/
};

export default config;
