import React from 'react';
import { Wrapper } from 'styles/variables';
import { Container, Content } from './style';

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
