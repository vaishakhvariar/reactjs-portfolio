import './index.css';

const Profile = () => (
    <div className='profile-container'>
        <div className='image-container'>
            <div className='circular-frame'>
                <img src="src\assets\images\cirproimg.png" alt="My profile image" className='profile-picture' />
                {/* <img src='src\assets\images\lightlogo.PNG' className='profile-picture' /> */}
            </div>
        </div>
        <div className='text-area'>
            <p>Hi, my name is</p>
            <h1>Vaishakh Variar.</h1>
            <p>I am a web developer with a passion 
                for creating dynamic and innovative web applications. 
                I hold a master s degree in computing science from 
                University College Cork, where I honed my skills in 
                the world of technology. With a strong foundation in 
                computing science, I specialize in designing and building 
                web applications that deliver exceptional user experiences.</p>
         </div>
    </div>
);

export default Profile;