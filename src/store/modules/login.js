// @flow

import { handleActions, type ActionType } from 'redux-actions';
import produce from 'immer';
import createRequestAction from '../util/createRequestAction';

export const actions = createRequestAction('LOGIN');

// State

type LoginStateType = {
  loginSuccess: boolean,
  loginError: string,
};

const initialState: LoginStateType = {
  loginSuccess: false,
  loginError: '',
};

type LoginActionRequestType = ActionType<typeof actions.request>;
type LoginActionSuccessType = ActionType<typeof actions.success>;
type LoginActionFailureType = ActionType<typeof actions.failure>;
type LoginActionType =
  | LoginActionRequestType
  | LoginActionSuccessType
  | LoginActionFailureType;

const reducer = handleActions<LoginStateType, LoginActionType>(
  {
    [actions.REQUEST]: (state, _action) => {
      return produce(state, draft => {
        draft.loginLoading = true;
      });
    },

    [actions.SUCCESS]: (state, _action) => {
      return produce(state, draft => {
        draft.loginSuccess = true;
        draft.loginLoading = false;
      });
    },

    [actions.FAILURE]: (state, action) => {
      return produce(state, draft => {
        draft.loginError = action.payload.error;
        draft.loginLoading = false;
      });
    },
  },
  initialState,
);

export default reducer;
