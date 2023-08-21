import React, {forwardRef} from 'react';
import './Skills.css'

const Skills:React.ForwardRefRenderFunction<HTMLDivElement> = (_, ref) => {
  return (
    <div className='skills-container' ref={ref}>
      <div>
        <h1 className='skills-title'>Skills</h1>
      </div>
      <div>
        <span>HTML</span>
      </div>
      <div className='scale-container'>
        <img src="../src/assets/skills/scale.png" alt="" className='scale' />
        <span>Begginer</span><span>Proficient</span><span>Expert</span><span>Master</span>
      </div>
    </div>
  )
}

const ForwardedSkills = forwardRef(Skills);
export default ForwardedSkills;
