import Image from "next/image";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Metadata } from "next";
import LetterSearch from "@/components/search/LetterSearch";
import PaginationComponent from "@/components/pagination/PaginationComponent";
import { getData, getDataUpdated } from "@/utils/getData";
import {
  getCountryByName,
  getGenderByName,
  ITEMS_PER_PAGE,
} from "@/utils/constants";
import Link from "next/link";
import { encodeNameIndex } from "@/utils/converters";

export async function generateMetadata({
  params,
}: any): Promise<Metadata | undefined> {
  const { genderName } = params;

  return {
    title: `${genderName} baby Names | BabyNameNestlings`,
    description: `Find most beautiful ${genderName} name for your baby.`,
    openGraph: {
      title: `${genderName} baby Names | BabyNameNestlings`,
      description: `Find most beautiful ${genderName} name for your baby.`,
      type: "article",
      locale: "en_US",
      url: `http://babynamenestlings.com/gender/${genderName}`,
      siteName: "BabyNameNestlings",
      images: [
        {
          url: "/baby.webp",
          width: 1200,
          height: 630,
          alt: "Smiling babies",
        },
      ],
    },
  };
}
const PaginatedGenderPage = async ({ params }: any) => {
  const { genderName, pageId } = params;
  const genderDetalis = getGenderByName(genderName);
  const { nameList, positions } = await getDataUpdated(null, null, genderName);

  const pageNumber = Number(pageId);
  const totalItem = nameList?.length;

  const paginatedNameList = nameList?.slice(
    (pageNumber - 1) * ITEMS_PER_PAGE,
    pageNumber * ITEMS_PER_PAGE
  );

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
            <div className="flex gap-4 items-center">
              <Image
                alt={genderName}
                height={10}
                width={10}
                className="w-auto h-10"
                src={genderDetalis.image}
              />
              <h1 className="text-2xl font-bold text-center ">
                Beautiful {genderName} Names
              </h1>
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

          {paginatedNameList?.map((nameObj: any, index: any) => {
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
                    <Link
                      href={`/meaning-of-name-${nameObj.name.toLowerCase()}-${encodeNameIndex(null, null, genderName, pageNumber, index)}`}
                      target="_blank"
                      className="font-semibold underline"
                    >
                      View More
                    </Link>
                  </ul>
                </AccordionDetails>
              </Accordion>
            );
          })}

          <div className="flex items-center justify-center p-10">
            <PaginationComponent
              totalItem={totalItem}
              pageNumber={pageNumber}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaginatedGenderPage;
