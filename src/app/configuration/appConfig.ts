// export interface EnvConfig extends Window {
//     identityServiceUrlLocal: string
//   }

//   export const appConfig = ((window as any).globalConfig as EnvConfig) || {
//     identityServiceUrlLocal: process.env["IDENTITY_APP_URL_API"],
//   }

export const environment = {
    production: false,
    api: 'http://localhost:44362/api/',
    auth: {
      issuer: 'https://localhost:44310',
      clientId: 'identityApi',
      postLogoutRedirectUri: 'http://localhost:4200/',
      redirectUri: window.location.origin + "/#/signin-callback?",
      scope:"openid profile email identity_api",
      oidc: true
    }
  };
  
  /*
   * For easier debugging in development mode, you can import the following file
   * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
   *
   * This import should be commented out in production mode because it will have a negative impact
   * on performance if an error is thrown.
   */
  // import 'zone.js/dist/zone-error';  // Included with Angular CLI.