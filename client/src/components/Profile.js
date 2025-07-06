import React from 'react';

const Profile = () => {
  return (
    <section className="profile" id="profile">
      <div className="part1">
        <div className="introduction">
          <h1 id="name">I'm Pushkar Divya</h1>
          <p className="intro-text">
            Hi! I’m a CS undergrad (UG’26) with a strong interest in web development, DevOps, and AI.  
            I recently completed an internship project where I worked on both Frontend Development and 
            DevOps tools like Jenkins, Docker, and Git. I also have hands-on experience with HTML, CSS, 
            JavaScript, React, and the MERN stack.<br /><br />
            I’ve contributed to an IoT-based project, and I’m currently building a Face Mask Detector 
            using Deep Learning (CNN). This project is helping me grow my skills in AI and machine learning.<br /><br />
             I’m now ready for a job where I can grow, contribute, and work in a collaborative company 
            that values learning and innovation.<br /><br />
            Let’s connect — linkdein and github!
          </p>
        </div>
      </div>

      <div className="profile-img">
        <img
          src="assets/WhatsApp Image 2025-06-15 at 3.49.46 PM.jpeg"
          alt="Profile"
          className="profile-pic"
        />

        <div className="sociallinks">
          <div className="linkedin">
            <div className="card">
              <img src="assets/linkdein.png" alt="linkedin" />
              <a href="https://www.linkedin.com/in/divya-pushkar-7b7167250" target="_blank" rel="noreferrer">
                <button className="card-btn">Check</button>
              </a>
            </div>
          </div>

          <div className="github">
            <div className="card">
              <img src="assets/github.jpeg" alt="github" />
              <a href="https://github.com/DIVYAPUSHKAR" target="_blank" rel="noreferrer">
                <button className="card-btn">Check</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
