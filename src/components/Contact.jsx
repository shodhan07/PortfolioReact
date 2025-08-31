import React from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault(); // stop page refresh

    emailjs
      .sendForm(
        "service_993j3tg",   // 🔹 replace with your EmailJS Service ID
        "template_4smgz6i",  // 🔹 replace with your EmailJS Template ID
        e.target,
        "FOYWLh8pQl3nI9FrQ"    // 🔹 replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("✅ Thanks for reaching out! I'll get back to you soon.");
        },
        (error) => {
          console.log(error.text);
          alert("❌ Oops! Something went wrong. Please try again.");
        }
      );

    e.target.reset(); // clear the form
  };

  return (
    <section id="contact" className="contact-section">
      <motion.div
        className="contact-container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="contact-title">
          Get in <span>Touch</span>
        </h2>
        <p className="contact-subtitle">
          I’d love to hear from you! Fill out the form or reach me directly.
        </p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Your Name" className="contact-input" required />
          <input type="email" name="email" placeholder="Your Email" className="contact-input" required />
          <textarea name="message" placeholder="Your Message" className="contact-textarea" rows="5" required></textarea>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="contact-btn"
          >
            Send Message
          </motion.button>
        </form>

        <div className="contact-icons">
          <a href="mailto:shodhangowda07@gmail.com" target="_blank" rel="noreferrer">
            <FaEnvelope />
          </a>
          <a href="tel:+918861714675">
            <FaPhoneAlt />
          </a>
          <a href="https://github.com/shodhan07" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/shodhan-a-k-645597262/" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
