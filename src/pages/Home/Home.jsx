// @flow

import React from 'react';
import {
  HomeHeader,
  HomeIntro,
  HomeSearch,
  HomeFooter,
} from 'components/Home/index';
import LoginPopup from 'components/LoginPopup/LoginPopup';

const Home = () => {
  return (
    <>
      <HomeHeader />
      <HomeIntro />
      <HomeSearch />
      <HomeFooter />
      <LoginPopup />
    </>
  );
};

export default Home;
