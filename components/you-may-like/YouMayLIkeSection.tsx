"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { urlForImage } from "@/sanity/lib/image";
import { usePathname } from "next/navigation";

interface Post {
  title: string;
  slug: { current: string };
  publishedAt: string;
  mainImage: any;
  category: string;
  excerpt: string;
}

interface Props {
  category?: string;
}

const YouMayLikeSection = ({ category = "" }: Props) => {
  const pathname = usePathname();

  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (pathname === "/articles" || pathname.includes("/studio")) {
      return;
    }

    const fetchPosts = async () => {
      try {
        const res = await fetch(
          `/api/posts?category=${category}&page=1&pageSize=20`
        );

        if (!res.ok) {
          throw new Error("Failed to fetch posts");
        }

        const data = await res.json();
        setPosts(data.posts);
      } catch (error) {
        console.error("Error fetching related posts:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, [category]);

  if (pathname === "/articles" || pathname.includes("/studio")) {
    return null;
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center w-ful">
      <div className="w-[95vw] md:w-[70vw] p-8">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/4 mb-8"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="bg-gray-100 rounded-lg p-4">
                <div className="h-40 bg-gray-200 rounded mb-4"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center w-full">
      <div className=" w-[95vw] md:w-[70vw] flex flex-col  gap-4 items-center justify-center m-5">
        <h2 className="text-2xl font-bold mb-8 text-[#212529] text-center">
          {category ? `More from ${category}` : "You May Also Like"}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link
              href={`/articles/${post.slug.current}`}
              key={post.slug.current}
              className="group"
            >
              <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200">
                {post.mainImage && (
                  <div className="relative aspect-[16/9]">
                    <Image
                      src={urlForImage(post.mainImage)}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-200"
                    />
                  </div>
                )}
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors duration-200">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="mt-2 text-xs text-gray-500">
                    {new Date(post.publishedAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default YouMayLikeSection;
