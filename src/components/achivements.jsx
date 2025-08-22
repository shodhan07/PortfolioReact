import React from "react";
import "./achivements.css";

const Achievements = () => {
  const data = [
    {
      year: "2024",
      title: "Internship at Coding Raja Technologies",
      description:
        "Completed a one-month internship in Web Development, building projects like Resume Builder and Music Player System.",
    },
    {
      year: "2023",
      title: "Top Academic Performer",
      description:
        "Achieved a CGPA of 9.02 in Information Science and Engineering at New Horizon College of Engineering.",
    },
    {
      year: "2022",
      title: "12th Grade Excellence",
      description: "Scored 98.33% in 12th Standard securing top rank in college.",
    },
    {
      year: "2020",
      title: "10th Grade Excellence",
      description: "Achieved 93.92% in 10th Standard with distinction.",
    },
  ];

  return (
    <section className="achievements" id="achievements">
      <h2 className="achievements-title">Achievements</h2>
      <div className="timeline">
        {data.map((item, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-content">
              <span className="year">{item.year}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
