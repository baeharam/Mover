import styled from 'styled-components';
import { homeHeaderHeight, homeSearchHeight } from 'styles/variables';

const Container = styled.div`
  height: calc(105vh - (${homeHeaderHeight} + ${homeSearchHeight}));
`;

const Content = styled.p`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  height: 100%;
`;

export { Container, Content };
