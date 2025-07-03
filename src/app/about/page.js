
import Herosection2 from "@/src/Components/HeroSection/Herosection2";

import ContactData from "@/src/Components/Contact/Contact";
import Aboutus from "@/src/Components/OthersPages/Aboutus";




export const metadata = {
  title: "About us | Zemalt",
  description: "Get expert cybersecurity solutions to detect threats, fix vulnerabilities, and protect your digital assets with trusted, advanced services.",
};

const Contact = () => {

  return (
    <div>
   
     
<Herosection2/>
  
<Aboutus/>
     
    </div>
  );
};

export default Contact;
