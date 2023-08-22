import React, {forwardRef} from "react";
import { experienceData } from "../../utils/constants";
import "./Experience.scss";

const Experience :React.ForwardRefRenderFunction<HTMLDivElement> = (_, ref) => {
  return (
    <div className="experience-container" ref={ref} >
      <div>
        <h1 className="experience-title">Experience</h1>
      </div>
      {experienceData.map((exp) => (
        <div key={exp.id}>
          <div className="experience-info-container">
            <div className="company-date-container">
              <span className="company">{exp.info.company}</span>
              <span className="exp-date">{exp.date}</span>
            </div>
            <div>
              <h3>{exp.info.job}</h3>
              <p className="exp-info" >{exp.info.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

const ForwardedExperience = forwardRef(Experience);
export default ForwardedExperience;
