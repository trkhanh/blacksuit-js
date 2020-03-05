import { ActionType, createAction } from 'typesafe-actions';
import { ILoginSession, LoginStatus } from '@Store';
import { ActionKeys } from './ActionKeys';

export interface ILoginPayload {
  status: LoginStatus;
  session?: ILoginSession;
  error?: any;
}

// synchronous action creators
export const LoginActions = {
  loginRequest: createAction(ActionKeys.LOGIN_REQUEST),
  loginExtend: createAction(ActionKeys.LOGIN_EXTEND, resolve => (session: ILoginSession) =>
    resolve({
      status: LoginStatus.loggedIn,
      session: session,
      error: undefined
    } as ILoginPayload)
  ),
  loginSuccess: createAction(ActionKeys.LOGIN_SUCCESS, resolve => (session: ILoginSession) =>
    resolve({
      status: LoginStatus.loggedIn,
      session: session,
      error: undefined,
      uiExpiresOn: session.expiresOn
    } as ILoginPayload)
  ),
  loginFailure: createAction(ActionKeys.LOGIN_FAILURE, resolve => (error: any) =>
    resolve({
      status: LoginStatus.error,
      session: undefined,
      error: error
    } as ILoginPayload)
  ),
  logoutSuccess: createAction(ActionKeys.LOGOUT_SUCCESS, resolve => () =>
    resolve({
      status: LoginStatus.loggedOut,
      session: undefined,
      error: undefined
    } as ILoginPayload)
  ),
  sessionExpired: createAction(ActionKeys.SESSION_EXPIRED)
};

export type LoginAction = ActionType<typeof LoginActions>;
