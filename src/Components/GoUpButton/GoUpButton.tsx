import './GoUpButton.css'

export default function GoUpButton() {

  const handleGoUpClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  return (
    <div onClick={handleGoUpClick} className='goUp-btn-container'>
        <img src="../../public/GoUpButton/next.png" alt="" />
    </div>
  )
}
