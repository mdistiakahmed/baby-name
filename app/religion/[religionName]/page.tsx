import Image from "next/image";
import { Metadata } from "next";
import Link from "next/link";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { dummanyNameList, getReligionByName } from "@/utils/constants";

export async function generateMetadata({
  params,
}: any): Promise<Metadata | undefined> {
  const { religionName } = params;
  const religionDetails = getReligionByName(religionName);

  return {
    title: `${religionDetails.desc} Baby Name  | BabyNameNestlings`,
    description: `Find ${religionDetails.desc.toLocaleLowerCase()} names having
          referrenced in holy book and historial values`,
    openGraph: {
      title: `${religionDetails.desc} Baby Name  | BabyNameNestlings`,
      description: `Find ${religionDetails.desc.toLocaleLowerCase()} names having
          referrenced in holy book and historial values`,
      type: "article",
      locale: "en_US",
      url: `http://babynamenestlings.com/${religionName}`,
      siteName: "BabyNameNestlings",
      images: [
        {
          url: "/baby-boy.webp",
          width: 1200,
          height: 630,
          alt: "Smiling baby",
        },
      ],
    },
  };
}

const ReligionPage = ({ params }: any) => {
  const { religionName } = params;
  const religionDetails = getReligionByName(religionName);
  const currentYear = new Date().getFullYear();

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
          <h3 className="text-2xl font-bold text-center ">
            {religionDetails.desc} Baby Names
          </h3>
        </div>
        <p className="text-xl text-center">
          Find {religionDetails.desc.toLocaleLowerCase()} names having
          referrenced in holy book and historial values
        </p>

        <div className="flex flex-col md:flex-row gap-2 my-[20px] cursor-pointer">
          <Link href={`/religion/${religionName}/boy`}>
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
          <Link href={`/religion/${religionName}/girl`}>
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
                Top 10 {religionDetails.desc} Girls Name in {currentYear}
              </h3>
            </div>

            {dummanyNameList.map((nameObj: any, index: any) => {
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
                    </ul>
                  </AccordionDetails>
                </Accordion>
              );
            })}

            <div className="flex items-center justify-end p-5 mr-[60px] md:mr-[80px]">
              <Link
                href={`/religion/${religionName}/girl`}
                className="bg-[#f06246] hover:bg-[#f8c194] hover:text-black p-2 px-5 text-white font-bold relative custom-botton"
              >
                See More
              </Link>
            </div>
          </div>

          <div className="rounded-lg w-full">
            <div className="flex flex-col items-center justify-center mb-5">
              <h3 className="text-2xl font-bold text-center mt-5 ">
                Top 10 {religionDetails.desc} Boys Name in {currentYear}
              </h3>
            </div>

            {dummanyNameList.map((nameObj: any, index: any) => {
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
                    </ul>
                  </AccordionDetails>
                </Accordion>
              );
            })}

            <div className="flex items-center justify-end p-5 mr-[60px] md:mr-[80px]">
              <Link
                href={`/religion/${religionName}/boy`}
                className="bg-[#f06246] hover:bg-[#f8c194] hover:text-black p-2 px-5 text-white font-bold relative custom-botton"
              >
                See More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReligionPage;
