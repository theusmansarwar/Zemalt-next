import React from "react";
import styles from "./page.module.css";
import Breadcrumb from "@/src/Components/Breadcrumb/Breadcrumb";
import { fetchBlogDetail } from "@/src/DAL/fetch";
import { baseUrl } from "@/src/Config/Config";
import Herosection2 from "@/src/Components/HeroSection/Herosection2";
import BlogDetail from "@/src/Components/Blog/BlogDetail";


export async function generateMetadata({ params }) {
  const slug = (await params).slug
  const res = await fetchBlogDetail(slug); 
  const blog = res?.blog;

  const title = blog?.title || slug.replace(/-/g, " ");
  const description =
    blog?.metaDescription ||
    `Details about ${slug.replace(/-/g, " ")} on PlutoSec.`;
  const image = baseUrl + blog?.thumbnail ;
  const url = `https://PlutoSec.ca/blog/${slug}`; 
  return {
    title: `${title} | PlutoSec`,
    description: description,
    icons: { icon: "/fav.png" },

    openGraph: {
      title,
      description,
      url,
      type: "article",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}



export default async function Page({ params }) {
  const slug = (await params).slug
  return (
    <div >
     <Herosection2/>

      <BlogDetail slug={slug} /> 
    </div>
  );
}
