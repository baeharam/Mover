// @flow

import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, fireEvent, screen } from '@testing-library/react';
import renderWithRedux from 'utils/renderWithRedux';
import { LoginIntro, LoginForm } from '../index';

describe('Login의 컴포넌트 테스트', () => {
  describe('<LoginIntro />', () => {
    test('[MOVER], [로그인] 텍스트가 있어야 함', () => {
      const { getByText } = render(<LoginIntro />);
      expect(getByText('MOVER')).toBeInTheDocument;
      expect(getByText('로그인')).toBeInTheDocument;
    });
  });

  describe('<LoginForm />', () => {
    test('[이메일], [비밀번호] placeholder와 [로그인] 텍스트가 있어야 함', () => {
      const { getByText, getByPlaceholderText } = renderWithRedux(
        <MemoryRouter>
          <LoginForm />
        </MemoryRouter>,
      );
      expect(getByPlaceholderText('이메일')).toBeInTheDocument;
      expect(getByPlaceholderText('비밀번호')).toBeInTheDocument;
      expect(getByText('로그인')).toBeInTheDocument;
    });

    test('[비밀번호를 잊어버리셨나요?], [계정이 없으신가요?], [회원가입] 텍스트가 있어야 함', () => {
      const { getByText } = renderWithRedux(
        <MemoryRouter>
          <LoginForm />
        </MemoryRouter>,
      );

      expect(getByText('비밀번호를 잊어버리셨나요?')).toBeInTheDocument;
      expect(getByText('계정이 없으신가요?')).toBeInTheDocument;
      expect(getByText('회원가입')).toBeInTheDocument;
    });

    test('회원가입 링크 정상 동작해야 함', () => {
      const { getByText } = renderWithRedux(
        <MemoryRouter>
          <LoginForm />
        </MemoryRouter>,
      );

      fireEvent.click(getByText('회원가입'));
      expect(screen.getByTestId('location-display').textContent).toBe(
        '/signup',
      );
    });
  });
});
