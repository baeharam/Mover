// @flow

import styled from 'styled-components';
import { homeHeaderHeight, homeHeaderNavBgColor } from 'styles/variables';

const HomeHeader = styled.header`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: ${homeHeaderHeight};
`;

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
`;

const MenuButton = styled.button`
  width: 2rem;
  height: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background: transparent;
  margin-top: 10px;
  cursor: pointer;

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: white;
    transition: all 0.2s linear;

    &:first-child {
      width: ${({ open }) => (open ? '2rem' : '1.3rem')};
      transform-origin: top left;
      transform: ${({ open }) => (open ? 'rotateZ(45deg)' : 'rotate(0)')};
    }

    &:nth-child(2) {
      opacity: ${({ open }) => (open ? 0 : 1)};
      transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
    }

    &:nth-child(3) {
      width: ${({ open }) => (open ? '2rem' : '1.3rem')};
      margin-left: auto;
      transform-origin: bottom left;
      transform: ${({ open }) => (open ? 'rotateZ(-45deg)' : 'rotate(0)')};
    }
  }
`;

const Nav = styled.nav`
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${homeHeaderNavBgColor};
  opacity: 0.93;
  transform: ${({ open }) => (open ? 'translateY(0)' : 'translateY(-100%)')};
  transition: transform 0.2s linear;
  padding: 1rem;
`;

const UL = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  color: white;
`;

const LI = styled.li`
  font-size: 20px;
  margin-bottom: 1rem;
  cursor: pointer;

  &:last-child {
    margin-bottom: 0;
  }
`;

export { HomeHeader, Container, MenuButton, Nav, UL, LI };
