import styled, { css } from 'styled-components';
import oc from 'open-color-js';
import { primaryColor, beigeColor, device } from 'styles/variables';

const inputHeight = '2.8rem';
const inputBorderRadius = '5px';
const inputDesktopWidth = '500px';
const inputFontSize = '1.2rem';

const inputStyle = css`
  width: 100%;
  height: ${inputHeight};
  border-radius: ${inputBorderRadius};
  font-size: ${inputFontSize};
`;

const buttonStyle = css`
  color: white;
  font-weight: bold;

  ${inputStyle};
`;

const Input = styled.input`
  display: block;
  background-color: ${beigeColor};
  margin-bottom: 1rem;
  padding: 0 1rem;
  box-sizing: border-box;

  ${inputStyle};

  &:last-child {
    margin-bottom: 0;
  }

  &::placeholder {
    font-weight: bold;
    color: ${oc.gray5};
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const SignUpButton = styled.button`
  background-color: ${primaryColor};
  margin-bottom: 1rem;

  ${buttonStyle};
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  margin: 0 auto;

  @media ${device.tablet} {
    width: ${inputDesktopWidth};
  }
`;

const Message = styled.p`
  text-align: center;
  color: ${oc.gray5};
  font-weight: bold;
  margin-bottom: 3rem;

  span {
    margin-left: 0.5rem;
    color: ${primaryColor};
  }
`;

export {
  Input,
  Form,
  SignUpButton,
  Container,
  Message,
  buttonStyle,
  inputFontSize,
};
