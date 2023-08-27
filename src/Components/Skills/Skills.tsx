import React, { forwardRef, useState, useEffect } from "react";
import { skillData } from "../../utils/constants";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { addSkill, setSkills } from "../../features/skills/skillsSlice";
import { RootState } from "../../app/store";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import "./Skills.scss";

const Skills: React.ForwardRefRenderFunction<HTMLDivElement> = (_, ref) => {
  const skillsFromRedux = useSelector((state: RootState) => state.skills);
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);

  const toggleEditing = () => {
    setIsEditing((prevIsEditing) => !prevIsEditing);
  };

  useEffect(() => {
    // Al montar el componente, configurar el estado desde localStorage
    const storedSkills = JSON.parse(localStorage.getItem("skills") || "[]");
    dispatch(setSkills(storedSkills));
  }, [dispatch]);

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
      const newSkill = {
        name: values.skillName,
        percentage: `${values.skillRange}%`,
      };
      // Actualizar el estado global
      dispatch(addSkill(newSkill));
      // Almacenar en localStorage
      const updatedSkills = [...skillsFromRedux, newSkill];
      localStorage.setItem("skills", JSON.stringify(updatedSkills));
      formik.resetForm();
    },
  });

  return (
    <div className="skills-container" ref={ref}>
      <div className="skills-title-container">
        <h1 className="skills-title">Skills</h1>
        <button onClick={toggleEditing}>
          <FontAwesomeIcon icon={faEdit} />
          {isEditing ? " Close edit" : " Open edit"}
        </button>
      </div>
      {isEditing && (
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
      )}
      {skillsFromRedux.map((skill, index) => (
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
