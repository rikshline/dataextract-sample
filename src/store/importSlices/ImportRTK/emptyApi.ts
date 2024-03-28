// Or from '@reduxjs/toolkit/query' if not using the auto-generated hooks
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Config } from "../../../common/config/Config";

// initialize an empty api service that we'll inject endpoints into later as needed
export const emptySplitApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: Config.API_CONFIG.basePath,
    headers: {
      Authorization: `Bearer ${
        Config.API_CONFIG.apiKey
          ? Config.API_CONFIG.apiKey("Authorization")
          : ""
      }`,
      "Access-Control-Allow-Origin": "*",
      "X-ACCESS-CONTROL": "OhWhatAGooseIam",
    },
    prepareHeaders: (headers: any, { getState, endpoint }: any) => {
      if (Config.API_CONFIG.apiKey) {
        const accessToken = Config.API_CONFIG.apiKey("Authorization");
        headers.set("Access-Control-Allow-Origin", "*");
        headers.set("Authorization", `${accessToken}`);
        return headers;
      }
    },
  }),

  endpoints: () => ({}),
});
