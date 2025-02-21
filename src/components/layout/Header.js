import React, { useState } from "react";
import { Menu, Bell, Mail, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import logo from "../../styles/logo.png";
import { MenuButton,MailDropdown,DropdownItem,UserProfile,IconButton,NavTab,NavTabs,
  HeaderContainer,RightSection,LeftSection, } from "../styled/Header.styles";


export const Header = ({ toggleSidebar }) => {
  const [showMailDropdown, setShowMailDropdown] = useState(false);
  const navigate = useNavigate();
  const userMail = localStorage.getItem("userEmail");

  const handleLogout = () => {
    localStorage.removeItem("userEmail");
    navigate("/");
    setShowMailDropdown(false);
  };

  return (
    <HeaderContainer>
      <LeftSection>
        <MenuButton onClick={toggleSidebar}>
          <Menu size={24} />
        </MenuButton>
        <NavTabs>
          <NavTab href="#" className="active">
            Overview
          </NavTab>
          <NavTab href="#">Live Location</NavTab>
          <NavTab href="#">Timeline</NavTab>
          <NavTab href="#">Card View</NavTab>
          <NavTab href="#">Compliance Status</NavTab>
          <NavTab href="#">Site Attendance</NavTab>
        </NavTabs>
      </LeftSection>

      <RightSection>
        <IconButton>
          <Bell size={20} />
          <div className="notification-dot" />
        </IconButton>
        <IconButton>
          <Mail size={20} />
        </IconButton>
        <div style={{ position: "relative" }}>
          <IconButton onClick={() => setShowMailDropdown(!showMailDropdown)}>
            <UserProfile>
              <img src={logo} alt="User" />
              <span>{userMail}</span>
            </UserProfile>
          </IconButton>
          {showMailDropdown && (
            <MailDropdown>
              <DropdownItem onClick={handleLogout} style={{color:'white'}}>
                <LogOut size={16} />
                <span>
                  Logout
                </span>
              </DropdownItem>
            </MailDropdown>
          )}
        </div>
      </RightSection>
    </HeaderContainer>
  );
};

export default Header;
