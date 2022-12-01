import React, { useState } from 'react';
import Project from "../Project";

function Portfolio() {

  // Replace links with deployed projects and GitHub repos
  const [projects] = useState([
    {
      name: 'zoo-animal-game',
      description: 'An interactive, educational game using zoo animals.',
      link: "https://felishayumacias.github.io/Zoo-Animal-Game/",
      repo: "https://github.com/FelishaYuMacias/Zoo-Animal-Game"
    },
    {
      name: 'wish-list',
      description: 'THE ultimate wish list where you can add anything you find on the internet!',
      link: "https://team7-wishlist-app.herokuapp.com/",
      repo: "https://github.com/FelishaYuMacias/wishlist"
    },
    {
      name: 'shiny-hunter',
      description: 'A way to track your shiny Pokemon hunts',
      link: "https://github.com/FelishaYuMacias/Shiny-Hunter",
      repo: "https://github.com/FelishaYuMacias/Shiny-Hunter"
    },
    {
      name: 'note-taker',
      description: 'A quick and easy way to take and save notes.',
      link: "https://felishas-note-taker-express-js.herokuapp.com/notes",
      repo: "https://github.com/FelishaYuMacias/Express.js-Note-Taker"
    },

    // {
    //   name: 'surf-report',
    //   description: 'MERN Stack',
    //   link: "https://github.com",
    //   repo: "https://github.com"
    // },
    // {
    //   name: 'pastel-puzzels',
    //   description: 'MERN Stack',
    //   link: "https://github.com",
    //   repo: "https://github.com"
    // },
    // {
    //   name: 'run-buddy',
    //   description: 'HTML/CSS',
    //   link: "https://github.com",
    //   repo: "https://github.com"
    // },
    // {
    //   name: 'led-wall',
    //   description: 'Node/IoT',
    //   link: "https://github.com",
    //   repo: "https://github.com"
    // },
    // {
    //   name: 'calculator',
    //   description: 'React/JavaScript/CSS',
    //   link: "https://github.com",
    //   repo: "https://github.com"
    // },
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project
            project={project}
            key={"project" + idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
