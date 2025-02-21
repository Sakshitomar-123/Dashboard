import styled from "styled-components";
import { NavLink } from 'react-router-dom';
import { colors } from '../../styles/theme';

const SidebarContainer = styled.aside`
  width: 250px;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  background: ${colors.background.sidebar};
  box-shadow: 4px 0 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  z-index: 1000;

  @media (max-width: 800px) {
    transform: translateX(${({ isOpen }) => (isOpen ? '0' : '-100%')});
  }
    
`;

const Logo = styled.div`
  padding: 20px;
  background: ${colors.background.dark};
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  gap: 12px;

  img {
    height: 32px;
  }

  span {
    font-size: 18px;
    font-weight: 600;
    color: ${colors.text.white};
    letter-spacing: 0.5px;
  }
`;

const NavContainer = styled.nav`
  padding: 15px 0;
`;

const NavItem = styled(NavLink)`
  display: flex;
  align-items: center;
  padding: 12px 20px;
  color: ${colors.text.light};
  text-decoration: none;
  font-size: 14px;
  transition: all 0.2s;
  border-left: 3px solid transparent;
  margin: 2px 0;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    color: ${colors.text.white};
  }

  &.active {
    background: rgba(37, 99, 235, 0.2);
    border-left-color: ${colors.primary};
    color: ${colors.text.white};
  }

  svg {
    width: 20px;
    height: 20px;
    margin-right: 12px;
  }
`;

export {NavContainer,NavItem,NavLink,Logo,SidebarContainer}