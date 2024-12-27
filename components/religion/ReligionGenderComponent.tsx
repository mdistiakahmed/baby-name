import Image from "next/image";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Metadata } from "next";
import LetterSearch from "@/components/search/LetterSearch";
import PaginationComponent from "@/components/pagination/PaginationComponent";
import { getDataUpdated } from "@/utils/getData";
import { getReligionByName, ITEMS_PER_PAGE } from "@/utils/constants";
import ShareWidget from "@/components/share/ShareWidget";
import { encodeNameIndex } from "@/utils/converters";
import Link from "next/link";

const ReligionGenderComponent = async ({
  religionName,
  gender,
  pageNumber,
}: any) => {
  const religionDetails = getReligionByName(religionName);

  const { nameList, positions } = (await getDataUpdated(
    null,
    religionName,
    gender
  )) as any;

  const totalItem = nameList.length;

  const paginatedNameList = nameList.slice(
    (pageNumber - 1) * ITEMS_PER_PAGE,
    pageNumber * ITEMS_PER_PAGE
  );

  return (
    <div className="flex items-center justify-center w-full">
      <div className=" w-[95vw] md:w-[70vw] ">
        <div className="mb-5 rounded-lg">
          <h1 className="text-2xl font-bold text-center py-2 text-gray-800">
            Find Most Beautiful {religionDetails.desc}{" "}
            {gender.charAt(0).toUpperCase() + gender.slice(1)} Name
          </h1>
          <div>
            <p className="text-xl text-center py-4  text-gray-600">
              {religionDetails[gender].shortDescription}
            </p>
            <ShareWidget />
          </div>
          <div className="flex items-center justify-center rounded-lg">
            <Image
              src="/baby.webp"
              alt="Smiling babies"
              height={300}
              width={400}
              className="rounded-lg"
              loading="lazy"
            />
          </div>
          <div className="flex flex-col md:flex-row gap-4 items-center justify-center m-5">
            <div className="flex gap-4 items-center">
              <Image
                alt={religionName}
                height={6}
                width={6}
                className="w-6 h-6"
                src={religionDetails.image}
              />
              <h2 className="text-2xl font-bold text-center ">
                {religionDetails.desc} {gender} Names
              </h2>
            </div>

            <div>
              <LetterSearch positions={positions} />
            </div>
          </div>

          <div className="flex items-center justify-center p-10">
            <PaginationComponent
              totalItem={totalItem}
              pageNumber={Number(pageNumber)}
            />
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
                    {nameObj.isDetailsPresent
                      ? nameObj.stories.map((story: any, idx: any) => {
                          return (
                            <li key={idx} className="mb-2">
                              <p className="text-gray-800 text-md">
                                {story.substring(0, 90)}
                                {" ..."}
                              </p>
                            </li>
                          );
                        })
                      : nameObj.stories.map((story: any, idx: any) => {
                          return (
                            <li key={idx} className="mb-2">
                              <p className="text-gray-800 text-md">{story} </p>
                            </li>
                          );
                        })}

                    {nameObj.isDetailsPresent ? (
                      <Link
                        href={`/meaning-of-name-${nameObj.name.toLowerCase()}-${encodeNameIndex(null, religionName, gender, 1, index)}`}
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
            <PaginationComponent
              totalItem={totalItem}
              pageNumber={Number(pageNumber)}
            />
          </div>

          {religionDetails[gender].notes && (
            <section className="mt-12 p-8 text-center">
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">
                Additional Insights
              </h3>
              {religionDetails[gender].notes.map(
                (note: string, index: number) => (
                  <p key={index} className="text-lg text-gray-600 mb-4">
                    {note}
                  </p>
                )
              )}
            </section>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReligionGenderComponent;
