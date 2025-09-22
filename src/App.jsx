// src/App.jsx
import React from "react";
import profile from './assets/profile.png'
import project1 from './assets/project1.png'
import project2 from './assets/project2.png'
import project3 from './assets/project3.png'
import project4 from './assets/project4.png'
import html from './assets/html.png'
import css from './assets/css.png'
import react from './assets/react.png'
import tailwindlogo from './assets/tailwindlogo.png'
import javascript from './assets/javascript.png'
import bootstrap from './assets/bootstrap.png'
import webdevelopment from './assets/webdevelopment.jpg'
import frontend from './assets/frontend.png'
import github from './assets/github.png'
import jashan from './assets/jashan.pdf'

export default function App() {
  const projects = [
    {
      title: "Password Generator",
      desc: "A password generator app built with React that creates strong, random, and customizable passwords.",
      img: project1,
      link: "https://github.com/sanghajashan011-cell/Passwordgenerator.git",
    },
    {
      title: "Currency Convertor",
      desc: "A currency converter app that instantly converts amounts between different currencies using real-time exchange rates.",
      img: project2,
      link: "https://github.com/sanghajashan011-cell/Currency-Convertor.git",
    },
    {
      title: "Background Changer",
      desc: "A background changer app that lets users switch the screen’s background to different colors or images.",
      img: project3,
      link: "https://github.com/sanghajashan011-cell/Background-color-changer.git",
    },
    {
      title:"API Book Finder",
      desc:"An API-based Book Finder app that helps users search and explore books by title, author, or keyword",
      img: project4,
      link:"https://github.com/sanghajashan011-cell/API-Book-Finder.git",
    }
  ];

  return (
    <div className="bg-gradient-to-b from-gray-950 via-purple-900 to-cyan-900 text-white min-h-screen font-sans">
      {/* Navbar */}
      <nav className="max-w-6xl mx-auto flex justify-between items-center py-6 px-6 sticky top-0 bg-gray-950/70 backdrop-blur-md z-50">
        <div className="font-playfair italic text-2xl text-cyan-500 "> 
           JASHANJOT KAUR
        </div>
        <div className="hidden md:flex gap-8 text-gray-300 font-medium">
          <a href="#about" className="hover:text-cyan-400  transition">About Me</a>
          <a href="#skills" className="hover:text-cyan-400 transition">Skills</a>
          <a href="#services" className="hover:text-cyan-400 transition">Services</a>
          <a href="#projects" className="hover:text-cyan-400 transition">Projects</a>
          <a href="#contact" className="hover:text-cyan-400 transition">Contact Me</a>
        </div>

          <a href="#contact">
         <div className="nav-connect rounded-lg  p-2 bg-cyan-400  hover:scale-105 transform transition  "  >Connect With Me</div>
          </a>
              </nav>

      {/* Hero */}
      <header className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 px-6 py-20">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            Hi, I’m <span className="text-cyan-400">JashanJOT kaur</span> <br /> Web Developer
          </h1>
          <p className="text-gray-300 text-lg mb-8">
            I design and build responsive, modern websites and applications with clean code and user-focused design.
          </p>
          <a
            href="#contact"
             className="bg-cyan-400 text-gray-900 font-semibold px-6 py-3 rounded-xl shadow-lg hover:bg-cyan-300 transition"
          >
            Contact
          </a> 
          <a
            href={jashan}
            className="mx-3 bg-cyan-400 text-gray-900 font-semibold px-6 py-3 rounded-xl shadow-lg hover:bg-cyan-300 transition"
          >
            Download CV
          </a> 
          
  
        </div>
        <div className="flex-1 flex justify-center">
          <img
            src={profile}
            alt="Profile"
            className="rounded-full w-64 h-64 object-cover border-4 border-cyan-400 shadow-lg"
          />
        </div>
      </header>

      {/* About */}
      <section id="about" className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
    <h2 className="text-4xl font-bold text-cyan-400">About Me</h2>
    </div>
        
        {/* <div className="bg-gray-800/40 border border-gray-700 rounded-xl p-8"> */}
        <div className="about-para">
          <p className="text-gray-300 mb-6">
          I’m passionate about building modern web applications that combine clean design with smooth functionality. My goal is to craft user-friendly experiences that not only look appealing but also perform seamlessly across devices.
          </p>
          <p>During my 6-month internship at Solitaire Infosys, I had the opportunity to work on real-world projects where I gained hands-on experience with React, TailwindCSS, and full-stack development practices. I collaborated with a team of developers, contributed to building responsive UIs, optimized performance, and improved overall user experience in client projects.</p>
          <p></p>

        </div>
      </section>
      
      {/* Skills Section */}
<section id="skills" className="max-w-6xl mx-auto px-6 py-20">
  <div className="text-center mb-12">
    
    <h2 className="text-4xl font-bold text-cyan-400">My Skills</h2>
    <p className="text-gray-300 mt-4">
      Technologies I work with to build modern, scalable, and responsive applications.
    </p>
  </div>

  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
   
   {/* html */}
        <div className="bg-gray-800/50 hover:bg-cyan-400  border border-gray-700 rounded-xl p-6 text-center hover:scale-105 transition duration-300">
    <div className="flex justify-center">
    <img src={html} alt="html" className="w-20 h-20 object-cover border-4 border-cyan-400 shadow-lg " />
    </div>
      <h3 className="text-2xl font-semibold text-blue-400 mb-4">HTML</h3>
      
        <div className="w-full bg-gray-700 h-2 rounded-lg overflow-hidden">
                <div className="bg-cyan-400 h-2" style={{ width: "90%"}}></div>
              </div>
    </div>


    {/* CSS */}
    <div className="bg-gray-800/50 hover:bg-cyan-400 border border-gray-700 rounded-xl p-6 text-center hover:scale-105 transition duration-300">
    <div className="flex justify-center">
    <img src={css} alt="CSS" className="w-20 h-20 object-cover border-4 border-cyan-400 shadow-lg " />
    </div>
      <h3 className="text-2xl font-semibold text-blue-400 mb-4">CSS3</h3>
     <div className="w-full bg-gray-700 h-2 rounded-lg overflow-hidden">
                <div className="bg-cyan-400 h-2" style={{ width: "80%"}}></div>
              </div>
    </div>

    {/* JavaScript */}
    <div className="bg-gray-800/50 hover:bg-cyan-400 border border-gray-700 rounded-xl p-6 text-center hover:scale-105 transition duration-300">
     <div className="flex justify-center">
    <img src={javascript} alt="javascript" className="w-20 h-20 object-cover border-4 border-cyan-400 shadow-lg " />
    </div>
      <h3 className="text-2xl font-semibold text-yellow-400 mb-4">JavaScript</h3>
     <div className="w-full bg-gray-700 h-2 rounded-lg overflow-hidden">
                <div className="bg-cyan-400 h-2" style={{ width: "80%"}}></div>
              </div>
    </div>

    {/* Bootstrap */}
    <div className="bg-gray-800/50 hover:bg-cyan-400 border border-gray-700 rounded-xl p-6 text-center hover:scale-105 transition duration-300">
     <div className="flex justify-center">
    <img src={bootstrap} alt="bootstrap" className="w-20 h-20 object-cover border-4 border-cyan-400 shadow-lg " />
    </div>
      <h3 className="text-2xl font-semibold text-purple-400 mb-4">Bootstrap</h3>
     <div className="w-full bg-gray-700 h-2 rounded-lg overflow-hidden">
                <div className="bg-cyan-400 h-2" style={{ width: "90%"}}></div>
              </div>
    </div>

    {/* React */}
    <div className="bg-gray-800/50 hover:bg-cyan-400 border border-gray-700 rounded-xl p-6 text-center hover:scale-105 transition duration-300">
     <div className="flex justify-center">
    <img src={react} alt="react" className="w-20 h-20 object-cover border-4 border-cyan-400 shadow-lg " />
    </div>
      <h3 className="text-2xl font-semibold text-cyan-400 mb-4">React.js</h3>
      <div className="w-full bg-gray-700 h-2 rounded-lg overflow-hidden">
                <div className="bg-cyan-400 h-2" style={{ width: "80%"}}></div>
              </div>
    </div>

    {/* Tailwind */}
    <div className="bg-gray-800/50 hover:bg-cyan-400 border border-gray-700 rounded-xl p-6 text-center hover:scale-105 transition duration-300">
     <div className="flex justify-center">
    <img src={tailwindlogo} alt="tailwindlogo" className="w-20 h-20 object-cover border-4 border-cyan-400 shadow-lg " />
    </div>
      <h3 className="text-2xl font-semibold text-teal-400 mb-4">Tailwind CSS</h3>
      <div className="w-full bg-gray-700 h-2 rounded-lg overflow-hidden">
                <div className="bg-cyan-400 h-2" style={{ width: "90%"}}></div>
              </div>
    </div>
  </div>
</section>

{/* services*/}

 
    <section id="services" className="max-w-6xl mx-auto px-6 py-2">
      <div className=" text-center mb-12">
        {/* Heading */}
        <h2 className="text-3xl font-bold mb-8">
         <span className="text-cyan-400"> My Services</span>
        </h2>

        {/* Services Cards */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> */}
        <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6">

          
          {/* Web Development Card */}
          <div className="bg-gray-800/50 border-gray-700 rounded-lg p-6 shadow-md hover:scale-105 transition duration-300">
           <div className="flex justify-center">
          <img src={webdevelopment} alt="webdevelopment" className="w-full  h-48 object-cover" />
          </div>
          <div className="p-6"></div>
            <h3 className="text-xl font-semibold text-orange-400 mb-3">
              Web Development
            </h3>
            <p className="text-gray-300 text-sm">
              Creating responsive, functional, and modern websites using 
              HTML, CSS, JavaScript, React, and Tailwind CSS.
            </p>
          </div>

          {/* Frontend Development Card */}
          <div className="bg-gray-800/50 border-gray-700 rounded-lg p-6 shadow-md hover:scale-105 transition duration-300">
          <img src={frontend} alt="frontend" className="w-full  h-48 object-cover" />
          <div className="p-6">
            </div>
            <h3 className="text-xl font-semibold text-green-400 mb-3">
              Frontend Development
            </h3>
            <p className="text-gray-300 text-sm">
              Designing and coding clean, user-friendly, and interactive 
              interfaces to deliver the best user experience.
            </p>
          </div>

        </div>
      </div>
    </section>

 {/* Projects */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-20">
          <div className="text-center mb-12">
    <h2 className="text-4xl font-bold text-cyan-400">My Latest Work</h2>
    </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <article
              key={i}
              className="bg-gray-800/40 border border-gray-700 rounded-xl overflow-hidden hover:shadow-lg hover:scale-105 transform transition"
            >
              <img src={p.img} alt={p.title} className="w-full  h-48 object-cover" />
              <div className="p-6">
                <h3 className="font-semibold text-xl mb-2">{p.title}</h3>
                <p className="text-gray-400 mb-4">{p.desc}</p>
            <a href={p.link} className="text-cyan-400 font-medium hover:underline" > View project → </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-6xl mx-auto px-6 py-20">
          <div className="text-center mb-12">
    <h2 className="text-4xl font-bold text-cyan-400">About Me</h2>
    </div>
        
        <div className="bg-gray-800/40 border border-gray-700 rounded-xl p-8">
          <p className="text-gray-300 mb-6">
            Want to work together? Send me a message and I’ll get back to you soon.
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Replace with real form handling.");
            }}
            className="space-y-4"
          >
            <div className="grid md:grid-cols-2 gap-4">
              <input
                placeholder=" Enter Your name"
              required
              className="px-4 py-3 rounded-lg border border-gray-700 bg-transparent text-white focus:ring-2 focus:ring-cyan-400 outline-none"
              />
              <input
                placeholder="Your email"
                type="email"
                required
                className="px-4 py-3 rounded-lg border border-gray-700 bg-transparent text-white focus:ring-2 focus:ring-cyan-400 outline-none"
              />
            </div>
            <textarea
              placeholder="Message"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-transparent text-white focus:ring-2 focus:ring-cyan-400 outline-none"
              rows={5}
            />
            <button
              type="submit"
              className="w-full bg-cyan-400 text-gray-900 font-semibold px-6 py-3 rounded-xl hover:bg-cyan-300">
            
              Send message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-white text-center py-6 border-t border-gray-800 flex justify-center">
        © {new Date().getFullYear()}<span className="text-cyan-400">

          Jashanjot kaur</span>. All rights reserved.
        <a 
        href="https://github.com/sanghajashan011-cell">
        <img src={github} alt="github"  className="w-5 mx-9  h-5 object-cover" />

        </a>
      </footer>
    </div>
  );
}
