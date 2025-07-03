"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Breadcrumb = () => {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter((segment) => segment);

  // Function to truncate long segments
  const truncate = (text, maxLength = 8) =>
    text.length > maxLength ? text.slice(0, maxLength) + "..." : text;

  return (
    <nav className="breadcrumb">
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        {pathSegments.map((segment, index) => {
          const href = "/" + pathSegments.slice(0, index + 1).join("/");
          const label = segment.replace(/-/g, " ");
          const displayLabel = truncate(
            label.charAt(0).toUpperCase() + label.slice(1)
          );

          return (
            <li key={index}>
              <Link href={href}>{displayLabel}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Breadcrumb;
