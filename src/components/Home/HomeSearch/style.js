import styled from 'styled-components';
import oc from 'open-color-js';
import { FaSearch } from 'react-icons/fa';
import { device, searchBackgroundColor, homeSearchHeight } from 'styles/variables';

const SearchSection = styled.section`
  background-color: ${searchBackgroundColor};
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: ${homeSearchHeight};
`;

const SearchBar = styled.div`
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
  height: 100%;
  font-size: 20px;
  margin-right: 10px;
  color: ${oc.gray5};
`;

const SearchInput = styled.input`
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

export { SearchSection, Container, SearchBar, SearchInput, SearchIcon };
