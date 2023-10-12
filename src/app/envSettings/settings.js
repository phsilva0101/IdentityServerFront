import { environment } from "../environment";

window.globalconfig = {
  identityServiceUrlLocal: "https://localhost:44362/api",
};

export const settings = {
  authority: environment.stsAuthority,
  client_id: environment.clientId,
  redirect_uri: `${environment.clientRoot}signin-callback`,
  post_logout_redirect_uri: `${environment.clientRoot}`,
  response_type: `${environment.response_type}`,
  scope: environment.clientScope,
  response_mode: "query",
};
