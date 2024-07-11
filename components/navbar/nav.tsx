"use client";

import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
} from "@nextui-org/react";

import { AcmeLogo } from "./AcmeLogo";
import CategoryDropdown from "./CategoryDropdown";

const NavComponent = () => {
  return (
    <Navbar isBordered className="bg-[#f06246]">
      <NavbarContent className="sm:hidden" justify="start">
        <CategoryDropdown isMobile={true} />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <Link href={`/`} className="text-white">
            <AcmeLogo />
            <p className="font-bold text-inherit">Baby Name Nestlings</p>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand>
          <Link href={`/`} className="text-white">
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
    </Navbar>
  );
};

export default NavComponent;
