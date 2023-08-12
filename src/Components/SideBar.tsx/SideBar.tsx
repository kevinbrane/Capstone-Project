import { Link } from 'react-router-dom'
import './SideBar.css'

export default function SideBar() {
  return (
    <nav className="side-bar">
        <div className='user-container'>
            <img  className= "user-profile-photo" src="../../public/SideBar/profile-photo.png" alt="an image about me" />
            <h4>Kevin Bran</h4>
        </div>
        <ul>
            <div>
                <img src="../../public/SideBar/Aboutme.png" alt="about me icon" />
                <li>About me</li>
            </div>
            <div>
                <img src="../../public/SideBar/Education.png" alt="education icon" />
                <li>Education</li>
            </div>
            <div>
                <img src="../../public/SideBar/Experience.png" alt="experience icon" />
                <li>Experience</li>
            </div>
            <div>
                <img src="../../public/SideBar/Skills.png" alt="skills icon" />
                <li>Skills</li>
            </div>
            <div>
                <img src="../../public/SideBar/Portfolio.png" alt="portfolio icon" />
                <li>Portfolio</li>
            </div>
            <div>
                <img src="../../public/SideBar/Contacts.png" alt="contacts icon" />
                <li>Contacts</li>
            </div>
            <div>
                <img src="../../public/SideBar/Feedbacks.png" alt="feedback icon" />
                <li>Feedback</li>
            </div>
        </ul>
        <div className='goback-container'>
            <Link className="go-back-link" to="/">
                <div className='go-back-1'>
                    <img src="../../public/SideBar/Vector.png" alt="icon to go back" />
                </div>
                <div className='go-back-2'>
                    <img src="../../public/SideBar/Go back_2.png" alt="icon to go back" />
                    <span>Go back</span>
                </div>   
            </Link>   
        </div>    
    </nav>
  )
}
