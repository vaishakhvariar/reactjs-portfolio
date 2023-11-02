import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBlogger, faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
    return (
    <div className='contact-container'>
        <div className='form-container'>
            <p> Get in Touch </p>
        <h1> Contact Me </h1> 
        <p> <a href='mailto:vaishakhvariar@gmail.com'> vaishakhvariar@gmail.com </a></p>  
        </div>
        <div className='socials-container'>
        <ul className='social-links'>
            <li>
                <a className='so-link' target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/vaishakhvariar/'> 
                    <FontAwesomeIcon icon={(faLinkedin)} color='#4d4d4e' />
                </a>
            </li>
            <li>
                <a className='so-link' target='_blank' rel='noreferrer' href='https://github.com/vaishakhvariar'> 
                    <FontAwesomeIcon icon={(faGithub)} color='#4d4d4e' />
                </a>
            </li>
           
            <li>
                <a className='so-link' target='_blank' rel='noreferrer' href='https://vvariarwrites.wordpress.com/'> 
                    <FontAwesomeIcon icon={(faBlogger)} color='#4d4d4e' />
                </a>
            </li>
            <li>
                <a className='so-link' target='_blank' rel='noreferrer' href=' https://www.instagram.com/vaishakh_variar/'> 
                    <FontAwesomeIcon icon={(faInstagram)} color='#4d4d4e' />
                </a>
            </li>
        </ul>
        </div>
    </div>
    );
}

export default Contact;