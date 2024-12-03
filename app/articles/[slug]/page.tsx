import ShareWidget from "@/components/share/ShareWidget";
import { urlForImage } from "@/sanity/lib/image";
import { Metadata } from "next";
import { PortableText } from "next-sanity";
import Image from "next/image";
import React from "react";
import hljs from "highlight.js";

async function getPost(slug: string) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/api/posts/${slug}`,
      {
        cache: "no-cache",
      }
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch post: ${res.statusText}`);
    }

    const { post } = await res.json();
    return post;
  } catch (error) {
    console.error("Error fetching post:", error);
    return null;
  }
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata | undefined> {
  const post = await getPost(params.slug);

  if (!post) {
    return {
      title: "Article Not Found | BabyNameNestlings",
      description: "The requested article could not be found.",
    };
  }

  const ogImage = post.mainImage
    ? urlForImage(post.mainImage)
    : "/default-og-image.jpg";

  return {
    title: `${post.title} | BabyNameNestlings`,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | BabyNameNestlings`,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedAt,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      locale: "en_US",
      url: `${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/articles/${params.slug}`,
      siteName: "BabyNameNestlings",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [ogImage],
    },
  };
}

const SingleArticlePage = async ({ params }: { params: { slug: string } }) => {
  const post = await getPost(params.slug);

  if (!post) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Article Not Found</h1>
          <p>The article you&apos;re looking for could not be found.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center w-full">
      <div className="w-[95vw] md:w-[70vw] py-[20px]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#212529] font-custom tracking-tight">
              {post.title}
            </h1>

            <div className="flex items-center justify-center space-x-4 text-gray-600 mb-4">
              <time dateTime={post.publishedAt} className="text-sm">
                {new Date(post.publishedAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              {post.category && (
                <>
                  <span className="text-gray-400">•</span>
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-sm font-medium text-gray-700">
                    {post.category}
                  </span>
                </>
              )}
            </div>
          </div>

          {post.mainImage && (
            <div className="mb-8 flex justify-center">
              <div className="w-full md:w-[400px] lg:w-[600px] relative">
                <div className="aspect-[16/9]">
                  <Image
                    src={urlForImage(post.mainImage)}
                    alt={post.title}
                    fill
                    className="rounded-lg object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          )}

          <article className="prose lg:prose-xl">
            <PortableText
              value={post.body}
              components={myPortableTextComponents}
            />
          </article>

          <div className="mt-8">
            <ShareWidget />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleArticlePage;

const CodeBlock = ({ value }: any) => {
  const { language, code } = value;

  const highlightedCode = hljs.highlight(code, {
    language: language || "java",
  }).value;

  return (
    <pre className="border md:mx-10 my-4 md:p-4 overflow-x-auto">
      <code
        className={`hljs language-${language || "java"}`}
        dangerouslySetInnerHTML={{ __html: highlightedCode }}
      />
    </pre>
  );
};

const MyPortableTextImage = ({ value }: any) => {
  const { asset, alt } = value;

  return (
    <div className="w-full flex justify-center">
      <Image
        src={urlForImage(value)}
        alt={alt || "image"}
        width={400}
        height={200}
      />
    </div>
  );
};

const MyPortableTextVideo = ({ value }: any) => {
  const { url, title } = value;

  return (
    <div className="w-full flex justify-center my-8">
      <iframe
        width="560"
        height="315"
        src={url.replace("watch?v=", "embed/")}
        title={title || "Embedded Video"}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="rounded-lg"
      ></iframe>
    </div>
  );
};

const myPortableTextComponents = {
  types: {
    image: MyPortableTextImage,
    videoEmbed: MyPortableTextVideo,
    myCodeField: CodeBlock,
  },
  marks: {
    myCodeField: ({ children }: any) => <CodeBlock>{children}</CodeBlock>,
    link: ({ value, children }: any) => (
      <a href={value.href} className="text-pink-600 underline">
        {children}
      </a>
    ),
  },
  block: {
    h1: ({ children }: any) => (
      <h1 className="text-3xl font-bold font-custom text-[#212529] my-4 tracking-wider">
        {children}
      </h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-2xl font-bold text-[#212529] my-4 font-custom tracking-wider">
        {children}
      </h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-xl font-bold text-[#212529] my-4 font-custom tracking-wider">
        {children}
      </h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-lg text-[#212529] leading-[32px] my-4 font-custom tracking-wider">
        {children}
      </h4>
    ),
    normal: ({ children }: any) => {
      const isEmpty =
        !children || (children.length === 1 && children[0] === "");

      if (isEmpty) {
        return (
          <div className="h-4">
            {/* Empty div to create space for an empty line */}
          </div>
        );
      }

      return (
        <p className="my-4 font-custom text-xl font-[400] leading-[26px] text-[#212529] text-justify ">
          {children}
        </p>
      );
    },
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-gray-400 pl-4 italic text-gray-700 my-4 font-custom leading-[28px]">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="list-disc pl-6 font-custom leading-[26px] text-[#212529] text-justify">
        {children}
      </ul>
    ),
  },
};
