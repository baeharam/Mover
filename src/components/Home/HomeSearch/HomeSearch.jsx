import React from 'react';
import { Wrapper } from 'styles/variables';
import {
  SearchSection,
  Container,
  SearchBar,
  SearchInput,
  SearchIcon,
} from './style';

const HomeSearch = () => {
  return (
    <SearchSection>
      <Wrapper>
        <Container>
          <form action="">
            <SearchBar>
              <SearchIcon />
              <SearchInput placeholder="영화,배우,감독을 검색해보세요." />
            </SearchBar>
          </form>
        </Container>
      </Wrapper>
    </SearchSection>
  );
};

export default HomeSearch;
