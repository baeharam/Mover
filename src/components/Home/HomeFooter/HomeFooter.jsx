import React from 'react';
import { Wrapper } from 'styles/variables';
import * as S from './style';

const HomeFooter = () => {
  return (
    <footer>
      <Wrapper>
        <S.Container>
          <S.Content>현재 몇개의 별점이 쌓여있습니다.</S.Content>
        </S.Container>
      </Wrapper>
    </footer>
  );
};

export default HomeFooter;
