// @flow

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Wrapper } from 'styles/variables';
import { LocationDisplay } from 'App';
import * as S from './style';

const SignUpForm = () => {
  const { register, handleSubmit, errors, setValue } = useForm();

  const onSubmit = () => {};

  useEffect(() => {
    register({ name: 'name' }, { required: '이름을 입력하세요' });
    register(
      { name: 'email' },
      {
        required: '이메일을 입력하세요',
        pattern: { value: /^\S+@\S+$/, message: '이메일 형식에 맞지 않습니다' },
      },
    );
    register({ name: 'password' }, { required: '비밀번호를 입력하세요' });
  }, []);

  const onChange = name => (e: InputEventType) =>
    setValue(name, e.target.value, true);

  return (
    <>
      <section>
        <Wrapper>
          <S.Container>
            <S.Form data-testid="form" onSubmit={handleSubmit(onSubmit)}>
              <S.Input
                name="name"
                type="text"
                placeholder="이름"
                onChange={onChange('name')}
              />
              <S.Error error={errors.name}>
                {errors.name && errors.name.message}
              </S.Error>
              <S.Input
                name="email"
                type="email"
                placeholder="이메일"
                onChange={onChange('email')}
              />
              <S.Error error={errors.email}>
                {errors.email && errors.email.message}
              </S.Error>
              <S.Input
                name="password"
                type="password"
                placeholder="비밀번호"
                onChange={onChange('password')}
              />
              <S.Error error={errors.password}>
                {errors.password && errors.password.message}
              </S.Error>
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
      <LocationDisplay />
    </>
  );
};

export default SignUpForm;
