// @flow

import React from 'react';
import { render } from '@testing-library/react';
import HomeFooter from '../HomeFooter';

describe('Test <HomeFooter />', () => {
  test('Should have content', () => {
    const { getByText } = render(<HomeFooter />);
    const content = getByText('현재 몇개의 별점이 쌓여있습니다.');
    expect(content).toBeInTheDocument();
  });
});
