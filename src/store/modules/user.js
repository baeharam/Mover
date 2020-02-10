import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

// Actions

const USER_LOGIN = 'user/USER_LOGIN';
const USER_LOGOUT = 'user/USER_LOGOUT';

// Action Creators

export const userLogin = createAction(USER_LOGIN);
export const userLogout = createAction(USER_LOGOUT);

// State

const initialState = {
  isLoggedIn: false,
  user: {},
};

const reducer = handleActions(
  {
    [USER_LOGIN]: (state, action) => {
      return produce(state, draft => {
        draft.isLoggedIn = true;
        draft.user = action.payload.user;
      });
    },

    [USER_LOGOUT]: state => {
      return produce(state, draft => {
        draft.isLoggedIn = false;
        draft.user = {};
      });
    },
  },
  initialState,
);

export default reducer;
