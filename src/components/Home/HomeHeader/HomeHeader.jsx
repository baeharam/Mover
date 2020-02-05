// @flow

import React from 'react';
import { Wrapper } from 'styles/variables';
import {
  Header,
  StarIcon,
  ProfileImg,
  Intro,
  Title,
  SubTitle,
  Container,
  HeaderSection,
} from './style';

const HomeHeader = () => {
  return (
    <HeaderSection>
      <Wrapper>
        <Container>
          <Header>
            <StarIcon />
            <ProfileImg />
          </Header>
          <Intro>
            <Title>MOVER</Title>
            <SubTitle>영화보는 사람들의 쉼터</SubTitle>
          </Intro>
        </Container>
      </Wrapper>
    </HeaderSection>
  );
};

export default HomeHeader;
