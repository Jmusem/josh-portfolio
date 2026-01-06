import React, { useRef, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { motion } from 'framer-motion';
import { ReactTyped as Typed } from 'react-typed';

// === Parallax Hook ===
function useParallax(ref, strength = 25) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onMove = (e) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      el.style.transform = `rotateY(${x * strength}deg) rotateX(${-y * strength}deg) scale(1.03)`;
    };

    const onLeave = () => {
      el.style.transform = 'rotateY(0deg) rotateX(0deg) scale(1)';
    };

    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);
    return () => {
      el.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseleave', onLeave);
    };
  }, [ref, strength]);
}

// === Navbar ===
// === Navbar ===
function Navbar() {
  const navItems = ['Home', 'About', 'Projects', 'Contributions', 'Contact'];

  return (
    <motion.nav
      className="navbar navbar-dark navbar-custom px-4 py-3 d-none d-lg-flex"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, type: 'spring' }}
    >
      <a className="navbar-brand glow-text" href="#home">
        Joshua Musembi
      </a>

      <ul className="navbar-nav ms-auto d-flex flex-row">
        {navItems.map((item, i) => (
          <motion.li
            key={i}
            className="nav-item mx-3"
            whileHover={{ scale: 1.1, textShadow: '0 0 8px var(--neon-cyan)' }}
          >
            <a className="nav-link nav-hover" href={`#${item.toLowerCase()}`}>
              {item}
            </a>
          </motion.li>
        ))}
      </ul>
    </motion.nav>
  );
}

// === Hero Section ===
function Hero() {
  const ref = useRef();
  useParallax(ref, 15);

  return (
    <section
      id="home"
      className="section hero d-flex flex-column align-items-center justify-content-center text-center"
    >
      <motion.div
        className="hero-text"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
      >
        <h1 className="glow-text display-4 mb-3">
          Hi, I'm <span className="neon-accent">Joshua Musembi</span>
        </h1>

        <Typed
          strings={[
            'Fullstack Developer 💻',
            'UI/UX Enthusiast 🎨',
            'Problem Solver ⚙️',
            'Tech Innovator 🚀',
          ]}
          typeSpeed={70}
          backSpeed={40}
          loop
          className="typed-text"
        />

        <p className="lead mt-3 text-light opacity-75">
          I design and build responsive, interactive, and scalable digital experiences.
        </p>

        <div className="cta-group mt-4 d-flex flex-column flex-sm-row justify-content-center gap-3">
          <motion.a
            href="#projects"
            className="cta-btn"
            whileHover={{ scale: 1.08, boxShadow: '0 0 15px var(--neon-cyan)' }}
          >
            View My Work
          </motion.a>

          <motion.a
            href={`${process.env.PUBLIC_URL}/Mutisya_Joshua_Musembi_Software_Developer_CV.pdf`}
            download="Mutisya_Joshua_Musembi_Software_Developer_CV.pdf"
            className="secondary-btn"
            whileHover={{
              scale: 1.08,
              color: '#fff',
              boxShadow: '0 0 15px var(--neon-pink)',
            }}
            target="_blank"
            rel="noopener noreferrer"
          >
            Download CV
          </motion.a>
        </div>
      </motion.div>

      <motion.div
        ref={ref}
        className="floating-avatar mt-5"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        whileHover={{ scale: 1.05 }}
      >
        <div className="avatar-border">
          <img src="/profile.jpg" alt="Joshua Musembi" className="avatar-img" />
        </div>
      </motion.div>
    </section>
  );
}

// === About Section ===
function About() {
  return (
    <section id="about" className="section container text-center">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        About Me
      </motion.h2>
      <motion.p
        className="subtitle mt-3"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        I’m a creative software developer with a strong background in frontend and backend
        technologies. My focus is creating beautiful, functional, and efficient products that make a
        difference.
      </motion.p>

      <div className="skills mt-4 flex-wrap d-flex justify-content-center gap-2">
        {['React', 'Flask', 'Node.js', 'Django', 'SQL', 'UI/UX', 'JavaScript', 'Python'].map(
          (skill, i) => (
            <motion.span
              key={i}
              className="skill-pill"
              whileHover={{ scale: 1.15, textShadow: '0 0 8px var(--neon-cyan)' }}
            >
              {skill}
            </motion.span>
          )
        )}
      </div>
    </section>
  );
}

