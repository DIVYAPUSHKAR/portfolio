// src/components/Projects.js
import React from 'react';

const projectList = [
  {
    title: "Zomato Web App (DevOps)",
    description: "A clone of Zomato food ordering platform, integrated with DevOps tools like Jenkins, Docker, and GitHub Actions for CI/CD pipeline automation.",
    link: "https://github.com/DIVYAPUSHKAR/zomato-devops-app",
    live: "https://www.linkedin.com/posts/divya-pushkar-7b7167250_docker-devops-aws-activity-7324291561175818240-MMw6?utm_source=share&utm_medium=member_desktop"
  },
  {
    title: "Todo App (MERN)",
    description: "A full-stack todo app built using MongoDB, Express, React, and Node.js.",
    link: "https://github.com/DIVYAPUSHKAR/todo-app-with-mern-stack-",
    live: "https://lnkd.in/gS3sxsA5"
  },
  {
    title: "Face Mask Detection (OpenCV)",
    description: "A deep learning project that detects if a person is wearing a mask using OpenCV and TensorFlow.",
    link: "https://github.com/DIVYAPUSHKAR/face-mask-detector/tree/master"
  },
  {
    title: "Eye-Controlled Wheelchair (OpenCV + Arduino)",
    description: "An IoT and computer vision-based wheelchair system controlled through eye movement using OpenCV and Arduino.",
    link: "https://www.linkedin.com/posts/geetha-k-97a66a258_anthapragna2k25-innovation-techfest-ugcPost-7322082510929113088-_mTV?utm_source=share&utm_medium=member_desktop"
  }
];

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h1 className="title">Projects</h1>
      <div className="project-container">
        {projectList.map((project, index) => (
          <div className="project-card" key={index}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Code
            </a>
            {project.live && (
              <div>
                <br />
                <a href={project.live} target="_blank" rel="noopener noreferrer">
                  Live Preview
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
