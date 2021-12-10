import { Action, Reducer } from 'redux';
import { ActionTypes } from './constants';
import { AppThunkAction } from './store';
import { isDefined } from 'Utils/isDefined';
import { Api } from 'Utils/Api';

export interface ProjectState {
  isLoading: boolean;
  projects: Project[];
}

export interface Project {
  id: Id;
  name: string;
  description: string;
  issues: any[];
  createdAt: string;
  updatedAt: string;
  users: {
    id: Id;
    displayName: string;
    profileImage: Nullable<string>;
  }[];
}

interface SetProjectsAction {
  type: typeof ActionTypes.SET_PROJECTS;
  projects: Project[];
  isLoading: boolean;
}

interface SetLoadingAction {
  type: typeof ActionTypes.SET_LOADING;
  isLoading: boolean;
}

export type ProjectActionTypes = SetProjectsAction | SetLoadingAction;

export const actionCreators = {
  getProjects: (): AppThunkAction<ProjectActionTypes> => async (dispatch, getState) => {
    const appState = getState();

    await dispatch({
      type: ActionTypes.SET_LOADING,
      isLoading: true
    });

    if (appState && appState.project) {
      const result = await Api.getFull('projects');

      if (result.status === 200) {
        const json = await result.json();

        dispatch({
          type: ActionTypes.SET_PROJECTS,
          projects: json,
          isLoading: false
        });
      }
    }
  }
};

const initialState: ProjectState = {
  isLoading: false,
  projects: []
};

export const reducer: Reducer<ProjectState> = (
  state: ProjectState | undefined,
  incomingAction: Action
): ProjectState => {
  if (!isDefined(state)) {
    return initialState;
  }

  const action = incomingAction as ProjectActionTypes;

  switch (action.type) {
    case ActionTypes.SET_PROJECTS:
      return {
        projects: action.projects,
        isLoading: false
      };
    case ActionTypes.SET_LOADING:
      return {
        ...state,
        isLoading: action.isLoading
      };
    default:
      return state;
  }
};
