import { Link } from 'react-router-dom'
import './StartPage.css'

export default function StartPage() {
  return (
    <div className='project-background'>
        <div className='card-container'>
          <img className="profile-photo" src="../../public/StartPage/profile-photo.png" alt="profile-foto" />
          <h1 className='name-title'>Kevin Bran</h1>
          <h4>Software Engineer. Creative. Innovator</h4>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque</p>
          <Link to="/inner">
            <button className='know-more-btn'>Know more</button>
          </Link>
        </div> 
    </div>
  )
}
