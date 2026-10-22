import './Menu.css'

export default function Menu() {
    return(
        <div className='menu-container'>
            <ul className='menu-list'>
                <li>Projects</li>
                <li>Skills</li>
                <li className='last-child'>Lets Connect</li>
            </ul>
        </div>
    )
}