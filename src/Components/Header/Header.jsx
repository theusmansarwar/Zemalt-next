'use client';

import React, { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { BiSolidPhoneCall } from "react-icons/bi";
import { IoMail } from "react-icons/io5";
import { ImFacebook2 } from "react-icons/im";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { Navbar, Nav, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";
import Image from "next/image";

const Header = () => {
  const phoneNumber = "+923007044566";
  const email = "company@zemalt.com";
  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Pricing", path: "/pricing" },
    { name: "Team", path: "/team" },
    { name: "Blog", path: "/blog" },
    { name: "Contact Us", path: "/contact" },
  ];

  const router = useRouter();
  const pathname = usePathname(); // Get current URL

  const [activeItem, setActiveItem] = useState("");

  useEffect(() => {
    if (pathname.startsWith("/services")) {
      setActiveItem("Services");
    } else if (pathname.startsWith("/blog")) {
      setActiveItem("Blog");
    } else {
      const active = menuItems.find((item) => item.path === pathname);
      setActiveItem(active ? active.name : "Home");
    }
  }, [pathname]);

  const handleMenuClick = (item) => {
    setActiveItem(item.name);
    router.push(item.path);
  };

  return (
    <div className="header">
      <div className="nav-content-section">
        <div className="left">
          <div className="content-item">
            <BiSolidPhoneCall />
            <a
              href="http://wa.me/923007044566"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>{phoneNumber}</p>
            </a>
          </div>
          <div className="content-item">
            <IoMail />
            <a href={`mailto:${email}`} target="_blank" rel="noopener noreferrer">
              <p>{email}</p>
            </a>
          </div>
        </div>
        <div className="right">
          <a href="https://www.linkedin.com/company/zemalt/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://www.instagram.com/zemaltpvtltd/" target="_blank" rel="noopener noreferrer">
            <RiInstagramFill />
          </a>
          <a href="https://www.facebook.com/zemaltpvtltd" target="_blank" rel="noopener noreferrer">
            <ImFacebook2 />
          </a>
        </div>
      </div>

      <Navbar expand="lg">
        <Container fluid className="nav-container">
          <Navbar.Brand onClick={() => router.push("/")}>
            <Image
              src="/zemalt-logo.png"
              alt="zemalt.com"
              className="header-logo"
              width={150}
              height={40}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ms-auto d-flex gap-2 align-items-center justify-content-center">
              {menuItems.map((item) => (
                <p
                  key={item.name}
                  className={`menu-item ${activeItem === item.name ? "active" : ""}`}
                  onClick={() => handleMenuClick(item)}
                >
                  {item.name}
                </p>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
