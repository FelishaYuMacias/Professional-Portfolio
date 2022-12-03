import React from 'react';
import './assets/style.css';


export default function Project() {

  return (
    <div>
      <h2>My Projects</h2>
      <div className='project-cards d-flex justify-content-around'>
      <div className="project">
        <h3>Zoo Animal Game</h3>
        <a className="project-link"  href='https://felishayumacias.github.io/Zoo-Animal-Game/' target="_blank"><img src={require(`./assets/zoo-animal-game.png`)} alt='zoo animal game' className="project-img" /></a>
        <div>
        <a className="project-link" href="https://github.com/FelishaYuMacias/Zoo-Animal-Game" target="_blank">GitHub Link</a>
        </div>
      </div>

      <div className="project">
        <h3>Wish List</h3>
        <a className="project-link"  href='https://team7-wishlist-app.herokuapp.com/' target="_blank"><img src={require(`./assets/wish-list.png`)} alt='wish list' className="project-img" /></a> 
        <div>
        <a className="project-link" href="https://github.com/tkmarsten/wishlist" target="_blank">GitHub Link</a>
        </div>
      </div>

      <div className="project">
        <h3>Express Note Taker</h3>
        <a className="project-link"  href='https://felishas-note-taker-express-js.herokuapp.com/notes' target="_blank"><img src={require(`./assets/note-taker.png`)} alt='Note Taker' className="project-img" /></a>
        <div>
        <a className="project-link" href="https://github.com/FelishaYuMacias/Express.js-Note-Taker" target="_blank">GitHub Link</a>
        </div>
      </div>

      <div className="project">
        <h3>Shiny Hunter</h3>
        <div>
        <a className="project-link"  href='https://github.com/FelishaYuMacias/Shiny-Hunter' target="_blank"><img src={require(`./assets/shiny-hunter.jpg`)} alt='Shiny Hunter' className="project-img" /></a>
        <div>
        <a className="project-link" href="https://github.com/FelishaYuMacias/Shiny-Hunter" target="_blank">GitHub Link</a>
        </div>
        </div>
      </div>

      </div>
      
    </div>
    
  );
}