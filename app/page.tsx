import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Image from "next/image";
import Link from "next/link";
import { countries, religions } from "@/utils/constants";
import { getData } from "@/utils/getData";

const HomePage = async () => {
  const currentYear = new Date().getFullYear();

  const top20BoyNames = await getData("usaBoyName");
  const top20GirlNames = await getData("usagirlName");

  const genderSection = (
    <div className="my-20">
      <h2 className="text-center text-xl font-semibold">
        Find Names By Gender
      </h2>
      <div className="flex flex-col md:flex-row items-center justify-center gap-2 my-[20px] cursor-pointer">
        <Link href={`/gender/boy`}>
          <div className="h-[180px] w-[300px]  rounded-xl flex flex-col  items-center justify-center bg-[#006fee] hover:bg-[#88b3e3]  text-white hover:text-black">
            <Image
              alt={""}
              height={20}
              width={20}
              className="w-20 h-20"
              src={"/young-boy-icon.svg"}
            />
            <p className="text-xl text-center ">Find Boys Name</p>
          </div>
        </Link>
        <Link href={`/gender/girl`}>
          <div className="h-[180px] w-[300px]  rounded-xl flex flex-col items-center justify-center bg-[#f06246] hover:bg-[#f3917d] text-white hover:text-black">
            <Image
              alt={""}
              height={20}
              width={20}
              className="w-20 h-20"
              src={"/young-girl-icon.svg"}
            />
            <p className="text-xl text-center ">Find Girls Name</p>
          </div>
        </Link>
      </div>
    </div>
  );

  const religionSection = (
    <div className="flex flex-col items-center justify-center">
      <h3 className="text-xl font-semibold">Find Name by Religion</h3>
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
                  alt={""}
                  height={20}
                  width={20}
                  className="w-20 h-20"
                  src={r.image}
                />
                <p className="text-2xl text-center font-semibold">
                  Find {r.desc} Name
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
      <h3 className="text-xl font-semibold">Find Name by Country</h3>
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
            <Link href={`/country/${c.name}`} key={index}>
              <div
                className={`h-[250px] w-[300px] rounded-xl flex flex-col items-center justify-center text-white hover:text-black ${mediumBgClass}`}
              >
                <Image
                  alt={""}
                  height={20}
                  width={20}
                  className="w-auto h-20"
                  src={`https://flagcdn.com/${c.code}.svg`}
                />
                <p className="text-xl text-center font-semibold">
                  Find {c.desc} Name
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
          Cherish Every Name, Love Every Choice
        </h1>
        <div className="p-5 mb-5 rounded-lg">
          <div className="flex items-center justify-center rounded-lg">
            <Image
              src="/baby-boy.webp"
              alt="B"
              height={300}
              width={400}
              className="rounded-lg"
            />
          </div>
          <div className="flex flex-col md:flex-row gap-5">
            <div>
              <div className="flex flex-col items-center justify-center mb-5">
                <h3 className="text-xl font-bold text-center mt-5 ">
                  Top 20 Girls Names in {currentYear}
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

            <div>
              <div className="flex flex-col items-center justify-center mb-5">
                <h3 className="text-xl font-bold text-center mt-5 ">
                  Top 20 Boys Names in {currentYear}
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
      </div>
    </div>
  );
};

export default HomePage;
