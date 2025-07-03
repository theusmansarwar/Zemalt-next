"use client";

import React, { useState, useEffect } from "react";
import "./AuthorShare.css";
import { FaLinkedinIn, FaFacebookF, FaXTwitter, FaLink } from "react-icons/fa6";

const AuthorShare = ({ author }) => {
  const [copySuccess, setCopySuccess] = useState(false);
  const [currentUrl, setCurrentUrl] = useState("");

  // Set current URL safely on client side
  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentUrl(window.location.href);
    }
  }, []);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (error) {
      console.error("Failed to copy:", error);
    }
  };

  const shareOnFacebook = () => {
    const fbUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}&quote=Check out this article!`;
    window.open(fbUrl, "_blank");
  };

  const shareOnTwitter = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=Check out this article!&url=${encodeURIComponent(currentUrl)}`;
    window.open(twitterUrl, "_blank");
  };

  const shareOnLinkedIn = () => {
    const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`;
    window.open(linkedInUrl, "_blank");
  };

  return (
    <div className="author-share-container">
      <div className="author-info">
        <img src="/person.png" alt="Author" className="author-image" />
        <div className="author-details">
          <h3>{author || "Unknown Author"}</h3>
          <p>Author</p>
        </div>
      </div>

      <div>
        <p className="share-text">Spread the Word: Share This Post</p>
        <div className="share-buttons">
          <button className="linkedin" onClick={shareOnLinkedIn}>
            <FaLinkedinIn />
          </button>
          <button className="facebook" onClick={shareOnFacebook}>
            <FaFacebookF />
          </button>
          <button className="twitter" onClick={shareOnTwitter}>
            <FaXTwitter />
          </button>
          <button className="copy-link" onClick={handleCopyLink}>
            <FaLink /> {copySuccess ? "Copied!" : "Copy link"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthorShare;
