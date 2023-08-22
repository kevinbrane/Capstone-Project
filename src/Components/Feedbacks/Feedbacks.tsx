import React, { forwardRef } from 'react'
import { Link } from 'react-router-dom'
import './Feedbacks.scss'

const Feedbacks: React.ForwardRefRenderFunction<HTMLDivElement> = (_, ref) => {
  return (
    <div className='feedbacks-container' ref={ref}>
        <div>
            <h1 className='feedbacks-title'>Feedbacks</h1>
        </div>
        <div>
            <div className='feedback-info-container'>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. </p>
            </div>
            <div className='feedback-people-container'>
                <img src="../src/assets/Feedback/Ellipse1.png" alt="" />
                <span>Martin Friman Programmer,</span>
                <Link to=''>somesite.com</Link>
            </div>
        </div>
    </div>
  )
}

const ForwardedFeedbacks = forwardRef(Feedbacks);
export default ForwardedFeedbacks;

