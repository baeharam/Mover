// @flow

import React, { useState } from 'react';
import { Wrapper } from 'styles/variables';
import * as S from './style';

const HomeSearch = () => {
  const [searchValue, setSearchValue] = useState('');
  const onChangeSearch = e => {
    setSearchValue(e.target.value);
  };
  const onClickClose = () => {
    setSearchValue('');
  };

  return (
    <S.SearchSection>
      <Wrapper>
        <S.Container>
          <form action="">
            <S.SearchBar>
              <S.SearchIcon />
              <S.SearchInput
                onChange={onChangeSearch}
                value={searchValue}
                placeholder="영화,배우,감독을 검색해보세요."
              />
              {searchValue ? (
                <S.CloseIcon aria-label="닫기" onClick={onClickClose} />
              ) : null}
            </S.SearchBar>
          </form>
        </S.Container>
      </Wrapper>
    </S.SearchSection>
  );
};

export default HomeSearch;
