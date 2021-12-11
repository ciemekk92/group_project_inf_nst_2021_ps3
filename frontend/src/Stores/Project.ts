import { Action, Reducer } from 'redux';
import { ActionTypes } from './constants';
import { AppThunkAction } from './store';
import { isDefined } from 'Utils/isDefined';
import { Api } from 'Utils/Api';

export interface ProjectState {
  isLoading: boolean;
  projects: Project[];
  project: Project;
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

interface SetProjectAction {
  type: typeof ActionTypes.SET_PROJECT;
  project: Project;
  isLoading: boolean;
}

interface SetLoadingAction {
  type: typeof ActionTypes.SET_LOADING;
  isLoading: boolean;
}

export type ProjectActionTypes = SetProjectsAction | SetProjectAction | SetLoadingAction;

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
  },
  createProject:
    (data: Project): AppThunkAction<ProjectActionTypes> =>
    async (dispatch, getState) => {
      const appState = getState();

      await dispatch({
        type: ActionTypes.SET_LOADING,
        isLoading: true
      });

      if (appState && appState.project) {
        const result = await Api.post('projects', data);

        if (result.status === 201) {
          await actionCreators.getProjects();
        }
      }
    },
  updateProject:
    (data: Project): AppThunkAction<ProjectActionTypes> =>
    async (dispatch, getState) => {
      const appState = getState();

      await dispatch({
        type: ActionTypes.SET_LOADING,
        isLoading: true
      });

      if (appState && appState.project) {
        const result = await Api.put(`projects/${data.id}`, data);

        if (result.status === 200) {
          console.log('succ');
        }
      }
    }
};

const initialState: ProjectState = {
  isLoading: false,
  projects: [],
  project: {
    id: '',
    name: '',
    description: '',
    issues: [],
    createdAt: '',
    updatedAt: '',
    users: []
  }
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
        ...state,
        projects: action.projects,
        isLoading: false
      };
    case ActionTypes.SET_PROJECT:
      return {
        ...state,
        project: action.project,
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
