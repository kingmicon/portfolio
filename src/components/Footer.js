import React, { useState } from 'react'
import { CiLinkedin, CiMail } from "react-icons/ci"
import { BsGithub, BsWhatsapp, BsXSquare } from "react-icons/bs"

const Footer = () => {

  const [formData, setFormData] = useState({ name: "", email: "", message: "",});

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/.functions/submitForm", {
        method: "POST",
        body: JSON.stringify(formData),
      });
      const data =await response.json();
      console.log(data.message);
    } catch (error) {
      console.error("Error Submitting form:", error);
    }
  };

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData((prevData) => ({...prevData, [name]: value}));
  };
  return (
    <div className="contactme">
      <div className="contactme-form">
        <h1>
          Contact Form
        </h1>
        <form onSubmit={onSubmit}>
          <div className= "form-name">
            <label>
              <span>Your name</span>
            </label>
            <input
                type="text"
                name="name"
                className=""
                placeholder="John cooks"
                required
                onChange={handleChange}
              />
          </div>
          <div className="form-email">
            <label>
              <span>Email address</span>
            </label>
              <input
                name="email"
                type="email"
                className=""
                placeholder="john.cooks@example.com"
                required
                onChange={handleChange}
              />
          </div>
          <div className="form-message">
            <label>
              <span>Message</span>
            </label>
              <textarea
                name="message"
                className=""
                rows="5"
                onChange={handleChange}
              ></textarea>
          </div>

          <div className="form-button">
            <button
              type="submit"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
      <hr></hr>
      <div className="icons1">
        <a href="http://www.linkedin.com/in/ajiri-uti-aa1b07229" target='_blank' rel='noopener noreferrer'><CiLinkedin size={50}/></a>
        <a href="mailto:uajirimicon@gmail.com" target='_blank' rel="noopener noreferrer"><CiMail size={50}/></a>
        <a href="https://github.com/kingmicon" target='_blank' rel="noopener noreferrer"><BsGithub size={50}/></a>
        <a href="https://wa.link/uwp6nw" target='_blank' rel="noopener noreferrer"><BsWhatsapp size={50}/></a>
        <a href="https://twitter.com/kingmicon1" target='_blank' rel="noopener noreferrer"><BsXSquare size={50}/></a>
      </div>
      <div className="footer-text">
        <p>Design and built by Uti ajiri 2023</p>
      </div>
    </div>
    
  )
}

export default Footer