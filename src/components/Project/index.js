import React from 'react';
import './assets/style.css';


export default function Project() {

  return (
    <div>
      <h2>My Projects</h2>

      <div className='project-cards d-flex justify-content-around'>

        <div className="project zoo-nimal-game">
          <h3>Zoo Animal Game</h3>
          <a className="project-link" href='https://felishayumacias.github.io/Zoo-Animal-Game/' target="_blank"><img src={require(`./assets/zoo-animal-game.png`)} alt='zoo animal game' className="project-img" /></a>
          <div>
            <a className="project-link" href="https://github.com/FelishaYuMacias/Zoo-Animal-Game" target="_blank"><i className="fa-brands fa-github"></i> GitHub Link</a>
          </div>
        </div>

        <div className="project shiny-hunter">
          <h3>Professor Oak's Shiny Dex</h3>
          <div>
            <a className="project-link" href='https://shiny-hunter-client.vercel.app/' target="_blank"><img src={require(`./assets/prof-oak-shiny-dex.png`)} alt='Professor Oaks Shiny Dex' className="project-img" /></a>
            <div>
              <a className="project-link" href="https://github.com/FelishaYuMacias/Shiny-Hunter" target="_blank"><i className="fa-brands fa-github"></i> GitHub Link</a>
            </div>
          </div>
        </div>

        <div className="project wish-list">
          <h3>Wish List</h3>
          <a className="project-link" href='https://team7-wishlist-app.herokuapp.com/' target="_blank"><img src={require(`./assets/wish-list.png`)} alt='wish list' className="project-img" /></a>
          <div>
            <a className="project-link" href="https://github.com/tkmarsten/wishlist" target="_blank"><i className="fa-brands fa-github"></i> GitHub Link</a>
          </div>
        </div>

        <div className="project note-taker">
          <h3>Express Note Taker</h3>
          <a className="project-link" href='https://felishas-note-taker-express-js.herokuapp.com/notes' target="_blank"><img src={require(`./assets/note-taker.png`)} alt='Note Taker' className="project-img" /></a>
          <div>
            <a className="project-link" href="https://github.com/FelishaYuMacias/Express.js-Note-Taker" target="_blank"><i className="fa-brands fa-github"></i> GitHub Link</a>
          </div>
        </div>

        <div className="project mvc-tech-blog">
          <h3>MVC Tech Blog</h3>
          <a className="project-link" href='https://felisha-mvc-tech-blog.herokuapp.com/' target="_blank"><img src={require(`./assets/tech.jpg`)} alt='MVC Tech Blog' className="project-img" /></a>
          <div>
            <a className="project-link" href="https://github.com/FelishaYuMacias/Model-View-Controller-MVC-Tech-Blog" target="_blank"><i className="fa-brands fa-github"></i> GitHub Link</a>
          </div>
        </div>

        <div className="project timed-quiz">
          <h3>Timed Quiz</h3>
          <a className="project-link" href='https://felishayumacias.github.io/Web-APIs-Timed-Quiz/' target="_blank"><img src={require(`./assets/timed-quiz.jpg`)} alt='Quiz' className="project-img" /></a>
          <div>
            <a className="project-link" href="https://github.com/FelishaYuMacias/Web-APIs-Timed-Quiz" target="_blank"><i className="fa-brands fa-github"></i> GitHub Link</a>
            <div>
            </div>
          </div>
        </div>

      </div>
    </div>

  );
}