"use client";

import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  NavbarContent,
  NavbarItem,
  Link,
  DropdownSection,
} from "@nextui-org/react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
  cn,
} from "@nextui-org/react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

import { AcmeLogo } from "./AcmeLogo";
import CategoryDropdown from "./CategoryDropdown";

const NavComponent = () => {
  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  const iconClasses =
    "text-xl text-default-500 pointer-events-none flex-shrink-0";

  return (
    <Navbar disableAnimation isBordered className="bg-gray-300">
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <Link href={`/`} className="text-black">
            <AcmeLogo />
            <p className="font-bold text-inherit ">Baby Name Nestlings</p>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand>
          <Link href={`/`} className="text-black">
            <AcmeLogo />
            <p className="font-bold text-inherit ">Baby Name Nestlings</p>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="end" className="hidden sm:flex">
        <NavbarItem>
          <CategoryDropdown />
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="bg-gray-300">
        <CategoryDropdown />
      </NavbarMenu>
    </Navbar>
  );
};

export default NavComponent;
