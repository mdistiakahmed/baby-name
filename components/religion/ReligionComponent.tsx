import Image from "next/image";
import { Metadata } from "next";
import Link from "next/link";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { getReligionByName } from "@/utils/constants";
import { getDataUpdated } from "@/utils/getData";
import ShareWidget from "@/components/share/ShareWidget";
import { encodeNameIndex } from "@/utils/converters";

const ReligionComponent = async ({ religionName }: any) => {
  const religionDetails = getReligionByName(religionName);
  const currentYear = new Date().getFullYear();

  const { nameList: boyNameList, positions: boyPositions } =
    (await getDataUpdated(null, religionName, "boy")) as any;

  const { nameList: girlNameList, positions: girlPositions } =
    (await getDataUpdated(null, religionName, "girl")) as any;

  return (
    <div className="flex items-center justify-center w-full">
      <div className=" w-[95vw] md:w-[70vw] flex flex-col  gap-4 items-center justify-center m-5">
        <div className="flex flex-col md:flex-row items-center gap-4">
          <Image
            alt={religionName}
            height={6}
            width={6}
            className="w-6 h-6"
            src={`${religionDetails.image}`}
          />
          <h1 className="text-2xl font-bold text-center ">
            {religionDetails.desc} Baby Names
          </h1>
        </div>
        <p className="text-xl text-center">
          {religionDetails.shortDescription}
        </p>

        <ShareWidget />

        <div className="flex flex-col md:flex-row gap-2 my-[20px] cursor-pointer">
          <Link href={`/${religionName}/boy`}>
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-2xl p-6 flex flex-col items-center space-y-4 transition-all duration-300 ease-in-out transform hover:-translate-y-2 shadow-2xl">
              <Image
                alt="Boys Names"
                height={80}
                width={80}
                className="w-24 h-24 group-hover:scale-110 transition-transform"
                src="/young-boy-icon.svg"
                loading="lazy"
              />
              <h2 className="text-xl font-semibold text-center">
                {religionDetails.desc} Boys Names
              </h2>
            </div>
          </Link>
          <Link href={`/${religionName}/girl`}>
            <div className="bg-gradient-to-r from-[#f06246] to-[#f3917d] hover:from-[#f3917d] hover:to-[#f8c194] text-white rounded-2xl p-6 flex flex-col items-center space-y-4 transition-all duration-300 ease-in-out transform hover:-translate-y-2 shadow-2xl">
              <Image
                alt="Girls Names"
                height={80}
                width={80}
                className="w-24 h-24 group-hover:scale-110 transition-transform"
                src="/young-girl-icon.svg"
                loading="lazy"
              />
              <h2 className="text-xl font-semibold text-center">
                {religionDetails.desc} Girls Names
              </h2>
            </div>
          </Link>
        </div>

        <div className="w-full">
          <div className="rounded-lg w-full">
            <div className="flex flex-col items-center justify-center mb-5">
              <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
                Top 20 {religionDetails.desc} Girls Names in {currentYear}
              </h2>
            </div>

            {girlNameList.slice(0, 20).map((nameObj: any, index: any) => {
              return (
                <Accordion key={index}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    <Typography
                      sx={{ width: "45%", flexShrink: 0 }}
                      className="flex items-center"
                    >
                      <Image
                        alt={"girls name"}
                        height={20}
                        width={20}
                        className={"mr-2 w-5 h-5 filter-orange"}
                        src={"/young-girl-icon.svg"}
                      />
                      {nameObj.name}
                    </Typography>
                    <Typography sx={{ color: "text.secondary" }}>
                      {nameObj.meaning}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <ul className="list-disc py-5 px-10">
                      {nameObj.stories.map((story: any, idx: any) => {
                        return (
                          <li key={idx} className="mb-2">
                            <p className="text-gray-800 text-md">
                              {nameObj.stories}
                            </p>
                          </li>
                        );
                      })}
                      {nameObj.isDetailsPresent ? (
                        <Link
                          href={`/meaning-of-name-${nameObj.name.toLowerCase()}-${encodeNameIndex(null, religionName, "girl", 1, index)}`}
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

            <div className="flex items-center justify-end p-5 mr-[60px] md:mr-[80px]">
              <Link
                href={`/${religionName}/girl`}
                className="bg-[#f06246] hover:bg-[#f8c194] hover:text-black p-2 px-5 text-white font-bold relative custom-botton"
              >
                See More
              </Link>
            </div>
          </div>

          <div className="rounded-lg w-full">
            <div className="flex flex-col items-center justify-center mb-5">
              <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
                Top 20 {religionDetails.desc} Boys Names in {currentYear}
              </h2>
            </div>

            {boyNameList.slice(0, 20).map((nameObj: any, index: any) => {
              return (
                <Accordion key={index}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    <Typography
                      sx={{ width: "45%", flexShrink: 0 }}
                      className="flex items-center"
                    >
                      <Image
                        alt={"boys name"}
                        height={20}
                        width={20}
                        className={"mr-2 w-5 h-5 filter-blue"}
                        src={"/young-boy-icon.svg"}
                      />
                      {nameObj.name}
                    </Typography>
                    <Typography sx={{ color: "text.secondary" }}>
                      {nameObj.meaning}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <ul className="list-disc py-5 px-10">
                      {nameObj.stories.map((story: any, idx: any) => {
                        return (
                          <li key={idx} className="mb-2">
                            <p className="text-gray-800 text-md">{story}</p>
                          </li>
                        );
                      })}
                      {nameObj.isDetailsPresent ? (
                        <Link
                          href={`/meaning-of-name-${nameObj.name.toLowerCase()}-${encodeNameIndex(null, religionName, "boy", 1, index)}`}
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

            <div className="flex items-center justify-end p-5 mr-[60px] md:mr-[80px]">
              <Link
                href={`/${religionName}/boy`}
                className="bg-[#f06246] hover:bg-[#f8c194] hover:text-black p-2 px-5 text-white font-bold relative custom-botton"
              >
                See More
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          {religionDetails.notes && (
            <section className="mt-12  p-8 text-center">
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">
                Additional Insights
              </h3>
              {religionDetails.notes.map((note: string, index: number) => (
                <p key={index} className="text-lg text-gray-600 mb-4">
                  {note}
                </p>
              ))}
            </section>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReligionComponent;
