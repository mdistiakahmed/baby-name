"use client";

import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
} from "@nextui-org/react";

import { AcmeLogo } from "./AcmeLogo";
import CategoryDropdown from "./CategoryDropdown";
import MobileCategoryDropdown from "./MobileCategoryDropdown";

const NavComponent = () => {
  return (
    <Navbar isBordered className="bg-[#f06246]">
      <NavbarContent className="md:hidden" justify="start">
        <MobileCategoryDropdown />
      </NavbarContent>

      <NavbarContent className="md:hidden pr-3" justify="center">
        <NavbarBrand>
          <Link href={`/`} className="text-white">
            <AcmeLogo />
            <p className="font-bold text-inherit">Baby Name Nestlings</p>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden md:flex gap-4" justify="center">
        <NavbarBrand>
          <Link href={`/`} className="text-white">
            <AcmeLogo />
            <p className="font-bold text-inherit ">Baby Name Nestlings</p>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="end" className="hidden md:flex">
        <NavbarItem>
          <Link href="/usa/girl" className="text-white font-medium">
            <p>Girl Name</p>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/usa/boy" className="text-white font-medium">
            <p>Boy Name</p>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/christian" className="text-white font-medium">
            <p>Christian Name</p>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/hindu" className="text-white font-medium">
            <p>Hindu Name</p>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/islam" className="text-white font-medium">
            <p>Muslim Name</p>
          </Link>
        </NavbarItem>

        <NavbarItem>
          <CategoryDropdown />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default NavComponent;
