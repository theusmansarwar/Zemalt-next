
import React from "react";
import "./ServiceTemplate2.css";
import { useRouter } from "next/navigation";
import useTruncateText from "../hooks/useTruncateText";

const ServiceTemplate2 = ({ image, name, slug, description }) => {
  // Accept services as a prop
  const router = useRouter();

  return (
    <div className="service-card2-section" onClick={() => router.push(`/services/${slug}`)}>
    <img src={image} alt={name} />
    <h2>{name}</h2>
    <p>{useTruncateText(description, 260)}</p>
   
   
  </div>
  );
};

export default ServiceTemplate2;
