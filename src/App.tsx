import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";



const CustomNavbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand"><a href="#introduction">Aayush Acharya</a></div>
      <div className="navbar-links">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
};


const Introduction = () => {
  return (
    <div className="introduction" id="introduction">
      <div className="container">
        <h1 className="first">Hello, I'm Aayush</h1>
        <p className="lead">
          Get to know me!
        </p>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <div className="about" id="about">
      <div className="about-container">
        <h2 className="mb-4">About Me</h2>
        <div className="underline"></div>
        <Container className="my-5">
          <Row>
            <Col >
              <div className="about-img-container">
                <img
                  src="/me.jpg"
                  alt="profile"
                  className="img-fluid"
                />
              </div>
            </Col>
            <Col >
              <div className="about-text-container">
                <p>
                  My name is Aayush Acharya. I'm currently doing my B.Tech in IIIT Hyderabad in the CSE Department.<br />
                  I'm passionate about hard work and I love going to the gym. It gives me a sense of discipline and helps me stay focused.<br />
                  I also like to play the guitar from time to time.<br />
                  I'm a quick learner and I'm always looking to learn new things.<br />
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

const projects = [
  {
    title: 'Shush - A C-Shell',
    description: 'A C-Shell with features like piping, redirection, history, etc.',
    image: 'src/shush.jpg',
  },
  {
    title: 'Global Happiness Visualisation',
    description: 'A report on the happiness index of countries around the world.',
    image: 'src/happy.jpg',
  },
  
  {
    title: 'Enhancing xv6',
    description: 'Adding scheduling algorithms and system calls to xv6.',
    image: 'src/xv6.jpg',
  },
  {
    title: 'Car Racing Game',
    description: 'A car racing game made using WebGL and ThreeJS.',
    image: 'src/racing.jpg',
  },
  {
    title: 'Jetpack Joyride Game',
    description: 'A clone of the game Jetpack Joyride made using OpenGL.',
    image: 'src/jetpack.jpg',
  },
  {
    title: 'E-Commerce Database',
    description: 'A MySQL schema for an e-commerce website.',
    image: 'src/ecom.jpg',
  },
  {
    title: 'Greddiit - A reddit clone',
    description: 'A clone of Reddit, made using MERN Stack.',
    image: 'src/reddit.jpg',
  },
  {
    title: 'Quidditch Party ',
    description: 'A Harry Potter themed short video made using blender.',
    image: 'src/hp.jpg',
  },
];

const Projects = () => {
  return (
    <div className="projects" id="projects">
      <div className="container">
        <h2 className="mb-4">Projects</h2>
        <div className="underline"></div>
        <div className="card-columns">
          {projects.map((project, index) => (
            <div key={index} className="card">
              {/* <img className="card-img-top" src={project.image} alt={project.title} /> */}
              <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Contacts: React.FC = () => {

  return (
      <div className="social-container" id="contact">
        <h2 className="title">Contact Me</h2>
        <div className="underline"></div>
        <div className="contact-card">
          <h2 className="contact-title">Personal/Academic Queries</h2>
          <p className="contact-text">
            Email to : 
            <a href="mailto:aayush.acharya@students.iiit.ac.in">
               aayush.acharya@students.iiit.ac.in
            </a>
          </p>
        </div>
        <div className="contact-card">
          <h2 className="contact-title">My Socials</h2>
          <a href="https://www.linkedin.com/in/aayush-acharya-707322235/"
              className="youtube social" target="_blank">
              <FontAwesomeIcon icon={faLinkedin} size="3x" />
            </a>
            <a href="https://github.com/aayush-ach"
              className="facebook social" target="_blank">
              <FontAwesomeIcon icon={faGithub} size="3x" />
            </a>
            <a href="https://www.instagram.com/_aayush.ach_"
              className="instagram social" target="_blank">
              <FontAwesomeIcon icon={faInstagram} size="3x" />
            </a>
        </div>
        
    </div>
  );
};



const App = () => {
  
  return (
    <div className="dark-theme">
      <div className="app">
        <div className="scroll-container">
          <CustomNavbar />
          <Introduction />
          <About />
          <Projects />
          <Contacts />
        </div>
    </div>
  </div>
  );
};

export default App;
