// @flow

import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, fireEvent, screen } from '@testing-library/react';
import LoginPopup from '../LoginPopup';

describe('LoginPopup의 테스트', () => {
  test('[MOVER], [로그인], [회원가입] 텍스트가 있어야 함', () => {
    const { getByText } = render(
      <MemoryRouter initialEntries={['/', '/signup']}>
        <LoginPopup />
      </MemoryRouter>,
    );
    expect(getByText('MOVER')).toBeInTheDocument;
    expect(getByText('로그인')).toBeInTheDocument;
    expect(getByText('회원가입')).toBeInTheDocument;
  });

  test('회원가입 링크가 정상 동작해야 함', () => {
    const { getByText } = render(
      <MemoryRouter initialEntries={['/', '/signup']}>
        <LoginPopup />
      </MemoryRouter>,
    );
    const signUpButton = getByText('회원가입');
    fireEvent.click(signUpButton);
    expect(screen.getByText('회원가입')).toBeInTheDocument;
  });

  test('로그인 링크가 정상 동작해야 함', () => {
    const { getByText } = render(
      <MemoryRouter initialEntries={['/', '/login']}>
        <LoginPopup />
      </MemoryRouter>,
    );
    const loginButton = getByText('로그인');
    fireEvent.click(loginButton);
    expect(screen.getByText('로그인')).toBeInTheDocument;
  });
});
