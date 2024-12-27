import Image from "next/image";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Metadata } from "next";
import LetterSearch from "@/components/search/LetterSearch";
import PaginationComponent from "@/components/pagination/PaginationComponent";
import { getData, getDataUpdated } from "@/utils/getData";
import { getReligionByName, ITEMS_PER_PAGE } from "@/utils/constants";
import Link from "next/link";
import { encodeNameIndex } from "@/utils/converters";

const ReligionLetterComponent = async ({
  religionName,
  gender,
  letter,
  pageNumber,
}: any) => {
  const religionDetails = getReligionByName(religionName);
  const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  const { nameList, positions } = (await getDataUpdated(
    null,
    religionName,
    gender
  )) as any;
  const pos = letter.toLowerCase().charCodeAt(0) - "a".charCodeAt(0);
  const boundary = positions[pos];

  const letterNameList = nameList.slice(boundary[0], boundary[1] + 1);
  const paginatedNameList = letterNameList.slice(
    (pageNumber - 1) * ITEMS_PER_PAGE,
    pageNumber * ITEMS_PER_PAGE
  );

  const totalItem = boundary[1] - boundary[0] + 1;

  const calculatePageNumber = (currentIndex: any) => {
    return Math.floor((boundary[0] + currentIndex) / ITEMS_PER_PAGE) + 1;
  };

  const calculatePageIndex = (currentIndex: any) => {
    return (boundary[0] + currentIndex) % ITEMS_PER_PAGE;
  };

  return (
    <div className="flex items-center justify-center w-full">
      <div className="w-[95vw] md:w-[70vw] mb-5 rounded-lg">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
          <Image
            alt={religionName}
            height={10}
            width={10}
            className="w-auto h-10"
            src={religionDetails.image}
          />
          <h1 className="text-3xl font-bold text-gray-800 text-center">
            {religionDetails.desc}{" "}
            {gender.charAt(0).toUpperCase() + gender.slice(1)} Names Starting
            with {letter.toUpperCase()}
          </h1>
        </div>

        <div className="py-5">
          <p className="text-lg text-gray-600 text-center max-w-4xl mx-auto mt-4 px-4">
            Explore a comprehensive collection of meaningful{" "}
            {religionDetails.desc} {gender} names beginning with{" "}
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
                  {nameObj.stories.map((story: any, idx: any) => {
                    return (
                      <li key={idx} className="mb-2">
                        <p className="text-gray-800 text-md">{story} </p>
                      </li>
                    );
                  })}
                  {nameObj.isDetailsPresent ? (
                    <Link
                      href={`/meaning-of-name-${nameObj.name.toLowerCase()}-${encodeNameIndex(null, religionName, gender, calculatePageNumber(index), calculatePageIndex(index))}`}
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
          <PaginationComponent totalItem={totalItem} />
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
                href={`/${religionName}/${gender}/${l.toLowerCase()}`}
                className="group"
              >
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-2xl p-4 flex flex-col items-center space-y-2 transition-all duration-300 ease-in-out transform hover:-translate-y-2 shadow-lg">
                  <span className="text-3xl font-bold">{l}</span>
                  <span className="text-sm opacity-75 group-hover:opacity-100 text-center">
                    {religionDetails.desc}{" "}
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
            Discover Meaningful {religionDetails.desc}{" "}
            {gender.charAt(0).toUpperCase() + gender.slice(1)} Names Starting
            with {letter.toUpperCase()}
          </h2>

          <div className=" mx-auto text-gray-700 space-y-4">
            <p>
              Choosing a name is a profound journey that reflects cultural
              heritage, personal meaning, and familial traditions. Our
              comprehensive collection of {religionDetails.desc} {gender} names
              starting with {letter.toUpperCase()} offers you a thoughtful
              exploration of naming traditions.
            </p>

            <p>
              Each name in our curated list carries a unique story, deeply
              rooted in {religionDetails.desc} cultural contexts. Whether you're
              seeking a name that honors spiritual significance, carries
              historical weight, or simply sounds beautiful, our collection
              provides insights into the rich tapestry of {gender} naming
              conventions.
            </p>

            <h3 className="text-xl font-semibold text-gray-800">
              Why Choose a Meaningful Name?
            </h3>

            <ul className="list-disc pl-6 space-y-2">
              <li>Connect with cultural roots and heritage</li>
              <li>Provide a sense of identity and belonging</li>
              <li>Carry forward family traditions</li>
              <li>Inspire future generations with meaningful symbolism</li>
            </ul>

            <p>
              Our database is meticulously researched, offering not just names,
              but stories, meanings, and cultural contexts. Each name starting
              with {letter.toUpperCase()} is a gateway to understanding the
              depth and beauty of {religionDetails.desc} naming traditions.
            </p>

            <p className="font-semibold text-gray-900">
              Explore, discover, and find the perfect name that resonates with
              your heart and heritage.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ReligionLetterComponent;
