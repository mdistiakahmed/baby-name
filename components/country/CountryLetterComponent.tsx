import Image from "next/image";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LetterSearch from "@/components/search/LetterSearch";
import PaginationComponent from "@/components/pagination/PaginationComponent";
import { getData, getDataUpdated } from "@/utils/getData";
import { getCountryByName, ITEMS_PER_PAGE } from "@/utils/constants";
import Link from "next/link";
import { encodeNameIndex } from "@/utils/converters";
import { Typography } from "@mui/material";

const CountryLetterComponent = async ({
  countryName,
  gender,
  letter,
  pageNumber,
}: any) => {
  const countryDetails = getCountryByName(countryName);
  const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  const { nameList, positions } = (await getDataUpdated(
    countryName,
    null,
    gender
  )) as any;

  const pos = letter.toLowerCase().charCodeAt(0) - "a".charCodeAt(0);
  const boundary = positions[pos];

  const letterNameList = nameList.slice(boundary[0], boundary[1] + 1);

  const totalItem = letterNameList.length;

  const paginatedNameList = letterNameList.slice(
    (pageNumber - 1) * ITEMS_PER_PAGE,
    pageNumber * ITEMS_PER_PAGE
  );

  const title = `${countryDetails.desc} ${gender} name starts with 
                  ${letter.charAt(0).toUpperCase()}`;

  const calculatePageNumber = (currentIndex: any) => {
    return Math.floor((boundary[0] + currentIndex) / ITEMS_PER_PAGE) + 1;
  };

  const calculatePageIndex = (currentIndex: any) => {
    return (boundary[0] + currentIndex) % ITEMS_PER_PAGE;
  };

  const isBigWidth = countryName === "india-tamil";

  return (
    <div className="flex items-center justify-center w-full">
      <div className=" w-[95vw] md:w-[70vw] mb-5 rounded-lg">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
          <Image
            alt={countryDetails.name}
            height={10}
            width={10}
            className="w-auto h-10"
            src={`https://flagcdn.com/${countryDetails.code}.svg`}
          />
          <h1 className="text-3xl font-bold text-gray-800 text-center">
            {countryDetails.desc}{" "}
            {gender.charAt(0).toUpperCase() + gender.slice(1)} Names Starting
            with {letter.toUpperCase()}
          </h1>
        </div>

        <div className="py-5">
          <p className="text-lg text-gray-600 text-center max-w-4xl mx-auto mt-4 px-4">
            Explore a comprehensive collection of meaningful{" "}
            {countryDetails.desc} {gender} names beginning with{" "}
            {letter.toUpperCase()}. Discover unique, culturally rich names that
            carry deep significance and personal meaning for your family.
          </p>
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
          <div>
            <LetterSearch positions={positions} />
          </div>
        </div>

        <Accordion>
          <AccordionSummary aria-controls="panel1-content" id="panel1-header">
            <Typography
              sx={{ width: isBigWidth ? "50%" : "45%", flexShrink: 0 }}
              className="flex items-center"
            >
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
                      href={`/meaning-of-name-${nameObj.name.toLowerCase()}-${encodeNameIndex(countryName, null, gender, calculatePageNumber(index), calculatePageIndex(index))}`}
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

        {/* Other Letters Navigation */}
        <section className="mt-12">
          <h3 className="text-2xl font-semibold mb-6 text-gray-800 text-center">
            Explore Names Across Other Categories
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {ALPHABET.map((l) => (
              <Link
                key={l}
                href={`/${countryName}/${gender}/${l.toLowerCase()}`}
                className="group"
              >
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-2xl p-4 flex flex-col items-center space-y-2 transition-all duration-300 ease-in-out transform hover:-translate-y-2 shadow-lg">
                  <span className="text-3xl font-bold">{l}</span>
                  <span className="text-sm opacity-75 group-hover:opacity-100 text-center">
                    {countryDetails.desc}{" "}
                    {gender.charAt(0).toUpperCase() + gender.slice(1)} Names
                    Starts With {l}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* SEO-Friendly Informative Section */}
        <section className="m-12 p-8 ">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Discover Meaningful {countryDetails.desc}{" "}
            {gender.charAt(0).toUpperCase() + gender.slice(1)} Names Starting
            with {letter.toUpperCase()}
          </h2>

          <div className=" mx-auto text-gray-700 space-y-4">
            <p>
              Choosing a name is a profound journey that reflects cultural
              heritage, personal meaning, and national traditions. Our
              comprehensive collection of {countryDetails.desc} {gender} names
              starting with {letter.toUpperCase()} offers you a thoughtful
              exploration of naming traditions from {countryDetails.desc}.
            </p>

            <p>
              Each name in our curated list carries a unique story, deeply
              rooted in {countryDetails.desc} cultural contexts. Whether
              you&apos;re seeking a name that honors historical significance,
              reflects national pride, or simply sounds beautiful, our
              collection provides insights into the rich tapestry of {gender}{" "}
              naming conventions in {countryDetails.desc}.
            </p>

            <h3 className="text-xl font-semibold text-gray-800">
              Why Choose a Name with Cultural Significance?
            </h3>

            <ul className="list-disc pl-6 space-y-2">
              <li>Connect with national and cultural roots</li>
              <li>Preserve linguistic heritage</li>
              <li>Celebrate national identity</li>
              <li>Inspire future generations with meaningful symbolism</li>
            </ul>

            <p>
              Explore the beautiful diversity of {countryDetails.desc} names,
              where each letter represents a gateway to understanding cultural
              nuances, historical depth, and the rich linguistic landscape of{" "}
              {countryDetails.desc}. Our carefully curated list ensures that you
              find a name that resonates with your family&apos;s values and
              cultural background.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CountryLetterComponent;
