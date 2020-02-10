import React, { useState } from 'react';
import { Wrapper } from 'styles/variables';
import PropTypes from 'prop-types';
import * as S from './style';

const MenuButton = ({ onClickMenu, open }) => {
  return (
    <S.MenuButton
      open={open}
      onClick={onClickMenu}
      type="button"
      aria-label="메뉴"
    >
      <div />
      <div />
      <div />
    </S.MenuButton>
  );
};

MenuButton.propTypes = {
  onClickMenu: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

const HomeHeader = () => {
  const [open, setOpen] = useState(false);
  const onClickMenu = () => {
    setOpen(!open);
  };

  return (
    <S.HomeHeader>
      <S.Nav open={open}>
        <S.UL>
          <S.LI>프로필</S.LI>
          <S.LI>평가하기</S.LI>
          <S.LI>컬렉션 둘러보기</S.LI>
          <S.LI>칼럼 쓰기</S.LI>
        </S.UL>
      </S.Nav>
      <Wrapper>
        <S.Container>
          <MenuButton open={open} onClickMenu={onClickMenu} />
        </S.Container>
      </Wrapper>
    </S.HomeHeader>
  );
};

export default HomeHeader;
