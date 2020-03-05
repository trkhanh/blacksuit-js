import { combineReducers } from 'redux';

import { AppState } from '@Store';
import loginState from './LoginState';
import globalState from './GlobalState';
import { BlacksuitAppAction } from '@actions/BlacksuitAppAction';

const rootReducer = combineReducers<AppState, BlacksuitAppAction>({
  authentication: loginState,
  globalState: globalState
});

export default rootReducer;
