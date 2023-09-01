import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faGraduationCap,
  faPencilAlt,
  faGem,
  faFolderOpen,
  faAddressBook,
  faComments
} from '@fortawesome/free-solid-svg-icons';
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
  const menuItems = [
    { icon: faUser, text: 'About me', ref: refs.aboutMe },
    { icon: faGraduationCap, text: 'Education', ref: refs.education },
    { icon: faPencilAlt, text: 'Experience', ref: refs.experience },
    { icon: faGem, text: 'Skills', ref: refs.skills },
    { icon: faFolderOpen, text: 'Portfolio', ref: refs.portfolio },
    { icon: faAddressBook, text: 'Contacts', ref: refs.contacts },
    { icon: faComments, text: 'Feedback', ref: refs.feedbacks },
  ];

  return (
    <nav className="side-bar">
      <div className="user-container">
        <PhotoBox simple/>
      </div>
      <ul>
        {menuItems.map((item, index) => (
          <div key={index} onClick={() => scrollToRef(item.ref)} data-testid={`menu-item-${item.text}`}>
            <FontAwesomeIcon icon={item.icon} />
            <li>{item.text}</li>
          </div>
        ))}
      </ul>
      <div className="goback-container">
        <Button text="Go back" icon="../src/assets/SideBar/Vector.png" variant="goBack1" linkTo="/" />
        <Button icon="../src/assets/SideBar/Go back_2.png" variant="goBack2" linkTo="/" />
      </div>
    </nav>
  );
}
