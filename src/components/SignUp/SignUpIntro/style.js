// @flow

import type { ComponentType } from 'react';
import styled from 'styled-components';
import { primaryColor } from 'styles/variables';

const Container: ComponentType<*> = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 35vh;
  font-weight: bold;
`;

const Title: ComponentType<*> = styled.h1`
  color: ${primaryColor};
  font-size: 5rem;
  margin-bottom: 1rem;
`;

const SubTitle: ComponentType<*> = styled.h2`
  color: black;
  font-size: 1.5rem;
`;

export { Container, Title, SubTitle };
