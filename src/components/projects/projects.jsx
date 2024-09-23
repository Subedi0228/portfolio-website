import React from 'react';
import SliderCard from './../card/card.jsx';
import './projects.css';
import findRight1 from '../../images/findRight1.webp';
import findRight2 from '../../images/findRight2.webp';
import findRight3 from '../../images/findRight3.webp';
import grocery1 from '../../images/grocery1.webp';
import grocery2 from '../../images/grocery2.webp';
import grocery3 from '../../images/grocery3.webp';
import grocery4 from '../../images/grocery4.webp';
import precision1 from '../../images/precision1.webp';
import precision2 from '../../images/precision2.webp';
import precision3 from '../../images/precision3.webp';
import precision4 from '../../images/precision4.webp';

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

  const project3 = {
    images: [precision1, precision2, precision3, precision4],
    title: 'Precision Contractors of Iowa',
    description: 'Currently working on an online platform for a company that specializes in roofing, siding, gutters, windows, decks, and remodels.',
    callToAction: 'Learn More >',
  };

  const project4 = {
    images: [grocery1, grocery2, grocery3, grocery4],
    title: 'Online Grocery App',
    description: 'Currently working on an online platform for a company that specializes in roofing, siding, gutters, windows, decks, and remodels.',
    callToAction: 'Learn More >',
  };

  return (
    <div>
    <div className='projects-text-cont'>
      <h1 className='titleText'>My Projects</h1>
      <p className='bodyText'>Here are a few of the projects where I combined my Iowa State education with personal coding experience to build practical solutions.</p>
    </div>
      <div className="projects-container">
        <div className="project">
          <SliderCard images={project1.images} title={project1.title} description={project1.description} callToAction={project1.callToAction} />
        </div>
        <div className="project">
          <SliderCard images={project2.images} title={project2.title} description={project2.description} callToAction={project2.callToAction} />
        </div>
        <div className="project">
          <SliderCard images={project3.images} title={project3.title} description={project3.description} callToAction={project3.callToAction} />
        </div>
        <div className="project">
          <SliderCard images={project4.images} title={project4.title} description={project4.description} callToAction={project4.callToAction} />
        </div>
      </div>
    </div>
    
  );
};

export default Projects;
