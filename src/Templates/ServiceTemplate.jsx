import React from "react";
import "./ServiceTEmplate.css";
import { useRouter } from "next/navigation";
import useTruncateText from "../hooks/useTruncateText";

const ServiceTemplate = ({ image, name, slug, description }) => {
   const router = useRouter();

  return (
    <div className="service-card-section" onClick={() => router.push(`/services/${slug}`)}>
      <img src={image} alt={name} />
      <p>{useTruncateText(description, 260)}</p>
      <div className="rounded-tab2">{name}</div>
    </div>
  );
};

export default ServiceTemplate;
