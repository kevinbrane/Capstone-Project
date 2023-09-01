import React, { forwardRef, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import "./Education.scss";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { fetchEducationData } from '../../features/education/educationSlice';

interface Props {}

const Education: React.ForwardRefRenderFunction<HTMLDivElement, Props> = (_, ref) => {
  const dispatch = useAppDispatch();
  const educations = useAppSelector((state) => state.education.educations);
  const status = useAppSelector((state) => state.education.status);

  useEffect(() => {
    if (status === "idle" || (educations && educations.length === 0)) {
      dispatch(fetchEducationData());
    }
  }, [dispatch, status, educations?.length]);

  if (status === "loading" || status === "idle") {
    return (
      <div className="education-container" ref={ref}>
        <h1 className="education-title">Education</h1>
        <div className="spinner-container">
          <FontAwesomeIcon icon={faSpinner} spin size="2x" />
        </div>
      </div>
    );
  }
  if (status === "failed") {
    return (
      <div className="education-container" ref={ref}>
        <h1 className="education-title">Education</h1>
        <p>Error loading education data.</p>
      </div>
    );
  }

  return (
    <div className="education-container" ref={ref}>
      <h1 className="education-title">Education</h1>
      <div className="education-data-container">
        {educations.map((edu) => (
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
    </div>
  );
};

const ForwardedEducation = forwardRef(Education);
export default ForwardedEducation;