// @flow

import type { ComponentType } from 'react';
import styled from 'styled-components';
import oc from 'open-color-js';
import { FaSearch } from 'react-icons/fa';
import { IoIosCloseCircle } from 'react-icons/io';
import { device, beigeColor } from 'styles/variables';

const SearchSection: ComponentType<*> = styled.section`
  background-color: ${beigeColor};
`;

const Container: ComponentType<*> = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 40vh;
`;

const SearchBar: ComponentType<*> = styled.div`
  display: flex;
  align-items: center;
  width: 85vw;
  height: 50px;
  background-color: white;
  padding: 5px 20px;
  box-sizing: border-box;
  border: 3px solid ${oc.gray3};
  border-radius: 3px;
  box-shadow: 0 3px 3px 0 ${oc.gray5};
  margin-top: -30px;

  @media ${device.tablet} {
    width: 700px;
  }
`;

const SearchIcon = styled(FaSearch)`
  font-size: 20px;
  margin-right: 10px;
  color: ${oc.gray5};
`;

const SearchInput: ComponentType<*> = styled.input`
  height: 100%;
  width: 100%;
  border-radius: 3px;
  border: none;
  font-size: 15px;

  &::placeholder {
    font-size: inherit;
    font-weight: bold;
    color: ${oc.gray5};
  }
`;

const CloseIcon = styled(IoIosCloseCircle)`
  font-size: 20px;
  color: ${oc.gray5};
`;

export {
  SearchSection,
  Container,
  SearchBar,
  SearchInput,
  SearchIcon,
  CloseIcon,
};
