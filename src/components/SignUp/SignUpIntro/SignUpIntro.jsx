import React from 'react';
import { Wrapper } from 'styles/variables';
import * as S from './style';

const SignUpIntro = () => {
  return (
    <section>
      <Wrapper>
        <S.Container>
          <S.Title>MOVER</S.Title>
          <S.SubTitle>회원가입</S.SubTitle>
        </S.Container>
      </Wrapper>
    </section>
  );
};

export default SignUpIntro;
