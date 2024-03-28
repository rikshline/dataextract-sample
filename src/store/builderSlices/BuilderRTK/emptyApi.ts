import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Config } from "../../../common/config/Config";

export const emptySplitApi = createApi({
  reducerPath: "extract_api",
  baseQuery: fetchBaseQuery({
    baseUrl: Config.BUILDER_V1_API_URL,
  }),

  endpoints: () => ({}),
});
