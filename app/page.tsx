import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Image from "next/image";
import Link from "next/link";
import { getData } from "@/utils/getData";
import { countries } from "@/data/countryMetadata";
import { religions } from "@/data/religionMetadata";
import ShareWidget from "@/components/share/ShareWidget";
import { encodeNameIndex } from "@/utils/converters";

const HomePage = async () => {
  const currentYear = new Date().getFullYear();

  const top20BoyNames = await getData("usaBoyName");
  const top20GirlNames = await getData("usagirlName");

  const genderSection = (
    <div className="my-20">
      <h2 className="text-center text-xl font-semibold">
        Find Names By Gender
      </h2>
      <p className="text-center px-4 py-6 mx-auto max-w-3xl text-lg leading-relaxed text-gray-800">
        Browse our comprehensive selection of baby names categorized by gender.
        Whether you&apos;re looking for baby names for boys or girls,
        you&apos;ll find a wide range of options that cater to your preferences
        and style.
      </p>
      <div className="flex flex-col md:flex-row items-center justify-center gap-2 my-[20px] cursor-pointer">
        <Link href={`/gender/boy`}>
          <div className="h-[180px] w-[300px]  rounded-xl flex flex-col  items-center justify-center bg-[#006fee] hover:bg-[#88b3e3]  text-white hover:text-black">
            <Image
              alt="boyes name"
              height={20}
              width={20}
              className="w-20 h-20"
              src={"/young-boy-icon.svg"}
            />
            <p className="text-xl text-center ">Baby name (boy)</p>
            <p className="text-sm text-center mt-2">
              Explore a variety of beautiful baby names perfect for your little
              girl.
            </p>
          </div>
        </Link>
        <Link href={`/gender/girl`}>
          <div className="h-[180px] w-[300px]  rounded-xl flex flex-col items-center justify-center bg-[#f06246] hover:bg-[#f3917d] text-white hover:text-black">
            <Image
              alt="girls name"
              height={20}
              width={20}
              className="w-20 h-20"
              src={"/young-girl-icon.svg"}
            />
            <p className="text-xl text-center ">Baby name (girl)</p>
            <p className="text-sm text-center mt-2">
              Explore a variety of beautiful baby names perfect for your little
              girl.
            </p>
          </div>
        </Link>
      </div>
    </div>
  );

  const religionSection = (
    <div className="flex flex-col items-center justify-center">
      <h3 className="text-xl font-semibold">Find Name by Religion</h3>
      <p className="text-center px-4 py-6 mx-auto max-w-3xl text-lg leading-relaxed text-gray-800">
        Find meaningful baby names inspired by religious beliefs and traditions.
        Our curated list includes baby names from diverse religious backgrounds,
        offering a deep connection to faith and spirituality.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 my-[40px] cursor-pointer">
        {religions.map((r, index) => {
          const mobileBgClass =
            index % 2 === 0
              ? "bg-[#f06246] hover:bg-[#f3917d]"
              : "bg-[#006fee] hover:bg-[#88b3e3]";
          const mediumBgClass =
            index === 0 || index === 3
              ? "bg-[#f06246] hover:bg-[#f3917d]"
              : "bg-[#006fee] hover:bg-[#88b3e3]";
          return (
            <Link href={`/religion/${r.path}`} key={index}>
              <div
                className={`h-[250px] w-[300px] rounded-xl flex flex-col items-center justify-center text-white hover:text-black ${mediumBgClass}`}
              >
                <Image
                  alt={`${r.desc} Name`}
                  height={20}
                  width={20}
                  className="w-20 h-20"
                  src={r.image}
                />
                <p className="text-2xl text-center font-semibold">
                  {r.desc} baby name
                </p>
                <p className="text-sm text-center mt-2">
                  {r.shortDescription.substr(0, 60)}...
                </p>
              </div>
            </Link>
          );
        })}
      </div>
      <div className="flex items-center justify-end p-5 mr-[60px] md:mr-[80px]">
        <Link
          href={`/religion`}
          className="bg-[#f06246] hover:bg-[#f8c194] hover:text-black p-2 px-5 text-white font-bold relative custom-botton"
        >
          See More
        </Link>
      </div>
    </div>
  );

  const countrySection = (
    <div className="flex flex-col items-center justify-center">
      <h3 className="text-xl font-semibold">Baby Name by Country</h3>
      <p className="text-center px-4 py-6 mx-auto max-w-3xl text-lg leading-relaxed text-gray-800">
        Explore our extensive collection of baby names from various countries
        around the world. Discover unique and popular baby names that reflect
        the cultural heritage and traditions of different nations.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-[40px] cursor-pointer">
        {countries.map((c, index) => {
          const mediumBgClass =
            index % 2 === 0
              ? "bg-[#f06246] hover:bg-[#f3917d]"
              : "bg-[#006fee] hover:bg-[#88b3e3]";
          return (
            <Link href={`/country/${c.name}`} key={index}>
              <div
                className={`h-[250px] w-[300px] rounded-xl flex flex-col items-center justify-center text-white hover:text-black ${mediumBgClass}`}
              >
                <Image
                  alt={`${c.desc} Name`}
                  height={20}
                  width={20}
                  className="w-auto h-20"
                  src={`https://flagcdn.com/${c.code}.svg`}
                />
                <p className="text-xl text-center font-semibold">
                  {c.desc} baby name
                </p>
                <p className="text-sm text-center mt-2">
                  {c.metaDescription?.substring(0, 80)}...
                </p>
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
      <div className=" w-[95vw] md:w-[70vw] py-[20px] text-black">
        <h1 className="text-2xl font-bold text-center">
          Discover Beautiful Baby Names You&apos;ll Cherish
        </h1>
        <p className="text-center text-lg leading-relaxed text-gray-800 mt-4">
          Welcome to BabyNameNestlings, your ultimate destination for finding
          the perfect baby name. Explore our extensive collection of unique and
          meaningful baby names, carefully curated to help you choose a name
          that your family will treasure forever.
        </p>
        <ShareWidget />
        <div className="p-5 mb-5 rounded-lg">
          <div className="flex items-center justify-center rounded-lg">
            <Image
              src="/baby.webp"
              alt="Smiling babies"
              height={300}
              width={400}
              className="rounded-lg"
            />
          </div>
          <div className="flex flex-col md:flex-row gap-5">
            <div className="flex-1">
              <div className="flex flex-col items-center justify-center mb-5">
                <h3 className="text-xl font-bold text-center mt-5 break-words">
                  Popular baby names (girl) from 1994 - {currentYear}
                </h3>
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
                          <Link
                            href={`/meaning-of-name-${nameObj.name.toLowerCase()}-${encodeNameIndex(null, null, "girl", 1, index)}`}
                            target="_blank"
                            className="font-semibold underline"
                          >
                            View More
                          </Link>
                        </ul>
                      </AccordionDetails>
                    </Accordion>
                  );
                })}

              <div className="flex items-center justify-end p-5 mr-[60px] md:mr-[80px]">
                <Link
                  href={`/gender/girl`}
                  className="bg-[#f06246] hover:bg-[#f8c194] hover:text-black p-2 px-5 text-white font-bold relative custom-botton"
                >
                  See More
                </Link>
              </div>
            </div>

            <div className="flex-1">
              <div className="flex flex-col items-center justify-center mb-5">
                <h3 className="text-xl font-bold text-center mt-5 ">
                  Popular baby names (boy) from 1994 - {currentYear}
                </h3>
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
                          <Link
                            href={`/meaning-of-name-${nameObj.name.toLowerCase()}-${encodeNameIndex(null, null, "boy", 1, index)}`}
                            target="_blank"
                            className="font-semibold underline"
                          >
                            View More
                          </Link>
                        </ul>
                      </AccordionDetails>
                    </Accordion>
                  );
                })}

              <div className="flex items-center justify-end p-5 mr-[60px] md:mr-[80px]">
                <Link
                  href={`/gender/boy`}
                  className="bg-[#f06246] hover:bg-[#f8c194] hover:text-black p-2 px-5 text-white font-bold relative custom-botton"
                >
                  See More
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div>{genderSection}</div>
        <div>{religionSection}</div>

        <div className="mt-10">{countrySection}</div>

        <p className="text-center px-4 py-6 mx-auto max-w-3xl text-lg leading-relaxed text-gray-800">
          Choosing the perfect baby name is a cherished and significant decision
          for every parent. A beautiful baby name not only carries cultural,
          familial, and personal significance, but it also shapes the identity
          and future of your child. At BabyNameNestlings, we understand the
          importance of finding a baby name that resonates with love, meaning,
          and uniqueness. Our extensive database of baby names offers a variety
          of options to reflect your values and preferences. Whether you are
          seeking traditional baby names, modern baby names, or names with a
          specific cultural heritage, we provide a comprehensive selection to
          help you find the ideal name for your little one. Explore our
          collection and discover the perfect baby name that your family will
          cherish for generations.
        </p>
      </div>
    </div>
  );
};

export default HomePage;
