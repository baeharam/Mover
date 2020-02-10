import { handleActions } from 'redux-actions';
import produce from 'immer';
import createRequestAction from '../util/createRequestAction';

export const actions = createRequestAction('LOGIN');

const initialState = {
  loginSuccess: false,
  loginError: '',
};

const reducer = handleActions(
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
