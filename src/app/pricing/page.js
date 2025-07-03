


import React from 'react'
import Herosection2 from "@/src/Components/HeroSection/Herosection2";
import PricingPlan from "@/src/Components/PricingPlan/PricingPlan";
import styles from './page.module.css';
export const metadata = {
  title: "Pricing | Zemalt",
  description: "Get expert cybersecurity solutions to detect threats, fix vulnerabilities, and protect your digital assets with trusted, advanced services.",
};

const Services = () => {

  return (
    <div>
   
     
<Herosection2/>
   <div className={styles.Pricingsectiondata}>
        <h2>
      Affordable & <span>Results-Driven</span> Plans 
        </h2>
        <p>
        Explore Zemalt’s transparent and affordable SEO pricing plans. Get top-notch search engine optimization services tailored to boost rankings, drive traffic, and grow your business. No hidden costs—just proven results!
        </p>
      </div>
      <div className="Pricing-section">
      <PricingPlan/>
      </div>

    </div>
  );
};

export default Services;
