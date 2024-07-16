import { client } from "@/sanity/lib/client";
import { articleList } from "@/utils/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export interface Tag {
  name: string;
  slug: { current: string };
  _id: string;
}

export interface Post {
  title: string;
  slug: { current: string };
  publishedAt: string;
  excerpt: string;
  body: any;
  tags: Array<Tag>;
  _id: string;
}

async function getPosts() {
  const query = `
    *[_type == "post"] {
  title,
  slug,
  publishedAt,
  excerpt,
  tags[]-> {
      _id,
      slug,
      name
    }
}

  `;

  const data = await client.fetch(query);
  return data;
}

const ArticleHomePage = async () => {
  const posts: Post[] = await getPosts();
  console.log(posts);

  const postList = posts.map((po) => (
    <div key={po._id}>
      <Link href={`/posts/${po?.slug?.current}`}>
        <h2>{po?.title}</h2>
        <p> {new Date(po?.publishedAt).toDateString()}</p>
        <p>{po?.excerpt}</p>
      </Link>
      {po?.tags?.map((t) => <p key={t._id}>{t.name}</p>)}
    </div>
  ));

  return (
    <div className="flex items-center justify-center w-full">
      <div className=" w-[95vw] md:w-[70vw] py-[20px] text-black">
        <div className="flex flex-col items-center justify-center my-10 py-8 bg-gray-100">
          <h3 className="text-2xl font-semibold mb-6">Articles on Baby Name</h3>

          <div className="flex flex-col gap-10 my-10">{postList}</div>

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
                    <h4 className="text-lg font-medium mb-2">
                      {article.title}
                    </h4>
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
