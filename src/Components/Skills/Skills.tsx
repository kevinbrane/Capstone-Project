import React, { forwardRef } from "react";
import { skillData } from "../../utils/constants";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./Skills.scss";

const Skills: React.ForwardRefRenderFunction<HTMLDivElement> = (_, ref) => {
  const formik = useFormik({
    initialValues: {
      skillName: "",
      skillRange: "",
    },
    validationSchema: Yup.object({
      skillName: Yup.string().required("Skill name is a required field"),
      skillRange: Yup.number()
        .required("Skill range is a required field")
        .typeError("Skill range must be a 'number' type")
        .min(10, "Skill range must be greater than or equal to 10")
        .max(100, "Skill range must be less than or equal to 100"),
    }),
    onSubmit: (values) => {
      console.log(values);
      // Aquí puedes agregar la lógica para añadir la habilidad al estado
    },
  });

  return (
    <div className="skills-container" ref={ref}>
      <div>
        <h1 className="skills-title">Skills</h1>
      </div>
      <div className="add-skill-container">
        <form onSubmit={formik.handleSubmit}>
          <div>
            <span>Skill name:</span>
            <input
              type="text"
              placeholder="Enter skill name"
              name="skillName"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.skillName}
              className={
                formik.touched.skillName && formik.errors.skillName
                  ? "input-error"
                  : ""
              }
            />
            {formik.touched.skillName && formik.errors.skillName ? (
              <div className="error-message">{formik.errors.skillName}</div>
            ) : null}
          </div>
          <div>
            <span>Skill range:</span>
            <input
              type="text"
              placeholder="Enter skill range"
              name="skillRange"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.skillRange}
              className={
                formik.touched.skillRange && formik.errors.skillRange
                  ? "input-error"
                  : ""
              }
            />
            {formik.touched.skillRange && formik.errors.skillRange ? (
              <div className="error-message">{formik.errors.skillRange}</div>
            ) : null}
          </div>
          <button
            className="add-skill-btn"
            type="submit"
            disabled={!formik.isValid}
          >
            Add skill
          </button>
        </form>
      </div>
      {skillData.map((skill, index) => (
        <div className="skill-item" key={index}>
          <span className="skill-name">{skill.name}</span>
          <div className="skill-bar">
            <div
              className="skill-level"
              style={{ width: skill.percentage }}
            ></div>
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
