import { LogLevel, OpenIdConfiguration } from "angular-auth-oidc-client";

const environment = {
    production: false,
    stsAuthority: 'https://localhost:44362' + '/',
    clientId: 'identityApi',
    clientRoot: 'https://localhost:44362' + '/',
    clientScope: 'openid offline_access profile email identity_api',
    response_type: 'code',
    revokeAccessTokenOnSignout: true,
    apiRoot: window.location.origin + '/api',
    automaticSilentRenew: true,
  }

export const authModuleConfig = {
    config: {
        authority: environment.stsAuthority,
        redirect_uri: 'https://localhost:44362/signin-callback',
        post_logout_redirect_uri: environment.clientRoot,
        client_id: environment.clientId,
        scope: environment.clientScope,
        response_type: 'code',
        response_mode: 'query',
        // silentRenew: true,
        // useRefreshToken: true,
        // renewTimeBeforeTokenExpiresInSeconds: 10,
        // logLevel: LogLevel.Debug,
    },
};

