import React from 'react';
import './assets/style.css'

function Footer() {

  // Replace links with social media profiles
  const icons = [
    {
      name: "fab fa-github",
      link: "https://github.com/FelishaYuMacias",
      title: "GitHub"
    },
    {
      name: "fab fa-linkedin",
      link: "https://www.linkedin.com/in/felisha-yu-macias/",
      title: "LinkedIn"
    }
  
  ]

  return (
    <footer>
      <hr></hr>
      <div className="footer d-flex justify-content-center align-items-center">
      {icons.map(icon =>
      (
        <a className="footer-link" href={icon.link} key={icon.name} target="_blank" rel="noopener noreferrer"><i className={icon.name}> {icon.title}</i></a>
      )
        )}
      </div>
    </footer>
  );
}

export default Footer;
