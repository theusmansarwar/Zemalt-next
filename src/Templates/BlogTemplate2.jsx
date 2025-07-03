import React from "react";
import "./BlogTemplate2.css";
import { useRouter } from "next/navigation"
import { baseUrl } from "../Config/Config";

const BlogTemplate2 = ({ Blogs }) => {
  // Accept services as a prop
  const router = useRouter();

  return (
    <div className="Blog-area2-section">
      <div className="Blog2-grid">
        {Blogs.map((Blogs) => (
          <div
          key={Blogs.id || Blogs.slug}
            className="Blog-card2-section"
            onClick={() => router.push(`/blog/${Blogs.slug}`)}
          >
            <img src={baseUrl+Blogs.thumbnail} alt={Blogs.title} />
            <h2>{Blogs.title}</h2>
            <p>{Blogs.description}</p>
            <p className="Blog-date">{Blogs.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogTemplate2;
