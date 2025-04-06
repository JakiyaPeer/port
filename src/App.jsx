import React from "react";
import "./index.css";

const Navbar = () => {
  return (
    <header className="bg-blue-700 text-white p-5 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-extrabold">My Portfolio</h1>
        <nav>
          <ul className="flex space-x-6 text-lg">
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

const About = () => {
  return (
    <section id="about" className="container mx-auto p-10 flex flex-col md:flex-row items-center">
      <img src="https://tse1.mm.bing.net/th?id=OIP.ugIkG4qhgHTvQqhj20pJvwHaHa&pid=Api&P=0&h=180" alt="Me" className="rounded-full shadow-lg mb-6 md:mb-0" />
      <div className="ml-6">
        <h2 className="text-4xl font-bold text-blue-700">About Me</h2>
        <p className="mt-4 text-lg leading-relaxed">
          I'm a full-stack developer passionate about building scalable and efficient web applications. 
          My expertise spans front-end and back-end technologies, ensuring a seamless user experience.
        </p>
      </div>
    </section>
  );
};

const Skills = () => {
  const skills = ["HTML & CSS", "JavaScript", "React.js", "Node.js", "MongoDB", "Git & GitHub", "Tailwind CSS", "REST API"];

  return (
    <section id="skills" className="bg-gray-100 py-10">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-700">Technical Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
          {skills.map((skill, index) => (
            <div key={index} className="p-4 bg-white shadow-lg rounded-lg flex items-center justify-center">
              <span className="text-xl font-semibold">{skill}</span>
            </div>
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
    description: "A personal portfolio website built using HTML and CSS.",
    link: "https://landingpage12007.netlify.app/",
    github: "https://github.com/JakiyaPeer/guvi-task",
  },
 
  {
    title: "E-commerce store",
    image: "https://tse2.mm.bing.net/th?id=OIP.Jc4_fewy2DM4SNzlqWDRYAHaHa&pid=Api&P=0&h=180",
    description: "E-commerce store built with React.",
    link: "https://cosmic-sherbet-d6d676.netlify.app/",
    github: "https://github.com/JakiyaPeer/guvi",
  },
  {
    title: "Hotel booking app",
    image: "https://tse3.mm.bing.net/th?id=OIP.nmCCEhlY6LuGydFgyOMcTQHaHa&pid=Api&P=0&h=180",
    description: "Hotel booking app built with React.",
    link: "https://stellular-sopapillas-6ca2e6.netlify.app/",
    github: "https://github.com/JakiyaPeer/hotel",
  },
  {
    title: "Chat App",
    image: "https://tse1.mm.bing.net/th?id=OIP.iJTRe3br-uYaHjbmS9_NpAHaHa&pid=Api&P=0&h=180",
    description: "Chat App with real-time messaging using WebSocket technology.",
    link: "https://celadon-sfogliatella-d928ba.netlify.app/",
    github: "https://github.com/JakiyaPeer/chat",
  },
  {
    title: "Learning Management System",
    image: "https://tse2.mm.bing.net/th?id=OIP.gwXA7A-GIOUOtLVHHBvZ_gHaH_&pid=Api&P=0&h=180",
    description: "A full-stack Learning Management System (LMS) with user authentication.",
    link: "https://timely-salamander-84fc43.netlify.app/",
    frontend: "https://github.com/JakiyaPeer/guvi-frontend",
    backend: "https://github.com/JakiyaPeer/guvi-backend",
  },
  {
    title: "Blog Platform",
    image: "https://tse2.mm.bing.net/th?id=OIP.GEIe23iE18VingAVTaiFOwHaHa&pid=Api&P=0&h=180",
    description: "A simple and modern blog platform that lets users create, edit, and share posts with ease. Includes features like user authentication, commenting, and responsive design.",
    link: "https://celebrated-hotteok-16abe0.netlify.app/",
    frontend: "https://github.com/JakiyaPeer/one-blog",
    backend: "https://github.com/JakiyaPeer/two-blog",
  },
  {
    title: "Contact Book",
    image: "https://tse2.mm.bing.net/th?id=OIP.WhQlxJiBuUQDKUBLf68ZzAHaHa&pid=Api&P=0&h=180",
    description: "A minimal contact book app to add, view, and delete contact details like name, email, and phone number.",
    link: "https://prismatic-jelly-64d9ab.netlify.app/",
    frontend: "https://github.com/JakiyaPeer/contact-front",
    backend: "https://github.com/JakiyaPeer/contact-back",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="container mx-auto p-10">
      <h2 className="text-3xl font-bold text-blue-700 text-center">Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-5">
            <img src={project.image} alt={project.title} className="rounded-lg" />
            <h3 className="text-xl font-bold mt-4">{project.title}</h3>
            <p className="text-gray-600 mt-2">{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 mt-2 inline-block">Live Demo</a>
            <span> | </span>
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-blue-600 inline-block">GitHub</a>
          </div>
        ))}
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="bg-gray-200 py-10 text-center">
      <h2 className="text-3xl font-bold text-blue-700">Contact Me</h2>
      <p className="mt-4 text-lg">Feel free to reach out to me for any collaboration opportunities!</p>
      <div className="mt-6">
      <p>Email: <a href="mailto:jakiyapeer@gmail.com" class="text-blue-600">jakiyapeer@gmail.com</a></p>

        <p>LinkedIn: <a href="https://www.linkedin.com/in/jakiyasafiya/" target="_blank" rel="noopener noreferrer" className="text-blue-600">LinkedIn Profile</a></p>
        <p>GitHub: <a href="https://github.com/JakiyaPeer" target="_blank" rel="noopener noreferrer" className="text-blue-600">GitHub</a></p>
      </div>
    </section>
  );
};

const App = () => {
  return (
    <div>
      <Navbar />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
