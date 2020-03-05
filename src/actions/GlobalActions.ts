// Action Creators allow us to create typesafe utilities for dispatching actions
import { ActionType, createAction } from 'typesafe-actions';
import { ActionKeys } from './ActionKeys';
import { TimeInMilliseconds } from '@type/Common';

export const GlobalActions = {
  unknown: createAction('BLACKSUIT_UNKNOWN'), // helper for testing
  decrementLoadingCounter: createAction(ActionKeys.DECREMENT_LOADING_COUNTER),
  incrementLoadingCounter: createAction(ActionKeys.INCREMENT_LOADING_COUNTER),
  setPageVisibilityHidden: createAction(ActionKeys.SET_PAGE_VISIBILITY_HIDDEN),
  setPageVisibilityVisible: createAction(ActionKeys.SET_PAGE_VISIBILITY_VISIBLE),
  setLastRefreshAt: createAction(ActionKeys.SET_LAST_REFRESH)<TimeInMilliseconds>()
};

export type GlobalAction = ActionType<typeof GlobalActions>;
