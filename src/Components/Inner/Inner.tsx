import {useState} from 'react'
import SideBar from "../SideBar.tsx/SideBar"
import MenuButton from "../MenuButton/MenuButton"
import AboutMe from '../AboutMe/AboutMe'
import Education from '../Education/Education'
import Experience from '../Experience/Experience'
import Skills from '../Skills/Skills'
import './Inner.css'
import Portfolio from '../Portfolio/Portfolio'

export default function Inner() {

  const [sideBarVisible, setSideBarVisible] = useState(true)

  const toggleSideBar = () => {
    setSideBarVisible(!sideBarVisible)
  }

  return (
    <>
      {sideBarVisible && <SideBar />}
      <div className={`inner-container ${!sideBarVisible ? 'margin-left-zero' : ''}`}>
        <div className={`menu-button-container ${!sideBarVisible ? 'left-zero' : ''}`}>
          <MenuButton toggleSideBar={toggleSideBar}/>
        </div>
        <div className='project-2-container'>
          <AboutMe />
          <Education />
          <Experience />
          <Skills />
          <Portfolio />
        </div>
      </div>
    </>
  )
}
