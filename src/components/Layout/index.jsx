import { Outlet} from 'react-router-dom';
import Navbar from '../Navbar';
import Footer from '../Footer';
import './index.css';

const Layout = () => {
    return (
        <div className='App'>
            <Navbar />
            <div className='Page'>
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default Layout;