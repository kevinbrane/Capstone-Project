import { useState, useRef } from "react";
import SideBar from "../../Components/SideBar/SideBar";
import MenuButton from "../../Components/MenuButton/MenuButton";
import AboutMe from "../../Components/AboutMe/AboutMe";
import Education from "../../Components/Education/Education";
import Experience from "../../Components/Experience/Experience";
import Skills from "../../Components/Skills/Skills";
import Portfolio from "../../Components/Portfolio/Portfolio";
import Contacts from "../../Components/Contacts/Contacts";
import Feedbacks from "../../Components/Feedbacks/Feedbacks";
import GoUpButton from "../../Components/GoUpButton/GoUpButton";
import "./Inner.css";

export default function Inner() {
  const aboutMeRef = useRef(null);
  const educationRef = useRef(null);
  const experienceRef = useRef(null);
  const skillsRef = useRef(null);
  const portfolioRef = useRef(null);
  const contactsRef = useRef(null);
  const feedbacksRef = useRef(null);

  const scrollToRef = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      const offsetTop = ref.current.offsetTop;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  const [sideBarVisible, setSideBarVisible] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const sliderLabel = darkMode ? "Light Mode" : "Dark Mode";

  const toggleSideBar = () => {
    setSideBarVisible(!sideBarVisible);
  };

  return (
    <>
      {sideBarVisible && (
        <SideBar
          scrollToRef={scrollToRef}
          refs={{
            aboutMe: aboutMeRef,
            experience: experienceRef,
            education: educationRef,
            skills: skillsRef,
            portfolio: portfolioRef,
            contacts: contactsRef,
            feedbacks: feedbacksRef,
          }}
        />
      )}
      <div
        className={`inner-container ${darkMode ? "dark-mode" : ""} ${
          !sideBarVisible ? "margin-left-zero" : ""
        }`}
      >
        <div className="theme-slider">
        <h3 className="theme-title">{darkMode ? "LightMode" : "DarkMode"}</h3>
          <input
            type="checkbox"
            id="darkModeToggle"
            onChange={() => setDarkMode(!darkMode)}
          />
          <label htmlFor="darkModeToggle" className="slider"></label>
        </div>
        <div
          className={`menu-button-container ${darkMode ? "dark-mode" : ""} ${
            !sideBarVisible ? "left-zero" : ""
          }`}
        >
          <MenuButton toggleSideBar={toggleSideBar} />
        </div>
        <div className={`project-2-container ${darkMode ? "dark-mode" : ""}`}>
          <AboutMe ref={aboutMeRef} />
          <Education ref={educationRef} />
          <Experience ref={experienceRef} />
          <Skills ref={skillsRef} />
          <Portfolio ref={portfolioRef} />
          <Contacts ref={contactsRef} />
          <Feedbacks ref={feedbacksRef} />
          <GoUpButton />
        </div>
      </div>
    </>
  );
}
