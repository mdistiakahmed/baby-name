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

export async function generateMetadata({
  params,
}: any): Promise<Metadata | undefined> {
  const { religionName, gender, letter } = params;

  const title =
    (religionName === "islam"
      ? "Muslim"
      : religionName.charAt(0).toUpperCase() + religionName.slice(1)) +
    " " +
    (gender.charAt(0).toUpperCase() + gender.slice(1)) +
    " " +
    `name starts with ${letter}`;

  return {
    title: `${title}  | BabyNameNestlings`,
    description: `Discover ${title} along with their meaning and historic importance`,
    openGraph: {
      title: `${title}  | BabyNameNestlings`,
      description: `Discover ${title} along with their meaning and historic importance`,
      type: "article",
      locale: "en_US",
      url: `http://babynamenestlings.com/${religionName}/${gender}/${letter}`,
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

const ReligionCategoryNameByLetter = async ({ params }: any) => {
  const { religionName, gender, letter } = params;

  const { nameList, positions } = await getData("dataFile1");
  const pos = letter.toUpperCase().charCodeAt(0) - "A".charCodeAt(0);
  const boundary = positions[pos];

  const letterNameList = nameList.slice(boundary[0], boundary[1] + 1);

  const title =
    (religionName === "islam"
      ? "Muslim"
      : religionName.charAt(0).toUpperCase() + religionName.slice(1)) +
    " " +
    (gender.charAt(0).toUpperCase() + gender.slice(1)) +
    " " +
    "Name";

  const totalItem = 560;
  const itemsPerPage = 100;
  const nextPageBaseUrl = `/muslim/baby-name`;

  return (
    <div className="flex items-center justify-center w-full">
      <div className=" w-[95vw] md:w-[70vw] ">
        <div className="mb-5 rounded-lg">
          <div className="flex items-center justify-center rounded-lg">
            <Image
              src="/baby-boy.webp"
              alt="B"
              height={300}
              width={400}
              className="rounded-lg"
            />
          </div>
          <div className="flex flex-col md:flex-row gap-4 items-center justify-center m-5">
            <div className="flex gap-4 items-center">
              <Image
                alt={religionName}
                height={6}
                width={6}
                className="w-6 h-6"
                src={"/islam-icon.svg"}
              />
              <h3 className="text-2xl font-bold text-center ">{title}</h3>
            </div>

            <div>
              <AutoCompleteSearch
                placeHolder="Search name"
                nameList={nameList}
              />
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

          {letterNameList.map((nameObj: any, index: any) => {
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

export default ReligionCategoryNameByLetter;
