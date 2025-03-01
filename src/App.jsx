import React from "react";
import "./index.css";

const Navbar = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">My Portfolio</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#about" className="hover:underline">About</a></li>
            <li><a href="#skills" className="hover:underline">Skills</a></li>
            <li><a href="#projects" className="hover:underline">Projects</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

const Hero = () => {
  return (
    <section className="bg-cover bg-center h-96 flex items-center justify-center text-white" 
      style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?technology')" }}>
      <div className="text-center bg-black bg-opacity-50 p-6 rounded-lg">
        <h2 className="text-4xl font-bold">Hi, I'm JakiyaSafiya</h2>
        <p className="text-lg mt-2">full-stack developer fresher | Passionate about coding</p>
        <a href="c:\Users\jakiy\Downloads\Resume 2025  (1).pdf" download className="mt-4 inline-block bg-blue-500 px-4 py-2 rounded-lg text-white font-semibold">
          Download Resume
        </a>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="container mx-auto p-6 text-center">
      <h2 className="text-3xl font-bold text-blue-600">About Me</h2>
      <p className="mt-4 text-lg">
        I am a passionate web developer with a strong foundation in front-end and back-end technologies. 
        My goal is to build high-performing and user-friendly websites.
      </p>
    </section>
  );
};

const Skills = () => {
  const skills = ["HTML & CSS", "JavaScript", "React.js", "Node.js", "MongoDB", "Git & GitHub", "Tailwind CSS", "REST API"];

  return (
    <section id="skills" className="bg-gray-200 py-10">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-600">Technical Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
          {skills.map((skill, index) => (
            <div key={index} className="p-4 bg-white shadow-lg rounded-lg">{skill}</div>
          ))}
        </div>
      </div>
    </section>
  );
};

const projects = [
  {
    title: "Landing page website",
    image: "https://tse2.mm.bing.net/th?id=OIP.jGZVm_sd8r7LC3cGG0i9NQHaHa&pid=Api&P=0&h=180",
    description: "A personal portfolio website built using HTML and  CSS.",
    link: "https://landingpage12007.netlify.app/",
  },
  {
    title: "Landing Page",
    image: "https://tse4.mm.bing.net/th?id=OIP.R8FKDd6XrvYIwbhVuGneGgHaH5&pid=Api&P=0&h=180",
    description: "website built using HTML and TailwindCSS.",
    link: "https://landingpage678.netlify.app/",
  },
  {
    title: "E-commerce store",
    image: "https://tse2.mm.bing.net/th?id=OIP.Jc4_fewy2DM4SNzlqWDRYAHaHa&pid=Api&P=0&h=180",
    description: "E-commerce store, built with React, provides a seamless online shopping .",
    link: "https://cosmic-sherbet-d6d676.netlify.app/",
  },
  {
    title: "Hotel booking app",
    image: "https://tse3.mm.bing.net/th?id=OIP.nmCCEhlY6LuGydFgyOMcTQHaHa&pid=Api&P=0&h=180",
    description: "Hotel booking app, built with React, provides a seamless Hotel booking app .",
    link: "https://stellular-sopapillas-6ca2e6.netlify.app/",
  },
  {
    title: "Chat App",
    image: "https://tse1.mm.bing.net/th?id=OIP.iJTRe3br-uYaHjbmS9_NpAHaHa&pid=Api&P=0&h=180",
    description: "Chat App, built with React and Node.js, provides a seamless real-time messaging experience using WebSocket technology.",
    link: "https://celadon-sfogliatella-d928ba.netlify.app/",
  },
  {
    title: "Learning Management System",
    image: "https://tse2.mm.bing.net/th?id=OIP.gwXA7A-GIOUOtLVHHBvZ_gHaH_&pid=Api&P=0&h=180",
    description: "A full-stack Learning Management System (LMS) built with React and Node.js, featuring real-time collaboration, course management, and user authentication.",
    link: "https://timely-salamander-84fc43.netlify.app/",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="container mx-auto p-6">
      <h2 className="text-3xl font-bold text-blue-600 text-center">Projects</h2>
      <div className="grid md:grid-cols-3 gap-6 mt-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-4">
            <img src={project.image} alt={project.title} className="rounded-lg" />
            <h3 className="text-xl font-bold mt-4">{project.title}</h3>
            <p className="text-sm text-gray-600 mt-2">{project.description}</p>
            <a href={project.link} className="text-blue-600 mt-2 inline-block">View Project</a>
            
          </div>
        ))}
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="bg-gray-200 py-10">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-600">Contact Me</h2>
        <p className="mt-4 text-lg">
          Feel free to reach out to me for any web development projects or collaborations!
        </p>
        <div className="mt-6">
          <p>Email: <a href="jakiyapeer@gmail.com1" className="text-blue-600">example@gmail.com</a></p>
          <p>LinkedIn: <a href="https://www.linkedin.com/in/jakiyasafiya/" className="text-blue-600">linkedin.com/in/yourprofile</a></p>
          <p>GitHub: <a href="https://github.com/JakiyaPeer" className="text-blue-600">github.com/yourgithub</a></p>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white text-center p-4 mt-6">
      <p>&copy; 2025 Jakiya asafiya | All Rights Reserved</p>
    </footer>
  );
};

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
