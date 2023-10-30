import { Outlet} from 'react-router-dom';
import Navbar from '../Navbar';
import './index.css';

const Layout = () => {
    return (
        <div className='App'>
            <Navbar />
            <div className='Page'>
                <Outlet />
            </div>
        </div>
    )
}

export default Layout;