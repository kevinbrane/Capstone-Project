import {useState, useRef} from 'react'
import SideBar from "../SideBar.tsx/SideBar"
import MenuButton from "../MenuButton/MenuButton"
import AboutMe from '../AboutMe/AboutMe'
import Education from '../Education/Education'
import Experience from '../Experience/Experience'
import Skills from '../Skills/Skills'
import Portfolio from '../Portfolio/Portfolio'
import Contacts from '../Contacts/Contacts'
import Feedbacks from '../Feedbacks/Feedbacks'
import GoUpButton from '../GoUpButton/GoUpButton'
import './Inner.css'

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

  const [sideBarVisible, setSideBarVisible] = useState(true)

  const toggleSideBar = () => {
    setSideBarVisible(!sideBarVisible)
  }

  return (
    <>
      {sideBarVisible && <SideBar scrollToRef={scrollToRef} refs={{ aboutMe: aboutMeRef, experience:experienceRef, education:educationRef, skills:skillsRef, portfolio:portfolioRef, contacts:contactsRef, feedbacks:feedbacksRef}} />}
      <div className={`inner-container ${!sideBarVisible ? 'margin-left-zero' : ''}`}>
        <div className={`menu-button-container ${!sideBarVisible ? 'left-zero' : ''}`}>
          <MenuButton toggleSideBar={toggleSideBar}/>
        </div>
        <div className='project-2-container'>
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
  )
}
