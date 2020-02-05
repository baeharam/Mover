import React from 'react';
import { Wrapper } from 'styles/variables';
import {
  Popup,
  Container,
  Span,
  ButtonContainer,
  SignUpButton,
  LoginButton,
} from './style';

const LoginPopup = () => {
  return (
    <Popup>
      <Wrapper>
        <Container>
          <Span>MOVER</Span>
          <ButtonContainer>
            <LoginButton>로그인</LoginButton>
            <SignUpButton>회원가입</SignUpButton>
          </ButtonContainer>
        </Container>
      </Wrapper>
    </Popup>
  );
};

export default LoginPopup;
