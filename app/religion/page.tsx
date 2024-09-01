import Image from "next/image";
import { Metadata } from "next";
import Link from "next/link";

import { religions } from "@/data/religionMetadata";
import ShareWidget from "@/components/share/ShareWidget";

export const metadata: Metadata = {
  title: "Baby Names By Religion | BabyNameNestlings",
  description: "Find baby names based on religious values",
  openGraph: {
    title: "Baby Names By Religion | BabyNameNestlings",
    description: "Find baby names based on religious values",
    type: "article",
    locale: "en_US",
    url: `http://babynamenestlings.com/religion`,
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

const ReligionCategoryPage = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="flex items-center justify-center w-full">
      <div className=" w-[95vw] md:w-[70vw] flex flex-col  gap-4 items-center justify-center m-5">
        <h3 className="text-2xl font-bold text-center ">
          Baby Names By Religion
        </h3>
        <p className="text-xl text-center">
          Find baby names based on religious significance
        </p>
        <ShareWidget />

        <div className="flex items-center justify-center">
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
        </div>
      </div>
    </div>
  );
};

export default ReligionCategoryPage;
