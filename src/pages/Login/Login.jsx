import React from 'react';
import { LoginIntro, LoginForm } from 'components/Login/index';
import SignUpLogin from 'components/SignUp/SignUpLogin/SignUpLogin';

const Login = () => {
  return (
    <>
      <LoginIntro />
      <LoginForm />
      <SignUpLogin />
    </>
  );
};

export default Login;
