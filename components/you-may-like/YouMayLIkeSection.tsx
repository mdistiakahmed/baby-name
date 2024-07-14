"use client";

import { articleList } from "@/utils/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const YouMayLIkeSection = () => {
  const pathname = usePathname();

  console.log("pathname", pathname);

  if (pathname === "/articles") {
    return null;
  }

  return (
    <div className="flex flex-col items-center justify-center my-10 py-8 bg-gray-100">
      <h3 className="text-2xl font-semibold mb-6">You May Also Like</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl px-4">
        {articleList.map((article, index) => {
          return (
            <Link
              href={article.url}
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden transform transition duration-500 hover:scale-105 cursor-pointer"
            >
              <Image
                src={article.image}
                height={200}
                width={200}
                className="h-[200px] w-full object-cover"
                alt={article.title.substring(0, 10)}
              />
              <div className="p-4">
                <h4 className="text-lg font-medium mb-2">{article.title}</h4>
              </div>
            </Link>
          );
        })}
      </div>
      <div className="flex items-center justify-end p-5 mr-[60px] md:mr-[80px]">
        <Link
          href={`/articles`}
          className="bg-[#f06246] hover:bg-[#f8c194] hover:text-black p-2 px-5 text-white font-bold relative custom-botton"
        >
          See More
        </Link>
      </div>
    </div>
  );
};

export default YouMayLIkeSection;
