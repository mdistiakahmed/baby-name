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

export default function Home() {
  return (
    <div className="flex items-center justify-center w-full">
      <div className=" w-[95vw] md:w-[70vw] py-[20px]">
        <div className="p-5 mb-5 rounded-lg">
          <div className="flex items-center justify-center rounded-lg">
            <Image
              src="/baby1.jpg"
              alt="B"
              height={300}
              width={400}
              className="rounded-lg"
            />
          </div>
          <div className="flex flex-col items-center justify-center mb-5">
            <h3 className="text-2xl font-bold text-center mt-5 ">
              Most Popular Baby Names (Girl)
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

        <div className="p-5 mb-5 rounded-lg">
          <div className="flex items-center justify-center rounded-lg">
            <Image
              src="/baby1.jpg"
              alt="B"
              height={300}
              width={400}
              className="rounded-lg"
            />
          </div>
          <div className="flex flex-col items-center justify-center mb-5">
            <h3 className="text-2xl font-bold text-center mt-5 ">
              Most Popular Baby Names (Boy)
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

        <div className="p-5 mt-5 rounded-lg">
          <div className="flex items-center justify-center rounded-lg">
            <Image
              src="/baby2.jpg"
              alt="B"
              height={300}
              width={400}
              className="rounded-lg"
            />
          </div>
          <div className="flex flex-col items-center justify-center mb-5">
            <h3 className="text-2xl font-bold text-center mt-5 ">
              Popular Baby Names in USA (Girl)
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
              href={`/usa/baby-name`}
              className="bg-[#f06246] hover:bg-[#f8c194] hover:text-black p-2 px-5 text-white font-bold relative custom-botton"
            >
              See More
            </Link>
          </div>
        </div>

        <div className="p-5 mt-5 rounded-lg">
          <div className="flex items-center justify-center rounded-lg">
            <Image
              src="/baby2.jpg"
              alt="B"
              height={300}
              width={400}
              className="rounded-lg"
            />
          </div>
          <div className="flex flex-col items-center justify-center mb-5">
            <h3 className="text-2xl font-bold text-center mt-5 ">
              Popular Baby Names in USA (Boy)
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
              href={`/usa/baby-name`}
              className="bg-[#f06246] hover:bg-[#f8c194] hover:text-black p-2 px-5 text-white font-bold relative custom-botton"
            >
              See More
            </Link>
          </div>
        </div>

        <div className="p-5 mt-5 rounded-lg">
          <div className="flex items-center justify-center rounded-lg">
            <Image
              src="/baby3.jpg"
              alt="B"
              height={300}
              width={400}
              className="rounded-lg"
            />
          </div>

          <div className="flex flex-col items-center justify-center mb-5">
            <h3 className="text-2xl font-bold text-center mt-5 ">
              Muslim baby names (Girl)
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
              href={`/muslim/baby-name`}
              className="bg-[#f06246] hover:bg-[#f8c194] hover:text-black p-2 px-5 text-white font-bold relative custom-botton"
            >
              See More
            </Link>
          </div>
        </div>

        <div className="p-5 mt-5 rounded-lg">
          <div className="flex items-center justify-center rounded-lg">
            <Image
              src="/baby3.jpg"
              alt="B"
              height={300}
              width={400}
              className="rounded-lg"
            />
          </div>

          <div className="flex flex-col items-center justify-center mb-5">
            <h3 className="text-2xl font-bold text-center mt-5 ">
              Muslim baby names (Boy)
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
              href={`/muslim/baby-name`}
              className="bg-[#f06246] hover:bg-[#f8c194] hover:text-black p-2 px-5 text-white font-bold relative custom-botton"
            >
              See More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
