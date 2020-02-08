// @flow

import type { ComponentType } from 'react';
import styled from 'styled-components';

const Container: ComponentType<*> = styled.div`
  height: 15vh;
`;

const Content: ComponentType<*> = styled.p`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  height: 100%;
`;

export { Container, Content };
