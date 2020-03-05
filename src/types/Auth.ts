export interface IAuthConfig {
  authorizationEndpoint?: string;
  logoutEndpoint?: string;
  logoutRedirect?: string;
  secretMissing?: boolean;
  strategy: AuthStrategy;
}

export type AuthInfo = {
  sessionInfo: ISessionInfo;
} & IAuthConfig;

export enum AuthStrategy {
  login = 'login',
  anonymous = 'anonymous',
  ldap = 'ldap',
  token = 'token'
}

// Stores the result of a computation:
// hold = stop all computation and wait for a side-effect, such as a redirect
// continue = continue...
// success = authentication was a success, session is available
// failure = authentication failed, session is undefined but error is available
export enum AuthResult {
  HOLD = 'hold',
  CONTINUE = 'continue',
  SUCCESS = 'success',
  FAILURE = 'failure'
}

export interface ISessionInfo {
  username?: string;
  expiresOn?: string;
}
