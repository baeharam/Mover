import React from 'react';
import { Wrapper } from 'styles/variables';
import { Container } from '../SignUpForm/style';
import * as S from './style';

const SignUpLogin = () => {
  return (
    <section>
      <Wrapper>
        <Container>
          <S.Divider>
            <span />
            <span>or</span>
            <span />
          </S.Divider>
          <S.LoginButton>
            <S.FacebookIcon />
            페이스북으로 로그인
          </S.LoginButton>
        </Container>
      </Wrapper>
    </section>
  );
};

export default SignUpLogin;
