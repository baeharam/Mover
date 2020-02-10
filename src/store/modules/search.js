import { handleActions } from 'redux-actions';
import { produce } from 'immer';
import createRequestAction from '../util/createRequestAction';

export const actions = createRequestAction('SEARCH');

const initialState = {
  searchSuccess: false,
  searchError: '',
  movies: [{}],
  users: [{}],
};

const reducer = handleActions(
  {
    [actions.REQUEST]: (state, _action) => {
      return produce(state, draft => draft);
    },

    [actions.SUCCESS]: (state, action) => {
      return produce(state, draft => {
        draft.searchSuccess = true;
        draft.movies = action.payload.movies;
        draft.users = action.payload.users;
      });
    },

    [actions.FAILURE]: (state, action) => {
      return produce(state, draft => {
        draft.searchError = action.payload.error;
      });
    },
  },
  initialState,
);

export default reducer;
