import './Portfolio.css'
import { Link } from 'react-router-dom'

export default function Portfolio() {
  return (
    <div className='portfolio-container'>
        <div>
            <h1 className='portfolio-title'>Portfolio</h1>
        </div>
        <div>
            <span>All</span>
            <span>Code</span>
            <span>UI</span>
        </div>
        <div className='portfolio-cards-container'>
            <div className='portfolio-item-container'>
                <img src="../../public/Portfolio/Portfolio cards.png" alt="" />
            </div>
            <div className='portfolio-item-container'>
                <h4>Some text</h4>
                <p>Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis </p>
                <Link>
                    <span>View resource</span>
                </Link>
            </div>
            <div className='portfolio-item-container'>
                <img src="../../public/Portfolio/card_3@2x.png" alt="" />
            </div>
        </div>
    </div>
  )
}
