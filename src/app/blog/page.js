import Blogpage from "@/src/Components/Blog/Blogpage";
import Herosection2 from "@/src/Components/HeroSection/Herosection2";





export const metadata = {
  title: "Blog | Zemalt",
  description: "Get expert cybersecurity solutions to detect threats, fix vulnerabilities, and protect your digital assets with trusted, advanced services.",
};

const Blog = () => {

  return (
    <div>
   
     
<Herosection2/>
   <Blogpage/>

     
    </div>
  );
};

export default Blog;
