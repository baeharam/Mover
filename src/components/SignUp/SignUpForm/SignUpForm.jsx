import React from 'react';
import { Link } from 'react-router-dom';
import { Wrapper } from 'styles/variables';
import * as S from './style';

const SignUpForm = () => {
  return (
    <section>
      <Wrapper>
        <S.Container>
          <S.Form>
            <S.Input type="text" placeholder="이름" />
            <S.Input type="email" placeholder="이메일" />
            <S.Input type="password" placeholder="비밀번호" />
            <S.SignUpButton type="submit">회원가입</S.SignUpButton>
          </S.Form>
          <S.Message>
            이미 가입하셨나요?
            <Link to="/login">
              <span>로그인</span>
            </Link>
          </S.Message>
        </S.Container>
      </Wrapper>
    </section>
  );
};

export default SignUpForm;
