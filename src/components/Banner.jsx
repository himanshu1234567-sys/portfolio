/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function Banner() {
  return (
    <section className="banner" id="banner">
      <div className="container">
        <div className="banner-wrapper">
          <div className="banner-img">
            <img src="/person.png" alt="img" />
          </div>
          <div className="banner-content">
            <h3>Web Developer</h3>
            <p>
              I'm a passionate web developer dedicated to creating seamless digital experiences. With expertise in front-end and back-end technologies, I specialize in building responsive, user-friendly websites and applications that marry creativity with functionality. Let's bring your ideas to life in the digital world!            </p>
            <a className="btn" href="#projects">
              About Me
            </a>
            {/* <a href="path_to_file" download="proposed_file_name">Download</a> */}
            {/* <a className="btn" download={'file:///C:/Users/Asus/Downloads/Himanshu%20mehar%20Resume.pdf'} href="#resume">
              Resume
            </a> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
