import React from 'react';
//import './Navbar.css'; // optional if you want to move styles

const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <li><a href="#profile">Profile</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#projects">Projects</a></li>

        <li><a href="#certificates">Certificates</a></li>
        <li><a href="#contact">Reach Me</a></li>
        </ul>
    </div>
  );
};

export default Navbar;
