import { Link, NavLink } from 'react-router-dom';
import './index.css';
import Logo from '../../assets/images/main-logo.png';

const Navbar = () => {
    return (
        <div className='container'>
            <div className='nav-container'>
                <Link className='logo' to='/'>
                    <img src={Logo} alt='Website logo' />
                </Link>
            </div>
            <div className='nav-bar'>
                <nav>
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
            </div>
        </div>
);
}

export default Navbar;