import React, { useState } from 'react';
import { CiLinkedin, CiMail } from "react-icons/ci";
import { BsGithub, BsWhatsapp, BsXSquare } from "react-icons/bs";

const Footer = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [responseMessage, setResponseMessage] = useState(null);

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/submitForm", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      setResponseMessage(data.message);
    } catch (error) {
      console.error("Error submitting form:", error);
      setResponseMessage("Failed to send message. Please try again later.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div className="contactme">
      <div className="contactme-form">
        <h1>Contact Form</h1>
        <form onSubmit={onSubmit}>
          <div className="form-name">
            <label><span>Your name</span></label>
            <input
              type="text"
              name="name"
              placeholder="John cooks"
              required
              onChange={handleChange}
            />
          </div>
          <div className="form-email">
            <label><span>Email address</span></label>
            <input
              name="email"
              type="email"
              placeholder="john.cooks@example.com"
              required
              onChange={handleChange}
            />
          </div>
          <div className="form-message">
            <label><span>Message</span></label>
            <textarea
              name="message"
              rows="5"
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="form-button">
            <button type="submit">Send Message</button>
          </div>
        </form>
        {responseMessage && <p>{responseMessage}</p>}
      </div>
      <hr />
      <div className="icons1">
        <a href="http://www.linkedin.com/in/ajiri-uti-aa1b07229" target='_blank' rel='noopener noreferrer'><CiLinkedin size={50} /></a>
        <a href="mailto:uajirimicon@gmail.com" target='_blank' rel="noopener noreferrer"><CiMail size={50} /></a>
        <a href="https://github.com/kingmicon" target='_blank' rel="noopener noreferrer"><BsGithub size={50} /></a>
        <a href="https://wa.link/uwp6nw" target='_blank' rel="noopener noreferrer"><BsWhatsapp size={50} /></a>
        <a href="https://twitter.com/kingmicon1" target='_blank' rel="noopener noreferrer"><BsXSquare size={50} /></a>
      </div>
      <div className="footer-text">
        <p>Design and built by Uti ajiri 2023</p>
      </div>
    </div>
  );
};

export default Footer;
