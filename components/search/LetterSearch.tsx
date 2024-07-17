"use client";

import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu, { MenuProps } from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";

const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    maxHeight: 200,
    overflowY: "auto",
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

const LetterSearch = ({ positions }: any) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const pathname = usePathname();
  const router = useRouter();

  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const onSelect = (letter: string) => {
    const segments = pathname.split("/");
    const lastSegment = segments[segments.length - 1];
    const isPaginatedPage = segments.includes("pagination");

    // Check if last segment ends with a single letter
    if (isPaginatedPage) {
      segments.pop();
      segments.pop();
      if (segments[segments.length - 1].length === 1) {
        segments.pop();
      }
      const newUrl = segments.join("/");
      router.push(`${newUrl}/${letter}`);
    } else if (lastSegment.length === 1) {
      const newPath = pathname.replace(/\/[A-Z]$/, `/${letter}`);
      router.push(newPath);
    } else {
      const newPath = `${pathname}/${letter}`;
      router.push(newPath);
    }

    setAnchorEl(null);
  };

  const alphabet = "A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z".split(
    ","
  );

  return (
    <div>
      <Button
        id="demo-customized-button"
        aria-controls={open ? "demo-customized-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
        fullWidth
      >
        Search by Letter
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {alphabet.map((letter, index) => (
          <div key={letter}>
            <MenuItem
              onClick={() => onSelect(letter)}
              disableRipple
              disabled={
                positions && positions[index] && positions[index][0] === -1
              }
            >
              <SearchIcon />
              {letter}
            </MenuItem>
            {(index + 1) % 5 === 0 && index < alphabet.length - 1 && (
              <Divider sx={{ my: 0.5 }} />
            )}
          </div>
        ))}
      </StyledMenu>
    </div>
  );
};

export default LetterSearch;
