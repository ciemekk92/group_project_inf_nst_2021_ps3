import { Action, Reducer } from 'redux';
import { AppThunkAction } from './store';
import { ActionTypes } from './constants';
import { Api } from 'Utils/Api';
import { isDefined } from '../Utils/isDefined';

export interface UserState {
  isLoading: boolean;
  userInfo: UserInfo;
  accessToken: string;
}

export interface UserInfo {
  email: string;
  displayName: string;
  firstName: string;
  lastName: string;
}

interface LoginCredentials {
  email: string;
  password: string;
}

interface SetLoginInfoAction {
  type: typeof ActionTypes.SET_LOGIN_INFO;
  userInfo: UserInfo;
  accessToken: string;
}

interface SetTokenAction {
  type: typeof ActionTypes.SET_TOKEN;
  accessToken: string;
}

interface SetLogoutAction {
  type: typeof ActionTypes.SET_LOGOUT;
}

export type UserActionTypes = SetLoginInfoAction | SetTokenAction | SetLogoutAction;

export const actionCreators = {
  loginUser:
    ({ email, password }: LoginCredentials): AppThunkAction<UserActionTypes> =>
    async (dispatch, getState) => {
      const appState = getState();

      if (appState && appState.user) {
        const result = await Api.post('auth/login', { email, password });

        if (result) {
          console.log(result);
        }
      }
    }
};

const initialState: UserState = {
  isLoading: false,
  userInfo: {
    email: '',
    displayName: '',
    firstName: '',
    lastName: ''
  },
  accessToken: ''
};

export const reducer: Reducer<UserState> = (
  state: UserState | undefined,
  incomingAction: Action
): UserState => {
  if (!isDefined(state)) {
    return initialState;
  }

  const action = incomingAction as UserActionTypes;

  switch (action.type) {
    case ActionTypes.SET_LOGIN_INFO:
      return {
        userInfo: action.userInfo,
        isLoading: true,
        accessToken: action.accessToken
      };
  }

  return state;
};
