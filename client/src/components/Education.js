import React from 'react';
//import './Education.css';

const Education = () => {
  return (
    <section className="education" id="education">
      <h1 className="title">Education</h1>
      <div className="upper">
        {/* B.Tech */}
        <div className="edu-box">
          <h1>B.Tech</h1>
          <ul>
            <li><span>COURSE:</span> Computer Science and Engineering</li>
            <li><span>Board:</span> RGUKT</li>
            <li><span>Year of pass:</span> 2026</li>
          </ul>
        </div>

        {/* INTER */}
        <div className="edu-box">
          <h1>INTER</h1>
          <ul>
            <li><span>COURSE:</span> MPC</li>
            <li><span>Board:</span> RGUKT</li>
            <li><span>Cgpa:</span> 8.67</li>
            <li><span>Year of pass:</span> 2022</li>
          </ul>
        </div>

        {/* SSC */}
        <div className="edu-box">
          <h1>SSC</h1>
          <ul>
            <li><span>COURSE:</span> SSC</li>
            <li><span>Board:</span> SSC</li>
            <li><span>Cgpa:</span> 10</li>
            <li><span>Year of pass:</span> 2020</li>
          </ul>
        </div>
      </div>

      <div className="skillset">
        <div>
          <h1>Programming Languages</h1>
          <ul>
            <li>Python</li>
            <li>Java</li>
            <li>DSA</li>
            <li>C</li>
          </ul>
        </div>

        <div className="technical">
          <h1>Technical Skills</h1>
          <ul>
          <li>React.js</li>
      <li>Node.js</li>
      <li>MongoDB</li>
      <li>Express.js</li>
      <li>Git & GitHub</li>
      <li>Jenkins</li>
      <li>Docker</li>
      <li>Linux</li>
      <li>VS Code</li>
      <li>AWS Cloud</li>
      <li>Machine Learning </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Education;
