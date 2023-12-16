/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useState } from "react";

function Projects() {
  const mystyle = {

    color: "#fff",
    margin: "auto",


  }
  const [projects] = useState([
    {
      title: "Project 1 - Amazon Clone",
      img: "/projects/1.png",
      gLink: "https://github.com/himanshu1234567-sys?tab=repositories",
      lLink: "https://codesquarefashion.netlify.app/",
      des: "Created a Amazon clone (technologies – html, css, js, jquery, phpmyAdmin) "
    },
    {
      title: "Project 2 - Snapdeal Clone",
      img: "/projects/2.png",
      gLink: "https://github.com/himanshu1234567-sys?tab=repositories",
      lLink: "https://codesquarebrandistic.netlify.app/brandistic.html",
      des: "Created a Snapdeal clone (technologies – html, css, js, jquery, phpmyAdmin) "
    },
    {
      title: "Project 3 - ToDO List Project React js ",
      img: "/projects/todo.png",
      gLink: "https://github.com/himanshu1234567-sys/todolist",
      lLink: "https://todolist-pi-nine.vercel.app/",
      des: "Created a React js app with 'TODO List'  capabilities involves a few steps"
    },
    {
      title: "Project 4 - Youtube Video Streaming App ",
      img: "/projects/3.jpeg",
      gLink: "https://github.com/himanshu1234567-sys/assignment-appdeployer/tree/develop",
      // lLink: "https://codesquarebrandistic.netlify.app/brandistic.html",
      des: "Created a React Native app with video streaming capabilities involves a few steps"
    },
    {
      title: "Project 5 - Card swipe like a tinder app",
      img: "/projects/4.jpg",
      gLink: "https://github.com/himanshu1234567-sys/NativeAssignment",
      // lLink: "https://codesquarebrandistic.netlify.app/brandistic.html",
      des: "Created a React Native app with Card swipe Left or Right like Tinder"
    },

  ]);
  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="title">
          <h3>Featured Projects</h3>
          <a
            href="https://github.com/himanshu1234567-sys"
            target="_blank"
            className="btn"
            rel="noreferrer"
          >
            View All
          </a>
        </div>
        <div className="projects-wrapper">
          {projects.map((project, i) => (
            <div className="project" key={i}>
              <div className="img-container">
                <img src={project.img} alt={project.title} />
              </div>

              <div className="description">
                <h4>{project.title}</h4>
                <div className="links">
                  <a href={project.gLink} target="_blank" rel="noreferrer">
                    <i className="fab fa-github"></i>
                  </a>
                  <a href={project.lLink} target="_blank" rel="noreferrer">
                    <i className="fa fa-globe"></i>
                  </a>
                </div>
              </div>
              <p>
                {project.des}
              </p>
            </div>
          ))}

          <div className="mail " style={mystyle}>

          </div>
        </div>
        <div className="email_tag"style={{textAlign:'center'}}>
          <i className="fas fa-envelope">   </i>  <span>  himanshumehar123456@gmail.com  </span>
        </div></div>
    </section >
  );
}

export default Projects;
