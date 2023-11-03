import './index.css';
import {Link} from 'react-router-dom';

const Profile = () => (
    <div className='profile-container'>
        <div className='image-container'>
        <img src="\assets\images\cirproimg.png" alt="My profile image" className='profile-picture' />
        </div>
        <div className='text-area'>
            <p>Hi, my name is</p>
            <h1>Vaishakh Variar.</h1>
            <h3> Front-End Developer | Javascript | React</h3>
            <p>I am a web developer with a passion 
                for creating dynamic and innovative web applications. 
                I hold a master s degree in computing science from 
                University College Cork, where I honed my skills in 
                the world of technology. With a strong foundation in 
                computing science, I specialize in designing and building 
                web applications that deliver exceptional user experiences.</p>
                <div className='button-row'>
                <Link to="/contact" className='flat-button'> Contact Me</Link>
                <Link to='\assets\cv\VaishakhVariar_CV.pdf' target='_blank' className='flat-button2'> Download CV</Link>
                </div>

         </div>
    </div>
);

export default Profile;