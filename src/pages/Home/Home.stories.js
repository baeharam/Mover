import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import Home from './Home';

export default {
  title: 'pages|Home',
  component: Home,
};

export const InitialHome = () => (
  <MemoryRouter>
    <Home />
  </MemoryRouter>
);

InitialHome.story = { name: '초기' };
