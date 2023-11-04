import './index.css';

const images = [
    { path: '/assets/images/JavaScript-logo.png', name:'Javascript' },
    { path:'assets/images/python-logo.png', name:'Python' },
    { path:'assets/images/Java.png', name:'Java' },
    { path:'assets/images/c-logo.png', name:'C++' },    
    { path:'assets/images/C.logo', name:'C' },
    { path:'assets/images/react.png', name:'React' },
    { path:'assets/images/html.png', name:'HTML' },
    { path:'assets/images/css.png', name:'CSS' },
    { path:'assets/images/git.png', name:'Git' },


];


const Skills = () => {
    return(
        <div className='skills-container'>
            <h1>Skills</h1>  
            <div className='languages-container'>
                {images.map((image,index) => (
                    <div key={index} className='skill-container'>
                    <div className='logo-div'><img className='skill-logo' src={image.path} alt={image.name} /></div>
                    <div className='name-div'><p className='skill-name'>{image.name}</p></div>
                    </div>
                ))}               
            </div>      
        </div>
    );
}

export default Skills;