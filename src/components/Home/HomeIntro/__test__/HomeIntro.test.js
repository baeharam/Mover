// @flow

import React from 'react';
import { render } from '@testing-library/react';
import HomeIntro from '../HomeIntro';

describe('Test <HomeIntro/ >', () => {
  test('Should have text', () => {
    const { getByText } = render(<HomeIntro />);
    expect(getByText('MOVER')).toBeInTheDocument;
    expect(getByText('영화보는 사람들의 쉼터')).toBeInTheDocument;
  });
});
