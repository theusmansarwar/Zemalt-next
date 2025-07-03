// import Marquee from "../components/Marquee/Marquee";
import HeroSection from "../components/HeroSection/HeroSection";
import "bootstrap/dist/css/bootstrap.min.css";

import Services from "../Components/ServicesSection/Services";
import TeamSection from "../Components/TeamSection/TeamSection";
import Testimonial from "../Components/TestimonialSection/Testimonial";
import BlogSection from "../Components/BlogSection/BlogSection";
import Marquee from "../Components/Marquee/Marquee";
import GetintouchSection from "../Components/GetinTouchSection/GetintouchSection";


const HomePage = () => {
  return (
    <div>
      <HeroSection />

      <div className="page-heading-area">
        <p>
          OUR SERVICES{" "}
          <span>
            <img src='/headingDesign.svg' alt="default design" />
          </span>
        </p>
      </div>
      <Services />

      <div className="page-heading-area">
        <p>
          OUR TEAM{" "}
          <span>
            <img src='/headingDesign.svg' alt="default design" />
          </span>
        </p>
      </div>
      <TeamSection />
 
      <div className="page-heading-area">
        <p>
          TESTIMONIALS{" "}
          <span>
            <img src='/headingDesign.svg' alt="default design" />
          </span>
        </p>
      </div>
     <Testimonial/>

      <BlogSection />
     <Marquee />
      <GetintouchSection />
    </div>
  );
};

export default HomePage;
