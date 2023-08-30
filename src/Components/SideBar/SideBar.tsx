import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser,faGraduationCap,faPencilAlt,faGem,faFolderOpen,faAddressBook,faComments} from '@fortawesome/free-solid-svg-icons';
import PhotoBox from "../PhotoBox/PhotoBox";
import Button from "../Button/Button";
import "./SideBar.scss";

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
        <PhotoBox simple/>
      </div>
      <ul>
        <div onClick={() => scrollToRef(refs.aboutMe)}>
          <FontAwesomeIcon icon={faUser} />
          <li>About me</li>
        </div>
        <div onClick={() => scrollToRef(refs.education)}>
          <FontAwesomeIcon icon={faGraduationCap} />
          <li>Education</li>
        </div>
        <div onClick={() => scrollToRef(refs.experience)}>
          <FontAwesomeIcon icon={faPencilAlt} />
          <li>Experience</li>
        </div>
        <div onClick={() => scrollToRef(refs.skills)}>
        <FontAwesomeIcon icon={faGem} />
          <li>Skills</li>
        </div>
        <div onClick={() => scrollToRef(refs.portfolio)}>
          <FontAwesomeIcon icon={faFolderOpen} />
          <li>Portfolio</li>
        </div>
        <div onClick={() => scrollToRef(refs.contacts)}>
          <FontAwesomeIcon icon={faAddressBook} />
          <li>Contacts</li>
        </div>
        <div onClick={() => scrollToRef(refs.feedbacks)}>
          <FontAwesomeIcon icon={faComments} />
          <li>Feedback</li>
        </div>
      </ul>
      <div className="goback-container">
        <Button text="Go back" icon="../src/assets/SideBar/Vector.png" variant="goBack1" linkTo="/" />
        <Button icon="../src/assets/SideBar/Go back_2.png" variant="goBack2" linkTo="/" />
      </div>
    </nav>
  );
}
