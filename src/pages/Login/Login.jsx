import React from 'react';
import { useSelector } from 'react-redux';
import { LoginIntro, LoginForm } from 'components/Login/index';
import { actions } from 'store/modules/login';
import SignUpLogin from 'components/SignUp/SignUpLogin/SignUpLogin';
import Loader from 'components/Loader/Loader';

const Login = () => {
  const loadingState = useSelector(state => state.loading);
  const isLoading = loadingState[actions.TYPE];

  return (
    <>
      <LoginIntro />
      <LoginForm />
      <SignUpLogin />
      <Loader loading={isLoading} />
    </>
  );
};

export default Login;
