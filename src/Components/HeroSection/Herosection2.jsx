'use client'
import React from 'react'
import Breadcrumb from '../Breadcrumb/Breadcrumb'
import "./Herosection.css";
const Herosection2 = () => {
  return (
    <div className="Hero-section">
        <div
          className="feature-section2"
          style={{
            backgroundImage: `url("/background3.webp")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            transition: "background-image 0.8s ease-in-out",
          }}
        >
          <div className="blackscreen2">
            <div className="text-section2">
              <Breadcrumb/>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Herosection2