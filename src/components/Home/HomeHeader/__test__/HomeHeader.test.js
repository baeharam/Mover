// @flow

import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import HomeHeader from '../HomeHeader';

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
