import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  DropdownSection,
  Avatar,
} from "@nextui-org/react";
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";
import { countries, religions } from "@/utils/constants";
import { useRouter } from "next/navigation";

const CategoryDropdown = ({ isMobile }: any) => {
  const router = useRouter();

  const handleItemClick = (path: string) => {
    router.push(path);
  };

  const religionsOptions = religions.flatMap((r, index) => [
    <DropdownItem
      textValue={r.name}
      key={index}
      startContent={
        <Image
          alt={"R"}
          height={6}
          width={6}
          className="w-6 h-6"
          src={r.image}
        />
      }
      onClick={() => handleItemClick(`/religion/${r.name.toLocaleLowerCase()}`)}
    >
      {`${r.desc} name`}
    </DropdownItem>,
  ]);

  const genderOptions = [
    <DropdownItem
      key={`girl`}
      textValue={`girl`}
      startContent={
        <Image
          alt={"girl"}
          height={6}
          width={6}
          className="w-6 h-6"
          src={`/young-girl-icon.svg`}
        />
      }
      onClick={() => handleItemClick(`/gender/girl`)}
    >
      Girl name
    </DropdownItem>,
    <DropdownItem
      key={`boy`}
      textValue={`boy`}
      startContent={
        <Image
          alt={"girl"}
          height={6}
          width={6}
          className="w-6 h-6"
          src={`/young-boy-icon.svg`}
        />
      }
      onClick={() => handleItemClick(`/gender/boy`)}
    >
      Boy name
    </DropdownItem>,
  ];

  const countriesOptions = countries.flatMap((c, index) => [
    <DropdownItem
      key={`${index}-boy`}
      textValue={c.name}
      startContent={
        <Avatar
          alt={c.name}
          className="w-6 h-6"
          src={`https://flagcdn.com/${c.code}.svg`}
        />
      }
      onClick={() => handleItemClick(`/country/${c.name.toLocaleLowerCase()}`)}
    >
      {c.desc} name
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
