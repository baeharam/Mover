// @flow

import type { ComponentType } from 'react';
import styled from 'styled-components';
import oc from 'open-color-js';
import { weakBlackColor, primaryColor } from 'styles/variables';

const Popup: ComponentType<*> = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  background-color: ${weakBlackColor};
  opacity: 0.93;
  width: 100%;
`;

const Container: ComponentType<*> = styled.div`
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 17px;
  font-weight: bold;
`;

const Span: ComponentType<*> = styled.span`
  font-size: 20px;
  font-weight: bold;
  color: white;
`;

const ButtonContainer: ComponentType<*> = styled.div`
  display: flex;
  align-items: center;
`;

const SignUpButton: ComponentType<*> = styled.button`
  display: block;
  background-color: ${primaryColor};
  color: white;
  padding: 7px 10px;
  border-radius: 5px;
  font-weight: bold;
`;

const LoginButton: ComponentType<*> = styled.button`
  background-color: transparent;
  color: ${oc.gray4};
  margin-right: 10px;
  font-weight: bold;
`;

export { Popup, Container, Span, ButtonContainer, SignUpButton, LoginButton };
