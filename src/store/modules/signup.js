// @flow

import { createAction, handleActions, type ActionType } from 'redux-actions';
import produce from 'immer';

// Actions

const SIGNUP_REQUEST = 'signup/SIGNUP_REQUEST';
const SIGNUP_SUCCESS = 'signup/SIGNUP_SUCCESS';
const SIGNUP_FAILURE = 'signup/SIGNUP_FAILURE';

// Action Creators

export const signupRequest = createAction<string, *>(SIGNUP_REQUEST);
export const signupSuccess = createAction<string, *>(SIGNUP_SUCCESS);
export const signupFailure = createAction<string, {| error: string |}>(
  SIGNUP_FAILURE,
);

type SignUpRequestType = ActionType<typeof signupRequest>;
type SignUpSuccessType = ActionType<typeof signupSuccess>;
type SignUpFailureType = ActionType<typeof signupFailure>;

type SignUpActionType =
  | SignUpRequestType
  | SignUpSuccessType
  | SignUpFailureType;

// State

type SignUpStateType = {
  signupSuccess: boolean,
  signupLoading: boolean,
  signupError: string,
};

const initialState: SignUpStateType = {
  signupSuccess: false,
  signupLoading: false,
  signupError: '',
};

const reducer = handleActions<SignUpStateType, SignUpActionType>(
  {
    [SIGNUP_REQUEST]: (state, _action) => {
      return produce(state, draft => {
        draft.signupLoading = true;
      });
    },

    [SIGNUP_SUCCESS]: (state, _action) => {
      return produce(state, draft => {
        draft.signupSuccess = true;
        draft.signupLoading = false;
      });
    },

    [SIGNUP_FAILURE]: (state, action: SignUpFailureType) => {
      return produce(state, draft => {
        draft.signupError = action.payload.error;
        draft.signupLoading = false;
      });
    },
  },
  initialState,
);

export default reducer;
