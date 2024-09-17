import React from 'react';
import SliderCard from './../card/card.jsx';
import './projects.css';
import findRight1 from '../../images/findRight1.png';
import findRight2 from '../../images/findRight2.png';
import findRight3 from '../../images/findRight3.png';
import grocery1 from '../../images/grocery1.png';
import grocery2 from '../../images/grocery2.png';
import grocery3 from '../../images/grocery3.png';
import grocery4 from '../../images/grocery4.png';

const Projects = () => {
  const project1 = {
    images: [findRight1, findRight2, findRight3],
    title: 'Find Right',
    description: 'A service matching application that connects skilled laborers with clients. Features real-time maps and location-based services.',
    callToAction: 'Learn More >',
  };

  const project2 = {
    images: [grocery1, grocery2, grocery3, grocery4],
    title: 'Namaste Nepali Grocery',
    description: 'An online platform designed for a local grocery store, enabling customers to browse and order products easily.',
    callToAction: 'Learn More >',
  };

  return (
    <div>
    <div className='projects-text-cont'>
      <h1 className='titleText'>My Projects</h1>
      <p className='bodyText'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, voluptate eligendi exercitationem esse velit deserunt incidunt sed quia! Voluptatibus debitis consectetur totam quos ipsam vitae autem non sequi nam obcaecati!</p>
    </div>
      <div className="projects-container">
        <div className="project">
          <SliderCard images={project1.images} title={project1.title} description={project1.description} callToAction={project1.callToAction} />
        </div>
        <div className="project">
          <SliderCard images={project2.images} title={project2.title} description={project2.description} callToAction={project2.callToAction} />
        </div>
      </div>
    </div>
    
  );
};

export default Projects;
