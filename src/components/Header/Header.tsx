import { useState } from 'react'
import './Header.css'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
    <div className="container">
      <div>
        <h1 className='cursive-text'>SK</h1>
      </div>
      <button
        type="button"
        className={`burger-menu${isOpen ? ' open' : ''}`}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span />
        <span />
        <span />
      </button>
    </div>
    {isOpen && 
        <div className='menu-container'>
            <ul className='menu-list'>
                <li>Projects</li>
                <li>Skills</li>
                <li className='last-child'>Lets Connect</li>
            </ul>
        </div>}
    </>
  )
}