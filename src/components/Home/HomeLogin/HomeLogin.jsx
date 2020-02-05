import React from 'react';
import { Wrapper } from 'styles/variables';
import {
  LoginPopup,
  Container,
  Span,
  ButtonContainer,
  SignUpButton,
  LoginButton,
} from './style';

const HomeLogin = () => {
  return (
    <LoginPopup>
      <Wrapper>
        <Container>
          <Span>MOVER</Span>
          <ButtonContainer>
            <LoginButton>로그인</LoginButton>
            <SignUpButton>회원가입</SignUpButton>
          </ButtonContainer>
        </Container>
      </Wrapper>
    </LoginPopup>
  );
};

export default HomeLogin;
