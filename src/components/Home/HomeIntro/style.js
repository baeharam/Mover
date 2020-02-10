import styled from 'styled-components';

const Intro = styled.section`
  background: linear-gradient(to right, #f64f59, #c471ed, #12c2e9);
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 80px;
  height: 50vh;
`;

const Title = styled.h1`
  color: white;
  font-weight: bold;
  margin-bottom: 10px;
  text-shadow: 0 3px 3px white;
`;

const SubTitle = styled.p`
  color: white;
  font-size: 0.25em;
`;

export { Intro, Container, Title, SubTitle };
