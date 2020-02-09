// @flow

import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, fireEvent, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
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
      const { getByText, getByPlaceholderText } = render(<SignUpForm />, {
        wrapper: MemoryRouter,
      });
      expect(getByPlaceholderText('이름')).toBeInTheDocument;
      expect(getByPlaceholderText('이메일')).toBeInTheDocument;
      expect(getByPlaceholderText('비밀번호')).toBeInTheDocument;
      expect(getByText('회원가입')).toBeInTheDocument;
    });

    test('[이미 가입하셨나요?], [로그인] 텍스트가 있어야 함', () => {
      const { getByText } = render(<SignUpForm />, {
        wrapper: MemoryRouter,
      });
      expect(getByText('이미 가입하셨나요?')).toBeInTheDocument;
      expect(getByText('로그인')).toBeInTheDocument;
    });

    test('로그인 링크 정상 동작해야 함', () => {
      const { getByText } = render(<SignUpForm />, {
        wrapper: MemoryRouter,
      });

      fireEvent.click(getByText('로그인'));
      expect(screen.getByTestId('location-display').textContent).toBe('/login');
    });

    test('유효성 검사가 정상 동작해야 함', async () => {
      const { getByTestId } = render(<SignUpForm />, {
        wrapper: MemoryRouter,
      });

      await act(async () => {
        fireEvent.submit(getByTestId('form'));
      });

      expect(screen.getByText('이름을 입력하세요')).toBeInTheDocument;
      expect(screen.getByText('이메일을 입력하세요')).toBeInTheDocument;
      expect(screen.getByText('비밀번호를 입력하세요')).toBeInTheDocument;
    });
  });

  describe('<SignUpLogin />', () => {
    test('[페이스북으로 로그인] 텍스트가 있어야 함', () => {
      const { getByText } = render(<SignUpLogin />, {
        wrapper: MemoryRouter,
      });

      expect(getByText('페이스북으로 로그인')).toBeInTheDocument;
    });
  });
});
