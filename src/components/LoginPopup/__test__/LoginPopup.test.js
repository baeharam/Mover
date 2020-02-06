import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, fireEvent, screen } from '@testing-library/react';
import LoginPopup from '../LoginPopup';

describe('Test <LoginPopup />', () => {
  test('Should have text', () => {
    const { getByText } = render(
      <MemoryRouter initialEntries={['/', '/signup']}>
        <LoginPopup />
      </MemoryRouter>,
    );
    expect(getByText('MOVER')).toBeInTheDocument;
    expect(getByText('로그인')).toBeInTheDocument;
    expect(getByText('회원가입')).toBeInTheDocument;
  });

  test('Should link function works perfectly', () => {
    const { getByText } = render(
      <MemoryRouter initialEntries={['/', '/signup']}>
        <LoginPopup />
      </MemoryRouter>,
    );
    const signUpButton = getByText('회원가입');
    fireEvent.click(signUpButton);
    expect(screen.getByText('회원가입')).toBeInTheDocument;
  });
});
