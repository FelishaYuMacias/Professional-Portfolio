import React from 'react';
import family from './assets/family.jpg'
import './assets/style.css'

export default function About() {
  return (
    <div>
      <h1>About Me</h1>
      <img className= "aboutPicture"src={family} alt="family of 3 at the marina" />
      <h2> Banker turned Coder</h2>
      <p>I started working in banking in November of 2011 as a teller. In January of 2014 I was promoted to Customer Service Supervisor. November of 2019 I was promoted to Client Services Manager. May of 2021 I was promoted to Client Services Manager II.</p>
      <p>After 10 years of working in the retail side of banking I realized that customer service, although something I had become very good at, was not the direction I wanted to pursue in my future. I realized that to make a change in my career I needed to make a change in my life.</p>
      <p>I have friends and family that are developers and heard them talk about their work. I was inspired, and after a lot of soul searching and research, I realized that this was exactly the direction I wanted my career to go. I am naturally analytical, a great problem solver, and am good at math and logic so I knew this was a field in which I could thrive and furthermore would really enjoy.</p>
      <p>I am now enrolled in the UW Coding Boot Camp where I am learning the skills necessary to be a full-stack web developer.</p>
    </div>
  );
}