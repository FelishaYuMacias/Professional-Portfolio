import React from 'react';
import './assets/style.css';

export default function Resume() {
  return (
    <div>
      <h1>Resume</h1>
      <div className='skills'>
        <div>
        <p>
        Download my Resume<a href="https://docs.google.com/document/d/e/2PACX-1vQ5EqdbCSgbwZuIJxolrB7gsEV-nPsiqvnl4fnSl1g4N2rj54WJ2vkTwAqRD0cGZf7j4HwGXkTxh-Dx/pub" target={"_blank"}></a>
        </p>
        </div>
        <div><h3>Front-end Proficiencies</h3>
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
      <div>
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