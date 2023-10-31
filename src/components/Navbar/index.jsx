import { Link, NavLink } from 'react-router-dom';
import './index.css';
import Logo from '../../assets/images/lightlogo.svg';
import {useState} from 'react';
import './mediaqueries.css';

const Navbar = () => {

    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
      setMenuOpen(!isMenuOpen);
    };

    return (
        <div className='container'>
            <div className='nav-container'>
                <Link className='logo' to='/'>
                    <img src={Logo} alt='Website logo' />
                </Link>
            </div>
            <div className='nav-bar'>
                <nav className='desktop-nav'>
                    <ul className="nav-list">
                        <li className="nav-item">
                            <NavLink exact="true" activeclassname="active" className="nav-link" to='/'>
                                About
                            </NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink exact="true" activeclassname="active" className="nav-link" to='/'>
                                Education
                            </NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink exact="true" activeclassname="active" className="nav-link" to='/'>
                                Projects
                            </NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink exact="true" activeclassname="active" className="nav-link" to='/'>
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </nav>
                <nav className={`hamburger-nav ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                    <div className='hamburger-menu'>
                        <div className='hamburger-icon' onClick={toggleMenu}>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div className= {`menu-links ${isMenuOpen ? 'open' : ''} `}>
                            <li className="nav-item">
                                <NavLink exact="true" onClick={toggleMenu} activeclassname="active" className="navham-link" to='/'>
                                    About
                                </NavLink>
                            </li>
                            <li className='nav-item'>
                                <NavLink exact="true" onClick={toggleMenu} activeclassname="active" className="navham-link" to='/'>
                                    Education
                                </NavLink>
                            </li>
                            <li className='nav-item'>
                                <NavLink exact="true" onClick={toggleMenu} activeclassname="active" className="navham-link" to='/'>
                                    Projects
                                </NavLink>
                            </li>
                            <li className='nav-item'>
                                <NavLink exact="true" onClick={toggleMenu} activeclassname="active" className="navham-link" to='/'>
                                    Contact
                                </NavLink>
                            </li>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
);
}

export default Navbar;