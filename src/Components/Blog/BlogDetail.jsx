"use client";
import React, { useState, useEffect } from "react";
import Head from "next/head";
import "./BlogDetail.css";
import Bloader from "../Skeletonloaders/Bloader";
import AuthorShare from "../AuthorShare/AuthorShare";
import Comments from "../Comments/Comments";
import Popular from "../PopularBlogs/Popular";
import { fetchBlogDetail } from "@/src/DAL/fetch";
import { formatDate } from "@/src/Utils/Formatedate";
import { baseUrl } from "@/src/Config/Config";

const BlogDetail = ({ slug }) => {
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    getBlogDetail();
  }, []);

  const getBlogDetail = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await fetchBlogDetail(slug);
      if (response) {
        setBlog(response.blog);
      } else {
        setError("Blog not found");
      }
    } catch (err) {
      setError("Error fetching blog");
    }
    setLoading(false);
  };

  const sanitizedContent = blog?.detail?.replace(/<script.*?<\/script>/gis, "");

  return (
    <>
      {blog && (
        <Head>
          <title>{blog.title} | PlutoSec</title>
          <meta
            name="description"
            content={blog.metaDescription || blog.title}
          />
          <meta property="og:title" content={blog.title} />
          <meta
            property="og:description"
            content={blog.metaDescription || blog.title}
          />
          <meta property="og:image" content={baseUrl + blog.thumbnail} />
          <meta property="og:type" content="article" />
          <link rel="preload" as="image" href={baseUrl + blog.thumbnail} />
        </Head>
      )}

      <div className="Blog-page-feature-img-area">
        {loading ? (
          <Bloader />
        ) : error ? (
          <p className="error-message">{error}</p>
        ) : blog ? (
          <>
            <h1>{blog.title}</h1>
            <p className="category-text">
              <span>{formatDate(blog?.createdAt)}</span>{" "}
              <span>{blog?.category?.name}</span>
            </p>
            <img
              src={baseUrl + blog.thumbnail}
              className="Blog-page-feature-img"
              alt={blog.title}
            />
            <div
              dangerouslySetInnerHTML={{ __html: sanitizedContent }}
              className="description-data"
            ></div>
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: blog?.faqSchema, // This must be a valid JSON string without surrounding quotes!
              }}
            />
          </>
        ) : (
          <p>No Article Found</p>
        )}
      </div>

      <AuthorShare author={blog?.author} />
      <Comments blogId={blog?._id} comments={blog?.comments} />
      <Popular />
    </>
  );
};

export default BlogDetail;
