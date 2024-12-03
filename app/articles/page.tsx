"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import {
  FormControl,
  Select,
  MenuItem,
  Pagination,
  Box,
  Grid,
  Typography,
  CircularProgress,
} from "@mui/material";
import { urlForImage } from "@/sanity/lib/image";

type Category = "Baby Care" | "Mother Care" | "Baby Names" | "";

interface Post {
  title: string;
  slug: { current: string };
  publishedAt: string;
  mainImage: any;
  category: string;
  excerpt: string;
}

interface PostsResponse {
  posts: Post[];
  pagination: {
    total: number;
    page: number;
    pageSize: number;
    totalPages: number;
  };
}

async function getPosts(category: Category = "", page: number = 1) {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
    const queryParams = new URLSearchParams();

    if (category) {
      queryParams.append("category", category);
      queryParams.append("pageSize", "20");
    } else {
      queryParams.append("pageSize", "20"); // 10 items per category x 3 categories
    }

    queryParams.append("page", page.toString());

    const res = await fetch(`${baseUrl}/api/posts?${queryParams.toString()}`, {
      cache: "no-cache",
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch posts: ${res.statusText}`);
    }

    const result: PostsResponse = await res.json();
    return result;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return {
      posts: [],
      pagination: {
        total: 0,
        page: 1,
        pageSize: 20,
        totalPages: 1,
      },
    };
  }
}

const ArticleHomePage = () => {
  const [category, setCategory] = useState<Category>("");
  const [page, setPage] = useState(1);
  const [posts, setPosts] = useState<Post[]>([]);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      try {
        console.log(process.env.NEXT_PUBLIC_SANITY_PROJECT_ID);
        const result = await getPosts(category, page);
        console.log(result.posts);
        setPosts(result.posts);
        setTotalPages(result.pagination.totalPages);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, [category, page]);

  const handleCategoryChange = (event: any) => {
    setCategory(event.target.value as Category);
    setPage(1); // Reset to first page when category changes
  };

  const handlePageChange = (event: any, value: number) => {
    setPage(value);
  };

  const categories = [
    { value: "Baby Care", label: "Baby Care" },
    { value: "Mother Care", label: "Mother Care" },
    { value: "Baby Names", label: "Baby Names" },
  ];

  return (
    <div className="flex items-center justify-center w-full">
      <div className="w-[95vw] md:w-[70vw] py-[20px]">
        <Box sx={{ p: 3 }}>
          <FormControl sx={{ mb: 3, minWidth: 200 }}>
            <Select
              value={category}
              onChange={handleCategoryChange}
              displayEmpty
            >
              <MenuItem value="">All Categories</MenuItem>
              {categories.map((cat) => (
                <MenuItem key={cat.value} value={cat.value}>
                  {cat.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          {isLoading ? (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "400px",
              }}
            >
              <CircularProgress />
            </Box>
          ) : (
            <Grid container spacing={3}>
              {posts.map((post, index) => (
                <Grid item xs={12} sm={6} md={4} key={post.slug.current}>
                  <Link href={`/articles/${post.slug.current}`}>
                    <Box
                      sx={{
                        border: "1px solid #eee",
                        borderRadius: 2,
                        overflow: "hidden",
                        height: "100%",
                        transition: "transform 0.2s",
                        "&:hover": {
                          transform: "translateY(-5px)",
                        },
                      }}
                    >
                      {post.mainImage && (
                        <Image
                          src={urlForImage(post.mainImage)}
                          alt={post.title}
                          width={400}
                          height={250}
                          style={{
                            objectFit: "cover",
                            width: "100%",
                            height: 200,
                          }}
                        />
                      )}
                      <Box sx={{ p: 2 }}>
                        <Typography variant="h6" gutterBottom>
                          {post.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {post.excerpt}
                        </Typography>
                        <Typography
                          variant="caption"
                          color="text.secondary"
                          sx={{ mt: 1, display: "block" }}
                        >
                          {new Date(post.publishedAt).toLocaleDateString()}
                        </Typography>
                      </Box>
                    </Box>
                  </Link>
                </Grid>
              ))}
            </Grid>
          )}

          {totalPages > 1 && (
            <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
              <Pagination
                count={totalPages}
                page={page}
                onChange={handlePageChange}
                color="primary"
              />
            </Box>
          )}
        </Box>
      </div>
    </div>
  );
};

export default ArticleHomePage;
