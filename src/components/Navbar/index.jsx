import { NavLink } from 'react-router-dom';
import './index.css';
// import Logo from '../../assets/images/lightlogo.png';

const Navbar = () => {
    return (
    <div>
        {/* <Link className='logo' to='/'>
            <img src={Logo} alt='Website logo' />
        </Link> */}
        <nav className='nav-bar'>
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
);
}

export default Navbar;