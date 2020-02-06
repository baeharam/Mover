// @flow

import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import HomeSearch from '../HomeSearch';

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
