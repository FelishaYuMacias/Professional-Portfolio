import React from 'react';

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
    <footer className="flex-row px-1">
      <hr></hr>
      {icons.map(icon =>
      (
        <a href={icon.link} key={icon.name} target="_blank" rel="noopener noreferrer"><i className={icon.name}>{icon.title}</i></a>
      )
        )}
    </footer>
  );
}

export default Footer;
