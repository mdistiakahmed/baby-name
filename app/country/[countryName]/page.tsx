import Image from "next/image";
import { Metadata } from "next";
import Link from "next/link";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { getCountryByName } from "@/utils/constants";
import { getData, getDataUpdated } from "@/utils/getData";

export async function generateMetadata({
  params,
}: any): Promise<Metadata | undefined> {
  const { countryName } = params;
  const countryDetails = getCountryByName(countryName);

  return {
    title: `${countryDetails.desc} Baby Name | BabyNameNestlings`,
    description: `${countryDetails.metaDescription}`,
    openGraph: {
      title: `${countryDetails.desc} Baby Name | BabyNameNestlings`,
      description: `${countryDetails.metaDescription}`,
      type: "article",
      locale: "en_US",
      url: `http://babynamenestlings.com/country/${countryName}`,
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

const SelectedCountryPage = async ({ params }: any) => {
  const { countryName } = params;
  const countryDetails = getCountryByName(countryName);
  const currentYear = new Date().getFullYear();

  const top20BoyNames: any = await getDataUpdated(
    countryName.toLowerCase(),
    null,
    "boy"
  );
  const top20GirlNames: any = await getDataUpdated(
    countryName.toLowerCase(),
    null,
    "girl"
  );

  return (
    <div className="flex items-center justify-center w-full">
      <div className=" w-[95vw] md:w-[70vw] flex flex-col  gap-4 items-center justify-center m-5">
        <div className="flex flex-col md:flex-row items-center gap-4">
          <Image
            alt={""}
            height={20}
            width={20}
            className="w-auto h-20"
            src={`https://flagcdn.com/${countryDetails.code}.svg`}
          />
          <h1 className="text-2xl font-bold text-center ">
            {countryDetails.desc} Baby Name
          </h1>
        </div>
        <p className="text-xl text-center">{countryDetails.shortDescription}</p>

        <div className="flex flex-col md:flex-row gap-2 my-[40px] cursor-pointer">
          <Link href={`/country/${countryName}/boy`}>
            <div className="h-[250px] w-[300px]  rounded-xl flex flex-col  items-center justify-center bg-[#006fee] hover:bg-[#88b3e3]  text-white hover:text-black">
              <Image
                alt={countryName}
                height={20}
                width={20}
                className="w-20 h-20"
                src={"/young-boy-icon.svg"}
              />
              <p className="text-xl text-center font-semibold">
                Find {countryDetails.desc} Boys Name
              </p>
            </div>
          </Link>
          <Link href={`/country/${countryName}/girl`}>
            <div className="h-[250px] w-[300px]  rounded-xl flex flex-col items-center justify-center bg-[#f06246] hover:bg-[#f3917d] text-white hover:text-black">
              <Image
                alt={countryName}
                height={20}
                width={20}
                className="w-20 h-20"
                src={"/young-girl-icon.svg"}
              />
              <p className="text-xl text-center font-semibold">
                Find {countryDetails.desc} Girls Name
              </p>
            </div>
          </Link>
        </div>

        <div>
          <div className="rounded-lg">
            <div className="flex flex-col items-center justify-center mb-5">
              <h2 className="text-2xl font-bold text-center mt-5 ">
                Top 20 {countryDetails.desc} Girl Name in {currentYear}
              </h2>
            </div>

            {top20GirlNames.nameList
              .slice(0, 20)
              .map((nameObj: any, index: any) => {
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
                href={`/country/${countryName}/girl`}
                className="bg-[#f06246] hover:bg-[#f8c194] hover:text-black p-2 px-5 text-white font-bold relative custom-botton"
              >
                See More
              </Link>
            </div>
          </div>

          <div className="rounded-lg">
            <div className="flex flex-col items-center justify-center mb-5">
              <h2 className="text-2xl font-bold text-center mt-5 ">
                Top 20 {countryDetails.desc} Boy Name in {currentYear}
              </h2>
            </div>

            {top20BoyNames.nameList
              .slice(0, 20)
              .map((nameObj: any, index: any) => {
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
                href={`/country/${countryName}/boy`}
                className="bg-[#f06246] hover:bg-[#f8c194] hover:text-black p-2 px-5 text-white font-bold relative custom-botton"
              >
                See More
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          {countryDetails.notes &&
            countryDetails.notes.map((n: any, index: any) => {
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
};

export default SelectedCountryPage;
