import styled from 'styled-components';
import oc from 'open-color-js';
import { homeLoginBgColor } from 'styles/variables';

const LoginPopup = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  background-color: ${homeLoginBgColor};
  opacity: 0.93;
  width: 100%;
`;

const Container = styled.div`
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 17px;
  font-weight: bold;
`;

const Span = styled.span`
  font-size: 20px;
  font-weight: bold;
  color: white;
`;

const ButtonContainer = styled.div`
  display: flex;
`;

const SignUpButton = styled.button`
  display: block;
  background-color: ${oc.pink7};
  color: white;
  padding: 7px 10px;
  border-radius: 5px;
`;

const LoginButton = styled.button`
  background-color: transparent;
  color: ${oc.gray4};
  margin-right: 10px;
`;

export {
  LoginPopup,
  Container,
  Span,
  ButtonContainer,
  SignUpButton,
  LoginButton,
};
