import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';

const screenCaps = [
    { path: '/assets/images/QuizApp.png',
    name:'Quiz App', github: 'https://github.com/vaishakhvariar/reactJS-quiz-app', 
    liveLink: 'https://react-js-quiz-app-tau.vercel.app/',
    description:'Developed a quiz application with React.js that interfaces with QuizAPI to generate a range of quizzes. The app allows users to select their preferred topics and difficulty, providing a personalized experience. Deployed on Vercel, it showcases my knack for building engaging and user-friendly web applications.' },
    { path:'/assets/images/RecipesApp.png', liveLink: 'https://reactjs-recipe-app-blond.vercel.app/', name:'Recipes App', github: 'https://github.com/vaishakhvariar/reactjs-recipe-app', description:' Created a recipe discovery application in React.js, utilizing the Spoonacular API to deliver a wide selection of cuisines. The app features an intuitive search function and is organized for ease of navigation. Employing the "styled-component" library, I ensured a responsive design that enhanced user engagement. The application is live on Vercel.' },
    { path:'/assets/images/ToDoList.png',  liveLink: 'https://reactjs-to-do-list-ivory.vercel.app/', name:'Simple To-Do List', github:'https://github.com/vaishakhvariar/reactjs-to-do-list', description:'Developed a quiz application with React.js that interfaces with QuizAPI to generate a range of quizzes. The app allows users to select their preferred topics and difficulty, providing a personalized experience. Deployed on Vercel, it showcases my knack for building engaging and user-friendly web applications.' },
    // { path:'/assets/images/PortfolioSnapshot.png', liveLink: 'https://react-js-quiz-app-tau.vercel.app/', name:'Portfolio', github: 'https://github.com/vaishakhvariar/reactjs-portfolio', description:'Designed and implemented a web-based portfolio using React.js, showcasing my professional and technical skills. Deployed on Firebase, the site offers a clean, responsive layout for accessibility across multiple devices. Aesthetic details were carefully crafted using CSS, ensuring the portfolio is both user-friendly and visually appealing.' },
]

const Projects = () => {
    const [expandedProjects, setExpandedProjects] = useState(Array(screenCaps.length).fill(false));

    const toggleExpand = (index) => {
        setExpandedProjects((prevExpanded) => {
          const newExpanded = [...prevExpanded];
          newExpanded[index] = !newExpanded[index];
          return newExpanded;
        });
      };

  return (
    <div>
      <h1>Projects</h1>
      <ProjectsContainer>
        {screenCaps.map((project, index) => (
        <Project key={index} expanded={expandedProjects[index]}>
            <a href={project.liveLink} target="_blank" rel="noreferrer">
                <ProjectImage src={project.path} alt={project.name} />
            </a>
            <ProjectContent>
              <ProjectName>{project.name}</ProjectName>
              <div>
                <a target='_blank' rel='noreferrer' href={project.github}>
                  <FontAwesomeIcon icon={(faGithub)} color='#36454F' size='lg' />
                </a>
              </div>
            </ProjectContent>
            <ProjectDescription
              expanded={expandedProjects[index]}
              onClick={() => toggleExpand(index)}
            >
              {expandedProjects[index]
                ? project.description
                : `${project.description.substring(0, 200)}...`}
            </ProjectDescription>
      </Project>
        ))}
      </ProjectsContainer>
    </div>
  );
};

const ProjectsContainer = styled.div`
display: flex;
height: 100%;
justify-content: space-around; 
align-items: center;
flex-wrap: wrap;
border-radius: 50px;
box-shadow: rgba(0, 0, 0, .2) 0 3px 5px -1px,rgba(0, 0, 0, .14) 0 6px 10px 0,rgba(0, 0, 0, .12) 0 1px 18px 0;
background: repeating-radial-gradient(
    circle at 0 0, 
    transparent 0,
    transparent 10px,
    #ffffff55 10px,
    #f0f0f0 20px 
  ), repeating-linear-gradient( #ffffff55, #ffffff );
`;

const Project = styled.div`
box-sizing: border-box;
height: ${({ expanded }) => (expanded ? 'auto' : '300px')}; 
width: calc(50% - 20px);
height: auto;
margin: 10px;
padding: 25px;
border-radius: 8px;
transition: height 0.3s ease;  
@media (max-width: 784px) {
    width: 100%; 
    max-width: 100%; 
    height: ${({ expanded }) => (expanded ? 'auto' : 'auto')}; 
  }
`;

const ProjectImage = styled.img`
  width: 100%; 
//   height: 100%; 
  object-fit: cover;
  border: 2px solid #ccc; 
  border-radius: 8px;

  transition: box-shadow 0.3s ease, transform 0.3s ease;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.1) 0 3px 5px -1px, rgba(0, 0, 0, 0.06) 0 6px 10px 0, rgba(0, 0, 0, 0.04) 0 1px 18px 0;
    transform: scale(1.1);  // Adjust the scale factor as needed
  }

  &:active {
    transform: scale(0.95);
    box-shadow: rgba(0, 0, 0, 0.1) 0 3px 5px -1px, rgba(0, 0, 0, 0.06) 0 6px 10px 0, rgba(0, 0, 0, 0.04) 0 1px 18px 0;
  }
`;

const ProjectContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ProjectName = styled.h2`
  font-size: 20px;
  margin: 10px 0;
  color: #36454F; 
`;

const ProjectDescription = styled.p`
    color: #36454F;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: left; 
    cursor: pointer;
    @media (min-width: 785px) {
        height: auto; 
      }
`;

export default Projects;