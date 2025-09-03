import React, { useRef } from "react";
import "./Achievements.css";

const Achievements = () => {
  const carouselRef = useRef(null);

  const scrollLeft = () => carouselRef.current.scrollBy({ left: -320, behavior: "smooth" });
  const scrollRight = () => carouselRef.current.scrollBy({ left: 320, behavior: "smooth" });

  const data = [
    { title: "Data Structures and Algorithms Certificate", issuer: "Udemy", year: "2025", link: "https://www.udemy.com/certificate/dsa-example" },
    { title: "ServiceNow Certified App Developer", issuer: "ServiceNow", year: "2025", link: "https://www.servicenow.com/certificate-example" },
    { title: "Nintex K2 Automation IT Developer", issuer: "Nintex", year: "2025", link: "https://www.k2.com/certificate-example" },
    { title: "Nintex Automation K2 Citizen Developer", issuer: "Nintex", year: "2025", link: "http" },
    { title: "Certification of Participation in Tata Imagination Challenge 2024", issuer: "Unstop", year: "2024", link: "yo" },
    { title: "Certification of Participation in Level 1: E-Commerce", issuer: "Unstop", year: "2024", link: "uo" },
  ];

  return (
    <section className="achievements" id="achievements">
      <h2 className="achievements-title">
        Certifications & <span>Achievements</span>
      </h2>
      <br />

      <div className="carousel-wrapper">
        <button className="carousel-btn left" onClick={scrollLeft}>&#10094;</button>

        <div className="achievements-carousel" ref={carouselRef}>
          {data.map((item, idx) => (
            <div key={idx} className="achievement-card">
              <span className="badge">{item.issuer}</span>
              <h3>{item.title}</h3>
              {item.year && <span className="year">{item.year}</span>}
              {item.link !== "#" && <button className="view-btn" onClick={() => window.open(item.link, "_blank")}>View Certificate</button>}
            </div>
          ))}
        </div>

        <button className="carousel-btn right" onClick={scrollRight}>&#10095;</button>
      </div>

      <div className="carousel-bg-shapes"></div>
    </section>
  );
};

export default Achievements;
