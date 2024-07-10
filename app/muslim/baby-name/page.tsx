import Image from "next/image";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Pagination from "@mui/material/Pagination";
import Link from "next/link";
import { Metadata } from "next";
import { muslimGirlNames } from "./muslim-girl-names";
import AutoCompleteSearch from "@/components/search/AutoCompleteSearch";
import LetterSearch from "@/components/search/LetterSearch";
import PaginationComponent from "@/components/pagination/PaginationComponent";

export const metadata: Metadata = {
  title: "Muslim Girl Baby Name | BabyNameNestlings",
  description: "Islamic girl baby name along with their meaning and origin",
  openGraph: {
    title: "Muslim Girl Baby Name | BabyNameNestlings",
    description: "Islamic girl baby name along with their meaning and origin",
    type: "article",
    locale: "en_US",
    url: `http://babynamenestlings.com/muslim/baby-name`,
    siteName: "BabyNameNestlings",
    images: [
      {
        url: "baby1.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
};

const MuslimBabyName = () => {
  const total = muslimGirlNames.length;
  console.log(total);

  const totalItem = 560;
  const itemsPerPage = 100;
  const nextPageBaseUrl = `/muslim/baby-name`;

  return (
    <div className="flex items-center justify-center w-full">
      <div className=" w-[95vw] md:w-[70vw] py-[20px]">
        <div className="p-5 mb-5 rounded-lg">
          <div className="flex items-center justify-center rounded-lg">
            <Image
              src="/baby1.jpg"
              alt="B"
              height={300}
              width={400}
              className="rounded-lg"
            />
          </div>
          <div className="flex flex-col md:flex-row gap-4 items-center justify-center m-5">
            <h3 className="text-2xl font-bold text-center ">
              Muslim Girl Baby Names
            </h3>

            <div>
              <AutoCompleteSearch placeHolder="Search name" />
            </div>

            <div>
              <LetterSearch />
            </div>
          </div>

          <Accordion>
            <AccordionSummary aria-controls="panel1-content" id="panel1-header">
              <p className="w-[40%] flex-shrink-0 font-bold text-black">Name</p>
              <p className="text-sm  font-bold text-black">Meaning</p>
            </AccordionSummary>
          </Accordion>

          {muslimGirlNames.map((nameObj: any, index: any) => {
            return (
              <Accordion key={index}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  <p className="w-[40%] flex-shrink-0  text-black">
                    {nameObj.name}
                  </p>
                  <p className="text-sm  text-black">{nameObj.meaning}</p>
                </AccordionSummary>
                <AccordionDetails>
                  <ul className="list-disc py-5 px-10 bg-gray-100 rounded-lg shadow-md">
                    {nameObj.stories.map((story: any, idx: any) => {
                      return (
                        <li key={idx} className="mb-2">
                          <p className="text-gray-800 text-md">{story} </p>
                        </li>
                      );
                    })}
                  </ul>
                </AccordionDetails>
              </Accordion>
            );
          })}

          <div className="flex items-center justify-center p-10">
            <PaginationComponent
              totalItem={totalItem}
              itemsPerPage={itemsPerPage}
              nextPageBaseUrl={nextPageBaseUrl}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MuslimBabyName;
