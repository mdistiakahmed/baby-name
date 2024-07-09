import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Image from "next/image";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
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
          <h3 className="text-2xl font-bold text-center my-5 underline">
            Most Popular Baby Names
          </h3>
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
                  <ul>
                    {nameObj.stories.map((story: any, idx: any) => {
                      return (
                        <li key={idx}>
                          <p>{story}</p>
                        </li>
                      );
                    })}
                  </ul>
                </AccordionDetails>
              </Accordion>
            );
          })}

          <div className="flex items-center justify-end p-5">
            <Button variant="contained" endIcon={<SendIcon />}>
              See More
            </Button>
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
          <h3 className="text-2xl font-bold text-center my-5 underline">
            Popular Baby Names in USA
          </h3>
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
                  <ul>
                    {nameObj.stories.map((story: any, idx: any) => {
                      return (
                        <li key={idx}>
                          <p>{story}</p>
                        </li>
                      );
                    })}
                  </ul>
                </AccordionDetails>
              </Accordion>
            );
          })}

          <div className="flex items-center justify-end p-5">
            <Button variant="contained" endIcon={<SendIcon />}>
              See More
            </Button>
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
          <h3 className="text-2xl font-bold text-center my-5 underline">
            Muslim baby names
          </h3>
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
                  <ul>
                    {nameObj.stories.map((story: any, idx: any) => {
                      return (
                        <li key={idx}>
                          <p>{story}</p>
                        </li>
                      );
                    })}
                  </ul>
                </AccordionDetails>
              </Accordion>
            );
          })}

          <div className="flex items-center justify-end p-5">
            <Link href={`/muslim/baby-name`}>See More</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
