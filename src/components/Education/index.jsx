import './index.css';

const Education = () => {

    return(

    <div className='education-container'>
        <h1>Education </h1>
        <div className='education-1'>
            <img className='ucc-image' src='\assets\images\ucc.jpg' alt='Photograph of University College Cork circa. 2020' />
            <div className='uni-info-1'>
            <p className='year-1'>2020-2021</p>                
                <h3>Master of Science in Computing Science </h3>
                <h2>University College Cork, Ireland</h2>
                <ul className='ucc-list'>
                    <h3>Key Modules</h3>
                    <li>Database Technology</li>
                    <li>Information Storage and Retrieval</li>
                    <li>Optimisation</li>
                    <li>Applied Computer Simulation and Analysis,</li>
                    <li>Topics in Artificial Intelligence</li>
                    <li>Data Mining</li>
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
                    <li>Data Structures & Algorithms</li>
                    <li>Object-Oriented Programming</li>
                    <li>Web Development</li>
                    <li>Database Systems</li>
                    <li>Computer Networks</li>
                    <li>Operating Systems</li>
                </ul>
               
            </div>    
            <img className='nmamit-image' src='\assets\images\nmamit.jpg' alt='Photograph of NMAMIT, Nitte circa. 2019' />     
        </div>
    </div>

    );
}

export default Education;