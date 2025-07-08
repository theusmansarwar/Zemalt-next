'use client'
import React, { useState } from "react";
import { parsePhoneNumberFromString } from 'libphonenumber-js';
import "./ContactSection.css";
import { createLead } from "../../DAL/create";
import CustomAlert from "../Alert/CustomAlert";
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';

const GetintouchSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    query: "",
  });

  const [alertType, setAlertType] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    if (isSubmitted) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        [e.target.name]: e.target.value.trim() ? "" : prevErrors[e.target.name]
      }));
    }
  };

  const handlePhoneChange = (value) => {
    setFormData({ ...formData, phone: value });

    if (isSubmitted && value) {
      setFormErrors((prevErrors) => ({ ...prevErrors, phone: "" }));
    }
  };

  const handleSubjectChange = (e) => {
    setFormData((prev) => ({ ...prev, subject: e.target.value }));
    if (isSubmitted) {
      setFormErrors((prevErrors) => ({ ...prevErrors, subject: "" }));
    }
  };

  const formatPhoneNumber = (phone) => {
    const parsedNumber = parsePhoneNumberFromString(phone);
    return parsedNumber && parsedNumber.isValid() ? parsedNumber.formatInternational() : phone;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    const formattedPhone = formatPhoneNumber(formData.phone);
    const payload = new FormData();
    payload.append("name", formData.name);
    payload.append("phone", formattedPhone);
    payload.append("email", formData.email);
    payload.append("subject", formData.subject); // single subject
    payload.append("query", formData.query);

    try {
      const response = await createLead(payload);
      console.log('API Response:', response);

      if (response?.status === 201) {
        setAlertType("success");
        setAlertMessage(response?.message);
        setFormData({ name: "", phone: "", email: "", subject: "", query: "" });
        setIsSubmitted(false);
      } else if (response?.status === 400 && response?.missingFields) {
        const errors = {};
        response.missingFields.forEach((field) => {
          errors[field.name] = field.message;
        });
        setFormErrors(errors);
        setAlertType("error");
        setAlertMessage(response?.message);
      } else {
        setAlertType("error");
        setAlertMessage(response?.message);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setAlertType("error");
      setAlertMessage("Something went wrong. Try again later.");
    }
  };

  return (
    <div className="contact-container">
      <CustomAlert type={alertType} message={alertMessage} onClose={() => setAlertMessage("")} />

      <div className="map-container">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3399.814183764731!2d74.35180887540746!3d31.556713774197444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40db30353c6bcc97%3A0xba25d94524e2c12b!2sZemalt!5e0!3m2!1sen!2s!4v1740029104440!5m2!1sen!2s"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>

      <div className="contact-form">
        <h2>Let Us Drive Your Marketing Success</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            value={formData.name}
            onChange={handleChange}
          />
          {formErrors.name && <span className="error-message">{formErrors.name}</span>}

          <PhoneInput
            name="phone"
            value={formData.phone}
            onChange={handlePhoneChange}
            countryCodeEditable={false}
          />
          {formErrors.phone && <span className="error-message">{formErrors.phone}</span>}

          <input
            type="text"
            name="email"
            placeholder="Enter Your Email"
            value={formData.email}
            onChange={handleChange}
          />
          {formErrors.email && <span className="error-message">{formErrors.email}</span>}

          <div className="radio-group-grid">
            {[
              "SEO",
              "Web Development",
              "UI/UX Designing",
              "Google Ads",
              "Social Media Ads",
              "Content Writing",
            ].map((subject) => {
              const id = subject.toLowerCase().replace(/\s+/g, "-");
              return (
                <div className="radio-element" key={id}>
                  <input
                    id={id}
                    type="radio"
                    name="subject"
                    value={subject}
                    checked={formData.subject === subject}
                    onChange={handleSubjectChange}
                  />
                  <label htmlFor={id} className="radio-wrapper">
                    {subject}
                  </label>
                </div>
              );
            })}
          </div>
          {formErrors.subject && <span className="error-message">{formErrors.subject}</span>}

          <textarea
            name="query"
            placeholder="Query"
            value={formData.query}
            onChange={handleChange}
          ></textarea>
          {formErrors.query && <span className="error-message">{formErrors.query}</span>}

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default GetintouchSection;
