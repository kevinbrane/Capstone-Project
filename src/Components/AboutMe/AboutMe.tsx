import { aboutMeData } from '../../utils/constants';
import './AboutMe.css';

export default function AboutMe() {
  return (
    <div className='about-me-container'>
        <div>
            <h1 className="about-me-title">{aboutMeData.title}</h1>
        </div>
        <div>
            <p>
              {aboutMeData.content}
            </p>
        </div>
    </div>
  )
}
