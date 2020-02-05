import React from 'react';
import { Container, Content } from './style';
import { Wrapper } from 'styles/variables';

const HomeFooter = () => {
  return (
    <footer>
      <Wrapper>
        <Container>
          <Content>현재 몇개의 별점이 쌓여있습니다.</Content>
        </Container>
      </Wrapper>
    </footer>
  );
};

export default HomeFooter;
