"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // ✅ App Router version
import "./Herosection.css";

const HeroSection = () => {
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const router = useRouter();

  const backgrounds = [
    "/background1.webp",
    "/background2.webp",
    "/background3.webp"
  ];

  const changeBackground = (index) => {
    setCurrentBgIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="Hero-section">
      <div
        className="feature-section"
        style={{
          backgroundImage: `url(${backgrounds[currentBgIndex]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transition: "background-image 0.8s ease-in-out",
        }}
      >
        <div className="blackscreen">
          <div className="text-section">
            <h1>
              Zemalt- <br />
              Where Strategy Meets Success!
            </h1>
            <p>
              Zemalt is a results-driven digital solutions agency specializing
              in SEO, Google Ads, content writing, social media marketing, web
              development, and UI/UX design to help businesses grow and maximize
              their online presence.
            </p>
            <button
              className="secondary-button"
              onClick={() => router.push("/contact")}
            >
              Get Started
            </button>
          </div>
        </div>
      </div>

      <div className="heading-area">
        <div className="rounded-tab">
          {backgrounds.map((_, index) => (
            <div
              key={index}
              className={`dot ${index === currentBgIndex ? "Active" : ""}`}
              onClick={() => changeBackground(index)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
