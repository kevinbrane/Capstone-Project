import React from 'react';
import './MenuButton.scss';

interface MenuButtonProps {
  toggleSideBar: () => void;
}

export default function MenuButton({toggleSideBar}: MenuButtonProps) {
  return (
    <div onClick={toggleSideBar} className='menu-btn-container'>
        <img src="../src/assets/MenuButton/Vector.png" alt="" />
    </div>
  )
}
