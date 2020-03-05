import { createStore, applyMiddleware, compose } from 'redux';
import { AppState } from './Store';
import { persistStore, persistReducer } from 'redux-persist';

import rootReducer from '@reducer/index';
import thunk from 'redux-thunk';

// defaults to localStorage for web
// TODO: Document for AsyncStorage for react-native

import storage from 'redux-persist/lib/storage';
import { INITIAL_GLOBAL_STATE } from '@reducer/GlobalState';
import { INITIAL_LOGIN_STATE } from '@reducer/LoginState';

declare const window;

const webRoot = (window as any).WEB_ROOT ? (window as any).WEB_ROOT : undefined;
const persistKey = 'blacksuit-' + (webRoot && webRoot !== '/' ? webRoot.substring(1) : 'root');

const persistConfig = {
  key: persistKey,
  storage: storage,
  whitelist: [],
  transforms: []
};

const composeEnhancers =
  (process.env.NODE_ENV === 'development' && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const configureStore = (initialState: AppState) => {
  // configure middlewares
  const middlewares = [thunk];
  // compose enhancers
  const enhancer = composeEnhancers(applyMiddleware(...middlewares));
  // persist reducers
  const persistentReducer = persistReducer(persistConfig, rootReducer);

  return createStore(persistentReducer, initialState, enhancer);
};

// Setup the initial state of the Redux store with defaults
// (instead of having things be undefined until they are populated by query)
// Redux 4.0 actually required this
const initialStore: AppState = {
  globalState: INITIAL_GLOBAL_STATE,
  authentication: INITIAL_LOGIN_STATE
};

// pass an optional param to rehydrate state on app start
export const store = configureStore(initialStore);
export const persistor = persistStore(store);
