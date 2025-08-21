import React from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";
import "./contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <motion.div
        className="contact-container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="contact-title">Get in <span>Touch</span></h2>
        <p className="contact-subtitle">
          I’d love to hear from you! Fill out the form or reach me directly.
        </p>

        <form className="contact-form">
          <input
            type="text"
            placeholder="Your Name"
            className="contact-input"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="contact-input"
            required
          />
          <textarea
            placeholder="Your Message"
            className="contact-textarea"
            rows="5"
            required
          ></textarea>
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
