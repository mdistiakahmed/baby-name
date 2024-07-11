import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  DropdownSection,
  Button,
  cn,
  Avatar,
} from "@nextui-org/react";
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";

const CategoryDropdown = ({ isMobile }: any) => {
  const counties = [
    {
      name: "Bangladesh",
      code: "bd",
      desc: "Bangladeshi names",
    },
    {
      name: "India",
      code: "in",
      desc: "Indian names",
    },
    {
      name: "Japan",
      code: "jp",
      desc: "Japanese names",
    },
    {
      name: "Korea",
      code: "kr",
      desc: "Korean names",
    },
    {
      name: "USA",
      code: "us",
      desc: "American names",
    },
  ];

  const religions = [
    {
      name: "Islamic",
      image: "/islam-icon.svg",
    },
    {
      name: "Hindu",
      image: "/hindu-temple-icon.svg",
    },
    {
      name: "Christian",
      image: "/church-icon.svg",
    },
  ];

  const religionsOptions = religions.flatMap((r, index) => [
    <DropdownItem
      key={`${r.name}-boy`}
      startContent={
        <Image
          alt={"boy"}
          height={6}
          width={6}
          className="w-6 h-6"
          src={r.image}
        />
      }
    >
      {`${r.name} name`}
    </DropdownItem>,
  ]);

  const genderOptions = [
    <DropdownItem
      key={`boy`}
      description={`Baby boy names`}
      startContent={
        <Image
          alt={"girl"}
          height={6}
          width={6}
          className="w-6 h-6"
          src={`/male-symbol-icon.svg`}
        />
      }
    >
      {`Boy names`}
    </DropdownItem>,
    <DropdownItem
      key={`girl`}
      description={`Baby girl names `}
      startContent={
        <Image
          alt={"girl"}
          height={6}
          width={6}
          className="w-6 h-6"
          src={`/woman-symbol-icon.svg`}
        />
      }
    >
      {`Girl names`}
    </DropdownItem>,
  ];

  const countriesOptions = counties.flatMap((c, index) => [
    <DropdownItem
      key={`${index}-boy`}
      startContent={
        <Avatar
          alt={c.name}
          className="w-6 h-6"
          src={`https://flagcdn.com/${c.code}.svg`}
        />
      }
    >
      {c.desc}
    </DropdownItem>,
  ]);

  const handleButtonClick = () => {
    // Handle button click logic if needed
  };
  return (
    <Dropdown
      showArrow
      classNames={{
        base: "before:bg-default-200",
        content:
          "py-1 px-1 border border-default-200 bg-gradient-to-br from-white to-default-200 dark:from-default-50 dark:to-black",
      }}
    >
      <DropdownTrigger>
        <div>
          {isMobile && <MenuIcon sx={{ color: "white" }} />}
          {!isMobile && (
            <p className="bg-[#006fee] text-white p-2 rounded-lg cursor-pointer">
              Search By Category
            </p>
          )}
        </div>
      </DropdownTrigger>
      <DropdownMenu
        variant="faded"
        aria-label="Dropdown menu with description"
        style={{ maxHeight: "400px", overflowY: "auto" }}
      >
        <DropdownSection title="By Gender">{genderOptions}</DropdownSection>
        <DropdownSection title="By Religion">
          {religionsOptions}
        </DropdownSection>
        <DropdownSection title="By Country">{countriesOptions}</DropdownSection>
      </DropdownMenu>
    </Dropdown>
  );
};

export default CategoryDropdown;
