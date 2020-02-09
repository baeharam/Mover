// @flow

import { createAction, handleActions, type ActionType } from 'redux-actions';
import produce from 'immer';

// Actions

const USER_LOGIN = 'user/USER_LOGIN';
const USER_LOGOUT = 'user/USER_LOGOUT';

// Action Creators

type UserLoginActionPayloadType = {
  name: string,
  profile: string,
  collections: Array<number>,
  followings: Array<number>,
  followers: Array<number>,
  movies: Array<number>,
};

export const userLogin = createAction<string, UserLoginActionPayloadType>(
  USER_LOGIN,
);
export const userLogout = createAction<string, *>(USER_LOGOUT);

type UserLoginActionType = ActionType<typeof userLogin>;
type UserLogoutActionType = ActionType<typeof userLogout>;

type UserActionType = UserLoginActionType | UserLogoutActionType;

// State

type UserStateType = {
  isLoggedIn: boolean,
  user: UserLoginActionPayloadType,
};

const initialState: UserStateType = {
  isLoggedIn: false,
  user: {},
};

const reducer = handleActions<UserStateType, UserActionType>(
  {
    [USER_LOGIN]: (state, action: UserLoginActionType) => {
      return produce(state, draft => {
        draft.isLoggedIn = true;
        draft.user = action.payload;
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
