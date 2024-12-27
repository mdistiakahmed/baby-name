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
              <div className="h-[180px] w-[300px]  rounded-xl flex flex-col  items-center justify-center bg-[#006fee] hover:bg-[#88b3e3]  text-white hover:text-black">
                <Image
                  alt={religionName}
                  height={20}
                  width={20}
                  className="w-20 h-20"
                  src={"/young-boy-icon.svg"}
                />
                <p className="text-xl text-center ">
                  Find {religionDetails.desc} Boys Name
                </p>
              </div>
            </Link>
            <Link href={`/${religionName}/girl`}>
              <div className="h-[180px] w-[300px]  rounded-xl flex flex-col items-center justify-center bg-[#f06246] hover:bg-[#f3917d] text-white hover:text-black">
                <Image
                  alt={religionName}
                  height={20}
                  width={20}
                  className="w-20 h-20"
                  src={"/young-girl-icon.svg"}
                />
                <p className="text-xl text-center ">
                  Find {religionDetails.desc} Girls Name
                </p>
              </div>
            </Link>
          </div>
  
          <div className="w-full">
            <div className="rounded-lg w-full">
              <div className="flex flex-col items-center justify-center mb-5">
                <h3 className="text-2xl font-bold text-center mt-5 ">
                  Top 20 {religionDetails.desc} Girls Name in {currentYear}
                </h3>
              </div>
  
              {girlNameList.slice(0, 20).map((nameObj: any, index: any) => {
                return (
                  <Accordion key={index}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1-content"
                      id="panel1-header"
                    >
                      <Typography sx={{ width: "33%", flexShrink: 0 }}>
                        {nameObj.name}
                      </Typography>
                      <Typography sx={{ color: "text.secondary" }}>
                        {nameObj.meaning}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <ul className="list-disc py-5 px-10 bg-gray-100 rounded-lg shadow-md">
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
                <h3 className="text-2xl font-bold text-center mt-5 ">
                  Top 20 {religionDetails.desc} Boys Name in {currentYear}
                </h3>
              </div>
  
              {boyNameList.slice(0, 20).map((nameObj: any, index: any) => {
                return (
                  <Accordion key={index}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1-content"
                      id="panel1-header"
                    >
                      <Typography sx={{ width: "33%", flexShrink: 0 }}>
                        {nameObj.name}
                      </Typography>
                      <Typography sx={{ color: "text.secondary" }}>
                        {nameObj.meaning}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <ul className="list-disc py-5 px-10 bg-gray-100 rounded-lg shadow-md">
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
            {religionDetails.notes &&
              religionDetails.notes.map((n: any, index: any) => {
                return (
                  <p key={index} className="text-xl text-center">
                    {n}
                  </p>
                );
              })}
          </div>
        </div>
      </div>
    );
}

export default ReligionComponent