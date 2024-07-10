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
          <Dropdown
            showArrow
            classNames={{
              base: "before:bg-default-200", // change arrow background
              content:
                "py-1 px-1 border border-default-200 bg-gradient-to-br from-white to-default-200 dark:from-default-50 dark:to-black",
            }}
          >
            <DropdownTrigger>
              <Button color="primary">Search By Category</Button>
            </DropdownTrigger>
            <DropdownMenu
              variant="faded"
              aria-label="Dropdown menu with description"
              style={{ maxHeight: "300px", overflowY: "auto" }}
            >
              <DropdownSection title="Actions">
                <DropdownItem
                  key="new"
                  shortcut="⌘N"
                  description="Create a new file"
                  startContent={<MoreHorizIcon className={iconClasses} />}
                >
                  New file
                </DropdownItem>
                <DropdownItem
                  key="copy"
                  shortcut="⌘C"
                  description="Copy the file link"
                  startContent={<MoreHorizIcon className={iconClasses} />}
                >
                  Copy link
                </DropdownItem>
                <DropdownItem
                  key="edit"
                  shortcut="⌘⇧E"
                  description="Allows you to edit the file"
                  startContent={<MoreHorizIcon className={iconClasses} />}
                >
                  Edit file
                </DropdownItem>
              </DropdownSection>
              <DropdownSection title="Actions">
                <DropdownItem
                  key="new"
                  shortcut="⌘N"
                  description="Create a new file"
                  startContent={<MoreHorizIcon className={iconClasses} />}
                >
                  New file
                </DropdownItem>
                <DropdownItem
                  key="copy"
                  shortcut="⌘C"
                  description="Copy the file link"
                  startContent={<MoreHorizIcon className={iconClasses} />}
                >
                  Copy link
                </DropdownItem>
                <DropdownItem
                  key="edit"
                  shortcut="⌘⇧E"
                  description="Allows you to edit the file"
                  startContent={<MoreHorizIcon className={iconClasses} />}
                >
                  Edit file
                </DropdownItem>
              </DropdownSection>
              <DropdownSection title="Actions">
                <DropdownItem
                  key="new"
                  shortcut="⌘N"
                  description="Create a new file"
                  startContent={<MoreHorizIcon className={iconClasses} />}
                >
                  New file
                </DropdownItem>
                <DropdownItem
                  key="copy"
                  shortcut="⌘C"
                  description="Copy the file link"
                  startContent={<MoreHorizIcon className={iconClasses} />}
                >
                  Copy link
                </DropdownItem>
                <DropdownItem
                  key="edit"
                  shortcut="⌘⇧E"
                  description="Allows you to edit the file"
                  startContent={<MoreHorizIcon className={iconClasses} />}
                >
                  Edit file
                </DropdownItem>
              </DropdownSection>
              <DropdownSection title="Actions">
                <DropdownItem
                  key="new"
                  shortcut="⌘N"
                  description="Create a new file"
                  startContent={<MoreHorizIcon className={iconClasses} />}
                >
                  New file
                </DropdownItem>
                <DropdownItem
                  key="copy"
                  shortcut="⌘C"
                  description="Copy the file link"
                  startContent={<MoreHorizIcon className={iconClasses} />}
                >
                  Copy link
                </DropdownItem>
                <DropdownItem
                  key="edit"
                  shortcut="⌘⇧E"
                  description="Allows you to edit the file"
                  startContent={<MoreHorizIcon className={iconClasses} />}
                  onClick={() => console.log("edit clicked...")}
                >
                  Edit file
                </DropdownItem>
              </DropdownSection>
              <DropdownSection title="Danger zone">
                <DropdownItem
                  key="delete"
                  className="text-danger"
                  color="danger"
                  shortcut="⌘⇧D"
                  description="Permanently delete the file"
                  startContent={
                    <MoreHorizIcon className={cn(iconClasses, "text-danger")} />
                  }
                >
                  Delete file
                </DropdownItem>
              </DropdownSection>
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="bg-gray-300">
        <Dropdown
          showArrow
          classNames={{
            base: "before:bg-default-200", // change arrow background
            content:
              "py-1 px-1 border border-default-200 bg-gradient-to-br from-white to-default-200 dark:from-default-50 dark:to-black",
          }}
        >
          <DropdownTrigger>
            <Button color="primary">Search By Category</Button>
          </DropdownTrigger>
          <DropdownMenu
            variant="faded"
            aria-label="Dropdown menu with description"
            style={{ maxHeight: "400px", overflowY: "auto" }}
          >
            <DropdownSection title="Actions">
              <DropdownItem
                key="new"
                shortcut="⌘N"
                description="Create a new file"
                startContent={<MoreHorizIcon className={iconClasses} />}
              >
                New file
              </DropdownItem>
              <DropdownItem
                key="copy"
                shortcut="⌘C"
                description="Copy the file link"
                startContent={<MoreHorizIcon className={iconClasses} />}
              >
                Copy link
              </DropdownItem>
              <DropdownItem
                key="edit"
                shortcut="⌘⇧E"
                description="Allows you to edit the file"
                startContent={<MoreHorizIcon className={iconClasses} />}
              >
                Edit file
              </DropdownItem>
            </DropdownSection>
            <DropdownSection title="Actions">
              <DropdownItem
                key="new"
                shortcut="⌘N"
                description="Create a new file"
                startContent={<MoreHorizIcon className={iconClasses} />}
              >
                New file
              </DropdownItem>
              <DropdownItem
                key="copy"
                shortcut="⌘C"
                description="Copy the file link"
                startContent={<MoreHorizIcon className={iconClasses} />}
              >
                Copy link
              </DropdownItem>
              <DropdownItem
                key="edit"
                shortcut="⌘⇧E"
                description="Allows you to edit the file"
                startContent={<MoreHorizIcon className={iconClasses} />}
              >
                Edit file
              </DropdownItem>
            </DropdownSection>
            <DropdownSection title="Actions">
              <DropdownItem
                key="new"
                shortcut="⌘N"
                description="Create a new file"
                startContent={<MoreHorizIcon className={iconClasses} />}
              >
                New file
              </DropdownItem>
              <DropdownItem
                key="copy"
                shortcut="⌘C"
                description="Copy the file link"
                startContent={<MoreHorizIcon className={iconClasses} />}
              >
                Copy link
              </DropdownItem>
              <DropdownItem
                key="edit"
                shortcut="⌘⇧E"
                description="Allows you to edit the file"
                startContent={<MoreHorizIcon className={iconClasses} />}
              >
                Edit file
              </DropdownItem>
            </DropdownSection>
            <DropdownSection title="Actions">
              <DropdownItem
                key="new"
                shortcut="⌘N"
                description="Create a new file"
                startContent={<MoreHorizIcon className={iconClasses} />}
              >
                New file
              </DropdownItem>
              <DropdownItem
                key="copy"
                shortcut="⌘C"
                description="Copy the file link"
                startContent={<MoreHorizIcon className={iconClasses} />}
              >
                Copy link
              </DropdownItem>
              <DropdownItem
                key="edit"
                shortcut="⌘⇧E"
                description="Allows you to edit the file"
                startContent={<MoreHorizIcon className={iconClasses} />}
                onClick={() => console.log("edit clicked...")}
              >
                Edit file
              </DropdownItem>
            </DropdownSection>
            <DropdownSection title="Danger zone">
              <DropdownItem
                key="delete"
                className="text-danger"
                color="danger"
                shortcut="⌘⇧D"
                description="Permanently delete the file"
                startContent={
                  <MoreHorizIcon className={cn(iconClasses, "text-danger")} />
                }
              >
                Delete file
              </DropdownItem>
            </DropdownSection>
          </DropdownMenu>
        </Dropdown>
      </NavbarMenu>
    </Navbar>
  );
};

export default NavComponent;
