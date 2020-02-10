// @flow

import React, { type ElementType } from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from 'store/modules/index';

export default function renderWithRedux(
  component: ElementType,
  { initialState, store = createStore(rootReducer, initialState) } = {}
) {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  };
}
