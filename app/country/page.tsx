import Image from "next/image";
import { Metadata } from "next";
import Link from "next/link";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { countries, dummanyNameList } from "@/utils/constants";
import { getData } from "@/utils/getData";

export const metadata: Metadata = {
  title: "Baby Names By Country | BabyNameNestlings",
  description: "Find baby names based on country and cultural values",
  openGraph: {
    title: "Baby Names By Country | BabyNameNestlings",
    description: "Find baby names based on country and cultural values",
    type: "article",
    locale: "en_US",
    url: `http://babynamenestlings.com/country`,
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

const CountryHomePage = async () => {
  const currentYear = new Date().getFullYear();

  const countryTop50 = (
    <div>
      {countries.map((c: any, index: any) => (
        <div className="rounded-lg" key={index}>
          <div className="flex flex-col items-center justify-center mb-5">
            <h3 className="text-2xl font-bold text-center mt-5 ">
              Top 10 {c.desc} Name in {currentYear}
            </h3>
          </div>

          {dummanyNameList.map((nameObj: any, index2: any) => {
            return (
              <Accordion key={index2}>
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
              href={`/religion/${""}`}
              className="bg-[#f06246] hover:bg-[#f8c194] hover:text-black p-2 px-5 text-white font-bold relative custom-botton"
            >
              See More
            </Link>
          </div>
        </div>
      ))}
    </div>
  );

  const countrySection = (
    <div className="flex flex-col items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-[40px] cursor-pointer">
        {countries.map((c, index) => {
          const mobileBgClass =
            index % 2 === 0
              ? "bg-[#f06246] hover:bg-[#f3917d]"
              : "bg-[#006fee] hover:bg-[#88b3e3]";
          const mediumBgClass =
            index % 2 === 0
              ? "bg-[#f06246] hover:bg-[#f3917d]"
              : "bg-[#006fee] hover:bg-[#88b3e3]";
          return (
            <Link href={`/country/${c.name.toLocaleLowerCase()}`} key={index}>
              <div
                className={`h-[180px] w-[250px] rounded-xl flex flex-col items-center justify-center text-white hover:text-black ${mediumBgClass}`}
              >
                <Image
                  alt={"C"}
                  height={20}
                  width={20}
                  className="w-auto h-20"
                  src={`https://flagcdn.com/${c.code}.svg`}
                />
                <p className="text-xl text-center ">Find {c.desc} Name</p>
              </div>
            </Link>
          );
        })}
      </div>
      <div className="flex items-center justify-end p-5 mr-[60px] md:mr-[80px]">
        <Link
          href={`/country`}
          className="bg-[#f06246] hover:bg-[#f8c194] hover:text-black p-2 px-5 text-white font-bold relative custom-botton"
        >
          See More
        </Link>
      </div>
    </div>
  );

  return (
    <div className="flex items-center justify-center w-full">
      <div className=" w-[95vw] md:w-[70vw] flex flex-col  gap-4 items-center justify-center m-5">
        <h1 className="text-2xl font-bold text-center ">
          Baby Names By Country
        </h1>
        <p className="text-xl text-center">
          Find baby names based on country and cultural values
        </p>

        <div>{countrySection}</div>
        <div>{countryTop50}</div>
      </div>
    </div>
  );
};

export default CountryHomePage;
