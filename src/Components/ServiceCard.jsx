import React from 'react';
import '../css/servicecard.css';

const Service = ({  overlay1, overlay2, overlay3, img1, img2, img3 }) => {
  return (
    <div className="services-main">
      {/* <h2 className='services-h2'>{service}</h2> */}
      <div className='services'>
        <div className='services-container'>
          <img
            className='services-img'
            src={img1}
            alt="Service Image 1"
          />
          <div className='services-overlay'>
            <span className="overlay-text">{overlay1}</span>
          </div>
        </div>
        <div className='services-container'>
          <img
            className='services-img'
            src={img2}
            alt="Service Image 2"
          />
          <div className='services-overlay'>
            <span className="overlay-text">{overlay2}</span>
          </div>
        </div>
        <div className='services-container'>
          <img
            className='services-img'
            src={img3}
            alt="Service Image 3"
          />
          <div className='services-overlay'>
            <span className="overlay-text">{overlay3}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
