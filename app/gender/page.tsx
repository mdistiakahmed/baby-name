import Image from "next/image";
import Link from "next/link";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { dummanyNameList, gender, getReligionByName } from "@/utils/constants";

const GenderCategoryPage = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="flex items-center justify-center w-full">
      <div className=" w-[95vw] md:w-[70vw] flex flex-col  gap-4 items-center justify-center m-5">
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
        {gender.map((g, index) => (
          <div className="rounded-lg w-full" key={index}>
            <div className="flex flex-col items-center justify-center mb-5">
              <h3 className="text-2xl font-bold text-center mt-5 ">
                Top 50 {g.name} Name in {currentYear}
              </h3>
            </div>

            {dummanyNameList.map((nameObj: any, index: any) => {
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
                href={`/gender/${g.name}`}
                className="bg-[#f06246] hover:bg-[#f8c194] hover:text-black p-2 px-5 text-white font-bold relative custom-botton"
              >
                See More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GenderCategoryPage;
