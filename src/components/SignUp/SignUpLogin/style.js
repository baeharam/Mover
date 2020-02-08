// @flow

import type { ComponentType } from 'react';
import styled from 'styled-components';
import oc from 'open-color-js';
import { AiFillFacebook } from 'react-icons/ai';
import { secondaryColor } from 'styles/variables';
import { buttonStyle, inputFontSize } from '../SignUpForm/style';

const Divider: ComponentType<*> = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  width: 100%;

  span {
    &:first-child,
    &:last-child {
      width: 45.5%;
      height: 2px;
      background-color: ${oc.gray4};
    }
    &:nth-child(2) {
      flex: 1;
      text-align: center;
      color: ${oc.gray4};
      text-transform: uppercase;
    }
  }
`;

const LoginButton: ComponentType<*> = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${secondaryColor};

  ${buttonStyle}
`;

const FacebookIcon: ComponentType<*> = styled(AiFillFacebook)`
  font-size: calc(${inputFontSize} + 0.2rem);
  margin-right: 1rem;
`;

export { Divider, LoginButton, FacebookIcon };
