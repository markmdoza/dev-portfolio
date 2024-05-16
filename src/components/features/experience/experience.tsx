import React from 'react'
import { Headings } from '../../core/headings/headings'
import './style.css'

const Experience = React.forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div>
        <div ref={ref} className="about-experience-section">
          <Headings title="Experience" subtitle="" />{' '}
      </div>
      <div className='about-experience-item'>
        <div className='about-experience-date'>January 2024 - March 2024</div>
          <div>
            <h2 className='about-experience-title'>
              <span className='span-company'>
                <span>ReturnPal</span>
                <a href="https://returnpal.ca/" target="_blank" rel='noopener noreferrer' className="about-experience-link">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M18.3643 15.5353L16.95 14.1211L18.3643 12.7069C20.3169 10.7543 20.3169 7.58847 18.3643 5.63585C16.4116 3.68323 13.2458 3.68323 11.2932 5.63585L9.87898 7.05007L8.46477 5.63585L9.87898 4.22164C12.6127 1.48797 17.0448 1.48797 19.7785 4.22164C22.5121 6.95531 22.5121 11.3875 19.7785 14.1211L18.3643 15.5353ZM15.5358 18.3638L14.1216 19.778C11.388 22.5117 6.9558 22.5117 4.22213 19.778C1.48846 17.0443 1.48846 12.6122 4.22213 9.87849L5.63634 8.46428L7.05055 9.87849L5.63634 11.2927C3.68372 13.2453 3.68372 16.4112 5.63634 18.3638C7.58896 20.3164 10.7548 20.3164 12.7074 18.3638L14.1216 16.9496L15.5358 18.3638ZM14.8287 7.75717L16.2429 9.17139L9.17187 16.2425L7.75766 14.8282L14.8287 7.75717Z"></path></svg>
                </a>
              </span>
                <span className='about-experience-role'>Junior Backend Developer</span>
            </h2>
            <p className='about-experience-description'>
              As a junior backend developer at ReturnPal, I was responsible for developing a collection schema within the MongoDB database to store user data during the return process. I also worked on the backend APIs to handle data that was coming from the frontend and tested the APIs using Postman. As a developer that previously worked on a lot of frontend, this was a great opportunity to really understand the inner workings of the backend and how it interacts with the frontend.
            </p>
            <div className='about-experience-technologies'>
              <span className='about-experience-technology'>MongoDB</span>
              <span className='about-experience-technology'>JavaScript</span>
              <span className='about-experience-technology'>Node.js</span>
              <span className='about-experience-technology'>Postman</span>
            </div>
          </div>
      </div>
    </div>
  )
})

Experience.displayName = 'Experience'

export { Experience }
