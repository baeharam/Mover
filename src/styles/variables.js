// @flow

import type { ComponentType } from 'react';
import styled from 'styled-components';

// Themeing

export const primaryColor = '#ff2e77';
export const secondaryColor = '#3c5aa0';
export const beigeColor = '#f5f5f5';
export const weakBlackColor = '#232323';

// Component

export const Wrapper: ComponentType<*> = styled.div`
  width: 90vw;
  margin: 0 auto;
`;

// Media Query

const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px',
};

export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`,
};
