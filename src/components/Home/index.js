import React from 'react';
import felisha from './assets/felisha.jpg'
import './assets/style.css'


export default function Home() {
  return (
    <div>
      <div className="profile-img my-5">
        <img className= "profilePicture"src={felisha} alt="Felisha" />
        </div>
        <h3>Welcome to my Portfolio. Click the tabs above get to know me and to see my work.</h3>
    </div>
  );
}