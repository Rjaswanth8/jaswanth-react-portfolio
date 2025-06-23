import React, { useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const skills = [
  { number: "89%", text: "HTML" },
  { number: "84%", text: "CSS" },
  { number: "59%", text: "JavaScript" },
  { number: "84%", text: "Bootstrap" },
  { number: "49%", text: "React.js" },
  { number: "39%", text: "Python" },
  { number: "29%", text: "PHP" },
  { number: "59%", text: "SQL" },
  { number: "74%", text: "MySQL" },
  { number: "49%", text: "WordPress" },
  { number: "49%", text: "jQuery" },
];

function SkillsSection() {
  const ringRefs = useRef([]);
  const textRefs = useRef([]);

  useEffect(() => {
    skills.forEach((skill, index) => {
      let count = 0;
      const target = parseInt(skill.number);

      const interval = setInterval(() => {
        if (count <= target) {
          count++;
          const gradient = `conic-gradient(
            rgba(33, 13, 22, 1) 0%,
            rgba(184, 40, 105, 1) ${count * 0.33}%,
            rgba(229, 9, 20, 1) ${count * 0.66}%,
            rgba(184, 40, 105, 1) ${count}%,
            #212428 ${count}%
          )`;
          if (ringRefs.current[index]) {
            ringRefs.current[index].style.background = gradient;
          }
          if (textRefs.current[index]) {
            textRefs.current[index].textContent = `${count}%`;
          }
        } else {
          clearInterval(interval);
        }
      }, 20);
    });
  }, []);

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        {skills.map((skill, index) => (
          <div
            className="col-6 col-sm-4 col-md-3 col-lg-3 mb-4 text-center"
            key={index}
          >
            <div className="progress-ring-wrapper">
              <div
                className="progress-ring"
                ref={(el) => (ringRefs.current[index] = el)}
              >
                <div className="progress-inner">
                  <span
                    className="progress-number"
                    ref={(el) => (textRefs.current[index] = el)}
                  >
                    0%
                  </span>
                </div>
              </div>
              <span className="title mt-3 d-block">{skill.text}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkillsSection;
