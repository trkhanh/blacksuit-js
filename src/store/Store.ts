import { DurationInSeconds, RefreshIntervalInMs, UserName, RawDate, TimeInMilliseconds } from '@type/Common';

// Store is the Redux Data store
export type GlobalState = {
  readonly loadingCounter: number;
  readonly isPageVisible: boolean;
  lastRefreshAt: TimeInMilliseconds;
};

// Various pages are described here with their various sections
export enum LoginStatus {
  logging,
  loggedIn,
  loggedOut,
  error,
  expired
}

export interface ILoginSession {
  expiresOn: RawDate;
  username: UserName;
}

export interface ILoginState {
  status: LoginStatus;
  session?: ILoginSession;
  message: string;
}

export interface ISettings {
  navCollapse: boolean;
}

export interface IUserSettings {
  interface: ISettings;
  refreshInterval: RefreshIntervalInMs;
  duration: DurationInSeconds;
}

// This defines the Global Application State
export type AppState = {
  // Global state === across multiple pages
  // could also be session state
  globalState: GlobalState;
  /** Page Settings */
  authentication: ILoginState;
};
