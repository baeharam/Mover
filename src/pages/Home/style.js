import styled from 'styled-components';
import { FaStar } from 'react-icons/fa';
import 'styles/variables';

const Wrapper = styled.div`
  width: 90vw;
  margin: 0 auto;
`;

const HeaderSection = styled.section`
  background: linear-gradient(to right, #f64f59, #c471ed, #12c2e9);
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 50vh;
`;

const Header = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 64px;
`;

const StarIcon = styled(FaStar)`
  font-size: 36px;
  color: white;
  margin-right: 10px;
`;

const ProfileImg = styled.img`
  display: block;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: yellow;
`;

const Title = styled.h1`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  font-size: 50px;
  color: white;
  font-weight: bold;
`;

export {
  Wrapper,
  Header,
  HeaderSection,
  StarIcon,
  ProfileImg,
  Title,
  Container,
};
