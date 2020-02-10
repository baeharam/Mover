import React from 'react';
import { Wrapper } from 'styles/variables';
import * as S from 'components/SignUp/SignUpIntro/style';
import { Link } from 'react-router-dom';
import LocationDisplay from 'utils/router';

const LoginIntro = () => {
  return (
    <>
      <section>
        <Wrapper>
          <S.Container>
            <Link to="/">
              <S.Title>MOVER</S.Title>
            </Link>
            <S.SubTitle>로그인</S.SubTitle>
          </S.Container>
        </Wrapper>
      </section>
      <LocationDisplay />
    </>
  );
};

export default LoginIntro;
