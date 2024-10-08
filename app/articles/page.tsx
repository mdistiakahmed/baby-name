import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import React from "react";

async function getPosts() {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
    const res = await fetch(`${baseUrl}/api/posts`, {
      cache: "no-cache",
    });

    // Check if the response is OK (status 200-299)
    if (!res.ok) {
      throw new Error(`Failed to fetch posts: ${res.statusText}`);
    }

    const result = await res.json();
    return result.data;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return []; // Return an empty array or handle the error as needed
  }
}

const ArticleHomePage = async () => {
  const posts: any[] = await getPosts();

  return (
    <div className="flex items-center justify-center w-full">
      <div className=" w-[95vw] md:w-[70vw] py-[20px] text-black">
        <div className="flex flex-col items-center justify-center  py-8 bg-gray-100">
          <h3 className="text-2xl font-semibold mb-6">Articles</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl px-4">
            {posts.map((article, index) => {
              const { heroImage } = article;
              return (
                <Link
                  href={`/articles/${article?.slug?.current}`}
                  key={index}
                  className="bg-white shadow-md rounded-lg overflow-hidden transform transition duration-500 hover:scale-105 cursor-pointer"
                >
                  <Image
                    src={urlForImage(heroImage)}
                    height={200}
                    width={200}
                    className="h-[200px] w-full object-cover"
                    alt={heroImage.alt || "post"}
                  />
                  <div className="p-4 pb-0">
                    <h4 className="text-lg font-medium mb-2">
                      {article.title}
                    </h4>
                  </div>

                  <div className="flex items-center justify-center pb-2">
                    <Image
                      src="/button-arrow.svg"
                      height={20}
                      width={80}
                      alt="see more"
                    />
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

export default ArticleHomePage;
