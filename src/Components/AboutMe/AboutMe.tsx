import React, {forwardRef} from 'react';
import { aboutMeData } from '../../utils/constants';
import './AboutMe.css';


//Con el guión bajo de la siguiente línea estoy indicando a typescript que 'props' será un parametro no utilizado y corregir su advertencia.
const AboutMe: React.ForwardRefRenderFunction<HTMLDivElement> = (_, ref) => {
  return (
    <div className='about-me-container' ref={ref}>
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

const ForwardedAboutMe = forwardRef(AboutMe);
export default ForwardedAboutMe;