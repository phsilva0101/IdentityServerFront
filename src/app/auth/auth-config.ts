import { AuthConfig } from "angular-oauth2-oidc";

export const authConfig: AuthConfig = {
  issuer: "https://localhost:44310",
  clientId: "soccerScored_api", // The "Auth Code + PKCE" client
  responseType: "code",
  redirectUri: window.location.origin + "/auth-callback",
  silentRefreshRedirectUri: window.location.origin + "/auth-callback",
  postLogoutRedirectUri: window.location.origin + "/",
  scope: "openid profile email soccerScored_api",
  useSilentRefresh: true, 
  silentRefreshTimeout: 5000, 
  timeoutFactor: 0.25, 
  sessionChecksEnabled: true,
  showDebugInformation: true, 
  clearHashAfterLogin: false, 
  nonceStateSeparator: "semicolon", 
};
