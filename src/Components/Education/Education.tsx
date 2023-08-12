import { educationData } from '../../utils/constants'
import './Education.css'

export default function Education() {
  return (
    <div className="education-container">
        <div>
            <h1 className="education-title">Education</h1>
        </div>
        {educationData.map((edu) => (

        <div key={edu.id} className=''>
            <div>
                <span>{edu.date}</span>
                <img src={edu.line_img} alt=""  />
            </div>
            <div>
                <div className='career-container'>
                    <h3>{edu.title}</h3>
                    <p>
                        {edu.text}
                    </p>
                </div>
            </div>
        </div>
        ))}
    </div>
  )
}
