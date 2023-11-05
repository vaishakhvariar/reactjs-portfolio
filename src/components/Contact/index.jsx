import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBlogger, faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { useRef } from 'react'
import emailjs from '@emailjs/browser';


const Contact = () => {

    const form = useRef()
    const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm('service_lvo4nbb', 'template_ilirxzh', form.current, 'Z8-8YvW5AsptXYCjs')
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }

    return (
    <div className='contact-container'>
        <div className='form-container'>
            <p> Get in Touch </p>
        <h1> Contact Me </h1> 
        <form className='form-main' ref={form} onSubmit={sendEmail}>
              <ul className='form-elements-list'>
                <li className="half">
                  <input placeholder="Name" type="text" name="from_name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="reply_to"
                    required
                  />
                </li>
                <li className='full'>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li className='full'>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="submit-button" value="SEND" />
                </li>
              </ul>
            </form>
        </div>
        <div className='socials-container'>
        <ul className='social-links'>
            <li className='so-link'>
                <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/vaishakhvariar/'> 
                    <FontAwesomeIcon icon={(faLinkedin)} color='#4d4d4e' />
                </a>
            </li>
            <li className='so-link'>
                <a target='_blank' rel='noreferrer' href='https://github.com/vaishakhvariar'> 
                    <FontAwesomeIcon icon={(faGithub)} color='#4d4d4e' />
                </a>
            </li>
           
            <li className='so-link'>
                <a target='_blank' rel='noreferrer' href='https://vvariarwrites.wordpress.com/'> 
                    <FontAwesomeIcon icon={(faBlogger)} color='#4d4d4e' />
                </a>
            </li>
            <li className='so-link'>
                <a  target='_blank' rel='noreferrer' href=' https://www.instagram.com/vaishakh_variar/'> 
                    <FontAwesomeIcon icon={(faInstagram)} color='#4d4d4e' />
                </a>
            </li>
        </ul>
        </div>
    </div>
    );
}

export default Contact;