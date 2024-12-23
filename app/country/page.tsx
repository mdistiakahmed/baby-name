import Image from "next/image";
import { Metadata } from "next";
import Link from "next/link";

import { countries } from "@/data/countryMetadata";

export const metadata: Metadata = {
  title: "Baby Names By Country | BabyNameNestlings",
  description: "Find baby names based on country and cultural values",
  openGraph: {
    title: "Baby Names By Country | BabyNameNestlings",
    description: "Find baby names based on country and cultural values",
    type: "article",
    locale: "en_US",
    url: `http://babynamenestlings.com/country`,
    siteName: "BabyNameNestlings",
    images: [
      {
        url: "/baby.webp",
        width: 1200,
        height: 630,
        alt: "Smiling babies",
      },
    ],
  },
};

const CountryHomePage = async () => {

  const countrySection = (
    <div className="flex flex-col items-center justify-center">
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
            <Link href={`/country/${c.name.toLocaleLowerCase()}`} key={index}>
              <div
                className={`h-[180px] w-[250px] rounded-xl flex flex-col items-center justify-center text-white hover:text-black ${mediumBgClass}`}
              >
                <Image
                  alt={"C"}
                  height={20}
                  width={20}
                  className="w-auto h-20"
                  src={`https://flagcdn.com/${c.code}.svg`}
                />
                <p className="text-xl text-center ">Find {c.desc} Name</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );

  return (
    <div className="flex items-center justify-center w-full">
      <div className=" w-[95vw] md:w-[70vw] flex flex-col  gap-4 items-center justify-center m-5">
        <h1 className="text-2xl font-bold text-center ">
          Baby Names By Country
        </h1>
        <p className="text-xl text-center">
          Find baby names based on country and cultural values
        </p>

        <div>{countrySection}</div>
      </div>
    </div>
  );
};

export default CountryHomePage;
