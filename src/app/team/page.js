import Herosection2 from "@/src/Components/HeroSection/Herosection2";
import Teams from "@/src/Components/Teams/Teams";

export const metadata = {
  title: "Team | Zemalt",
  description:
    "Get expert cybersecurity solutions to detect threats, fix vulnerabilities, and protect your digital assets with trusted, advanced services.",
};

const Services = () => {
  return (
    <div>
      <Herosection2 />
      <Teams />
    </div>
  );
};

export default Services;
