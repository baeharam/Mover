// @flow

import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import HomeHeader from '../HomeHeader/HomeHeader';
import HomeIntro from '../HomeIntro/HomeIntro';
import HomeSearch from '../HomeSearch/HomeSearch';
import HomeFooter from '../HomeFooter/HomeFooter';

describe('Home의 컴포넌트 테스트', () => {
  describe('<HomeHeader />', () => {
    test('메뉴버튼이 있어야 함', () => {
      const { getByLabelText } = render(<HomeHeader />);
      expect(getByLabelText('메뉴')).toBeInTheDocument;
    });

    test('메뉴 클릭시, [프로필/평가하기/컬렉션 둘러보기/칼럼 쓰기]가 나와야 함', () => {
      const { getByLabelText } = render(<HomeHeader />);
      const menuButton = getByLabelText('메뉴');
      fireEvent.click(menuButton);
      expect(screen.getByText('프로필')).toBeInTheDocument;
      expect(screen.getByText('평가하기')).toBeInTheDocument;
      expect(screen.getByText('컬렉션 둘러보기')).toBeInTheDocument;
      expect(screen.getByText('칼럼 쓰기')).toBeInTheDocument;
    });
  });

  describe('<HomeIntro/ >', () => {
    test('[MOVER], [영화보는 사람들의 쉼터] 텍스트가 있어야 함', () => {
      const { getByText } = render(<HomeIntro />);
      expect(getByText('MOVER')).toBeInTheDocument;
      expect(getByText('영화보는 사람들의 쉼터')).toBeInTheDocument;
    });
  });

  describe('<HomeSearch />', () => {
    test('[영화,배우,감독을 검색해보세요.] 텍스트가 있어야 함', () => {
      const { getByPlaceholderText } = render(<HomeSearch />);
      expect(getByPlaceholderText('영화,배우,감독을 검색해보세요.'))
        .toBeInTheDocument;
    });

    test('input이 제대로 동작해야 함', () => {
      const { getByPlaceholderText } = render(<HomeSearch />);
      const input = getByPlaceholderText('영화,배우,감독을 검색해보세요.');
      fireEvent.change(input, { target: { value: '입력' } });
      expect(input.value).toBe('입력');
    });

    test('input이 활성화 될 때 닫기 버튼이 동작해야 함', () => {
      const { getByPlaceholderText } = render(<HomeSearch />);
      const input = getByPlaceholderText('영화,배우,감독을 검색해보세요.');
      fireEvent.change(input, { target: { value: '입력' } });

      const closeButton = screen.getByLabelText('닫기');
      closeButton.toBeInTheDocument;

      fireEvent.click(closeButton);
      expect(input.value).toBe('');
    });
  });

  describe('<HomeFooter />', () => {
    test('[현재 몇개의 별점이 쌓여있습니다.] 텍스트가 있어야 함', () => {
      const { getByText } = render(<HomeFooter />);
      const content = getByText('현재 몇개의 별점이 쌓여있습니다.');
      expect(content).toBeInTheDocument();
    });
  });
});
