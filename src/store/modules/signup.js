// @flow

import { handleActions, type ActionType } from 'redux-actions';
import produce from 'immer';
import createRequestAction from '../util/createRequestAction';

export const actions = createRequestAction('SIGNUP');

// State

type SignUpStateType = {
  signupSuccess: boolean,
  signupError: string,
};

const initialState: SignUpStateType = {
  signupSuccess: false,
  signupError: '',
};

type SignUpActionRequestType = ActionType<typeof actions.request>;
type SignUpActionSuccessType = ActionType<typeof actions.success>;
type SignUpActionFailureType = ActionType<typeof actions.failure>;
type SignUpActionType =
  | SignUpActionRequestType
  | SignUpActionSuccessType
  | SignUpActionFailureType;

const reducer = handleActions<SignUpStateType, SignUpActionType>(
  {
    [actions.REQUEST]: (state, _action) => {
      return produce(state, draft => {
        draft.signupLoading = true;
      });
    },

    [actions.SUCCESS]: (state, _action) => {
      return produce(state, draft => {
        draft.signupSuccess = true;
        draft.signupLoading = false;
      });
    },

    [actions.FAILURE]: (state, action) => {
      return produce(state, draft => {
        draft.signupError = action.payload.error;
        draft.signupLoading = false;
      });
    },
  },
  initialState,
);

export default reducer;
