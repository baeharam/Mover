import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import SignUp from './SignUp';

export default {
  title: 'pages|SignUp',
  component: SignUp,
};

export const InitialSignUp = () => (
  <MemoryRouter>
    <SignUp />
  </MemoryRouter>
);
InitialSignUp.story = { name: '초기' };
