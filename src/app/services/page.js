


import Herosection2 from "@/src/Components/HeroSection/Herosection2";
import Benefits from "../../Components/Benifits/Benefits";
import ServicesSection from "@/src/Components/ServicesSection/ServicesSection";

export const metadata = {
  title: "Services | Zemalt",
  description: "Get expert cybersecurity solutions to detect threats, fix vulnerabilities, and protect your digital assets with trusted, advanced services.",
};

const Services = () => {

  return (
    <div>
   
     
<Herosection2/>
    <ServicesSection/>

      {/* Heading */}
      <div className="page-heading-area">
        <p>
          Why Work With Zemalt?{" "}
          <span>
            <img src="/headingDesign.svg" alt="Heading Design" />
          </span>
        </p>
      </div>

      {/* Benefits Section */}
      <Benefits />
    </div>
  );
};

export default Services;
