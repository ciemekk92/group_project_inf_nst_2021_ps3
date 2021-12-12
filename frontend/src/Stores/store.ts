import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { UserState, reducer as userReducer } from './User';
import { ProjectState, reducer as projectReducer } from './Project';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

export interface ApplicationState {
  user: UserState | undefined;
  project: ProjectState | undefined;
}

export interface AppThunkAction<TAction> {
  (dispatch: (action: TAction) => void, getState: () => ApplicationState): void;
}

const composeEnhancers =
  process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;

const rootReducer = combineReducers({ user: userReducer, project: projectReducer });

export const store = createStore(rootReducer, composeEnhancers?.(applyMiddleware(thunk)));
