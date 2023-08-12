import './MenuButton.css';

interface MenuButtonProps {
  toggleSideBar: () => void;
}

export default function MenuButton({toggleSideBar}: MenuButtonProps) {
  return (
    <div onClick={toggleSideBar} className='menu-btn-container'>
        <img src="../../public/MenuButton/Vector.png" alt="" />
    </div>
  )
}
