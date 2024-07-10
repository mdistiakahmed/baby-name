import Image from "next/image";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Metadata } from "next";
import AutoCompleteSearch from "@/components/search/AutoCompleteSearch";
import LetterSearch from "@/components/search/LetterSearch";
import PaginationComponent from "@/components/pagination/PaginationComponent";
import { getData } from "@/utils/getData";
import Link from "next/link";

export async function generateMetadata({
  params,
}: any): Promise<Metadata | undefined> {
  const { religionName, gender } = params;

  const title =
    (religionName === "islam"
      ? "Muslim"
      : religionName.charAt(0).toUpperCase() + religionName.slice(1)) +
    " " +
    "Name";

  return {
    title: `${title}  | BabyNameNestlings`,
    description: `Find ${title} along with their meaning and historic importance`,
    openGraph: {
      title: `${title}  | BabyNameNestlings`,
      description: `Find ${title} along with their meaning and historic importance`,
      type: "article",
      locale: "en_US",
      url: `http://babynamenestlings.com/${religionName}/${gender}`,
      siteName: "BabyNameNestlings",
      images: [
        {
          url: "/baby-boy.webp",
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}

const ReligionPage = ({ params }: any) => {
  const { religionName } = params;
  const title =
    (religionName === "islam"
      ? "Muslim"
      : religionName.charAt(0).toUpperCase() + religionName.slice(1)) +
    " " +
    "Name";

  return (
    <div className="flex items-center justify-center w-full">
      <div className=" w-[95vw] md:w-[70vw] flex flex-col  gap-4 items-center justify-center m-5">
        <div className="flex flex-col md:flex-row items-center gap-4">
          <Image
            alt={religionName}
            height={6}
            width={6}
            className="w-6 h-6"
            src={"/islam-icon.svg"}
          />
          <h3 className="text-2xl font-bold text-center ">{title}</h3>
        </div>
        <p className="text-xl text-center">
          Find Islamic names having referrenced in Quran and Hadith along with
          historical values
        </p>

        <div className="flex flex-col md:flex-row gap-2 my-[40px] cursor-pointer">
          <div className="h-[250px] w-[300px]  rounded-xl flex flex-col  items-center justify-center bg-[#006fee] hover:bg-[#88b3e3]  text-white hover:text-black">
            <p className="text-2xl text-center font-semibold">Find Boys Name</p>
            <Image
              alt={religionName}
              height={20}
              width={20}
              className="w-20 h-20"
              src={"/young-boy-icon.svg"}
            />
          </div>
          <div className="h-[250px] w-[300px]  rounded-xl flex flex-col items-center justify-center bg-[#f06246] hover:bg-[#f3917d] text-white hover:text-black">
            <p className="text-2xl text-center font-semibold">
              Find Girls Name
            </p>
            <Image
              alt={religionName}
              height={20}
              width={20}
              className="w-20 h-20"
              src={"/young-girl-icon.svg"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReligionPage;
