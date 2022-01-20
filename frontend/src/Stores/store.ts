import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { UserState, reducer as userReducer } from './User';
import { ProjectState, reducer as projectReducer } from './Project';
import { composeWithDevTools } from '@redux-devtools/extension';

export interface ApplicationState {
  user: UserState | undefined;
  project: ProjectState | undefined;
}

export interface AppThunkAction<TAction> {
  (dispatch: (action: TAction) => void, getState: () => ApplicationState): void;
}

const composeEnhancers = composeWithDevTools({});

const rootReducer = combineReducers({ user: userReducer, project: projectReducer });

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
