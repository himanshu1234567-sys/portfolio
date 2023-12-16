import React, { useState } from "react";

function ServicesExperience() {
  const MAX_LENGTH = 250;
  const [services] = useState([
    {
      icon: "fa-paintbrush",
      title: "Front- End Design",
      desc: "As a Front-End Developer adept in HTML, CSS, and JavaScript, I specialize in crafting engaging user interfaces and seamless interactions. With a solid foundation in web technologies, I bring expertise in building responsive, visually appealing layouts and implementing dynamic functionalities. My proficiency extends to harnessing the power of React.js to create modular, reusable components, enhancing performance and maintainability.  Moreover, my skill set includes leveraging React Native to extend these capabilities to mobile platforms, developing cross-platform applications that deliver native-like experiences. Whether it's transforming design concepts into code, optimizing UI/UX for performance and accessibility, or integrating APIs to build feature-rich applications, I thrive on the continuous evolution of front-end technologies to deliver compelling and intuitive user experiences.",
      active: false,
    },
    // {
      //   icon: "fa-pen-to-square",
      //   title: "Product Design",
      //   desc: "Crafting seamless user experiences through meticulous code – where functionality meets elegance. As a developer, I merge innovation with practicality to engineer products that not only work flawlessly but delight users at every interaction. Let's build technology that speaks the language of design excellence.",
    
      //   active: true,
      // },
      {
        icon: "fa-ruler",
        title: "Back-End",
        desc: "As a backend developer deeply rooted in Java, I possess a strong command over the language's intricacies, leveraging its power to build robust and scalable server-side applications. My expertise extends across the entire backend landscape, from architecting efficient databases using frameworks like Hibernate and JPA to crafting resilient RESTful APIs with Spring Boot. Proficient in optimizing code for performance and scalability, I thrive in designing and implementing complex systems, ensuring seamless interactions between front-end and server layers. With a keen eye for security and a passion for continuous improvement, I am dedicated to creating agile and reliable backend solutions that power the heart of dynamic, high-performance applications.",
        active: true,
      },
    ]);
  return (
    <section className="services-experience">
      <div className="container">
        <div className="services" id="services">
          {services.map((service, i) => (
            <div
              key={i}
              className={`service ${service.active ? "active" : ""}`}
            >
              <i className={`fas ${service.icon}`} />
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              {/* <button className="btn">Know More</button> */}
            </div>
          ))}
        </div>
        <div className="experiences" id="experiences">
          <div className="experience">
            <h3>1</h3>
            <p>Year Experience</p>
          </div>
          <div className="portfolios">

            <div className="portfolio">
              <h4>01</h4>
              <p>Years Experience</p>
            </div>
            <div className="portfolio">
              <h4>4+</h4>
              <p>Completed Projects</p>
            </div>
            <div className="portfolio">
              <h4>2</h4>
              <p>Achievements</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesExperience;
