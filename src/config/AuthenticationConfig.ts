import { IAuthConfig as AuthConfig, AuthStrategy } from '@type/Auth';

const authenticationConfig: AuthConfig = {
  strategy: AuthStrategy.login,
  secretMissing: false
};

export default authenticationConfig;
