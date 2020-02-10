// @flow

import React from 'react';
import { Link } from 'react-router-dom';
import { Wrapper } from 'styles/variables';
import {
  Container,
  Form,
  Input,
  SignUpButton,
} from 'components/SignUp/SignUpForm/style';
import LocationDisplay from 'utils/router';
import { useDispatch } from 'react-redux';
import { actions } from 'store/modules/login';
import * as S from './style';

const LoginForm = () => {
  const dispatch = useDispatch();

  const onSubmitLogin = e => {
    e.preventDefault();
    dispatch(actions.request());
  };

  return (
    <>
      <section>
        <Wrapper>
          <Container>
            <Form onSubmit={onSubmitLogin}>
              <Input type="email" placeholder="이메일" />
              <Input type="password" placeholder="비밀번호" />
              <SignUpButton type="submit">로그인</SignUpButton>
            </Form>
            <S.PasswordMessage>비밀번호를 잊어버리셨나요?</S.PasswordMessage>
            <S.SignUpMessage>
              계정이 없으신가요?
              <Link to="/signup">
                <span>회원가입</span>
              </Link>
            </S.SignUpMessage>
          </Container>
        </Wrapper>
      </section>
      <LocationDisplay />
    </>
  );
};

export default LoginForm;
