import Image from "next/image";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LetterSearch from "@/components/search/LetterSearch";
import PaginationComponent from "@/components/pagination/PaginationComponent";
import { getDataUpdated } from "@/utils/getData";
import { getCountryByName, ITEMS_PER_PAGE } from "@/utils/constants";
import ShareWidget from "@/components/share/ShareWidget";
import { encodeNameIndex } from "@/utils/converters";
import Link from "next/link";
import { Typography } from "@mui/material";

const CountryGenderComponent = async ({
  countryName,
  gender,
  pageNumber,
}: any) => {
  const countryDetails = getCountryByName(countryName);
  const { nameList, positions } = (await getDataUpdated(
    countryName,
    null,
    gender
  )) as any;

  const totalItem = nameList.length;
  const paginatedNameList = nameList.slice(
    (pageNumber - 1) * ITEMS_PER_PAGE,
    pageNumber * ITEMS_PER_PAGE
  );

  const isBigWidth = countryName ==="india-tamil";

  return (
    <div className="flex items-center justify-center w-full">
      <div className=" w-[95vw] md:w-[70vw] ">
        <div className="mb-5 rounded-lg">
          <h1 className="text-2xl font-bold text-center py-2 text-gray-800">
            Find Most Beautiful {countryDetails.desc}{" "}
            {gender.charAt(0).toUpperCase() + gender.slice(1)} Names
          </h1>

          <div>
            <p className="text-xl text-center py-4  text-gray-600">
              {countryDetails[gender].shortDescription}
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
            />
          </div>

          <div className="flex flex-col md:flex-row gap-4 items-center justify-center m-5">
            <div className="flex gap-4 items-center">
              <Image
                alt={countryName}
                height={10}
                width={10}
                className="w-auto h-10"
                src={`https://flagcdn.com/${countryDetails.code}.svg`}
              />
              <h2 className="text-2xl text-center ">
                {countryDetails.desc} {gender} names
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
              <Typography
                sx={{ width: isBigWidth ? "50%" : "45%", flexShrink: 0 }}
                className="flex items-center"
              >
                {" "}
                Name
              </Typography>
              <Typography>Meaning</Typography>
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
                  <Typography
                    sx={{ width: isBigWidth ? "50%" : "45%", flexShrink: 0 }}
                    className="flex items-center"
                  >
                    <Image
                      alt={gender === "boy" ? "boys name" : "girls name"}
                      height={20}
                      width={20}
                      className={
                        gender.toLowerCase() === "boy"
                          ? "mr-2 w-5 h-5 filter-blue"
                          : "mr-2 w-5 h-5 filter-orange"
                      }
                      src={
                        gender.toLowerCase() === "boy"
                          ? "/young-boy-icon.svg"
                          : "/young-girl-icon.svg"
                      }
                    />
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
                          <p className="text-gray-800 text-md">{story} </p>
                        </li>
                      );
                    })}
                    {nameObj.isDetailsPresent ? (
                      <Link
                        href={`/meaning-of-name-${nameObj.name.toLowerCase()}-${encodeNameIndex(countryName, null, gender, 1, index)}`}
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

          {countryDetails[gender].notes && (
            <section className="mt-12 p-8 text-center">
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">
                Additional Insights
              </h3>
              {countryDetails[gender].notes.map(
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

export default CountryGenderComponent;
