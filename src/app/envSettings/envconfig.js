const environment = {
    production: false,
    stsAuthority: window.location.origin + '/',
    clientId: 'identityApi',
    clientRoot: window.location.origin + '/',
    clientScope: 'openid offline_access profile email identity_api soccerScored_api',
    response_type: 'code',
    revokeAccessTokenOnSignout: true,
    apiRoot: window.location.origin + '/api',
    automaticSilentRenew: true,
  }