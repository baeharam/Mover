import styled from 'styled-components';
import { primaryColor } from 'styles/variables';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 35vh;
  font-weight: bold;
`;

const Title = styled.h1`
  color: ${primaryColor};
  font-size: 5rem;
  margin-bottom: 1rem;
`;

const SubTitle = styled.h2`
  color: black;
  font-size: 1.5rem;
`;

export { Container, Title, SubTitle };
