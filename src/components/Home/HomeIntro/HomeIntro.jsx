// @flow

import React from 'react';
import { Wrapper } from 'styles/variables';
import * as S from './style';

const HomeIntro = () => {
  return (
    <S.Intro>
      <Wrapper>
        <S.Container>
          <S.Title>MOVER</S.Title>
          <S.SubTitle>영화보는 사람들의 쉼터</S.SubTitle>
        </S.Container>
      </Wrapper>
    </S.Intro>
  );
};

export default HomeIntro;
