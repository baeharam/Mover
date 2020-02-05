// @flow

import React from 'react';
import {
  HomeHeader,
  HomeSearch,
  HomeFooter,
  HomeLogin,
} from 'components/Home/index';

const Home = () => {
  return (
    <>
      <HomeHeader />
      <HomeSearch />
      <HomeFooter />
      <HomeLogin />
    </>
  );
};

export default Home;
