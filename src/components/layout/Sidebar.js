import React from "react";
import {
  LayoutDashboard,
  Clock,
  Calendar,
  Users,
  ClipboardList,
  Target,
  FileText,
  ShoppingCart,
  CreditCard,
  Building2,
  FileBarChart,
} from "lucide-react";
import logo from "../../styles/logo.png";
import {
  NavContainer,
  NavItem,
  Logo,
  SidebarContainer,
} from "../styled/Sidebar.styles";

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/" },
  { icon: Clock, label: "Attendance", path: "/attendance" },
  { icon: Calendar, label: "Leaves", path: "/leaves" },
  { icon: Users, label: "Organization", path: "/organization" },
  { icon: ClipboardList, label: "Tasks", path: "/tasks" },
  { icon: Target, label: "Beat", path: "/beat" },
  { icon: FileText, label: "Targets", path: "/targets" },
  { icon: FileText, label: "Form", path: "/form" },
  { icon: ShoppingCart, label: "Order", path: "/order" },
  { icon: CreditCard, label: "Expenses", path: "/expenses" },
  { icon: Building2, label: "Clients & Sites", path: "/clients" },
  { icon: FileBarChart, label: "Reports", path: "/reports" },
];

export const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <SidebarContainer isOpen={isOpen}>
      <Logo>
        <img src={logo} alt="Unolo" />
        <span>Professional</span>
      </Logo>
      <NavContainer>
        {menuItems.map((item) => (
          <NavItem
            key={item.path}
            to={item.path}
            onClick={() => window.innerWidth <= 768 && toggleSidebar()}
          >
            <item.icon />
            {item.label}
          </NavItem>
        ))}
      </NavContainer>
    </SidebarContainer>
  );
};
