import styled from 'styled-components';
import oc from 'open-color-js';
import { primaryColor } from 'styles/variables';

const PasswordMessage = styled.p`
  color: ${primaryColor};
  font-weight: bold;
  text-align: center;
  padding: 1rem 0;
  font-size: 1rem;
`;

const SignUpMessage = styled.p`
  color: ${oc.gray5};
  font-weight: bold;
  text-align: center;
  font-size: 1rem;
  padding: 1rem 0;

  span {
    margin-left: 0.5rem;
    color: black;
  }
`;

export { PasswordMessage, SignUpMessage };
