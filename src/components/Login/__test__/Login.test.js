import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import renderWithRedux from 'utils/renderWithRedux';
import withTestRouter from 'utils/withTestRouter';
import { LoginIntro, LoginForm } from '../index';

describe('Login의 컴포넌트 테스트', () => {
  const path = '/login';

  describe('<LoginIntro />', () => {
    test('[MOVER], [로그인] 텍스트가 있어야 함', () => {
      const { getByText } = render(withTestRouter(<LoginIntro />, path));
      expect(getByText('MOVER')).toBeInTheDocument;
      expect(getByText('로그인')).toBeInTheDocument;
    });

    test('홈으로 가는 링크가 정상 동작해야 함', () => {
      const { getByText } = render(withTestRouter(<LoginIntro />, path));
      fireEvent.click(getByText('MOVER'));
      expect(screen.getByTestId('location-display').textContent).toBe('/');
    });
  });

  describe('<LoginForm />', () => {
    test('[이메일], [비밀번호] placeholder와 [로그인] 텍스트가 있어야 함', () => {
      const { getByText, getByPlaceholderText } = renderWithRedux(
        withTestRouter(<LoginForm />, path),
      );
      expect(getByPlaceholderText('이메일')).toBeInTheDocument;
      expect(getByPlaceholderText('비밀번호')).toBeInTheDocument;
      expect(getByText('로그인')).toBeInTheDocument;
    });

    test('[비밀번호를 잊어버리셨나요?], [계정이 없으신가요?], [회원가입] 텍스트가 있어야 함', () => {
      const { getByText } = renderWithRedux(
        withTestRouter(<LoginForm />, path),
      );

      expect(getByText('비밀번호를 잊어버리셨나요?')).toBeInTheDocument;
      expect(getByText('계정이 없으신가요?')).toBeInTheDocument;
      expect(getByText('회원가입')).toBeInTheDocument;
    });

    test('회원가입 링크 정상 동작해야 함', () => {
      const { getByText } = renderWithRedux(
        withTestRouter(<LoginForm />, path),
      );

      fireEvent.click(getByText('회원가입'));
      expect(screen.getByTestId('location-display').textContent).toBe(
        '/signup',
      );
    });
  });
});
