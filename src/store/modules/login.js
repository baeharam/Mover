// @flow

import { createAction, handleActions, type ActionType } from 'redux-actions';
import produce from 'immer';

// Actions

const LOGIN_REQUEST = 'login/LOGIN_REQUEST';
const LOGIN_SUCCESS = 'login/LOGIN_SUCCESS';
const LOGIN_FAILURE = 'login/LOGIN_FAILURE';

// Action Creators

export const loginRequest = createAction<string, *>(LOGIN_REQUEST);
export const loginSuccess = createAction<string, *>(LOGIN_SUCCESS);
export const loginFailure = createAction<string, {| error: string |}>(
  LOGIN_FAILURE,
);

type LoginRequestType = ActionType<typeof loginRequest>;
type LoginSuccessType = ActionType<typeof loginSuccess>;
type LoginFailureType = ActionType<typeof loginFailure>;

type LoginActionType = LoginRequestType | LoginSuccessType | LoginFailureType;

// State

type LoginStateType = {
  loginSuccess: boolean,
  loginLoading: boolean,
  loginError: string,
};

const initialState: LoginStateType = {
  loginSuccess: false,
  loginLoading: false,
  loginError: '',
};

const reducer = handleActions<LoginStateType, LoginActionType>(
  {
    [LOGIN_REQUEST]: (state, _action) => {
      return produce(state, draft => {
        draft.loginLoading = true;
      });
    },

    [LOGIN_SUCCESS]: (state, _action) => {
      return produce(state, draft => {
        draft.loginSuccess = true;
        draft.loginLoading = false;
      });
    },

    [LOGIN_FAILURE]: (state, action: LoginFailureType) => {
      return produce(state, draft => {
        draft.loginError = action.payload.error;
        draft.loginLoading = false;
      });
    },
  },
  initialState,
);

export default reducer;