// === Projects Section ===
// === Projects Section ===
// === Projects Section ===
function Projects({ projects }) {
  return (
    <section id="projects" className="section container">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Featured Projects
      </motion.h2>

      <motion.div
        className="projects-grid mt-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {projects.map((project, i) => (
          <motion.div
            key={i}
            className="project-card glass-card"
            whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(0,255,150,0.3)' }}
          >
            <div className="project-thumb">
              <h5 className="fw-bold text-light">{project.name}</h5>
            </div>
            <p className="project-desc text-light">{project.description}</p>
            <div className="d-flex justify-content-between mt-3">
              {project.homepage && (
                <a
                  href={project.homepage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-light btn-sm"
                >
                  Live
                </a>
              )}
              <a
                href={project.html_url || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-neon btn-sm"
              >
                GitHub
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

// === Contributions Section ===
function Contributions() {
  return (
    <section id="contributions" className="section container text-center mt-5">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Contributions
      </motion.h2>
      <motion.p
        className="subtitle mt-3"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        I have contributed to the following projects: <br />
        <strong>Gokijany Website, Microsoft Dynamics Business Dynamics Central Project for Fundilima (Jkuat Staff Sacco), Kentours and Ruai Endelea Sacco</strong> <br />
        I am quite efficient in all software solutions.
      </motion.p>
    </section>
  );
}

// === Contact Section ===
function Contact() {
  return (
    <section id="contact" className="section container text-center">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Get In Touch
      </motion.h2>
      <motion.div
        className="contact-details mt-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <p className="text-light">
          <strong>Email:</strong> joshuamusembi499@gmail.com
        </p>
        <p className="text-light">
          <strong>Phone:</strong> 0714509575 / 0781124576
        </p>
      </motion.div>
    </section>
  );
}

// === Footer ===
function Footer() {
  return (
    <footer className="footer text-center py-4">
      <p className="m-0 text-light">
        © {new Date().getFullYear()} <strong>Joshua Musembi</strong>
      </p>
    </footer>
  );
}

// === Main App ===
export default function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users/Jmusem/repos')
      .then((res) => res.json())
      .then((data) => {
        const githubProjects = data.filter(
          (repo) =>
            !repo.fork &&
            ![
              'CAT1',
              'assembly-assignment',
              'project_c',
              'espace-fragrance',
              'orders-system',
              'pethealth',
              'KENTOURS-APP',
              'Point-of-Sale-System',
            ].includes(repo.name)
        );

        const manualProjects = [
          {
            name: 'Invasion Website',
            description: 'Revival Invasion Movement official website',
            homepage: 'https://revivalinvasionmovement.org',
           
          },
          {
            name: 'Fundilima App',
            description:
              'A mobile app built using Angular and Ionic for JKUAT STAFF SACCO to enable mobile transactions Manage Sacco Member Transactions(demo - physical). Github repo is private,',
           
          },
          {
            name: 'RUAI SACCO App',
            description:
              'A mobile app built using Angular and Ionic for RUAI SACCO to enable mobile transactions  Manage Sacco Member Transactions (demo - physical). Github repo is private, ',
            
          },

          {
            name: 'KENTOURS SACCO APP',
            description:
              'A mobile app built using Angular and Ionic for KENTOURS SACCO to enable mobile transactions  Manage Sacco Member Transactions (demo - physical). Github repo is private, ',
            
          },
        ];

        setProjects([...githubProjects, ...manualProjects]);
      })
      .catch((err) => console.error('Error fetching GitHub repos:', err));
  }, []);

  return (
    <div className="app-container">
      <Navbar />
      <Hero />
      <About />
      <Projects projects={projects} />
      <Contributions />
      <Contact />
      <Footer />
    </div>
  );
}
