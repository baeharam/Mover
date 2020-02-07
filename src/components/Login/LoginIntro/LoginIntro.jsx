import React from 'react';
import { Wrapper } from 'styles/variables';
import * as S from 'components/SignUp/SignUpIntro/style';

const LoginIntro = () => {
  return (
    <section>
      <Wrapper>
        <S.Container>
          <S.Title>MOVER</S.Title>
          <S.SubTitle>로그인</S.SubTitle>
        </S.Container>
      </Wrapper>
    </section>
  );
};

export default LoginIntro;
