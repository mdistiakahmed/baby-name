import { NextRequest, NextResponse } from "next/server";
import { client } from "@/sanity/lib/client";

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const category = searchParams.get("category");
  const page = parseInt(searchParams.get("page") || "1");
  const pageSize = parseInt(searchParams.get("pageSize") || "10");
  const start = (page - 1) * pageSize;
  const end = start + pageSize;

  const query = `{
    "total": count(*[_type == "post" ${category ? '&& references(*[_type == "category" && title == $category]._id)' : ''}]),
    "posts": *[_type == "post" ${category ? '&& references(*[_type == "category" && title == $category]._id)' : ''}] | order(publishedAt desc) [$start...$end] {
      title,
      slug,
      publishedAt,
      mainImage,
      "category": categories->title,
      excerpt
    }
  }`;

  try {
    const result = await client.fetch(
      query,
      { category, start, end },
      { cache: "no-cache" }
    );

    return NextResponse.json({
      posts: result.posts,
      pagination: {
        total: result.total,
        page,
        pageSize,
        totalPages: Math.ceil(result.total / pageSize),
      },
    });
  } catch (error) {
    console.error("Error fetching posts:", error);
    return NextResponse.json(
      { error: "An error occurred while fetching posts" },
      { status: 500 }
    );
  }
}