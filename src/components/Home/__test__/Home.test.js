// @flow

import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import HomeHeader from '../HomeHeader/HomeHeader';
import HomeIntro from '../HomeIntro/HomeIntro';
import HomeSearch from '../HomeSearch/HomeSearch';
import HomeFooter from '../HomeFooter/HomeFooter';

describe('Test <Home />', () => {
  describe('Test <HomeHeader />', () => {
    test('Should have menu button', () => {
      const { getByLabelText } = render(<HomeHeader />);
      expect(getByLabelText('메뉴')).toBeInTheDocument;
    });

    test('Should open menu when click button', () => {
      const { getByLabelText } = render(<HomeHeader />);
      const menuButton = getByLabelText('메뉴');
      fireEvent.click(menuButton);
      expect(screen.getByText('프로필')).toBeInTheDocument;
      expect(screen.getByText('평가하기')).toBeInTheDocument;
      expect(screen.getByText('컬렉션 둘러보기')).toBeInTheDocument;
      expect(screen.getByText('칼럼 쓰기')).toBeInTheDocument;
    });
  });

  describe('Test <HomeIntro/ >', () => {
    test('Should have text', () => {
      const { getByText } = render(<HomeIntro />);
      expect(getByText('MOVER')).toBeInTheDocument;
      expect(getByText('영화보는 사람들의 쉼터')).toBeInTheDocument;
    });
  });

  describe('Test <HomeSearch />', () => {
    test('Should have text', () => {
      const { getByPlaceholderText } = render(<HomeSearch />);
      expect(getByPlaceholderText('영화,배우,감독을 검색해보세요.'))
        .toBeInTheDocument;
    });

    test('Should input works perfectly', () => {
      const { getByPlaceholderText } = render(<HomeSearch />);
      const input = getByPlaceholderText('영화,배우,감독을 검색해보세요.');
      fireEvent.change(input, { target: { value: '입력' } });
      expect(input.value).toBe('입력');
    });

    test('Should show close button works perfectly', () => {
      const { getByPlaceholderText } = render(<HomeSearch />);
      const input = getByPlaceholderText('영화,배우,감독을 검색해보세요.');
      fireEvent.change(input, { target: { value: '입력' } });

      const closeButton = screen.getByLabelText('닫기');
      closeButton.toBeInTheDocument;

      fireEvent.click(closeButton);
      expect(input.value).toBe('');
    });
  });

  describe('Test <HomeFooter />', () => {
    test('Should have content', () => {
      const { getByText } = render(<HomeFooter />);
      const content = getByText('현재 몇개의 별점이 쌓여있습니다.');
      expect(content).toBeInTheDocument();
    });
  });
});
