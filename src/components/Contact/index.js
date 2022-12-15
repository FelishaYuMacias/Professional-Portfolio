import React, {useState} from 'react';
import './assets/style.css';


export default function Contact() {

  return (
    <div>
     <section id="Contact">
            <h2>Contact Me</h2>
      
                <h3 className="contact"><i className="fa-solid fa-envelope"></i> <a href="mailto:felisha.j.yu@gmail.com">Email Me</a></h3>
                <h3 className="contact">
               <i className="fa-brands fa-github"></i>   <a href="https://github.com/FelishaYuMacias" target="_blank">Github</a>
                </h3>
                <h3 className="contact"> <i className="fa-brands fa-linkedin">  </i>
                   <a href="https://www.linkedin.com/in/felisha-yu-macias/" target="_blank">LinkedIn</a>
                </h3>
    
        </section>
    </div>
  );
}