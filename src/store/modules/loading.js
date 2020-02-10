// @flow

import { createAction, handleActions, type ActionType } from 'redux-actions';
import produce from 'immer';

export const START_LOADING = 'START_LOADING';
export const FINISH_LOADING = 'FINISH_LOADING';

export const startLoading = createAction<string, {| type: string |}>(
  START_LOADING,
);
export const finishLoading = createAction<string, {| type: string |}>(
  FINISH_LOADING,
);

type StartLoadingActionType = ActionType<typeof startLoading>;
type FinishLoadingActionType = ActionType<typeof finishLoading>;

type LoadingActionType = StartLoadingActionType | FinishLoadingActionType;

type LoadingStateType = {
  [key: string]: boolean,
};

const initialState = {};

const reducer = handleActions<LoadingStateType, LoadingActionType>(
  {
    [START_LOADING]: (state, action) => {
      return produce(state, draft => {
        draft[action.payload.type] = true;
      });
    },

    [FINISH_LOADING]: (state, action) => {
      return produce(state, draft => {
        draft[action.payload.type] = false;
      });
    },
  },
  initialState,
);

export default reducer;
