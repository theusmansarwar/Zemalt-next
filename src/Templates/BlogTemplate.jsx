import React from "react";
import "./BlogTemplate.css";
import { useRouter } from "next/navigation";
import useTruncateText from "../hooks/useTruncateText";

const BlogTemplate = ({ image, title, content, slug }) => {
  const router = useRouter();
  return (
    <div className="Blog-area">
      <div className="blogimg"   onClick={() => router.push(`/blog/${slug}`)}>
        <img src={image} alt="Blog" />
      </div>
      <div className="blog-text-section" onClick={() => router.push(`/blog/${slug}`)}>
        <h3>{useTruncateText(title, 30)}</h3>
        <p>{useTruncateText(content, 170)}</p>
      </div>
    </div>
  );
};

export default BlogTemplate;
