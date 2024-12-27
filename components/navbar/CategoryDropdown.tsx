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
import { useRouter } from "next/navigation";
import { countries } from "@/data/countryMetadata";
import { religions } from "@/data/religionMetadata";

const CategoryDropdown = () => {
  const router = useRouter();

  const handleItemClick = (path: string) => {
    router.push(path);
  };

  const articlesOptions = [
    <DropdownItem
      key={`articles`}
      textValue={`articles`}
      startContent={
        <Image
          alt={"blog"}
          height={6}
          width={6}
          className="w-6 h-6"
          src={`/blog.svg`}
        />
      }
      onClick={() => handleItemClick(`/articles`)}
    >
      Articles
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
      onClick={() => handleItemClick(`/${c.name.toLocaleLowerCase()}`)}
    >
      {c.desc} name
    </DropdownItem>,
  ]);

  const toolsOptions = [
    <DropdownItem
      key={`tools`}
      textValue={`Weel of Names`}
      startContent={
        <Image
          alt={"blog"}
          height={6}
          width={6}
          className="w-6 h-6"
          src={`/wheel.svg`}
        />
      }
      onClick={() => handleItemClick(`/name-wheel`)}
    >
      Wheel of Names
    </DropdownItem>,
  ];

  return (
    <Dropdown
      showArrow
      classNames={{
        base: "before:bg-default-200",
        content: "py-1 px-1 border border-default-200",
      }}
    >
      <DropdownTrigger>
        <div>
          <p className="bg-[#006fee] text-white font-bold p-2 px-4 rounded-lg cursor-pointer">
            More
          </p>{" "}
        </div>
      </DropdownTrigger>
      <DropdownMenu
        variant="faded"
        aria-label="Dropdown menu with description"
        style={{ maxHeight: "400px", overflowY: "auto" }}
      >
        <DropdownSection title="By Country">{countriesOptions}</DropdownSection>
        <DropdownSection title="Articles">{articlesOptions}</DropdownSection>
        <DropdownSection title="Tools">{toolsOptions}</DropdownSection>
      </DropdownMenu>
    </Dropdown>
  );
};

export default CategoryDropdown;
