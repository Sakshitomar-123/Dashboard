

import styled from "styled-components";

const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;

  .menu-button {
    display: none;
    cursor: pointer;

    @media (max-width: 800px) {
      display: block;
    }
  }
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const HeaderContainer = styled.header`
  height: 64px;
  background: ${(props) => props.theme.colors.background.header};
  border-bottom: 1px solid ${(props) => props.theme.colors.border};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  margin-left: 250px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);

  @media (max-width: 800px) {
    margin-left: 0;
  }
`;

const NavTabs = styled.div`
  display: flex;
  gap: 8px;

  @media (max-width: 1000px) {
    display: none;
  }
`;

const NavTab = styled.a`
  color: ${(props) => props.theme.colors.text.secondary};
  text-decoration: none;
  font-size: 14px;
  padding: 8px 16px;
  border-radius: 6px;
  transition: all 0.2s;
  font-weight: 500;

  &.active {
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.text.white};
  }

  &:hover:not(.active) {
    background-color: rgba(37, 99, 235, 0.1);
    color: ${(props) => props.theme.colors.primary};
  }
`;

const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  position: relative;
  color: ${(props) => props.theme.colors.text.secondary};
  padding: 8px;
  border-radius: 50%;
  transition: all 0.2s;

  &:hover {
    background-color: rgba(37, 99, 235, 0.1);
    color: ${(props) => props.theme.colors.primary};
  }

  .notification-dot {
    position: absolute;
    top: 4px;
    right: 4px;
    width: 8px;
    height: 8px;
    background-color: ${(props) => props.theme.colors.danger};
    border-radius: 50%;
    border: 2px solid ${(props) => props.theme.colors.background.header};
  }
`;

const UserProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  padding: 6px 12px;
  border-radius: 8px;
  transition: all 0.2s;

  &:hover {
    background-color: rgba(37, 99, 235, 0.1);
  }

  img {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    border: 2px solid ${(props) => props.theme.colors.primary};
  }

  span {
    font-size: 14px;
    color: ${(props) => props.theme.colors.text.primary};
    font-weight: 500;

    @media (max-width: 480px) {
      display: none;
    }
       @media (max-width: 1200px) {
      display: none;
    }
  }
`;

const MailDropdown = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 8px;
  background: red;
  border-radius: 8px;
  color:white,
  font-weight:bold,
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

const DropdownItem = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  padding: 12px 16px;
  border: none;
  background: none;
  color:white,
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: rgba(37, 99, 235, 0.1);
  }
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${(props) => props.theme.colors.text.secondary};
  cursor: pointer;
  padding: 8px;
  border-radius: 6px;
  transition: all 0.2s;

  &:hover {
    background-color: rgba(37, 99, 235, 0.1);
    color: ${(props) => props.theme.colors.primary};
  }

  @media (max-width: 768px) {
    display: block;
  }
     @media (max-width: 1200px) {
    display: block;
  }
`;

export {MenuButton,MailDropdown,DropdownItem,UserProfile,IconButton,NavTab,NavTabs,
    HeaderContainer,RightSection,LeftSection,
 }