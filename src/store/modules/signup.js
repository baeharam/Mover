import { handleActions } from 'redux-actions';
import produce from 'immer';
import createRequestAction from '../util/createRequestAction';

export const actions = createRequestAction('SIGNUP');

const initialState = {
  signupSuccess: false,
  signupError: '',
};

const reducer = handleActions(
  {
    [actions.REQUEST]: (state, _action) => {
      return produce(state, draft => draft);
    },

    [actions.SUCCESS]: (state, _action) => {
      return produce(state, draft => {
        draft.signupSuccess = true;
      });
    },

    [actions.FAILURE]: (state, action) => {
      return produce(state, draft => {
        draft.signupError = action.payload.error;
      });
    },
  },
  initialState,
);

export default reducer;
