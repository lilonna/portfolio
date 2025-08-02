import React from 'react';
import { FaHome, FaUser, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top shadow">
      <div className="container">
        <a className="navbar-brand fw-bold text-warning" href="/">
          <h2>Lidiya Haile</h2>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul className="navbar-nav">
  <li className="nav-item d-flex align-items-center me-4">
    <FaHome className="me-1" />
    <a className="nav-link active" aria-current="page" href="/">Home</a>
  </li>
  <li className="nav-item d-flex align-items-center me-4">
    <FaUser className="me-1" />
    <a className="nav-link" href="aboutme">About Me</a>
  </li>
  <li className="nav-item d-flex align-items-center me-4">
    <FaProjectDiagram className="me-1" />
    <a className="nav-link" href="projects">Projects</a>
  </li>
  <li className="nav-item d-flex align-items-center">
    <FaEnvelope className="me-1" />
    <a className="nav-link" href="contact">Contact Me</a>
  </li>
</ul>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
