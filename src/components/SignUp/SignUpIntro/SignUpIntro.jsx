import React from 'react';
import { Wrapper } from 'styles/variables';
import { Link } from 'react-router-dom';
import LocationDisplay from 'utils/router';
import * as S from './style';

const SignUpIntro = () => {
  return (
    <>
      <section>
        <Wrapper>
          <S.Container>
            <Link to="/">
              <S.Title>MOVER</S.Title>
            </Link>
            <S.SubTitle>회원가입</S.SubTitle>
          </S.Container>
        </Wrapper>
      </section>
      <LocationDisplay />
    </>
  );
};

export default SignUpIntro;
