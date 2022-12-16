import React from 'react';
import './assets/style.css';
import resume from './assets/resume.png'

export default function Resume() {
  return (
    <div>
      <h2>Resume</h2>
      
      <div className='skills d-flex justify-content-around'>

        <div className='resume-link'>
          <h3>View my Resume </h3>
          <a href="https://docs.google.com/document/d/1i495RNlm4SD02wk2xgALK58Wm5zy9URTd2hEOY_q5mE/edit?usp=sharing" target={"_blank"}><img className="resumePicture" src={resume} alt="resume icon" /><p>Click Here</p> </a>
        </div>

        <div className='front'>
          <h3>Front-end Proficiencies</h3>
          <ul className="list-unstyled">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>jQuery</li>
            <li>Handlebars</li>
            <li>Progressive Web Applications</li>
            <li>React</li>
            <li>Bootstrap</li>
          </ul>
        </div>

        <div className='back'>
          <h3>Back-end Proficiencies</h3>
          <ul className="list-unstyled">
            <li>APIs</li>
            <li>Node</li>
            <li>Object Oriented Programming</li>
            <li>Express</li>
            <li>Object Relational Mapping</li>
            <li>Model View Controller</li>
            <li>MySQL, Sequelize</li>
            <li>MongoDB, Mongoose</li>
            <li>REST</li>
          </ul>
        </div>

      </div>
    </div>
  );
}