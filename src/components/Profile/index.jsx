import './index.css';
import {Link} from 'react-router-dom';

const Profile = () => (
    <div className='profile-container'>
        <div className='image-container'>
        <img src="\assets\images\gradphoto_1.png" alt="My profile image" className='profile-picture' />
        </div>
        <div className='text-area'>
            <p>Hi, my name is</p>
            <h1 className='my-name'>Vaishakh Variar.</h1>
            <h3> Front-End Developer | Javascript | React</h3>
            <p className='profile-content'>I'm a passionate and dedicated web 
            developer with a strong foundation in web technologies. 
            I hold a Master's degree in Computer Science from 
            University College Cork and am committed to delivering 
            high-quality web solutions. I'm always eager to learn and 
            grow, and I take pride in crafting user-friendly and 
            visually appealing websites, striving for clean and 
            efficient code. With a background in web development, 
            I'm excited to tackle new challenges and contribute my 
            skills to create outstanding online experiences.</p>
                <div className='button-row'>
                <Link to="/contact" className='flat-button'> Contact Me</Link>
                <Link to='/assets/cv/CV_Vaishakh_Variar.pdf' target='_blank' className='flat-button2'> Download CV</Link>
                </div>

         </div>
    </div>
);

export default Profile;