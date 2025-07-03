"use client";
import React, { useState, useEffect } from "react";
import BlogTemplate2 from "../../Templates/BlogTemplate2";
import "./Blog.css";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
// import Popular from "../PopularBlogs/Popular";
import { fetchBlogs } from "../../DAL/fetch";
import BlogCardSkeleton from "../Skeletonloaders/BlogCardSkeleton";

const Blogpage = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);

  const [totalPages, setTotalPages] = useState(1);
  const itemsPerPage = 9; // Adjust based on your needs
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    getBlogs();
  }, [page]);

  const getBlogs = async () => {
    setLoading(true);
    setError("");

    try {
      const response = await fetchBlogs(itemsPerPage, page);
      console.log("API Response:", response);

      if (response?.blogs) {
        setBlogs(response.blogs);
 
        setTotalPages(response.totalPages); // ✅ Ensure totalPages is set properly
      } else {
        throw new Error(response.message || "Failed to fetch blogs");
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false) ;
    }
  };

  // Handle pagination change
  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <>
      

      <div className="Blog-grid">
        <h2 className="Blog-heading">Latest Blogs</h2>
        <p>Drive Digital Success with Expert Strategies and Insights.</p>
     
        {loading ? (
         <BlogCardSkeleton/>
        ) : error ? (
          <p className="error-message">{error}</p>
        ) : (
          <>
            <BlogTemplate2 Blogs={blogs} />

            {/* ✅ Ensure Pagination Uses Correct `totalPages` */}
            <Stack spacing={2} alignItems="center">
              <Pagination
                count={totalPages} // ✅ Correct total pages
                page={page}
                onChange={handleChange}
                shape="rounded"
              />
            </Stack>
          </>
        )}
      </div>

      {/* <Popular /> */}
    </>
  );
};

export default Blogpage;
