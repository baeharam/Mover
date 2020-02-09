// @flow

import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, fireEvent, screen } from '@testing-library/react';
import LoginPopup from '../LoginPopup';

describe('LoginPopup의 테스트', () => {
  test('[MOVER], [로그인], [회원가입] 텍스트가 있어야 함', () => {
    const { getByText } = render(<LoginPopup />, {
      wrapper: MemoryRouter,
    });
    expect(getByText('MOVER')).toBeInTheDocument;
    expect(getByText('로그인')).toBeInTheDocument;
    expect(getByText('회원가입')).toBeInTheDocument;
  });

  test('회원가입 링크 정상 동작해야 함', () => {
    const { getByText } = render(<LoginPopup />, {
      wrapper: MemoryRouter,
    });

    fireEvent.click(getByText('회원가입'));
    expect(screen.getByTestId('location-display').textContent).toBe('/signup');
  });

  test('회원가입 링크 정상 동작해야 함', () => {
    const { getByText } = render(<LoginPopup />, {
      wrapper: MemoryRouter,
    });

    fireEvent.click(getByText('로그인'));
    expect(screen.getByTestId('location-display').textContent).toBe('/login');
  });
});
