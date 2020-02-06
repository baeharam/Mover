import styled from 'styled-components';
import { homeIntroHeight, homeSearchHeight } from 'styles/variables';

const Container = styled.div`
  height: calc(105vh - (${homeIntroHeight} + ${homeSearchHeight}));
`;

const Content = styled.p`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  height: 100%;
`;

export { Container, Content };
