import { Link } from "react-router-dom";
import "./SideBar.css";

interface SideBarProps {
  scrollToRef: (ref: React.RefObject<HTMLDivElement>) => void;
  refs: {
    aboutMe: React.RefObject<HTMLDivElement>;
    education: React.RefObject<HTMLDivElement>;
    experience: React.RefObject<HTMLDivElement>;
    skills: React.RefObject<HTMLDivElement>;
    portfolio: React.RefObject<HTMLDivElement>;
    contacts: React.RefObject<HTMLDivElement>;
    feedbacks: React.RefObject<HTMLDivElement>;
  };
}

export default function SideBar({ scrollToRef, refs }: SideBarProps) {
  return (
    <nav className="side-bar">
      <div className="user-container">
        <img
          className="user-profile-photo"
          src="../src/assets/SideBar/profile-photo.png"
          alt="an image about me"
        />
        <h4>Kevin Bran</h4>
      </div>
      <ul>
        <div onClick={() => scrollToRef(refs.aboutMe)}>
          <img src="../src/assets/SideBar/Aboutme.png" alt="about me icon" />
          <li>About me</li>
        </div>
        <div onClick={() => scrollToRef(refs.education)}>
          <img src="../src/assets/SideBar/Education.png" alt="education icon" />
          <li>Education</li>
        </div>
        <div onClick={() => scrollToRef(refs.experience)}>
          <img
            src="../src/assets/SideBar/Experience.png"
            alt="experience icon"
          />
          <li>Experience</li>
        </div>
        <div onClick={() => scrollToRef(refs.skills)}>
          <img src="../src/assets/SideBar/Skills.png" alt="skills icon" />
          <li>Skills</li>
        </div>
        <div onClick={() => scrollToRef(refs.portfolio)}>
          <img src="../src/assets/SideBar/Portfolio.png" alt="portfolio icon" />
          <li>Portfolio</li>
        </div>
        <div onClick={() => scrollToRef(refs.contacts)}>
          <img src="../src/assets/SideBar/Contacts.png" alt="contacts icon" />
          <li>Contacts</li>
        </div>
        <div onClick={() => scrollToRef(refs.feedbacks)}>
          <img src="../src/assets/SideBar/Feedbacks.png" alt="feedback icon" />
          <li>Feedback</li>
        </div>
      </ul>
      <div className="goback-container">
        <Link className="go-back-link" to="/">
          <button className="go-back-1">
            <img
              src="../src/assets/SideBar/Vector.png"
              alt="icon to go back"
            />
            Go back
          </button>
          <button className="go-back-2">
            <img
              src="../src/assets/SideBar/Go back_2.png"
              alt="icon to go back"
            />
          </button>
        </Link>
      </div>
    </nav>
  );
}
