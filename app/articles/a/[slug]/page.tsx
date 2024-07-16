import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import { PortableText } from "next-sanity";
import Image from "next/image";
import React from "react";

async function getPost(slug: string) {
  const query = `
    *[_type == "post" && slug.current == "${slug}"][0] {
        title,
        slug,
        publishedAt,
        excerpt,
        body,
        tags[]-> {
            _id,
            slug,
            name
        }
    }
    `;

  const post = await client.fetch(query);
  return post;
}

const SingleArticlePage = async ({ params }: any) => {
  const { slug } = params;
  const post = await getPost(slug);
  return (
    <div>
      <div className="flex items-center justify-center w-full">
        <div className=" w-[95vw] md:w-[70vw] p-[10px] text-black">
          <div className="flex flex-col gap-6 text-center md:text-left">
            <h1 className="text-2xl font-bold text-center leading-relaxed">
              {post?.title}
            </h1>

            <div className="prose prose-lg text-justify min-w-full">
              <PortableText
                value={post?.body}
                components={myPortableTextComponents}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleArticlePage;

const CodeBlock = ({ children }: any) => {
  return (
    <pre className="bg-black text-white my-4 p-4 rounded overflow-x-auto">
      <code className="bg-transparent text-white">{children}</code>
    </pre>
  );
};

const myPortableTextComponents = {
  types: {
    image: ({ value }: any) => (
      <div className="w-full flex  justify-center">
        <Image
          src={urlForImage(value)}
          alt="post"
          width={700}
          height={700}
          className="text-center"
        />
      </div>
    ),
  },
  marks: {
    code: ({ children }: any) => <CodeBlock>{children}</CodeBlock>,
  },
};
