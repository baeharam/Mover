// @flow

import React, { useState } from 'react';
import { Wrapper } from 'styles/variables';
import {
  SearchSection,
  Container,
  SearchBar,
  SearchInput,
  SearchIcon,
  CloseIcon,
} from './style';

const HomeSearch = () => {
  const [searchValue, setSearchValue] = useState('');
  const onChangeSearch = e => {
    setSearchValue(e.target.value);
  };
  const onClickClose = () => {
    setSearchValue('');
  };

  return (
    <SearchSection>
      <Wrapper>
        <Container>
          <form action="">
            <SearchBar>
              <SearchIcon />
              <SearchInput
                onChange={onChangeSearch}
                value={searchValue}
                placeholder="영화,배우,감독을 검색해보세요."
              />
              {searchValue ? <CloseIcon onClick={onClickClose} /> : null}
            </SearchBar>
          </form>
        </Container>
      </Wrapper>
    </SearchSection>
  );
};

export default HomeSearch;
