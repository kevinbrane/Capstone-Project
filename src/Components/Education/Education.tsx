import React, {forwardRef} from 'react';
import { educationData } from "../../utils/constants";
import "./Education.css";

const Education: React.ForwardRefRenderFunction<HTMLDivElement> = (_, ref) => {
  return (
    <div className="education-container" ref={ref}>
      <div>
        <h1 className="education-title">Education</h1>
      </div>
      {educationData.map((edu) => (
        <div key={edu.id}>
          <div className="education-info-container">
            <div className="year-container">
              <span className="year">{edu.date}</span>
              <img
                src={edu.line_img}
                alt="an image of a line"
                className="line"
              />
            </div>
            <div className="carrer-info-container">
              <div>
                <img src={edu.vector} alt="" className="vector" />
              </div>
              <div className="career-container">
                <h3>{edu.title}</h3>
                <p>{edu.text}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const ForwardedEducation = forwardRef(Education);
export default ForwardedEducation;
