// File: /app/services/[slug]/page.js
import React from "react";
import ServicesDetail from "@/src/Components/ServicesSection/ServicesDetail";

import serviceimg1 from "@/public/seo.webp";
import serviceimg2 from "@/public/content-writing.webp";
import serviceimg3 from "@/public/googleads.jpeg";
import serviceimg4 from "@/public/social-media-marketing.webp";
import serviceimg5 from "@/public/website-development.webp";
import serviceimg6 from "@/public/ui-ux-design.webp";

/** ------------------------------------------------------------
 * Return content by slug (pure function)
 * ---------------------------------------------------------- */
function getContentBySlug(slug) {
  switch (slug) {
    case "seo":
      return {
        title: "Search Engine Optimization (SEO)",
        introduction:
          "At Zemalt, we enhance your online visibility by optimizing your website for search engines and driving organic traffic. We build credibility and trust with your audience through targeted keyword strategies and quality content. Stay ahead of the competition with our continuous monitoring and optimization to improve your search rankings.",
        backgroundimg: serviceimg1,
      };
    case "ui-ux":
      return {
        title: "UI/UX Designing",
        introduction:
          "At Zemalt, UI/UX design combines art and science to create intuitive digital experiences. By prioritizing user needs, our designers craft visually appealing interfaces that enhance usability and foster satisfaction. We aim to ensure seamless interactions that drive engagement and business success.",
        backgroundimg: serviceimg6,
      };
    case "google-ads":
      return {
        title: "Google Ads",
        introduction:
          "Ignite your business growth with Zemalt's cutting-edge web development solutions! We craft visually stunning, high-performing websites that engage users and drive conversions. Elevate your online presence and stand out in the digital marketplace. Partner with Zemalt today and turn your vision into reality!",
        backgroundimg: serviceimg3,
      };
    case "web-development":
      return {
        title: "Web Development",
        introduction:
          "At Zemalt, we specialize in creating innovative web development solutions tailored to your business needs. Our expert team combines cutting-edge technology with user-friendly designs to deliver exceptional online experiences. Partner with Zemalt to elevate your digital presence and achieve your business goals!",
        backgroundimg: serviceimg5,
      };
    case "content-writing":
      return {
        title: "Content Writing",
        introduction:
          "Transform your ideas into compelling narratives with Zemalt's expert content writing services! Our skilled team crafts engaging, SEO-friendly content that enhances your brand's visibility. Partner with Zemalt to connect meaningfully with your audience and elevate your message!",
        backgroundimg: serviceimg2,
      };
    case "social-media-ads":
      return {
        title: "Social Media Ads",
        introduction:
          "Unleash the power of social media ads with Zemalt! Our innovative strategies ensure your brand stands out, reaching the right audience at the right time. Experience exceptional results with tailored campaigns that resonate, engage, and convert. Elevate your marketing game and make your brand unforgettable!",
        backgroundimg: serviceimg4,
      };
    default:
      return {
        title: "Service Not Found",
        introduction: "The service you're looking for doesn't exist.",
        backgroundimg: null,
      };
  }
}

/** ------------------------------------------------------------
 * SEO Meta Tags
 * ---------------------------------------------------------- */
export async function generateMetadata({ params }) {
  const slug = (await params).slug;
  const content = getContentBySlug(slug);

  return {
    title: `${content.title} | Zemalt`,
    description: content.introduction,
    icons: { icon: "/plutofav.png" },
  };
}

/** ------------------------------------------------------------
 * Page Component
 * ---------------------------------------------------------- */
export default async function Page({ params }) {
  const slug = (await params).slug;

  return (
    <div>
      <ServicesDetail slug={slug} />
    </div>
  );
}
