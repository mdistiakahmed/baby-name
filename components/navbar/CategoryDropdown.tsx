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
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Image from "next/image";

const CategoryDropdown = () => {
  const counties = [
    {
      name: "Bangladesh",
      code: "bd",
      boy_desc: "Bangladeshi boy names",
      girl_desc: "Bangladeshi girl names",
    },
    {
      name: "India",
      code: "in",
      boy_desc: "Indian boy names",
      girl_desc: "Indian girl names",
    },
    {
      name: "Japan",
      code: "jp",
      boy_desc: "Japanese boy names",
      girl_desc: "Japanse girl names",
    },
    {
      name: "Korea",
      code: "kr",
      boy_desc: "Korean boy names",
      girl_desc: "Korean girl names",
    },
    {
      name: "USA",
      code: "us",
      boy_desc: "American boy names",
      girl_desc: "American girl names",
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
  const iconClasses =
    "text-xl text-default-500 pointer-events-none flex-shrink-0";

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
      {`${r.name} boy name`}
    </DropdownItem>,
    <DropdownItem
      key={`${r.name}-girl`}
      startContent={
        <Image
          alt={"girl"}
          height={6}
          width={6}
          className="w-6 h-6"
          src={r.image}
        />
      }
    >
      {`${r.name} girl name`}
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
      {c.boy_desc}
    </DropdownItem>,
    <DropdownItem
      key={`${index}-girl`}
      startContent={
        <Avatar
          alt={c.name}
          className="w-6 h-6"
          src={`https://flagcdn.com/${c.code}.svg`}
        />
      }
    >
      {c.girl_desc}
    </DropdownItem>,
  ]);

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
        <Button color="primary">Search By Category</Button>
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
