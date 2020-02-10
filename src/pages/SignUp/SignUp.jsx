// @flow

import React from 'react';
import { useSelector } from 'react-redux';
import { actions } from 'store/modules/signup';
import { SignUpIntro, SignUpForm, SignUpLogin } from 'components/SignUp/index';
import Loader from 'components/Loader/Loader';

const SignUp = () => {
  const loadingState = useSelector(state => state.loading);
  const isLoading = loadingState[actions.TYPE];

  return (
    <>
      <SignUpIntro />
      <SignUpForm />
      <SignUpLogin />
      <Loader loading={isLoading} />
    </>
  );
};

export default SignUp;
