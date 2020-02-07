import React from 'react';
import { Link } from 'react-router-dom';
import { Wrapper } from 'styles/variables';
import * as S from './style';

const LoginPopup = () => {
  return (
    <S.Popup>
      <Wrapper>
        <S.Container>
          <S.Span>MOVER</S.Span>
          <S.ButtonContainer>
            <Link to="/login">
              <S.LoginButton>로그인</S.LoginButton>
            </Link>
            <Link to="/signup">
              <S.SignUpButton>회원가입</S.SignUpButton>
            </Link>
          </S.ButtonContainer>
        </S.Container>
      </Wrapper>
    </S.Popup>
  );
};

export default LoginPopup;
