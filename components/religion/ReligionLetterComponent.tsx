import Image from "next/image";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Metadata } from "next";
import LetterSearch from "@/components/search/LetterSearch";
import PaginationComponent from "@/components/pagination/PaginationComponent";
import { getData, getDataUpdated } from "@/utils/getData";
import { getReligionByName, ITEMS_PER_PAGE } from "@/utils/constants";
import Link from "next/link";
import { encodeNameIndex } from "@/utils/converters";

const ReligionLetterComponent = async ({ religionName, gender, letter, pageNumber }: any) => {
    const religionDetails = getReligionByName(religionName);

    const { nameList, positions } = (await getDataUpdated(
      null,
      religionName,
      gender
    )) as any;
    const pos = letter.toLowerCase().charCodeAt(0) - "a".charCodeAt(0);
    const boundary = positions[pos];

    const letterNameList = nameList.slice(boundary[0], boundary[1] + 1);
    const paginatedNameList = letterNameList.slice(
        (pageNumber - 1) * ITEMS_PER_PAGE,
        pageNumber * ITEMS_PER_PAGE
      );
  
  
    const totalItem = boundary[1] - boundary[0] + 1;
  
    const calculatePageNumber = (currentIndex: any) => {
      return Math.floor((boundary[0] + currentIndex) / ITEMS_PER_PAGE) + 1;
    };
  
    const calculatePageIndex = (currentIndex: any) => {
      return (boundary[0] + currentIndex) % ITEMS_PER_PAGE;
    };
  
    return (
      <div className="flex items-center justify-center w-full">
        <div className=" w-[95vw] md:w-[70vw] ">
          <div className="mb-5 rounded-lg">
            <div className="flex items-center justify-center rounded-lg">
              <Image
                src="/baby.webp"
                alt="Smiling babies"
                height={300}
                width={400}
                className="rounded-lg"
              />
            </div>
  
            <div className="flex flex-col md:flex-row gap-4 items-center justify-center m-5">
              <div className="flex flex-col md:flex-row gap-4 items-center">
                <Image
                  alt={religionName}
                  height={10}
                  width={10}
                  className="w-auto h-10"
                  src={religionDetails.image}
                />
                <h3 className="text-2xl font-bold text-center ">
                  {religionDetails.desc} {gender} names starts with {letter}
                </h3>
              </div>
  
              <div>
                <LetterSearch positions={positions} />
              </div>
            </div>
  
            <Accordion>
              <AccordionSummary aria-controls="panel1-content" id="panel1-header">
                <p className="w-[40%] flex-shrink-0 font-bold text-black">Name</p>
                <p className="text-sm  font-bold text-black">Meaning</p>
              </AccordionSummary>
            </Accordion>
  
            {paginatedNameList.map((nameObj: any, index: any) => {
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
                      {nameObj.isDetailsPresent ? (
                        <Link
                          href={`/meaning-of-name-${nameObj.name.toLowerCase()}-${encodeNameIndex(null, religionName, gender, calculatePageNumber(index), calculatePageIndex(index))}`}
                          target="_blank"
                          className="font-semibold underline"
                        >
                          View More
                        </Link>
                      ) : null}
                    </ul>
                  </AccordionDetails>
                </Accordion>
              );
            })}
  
            <div className="flex items-center justify-center p-10">
              <PaginationComponent totalItem={totalItem} />
            </div>
          </div>
        </div>
      </div>
    );
}

export default ReligionLetterComponent