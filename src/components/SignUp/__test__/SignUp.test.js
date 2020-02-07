// @flow

import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, fireEvent, screen } from '@testing-library/react';
import { SignUpIntro, SignUpForm, SignUpLogin } from '../index';

describe('SignUp의 컴포넌트 테스트', () => {
  describe('<SignUpIntro />', () => {
    test('[MOVER], [회원가입] 텍스트가 있어야 함', () => {
      const { getByText } = render(<SignUpIntro />);
      expect(getByText('MOVER')).toBeInTheDocument;
      expect(getByText('회원가입')).toBeInTheDocument;
    });
  });

  // TODO: 회원가입 누르고 리덕스 테스팅
  describe('<SignUpForm />', () => {
    test('[이름], [이메일], [비밀번호] placeholder와 [회원가입] 텍스트가 있어야 함', () => {
      const { getByText, getByPlaceholderText } = render(
        <MemoryRouter initialEntries={['/signup', '/login']}>
          <SignUpForm />
        </MemoryRouter>,
      );
      expect(getByPlaceholderText('이름')).toBeInTheDocument;
      expect(getByPlaceholderText('이메일')).toBeInTheDocument;
      expect(getByPlaceholderText('비밀번호')).toBeInTheDocument;
      expect(getByText('회원가입')).toBeInTheDocument;
    });

    test('[이미 가입하셨나요?], [로그인] 텍스트가 있어야 함', () => {
      const { getByText } = render(
        <MemoryRouter initialEntries={['/signup', '/login']}>
          <SignUpForm />
        </MemoryRouter>,
      );
      expect(getByText('이미 가입하셨나요?')).toBeInTheDocument;
      expect(getByText('로그인')).toBeInTheDocument;
    });

    test('로그인 링크가 정상 동작해야 함', () => {
      const { getByText } = render(
        <MemoryRouter initialEntries={['/signup', '/login']}>
          <SignUpForm />
        </MemoryRouter>,
      );

      const LoginButton = getByText('로그인');
      fireEvent.click(LoginButton);
      expect(screen.getByText('로그인')).toBeInTheDocument;
    });
  });

  describe('<SignUpLogin />', () => {
    test('[페이스북으로 로그인] 텍스트가 있어야 함', () => {
      const { getByText } = render(
        <MemoryRouter initialEntries={['/signup', '/login']}>
          <SignUpLogin />
        </MemoryRouter>,
      );

      expect(getByText('페이스북으로 로그인')).toBeInTheDocument;
    });
  });
});
