import { NavLink } from 'react-router-dom';
import './index.css';
// import Logo from '/assets/images/logo.png';
import {useState, useRef, useEffect} from 'react';
import './mediaqueries.css';

const Navbar = () => {

    const [isMenuOpen, setMenuOpen] = useState(false);
    const containerRef = useRef(null);

    const toggleMenu = () => {
      setMenuOpen(!isMenuOpen);
    };

    const handleOutsideClick = (e) => {
        if (containerRef.current && !containerRef.current.contains(e.target)) {
          setMenuOpen(false);
        }
      };

      useEffect(() => {
        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
          document.removeEventListener('mousedown', handleOutsideClick);
        };
      }, []);
    

    return (
        <div className='container'>
            <div className='nav-bar'>
                <nav className='desktop-nav'>
                    <ul className="nav-list">
                        <li className="nav-item">
                            <NavLink exact="true" activeclassname="active" className="nav-link" to='/'>
                                About
                            </NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink exact="true" activeclassname="active" className="nav-link" to='education'>
                                Education
                            </NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink exact="true" activeclassname="active" className="nav-link" to='projects'>
                                Projects
                            </NavLink>
                        </li>                        
                        <li className='nav-item'>
                            <NavLink exact="true" activeclassname="active" className="nav-link" to='skills'>
                                Skills
                            </NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink exact="true" activeclassname="active" className="nav-link" to='contact'>
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </nav>
                <nav className={`hamburger-nav ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu} ref={containerRef}>
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
                                <NavLink exact="true" onClick={toggleMenu} activeclassname="active" className="navham-link" to='education'>
                                    Education
                                </NavLink>
                            </li>
                            <li className='nav-item'>
                                <NavLink exact="true" onClick={toggleMenu} activeclassname="active" className="navham-link" to='projects'>
                                    Projects
                                </NavLink>
                            </li>
                            <li className='nav-item'>
                                <NavLink exact="true" onClick={toggleMenu} activeclassname="active" className="navham-link" to='skills'>
                                    Skills
                                </NavLink>
                            </li>
                            <li className='nav-item'>
                                <NavLink exact="true" onClick={toggleMenu} activeclassname="active" className="navham-link" to='contact'>
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