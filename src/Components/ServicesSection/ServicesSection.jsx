
'use client'
import React, { useEffect } from "react";
import { baseUrl } from "../../Config/Config"; 

import ServiceTemplate2 from "../../Templates/ServiceTemplate2";
import "../../Templates/ServiceTEmplate.css"
import "./Services.css"
const ServicesSection = () => {

    useEffect(() => {
      window.scrollTo(0, 0); 
    }, []);
  
   
const services = [
    {
      name: "Search Engine Optimization",
      introduction: "At Zemalt, we enhance your online visibility by optimizing your website for search engines and driving organic traffic. We build credibility and trust with your audience through targeted keyword strategies and quality content. Stay ahead of the competition with our continuous monitoring and optimization to improve your search rankings.",
      slug: "seo",
      image: "/seo.webp"
    },
    {
      name: "Web Development",
      introduction: "At Zemalt, we specialize in creating innovative web development solutions tailored to your business needs. Our expert team combines cutting-edge technology with user-friendly designs to deliver exceptional online experiences. Partner with Zemalt to elevate your digital presence and achieve your business goals!",
      slug: "web-development",
      image: "/website-development.webp"
    },
    {
      name: "UI/UX Designing",
      introduction: "At Zemalt, UI/UX design combines art and science to create intuitive digital experiences. By prioritizing user needs, our designers craft visually appealing interfaces that enhance usability and foster satisfaction. We aim to ensure seamless interactions that drive engagement and business success.",
      slug: "ui-ux",
      image: "/ui.webp"
    },
    {
      name: "Google Ads",
      introduction: "Ignite your business growth with Zemalt's cutting-edge web development solutions! We craft visually stunning, high-performing websites that engage users and drive conversions. Elevate your online presence and stand out in the digital marketplace. Partner with Zemalt today and turn your vision into reality!",
      slug: "google-ads",
      image: "/google-ads.webp"
    },
    {
      name: "Social Media Ads",
      introduction: "Unleash the power of social media ads with Zemalt! Our innovative strategies ensure your brand stands out, reaching the right audience at the right time. Experience exceptional results with tailored campaigns that resonate, engage, and convert. Elevate your marketing game and make your brand unforgettable!",
      slug: "social-media-ads",
      image: "/social-media-marketing.webp"
    },
    {
      name: "Content Writing",
      introduction: "Transform your ideas into compelling narratives with Zemalt's expert content writing services! Our skilled team crafts engaging, SEO-friendly content that enhances your brand's visibility. Partner with Zemalt to connect meaningfully with your audience and elevate your message!",
      slug: "content-writing",
      image: "/content-writing.webp"
    }
  ];
  return (
   <div className="services-section">
        <img src="/dotsdesign.webp" alt="dot" className="dot1" />
        <img src="/dotsdesign.webp" alt="dot" className="dot2" />

        <div className="service-section">
          <div className="upper-section">
            <h1>
              We Build Best <br /> <span>SERVICE</span> Experience
            </h1>
          </div>

        
            <div className="service-area-section">
              <div className="service-grid">
                {services.map((service) => (
                  <ServiceTemplate2
                    key={service.slug}
                    image={service.image}
                    name={service.name}
                    slug={service.slug}
                    description={service.introduction}
                  />
                ))}
              </div>
            </div>
         

          <div className="straight-line" />
        </div>
      </div>
  )
}

export default ServicesSection