import styled from 'styled-components';
import { FaStar } from 'react-icons/fa';
import { homeHeaderHeight } from 'styles/variables';

const HeaderSection = styled.section`
  background: linear-gradient(to right, #f64f59, #c471ed, #12c2e9);
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: ${homeHeaderHeight};
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

const Intro = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 80px;
`;

const Title = styled.h1`
  color: white;
  font-weight: bold;
  margin-bottom: 10px;
  text-shadow: 0 3px 3px white;
`;

const SubTitle = styled.p`
  color: white;
  font-size: 0.25em;
`;

export {
  Header,
  HeaderSection,
  StarIcon,
  ProfileImg,
  Title,
  Container,
  Intro,
  SubTitle,
};
