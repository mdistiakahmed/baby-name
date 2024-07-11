import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Image from "next/image";
import Link from "next/link";

const x = [
  {
    name: "Istiak",
    meaning: "Love, Affection, Attraction",
    stories: [
      "Md Istiak Ahmed was a great computer scientiest born in 1994.",
      "Istiak Ashiq was a novelist who wrote Gitanjoli",
    ],
  },
  {
    name: "Istiak",
    meaning: "Love, Affection, Attraction",
    stories: [
      "Md Istiak Ahmed was a great computer scientiest born in 1994.",
      "Istiak Ashiq was a novelist who wrote Gitanjoli",
    ],
  },
  {
    name: "Istiak",
    meaning: "Love, Affection, Attraction",
    stories: [
      "Md Istiak Ahmed was a great computer scientiest born in 1994.",
      "Istiak Ashiq was a novelist who wrote Gitanjoli",
    ],
  },
];

const religions = [
  {
    name: "Buddhist",
    image: "/buddhism-icon.svg",
    path: "buddhist",
  },
  {
    name: "Christian",
    image: "/church-icon.svg",
    path: "christian",
  },
  {
    name: "Hindu",
    image: "/hindu-temple-icon.svg",
    path: "hindu",
  },
  {
    name: "Islamic",
    image: "/islam-icon.svg",
    path: "islam",
  },
];

const counties = [
  {
    name: "Bangladesh",
    code: "bd",
    desc: "Bangladeshi names",
  },
  {
    name: "India",
    code: "in",
    desc: "Indian names",
  },
  {
    name: "Japan",
    code: "jp",
    desc: "Japanese names",
  },
  {
    name: "Korea",
    code: "kr",
    desc: "Korean names",
  },
  {
    name: "USA",
    code: "us",
    desc: "American names",
  },
];

export default function Home() {
  const currentYear = new Date().getFullYear();
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
                  Find {r.name} Name
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
        {counties.map((c, index) => {
          const mobileBgClass =
            index % 2 === 0
              ? "bg-[#f06246] hover:bg-[#f3917d]"
              : "bg-[#006fee] hover:bg-[#88b3e3]";
          const mediumBgClass =
            index % 2 === 0
              ? "bg-[#f06246] hover:bg-[#f3917d]"
              : "bg-[#006fee] hover:bg-[#88b3e3]";
          return (
            <Link href={`#`} key={index}>
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
                <p className="text-2xl text-center font-semibold">
                  Find {c.desc}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
      <div className="flex items-center justify-end p-5 mr-[60px] md:mr-[80px]">
        <Link
          href={`#`}
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
          Find Most Beautiful Name for Your Baby
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
          <div className="flex flex-col items-center justify-center mb-5">
            <h3 className="text-xl font-bold text-center mt-5 ">
              Top 10 Names in {currentYear}
            </h3>
          </div>

          {x.map((nameObj: any, index: any) => {
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
              href={`/popular/baby-name`}
              className="bg-[#f06246] hover:bg-[#f8c194] hover:text-black p-2 px-5 text-white font-bold relative custom-botton"
            >
              See More
            </Link>
          </div>
        </div>
        <div>{religionSection}</div>

        <div className="mt-10">{countrySection}</div>
      </div>
    </div>
  );
}
