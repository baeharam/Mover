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
      return produce(state, draft => draft);
    },

    [actions.SUCCESS]: (state, _action) => {
      return produce(state, draft => {
        draft.loginSuccess = true;
      });
    },

    [actions.FAILURE]: (state, action) => {
      return produce(state, draft => {
        draft.loginError = action.payload.error;
      });
    },
  },
  initialState,
);

export default reducer;
