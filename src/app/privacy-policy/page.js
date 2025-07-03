
import Herosection2 from "@/src/Components/HeroSection/Herosection2";

import ContactData from "@/src/Components/Contact/Contact";
import Privacy from "@/src/Components/OthersPages/Privacy";




export const metadata = {
  title: "Contact | Zemalt",
  description: "Get expert cybersecurity solutions to detect threats, fix vulnerabilities, and protect your digital assets with trusted, advanced services.",
};

const Contact = () => {

  return (
    <div>
   
     
<Herosection2/>
  
<Privacy/>
     
    </div>
  );
};

export default Contact;
