import React from 'react';
import SliderCard from './../card/card.jsx';
import './experience.css';
import findRight1 from '../../images/findRight1.png';
import findRight2 from '../../images/findRight2.png';
import findRight3 from '../../images/findRight3.png';
import precision1 from '../../images/precision1.png';
import precision2 from '../../images/precision2.png';
import precision3 from '../../images/precision3.png';
import precision4 from '../../images/precision4.png';

const Experience = () => {
  const experience1 = {
    images: [findRight1, findRight2, findRight3],
    title: 'Namaste Nepali Grocery',
    description: 'A service matching application that connects skilled laborers with clients. Features real-time maps and location-based services.',
    callToAction: 'Learn More >',
  };

  const experience2 = {
    images: [precision1, precision2, precision3, precision4],
    title: 'Precision Contractors of Iowa',
    description: 'Currently working on an online platform for a company that specializes in roofing, siding, gutters, windows, decks, and remodels.',
    callToAction: 'Learn More >',
  };

  return (
    <div>
    <div className='work-text-cont'>
      <h1 className='titleText'>Work Experiences</h1>
      <p className='bodyText'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, voluptate eligendi exercitationem esse velit deserunt incidunt sed quia! Voluptatibus debitis consectetur totam quos ipsam vitae autem non sequi nam obcaecati!</p>
    </div>
      <div className="work-container">
        <div className="work">
          <SliderCard images={experience1.images} title={experience1.title} description={experience1.description} callToAction={experience1.callToAction} />
        </div>
        <div className="work">
          <SliderCard images={experience2.images} title={experience2.title} description={experience2.description} callToAction={experience2.callToAction} />
        </div>
      </div>
    </div>
    
  );
};

export default Experience;
