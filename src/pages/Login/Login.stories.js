// @flow

import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import Login from './Login';

export default {
  title: 'pages|Login',
  component: Login,
};

export const InitialLogin = () => (
  <MemoryRouter>
    <Login />
  </MemoryRouter>
);
InitialLogin.story = { name: '초기' };
