import './index.css';

const Education = () => {

    return(

    <div className='education-container'>
        <h1>Education </h1>
        <div className='education-1'>
            <img className='ucc-image' src='src\assets\images-1\ucc.jpg' alt='Photograph of University College Cork circa. 2020' />
            <div className='uni-info-1'>
            <p className='year-1'>2020-2021</p>                
                <h3>Master of Science in Computing Science </h3>
                <h2>University College Cork, Ireland</h2>
                <ul className='ucc-list'>
                    <h3>Key Modules</h3>
                    <li>Course 1</li>
                    <li>Course 1</li>
                    <li>Course 1</li>
                    <li>Course 1</li>
                    <li>Course 1</li>
                    <li>Course 1</li>
                    <li>Course 1</li>
                </ul>
                
            </div>
        </div>
        <div className='education-2'>
            <div className='uni-info-2'>
            <p className='year-2'>2015-2019</p> 
                <h3>Bachelor of Engineering in Computer Science </h3>
                <h2>NMAM Institute of Technology, India</h2>
                <ul className='nmamit-list'>
                    <h3>Key Modules</h3>
                    <li>Course 1</li>
                    <li>Course 1</li>
                    <li>Course 1</li>
                    <li>Course 1</li>
                    <li>Course 1</li>
                    <li>Course 1</li>
                    <li>Course 1</li>
                </ul>
               
            </div>    
            <img className='nmamit-image' src='src\assets\images-1\nmamit.jpg' alt='Photograph of NMAMIT, Nitte circa. 2019' />     
        </div>
    </div>

    );
}

export default Education;