import React from 'react';
import felisha from './assets/felisha.jpg'
import './assets/style.css'


export default function Home() {
  return (
    <div>
      <h2>Welcome to my Portfolio </h2>
      <div className="profile-img my-5">
        <img className="profilePicture" src={felisha} alt="Felisha" />
        <h3>Click the tabs above get to know me and to see my work.</h3>
      </div>
    </div>
  );
}