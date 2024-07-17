import Image from "next/image";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Metadata } from "next";
import LetterSearch from "@/components/search/LetterSearch";
import PaginationComponent from "@/components/pagination/PaginationComponent";
import { getData, getDataUpdated } from "@/utils/getData";
import { getCountryByName, ITEMS_PER_PAGE } from "@/utils/constants";

export async function generateMetadata({
  params,
}: any): Promise<Metadata | undefined> {
  const { countryName, gender, letter } = params;
  const countryDetails = getCountryByName(countryName);

  const title = `${countryDetails.desc} ${gender} name starts with 
  ${letter.charAt(0).toUpperCase()}`;

  return {
    title: `${title}  | BabyNameNestlings`,
    description: `Discover ${title} with their meaning and historic importance`,
    openGraph: {
      title: `${title}  | BabyNameNestlings`,
      description: `Discover ${title} with their meaning and historic importance`,
      type: "article",
      locale: "en_US",
      url: `http://babynamenestlings.com/country/${countryName}/${gender}/${letter}`,
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

const CountryGenderLetterPage = async ({ params }: any) => {
  const { countryName, gender, letter } = params;
  const countryDetails = getCountryByName(countryName);

  const { nameList, positions } = (await getDataUpdated(
    countryName,
    null,
    gender
  )) as any;

  const pos = letter.toUpperCase().charCodeAt(0) - "A".charCodeAt(0);
  const boundary = positions[pos];

  const letterNameList = nameList.slice(
    boundary[0],
    Math.min(boundary[1] + 1, boundary[0] + ITEMS_PER_PAGE)
  );

  const totalItem = boundary[1] - boundary[0] + 1;
  const title = `${countryDetails.desc} ${gender} name starts with 
                ${letter.charAt(0).toUpperCase()}`;

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
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <Image
                alt={countryDetails.name}
                height={10}
                width={10}
                className="w-auto h-10"
                src={`https://flagcdn.com/${countryDetails.code}.svg`}
              />
              <h1 className="text-2xl text-center ">{title}</h1>
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
            <PaginationComponent totalItem={totalItem} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryGenderLetterPage;
