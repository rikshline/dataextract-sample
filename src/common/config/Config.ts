import { Local } from "./environments/local";

// retrieving from runtime env, then use built one
// https://www.freecodecamp.org/news/how-to-implement-runtime-environment-variables-with-create-react-app-docker-and-nginx-7f9d42a91d70/
// https://github.com/kunokdev/cra-runtime-environment-variables
const REACT_APP_ENV =
  (window as any)["__env__"] && (window as any)["__env__"]["REACT_APP_ENV"]
    ? (window as any)["__env__"]["REACT_APP_ENV"]
    : process.env.REACT_APP_ENV;

const REACT_APP_AG_GRID_LICENSE: string =
  (window as any)["__env__"] &&
  (window as any)["__env__"]["REACT_APP_AG_GRID_LICENSE"]
    ? (window as any)["__env__"]["REACT_APP_AG_GRID_LICENSE"]
    : process.env.REACT_APP_AG_GRID_LICENSE;

//console.log((window as any)["__env__"]);
// console.log(REACT_APP_ENV);

let env = REACT_APP_ENV === "local" ? Local : undefined;
const BUILDER_API_KEY_PREFIX = (token: string) => {
  // Setting up Bearer prefix for authentication
  return token ? `Bearer ${token}` : "";
};

const SESSION_KEY = "msk_extract_linter_session";
const BUILDER_SESSION_KEY = "msk_extract_builder_session";
const ACCESS_SUPPORT_EMAIL = process.env.REACT_APP_SUPPORT_EMAIL;

const API_KEY_PREFIX = (token: string) => {
  // Setting up Bearer prefix for authentication
  return token ? `Bearer ${token}` : "";
};

const Config = {
  // Setting up the base API for different environments
  API_CONFIG: "test",
  SOCKET_BASE_URL: env?.SOCKET_BASE_URL,
  BUILDER_API_KEY_PREFIX: BUILDER_API_KEY_PREFIX,
  API_KEY_PREFIX: API_KEY_PREFIX,
  API_ADD_CONFIG: "test",
  SESSION_KEY: SESSION_KEY,
  BUILDER_SESSION_KEY: BUILDER_SESSION_KEY,
  ACCESS_SUPPORT_EMAIL: ACCESS_SUPPORT_EMAIL,
  ENV: REACT_APP_ENV,
  REACT_ENV: env,
  RESEARCH_API_URL: env?.REACT_APP_RESEARCH_API_URL,
  BUILDER_V1_API_URL: env?.REACT_APP_BUILDER_V1_API_URL,
  AG_GRID_LICENSE: REACT_APP_AG_GRID_LICENSE,
};

export { Config };
