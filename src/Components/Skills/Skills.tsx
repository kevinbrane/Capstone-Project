import React, { forwardRef } from "react";
import "./Skills.css";

const Skills: React.ForwardRefRenderFunction<HTMLDivElement> = (_, ref) => {
  const skillData = [
    { name: "HTML", percentage: "85%" },
    { name: "CSS", percentage: "80%" },
    { name: "Javascript", percentage: "50%" },
    { name: "React", percentage: "70%" },
    { name: "Typescript", percentage: "25%" },
  ];

  return (
    <div className="skills-container" ref={ref}>
      <div>
        <h1 className="skills-title">Skills</h1>
      </div>
      {skillData.map((skill,index) => (
        <div className="skill-item" key={index}>
          <span className="skill-name">{skill.name}</span>
          <div className="skill-bar">
            <div className="skill-level" style={{ width: skill.percentage }}></div>
          </div>
        </div>
      ))}
      <div className="scale-container">
        <img src="../src/assets/skills/scale.png" alt="" className="scale" />
        <div>
          <span>Begginer</span>
          <span>Proficient</span>
          <span>Expert</span>
          <span>Master</span>
        </div>
      </div>
    </div>
  );
};

const ForwardedSkills = forwardRef(Skills);
export default ForwardedSkills;
