import styled from "styled-components";
import {Link} from 'react-router-dom';
import { ReactComponent as CwLogo } from '../../assets/Green-Logo.svg';

export const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  margin-top: 25px;

  @media screen and (max-width: 800px) {
    height: 60px;
    padding: 10px 20px;
    margin-bottom: 20px;
    font-size: 11px;
  }
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 5px;

  @media screen and (max-width: 800px) {
    padding: 0px;
  }
`;

export const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: 800px) {
    width: 80%;
  }
`;

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;

export const Logo = styled(CwLogo)`
  width: 100px;
  height: 55px;

  @media screen and (max-width: 800px) {
    width: 60px;
    height: 55px;
  }
` ;