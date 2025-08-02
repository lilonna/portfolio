import React from 'react';

const Contact = () => {
  return (
    <section
      id="contact"
      className="d-flex align-items-center justify-content-center text-center min-vh-100"
      style={{
        background: 'linear-gradient(135deg, #e0bbff 0%, #fcd5ce 100%)',
      }}
    >
      <div className="container px-4">
        <h1 className="display-4 fw-bold text-primary mb-5">Contact Me</h1>
        <div className="text-dark fs-5">
          <p>
            <strong>Email:</strong> <a href="mailto:lidiyahaile60@gmail.com" className="text-decoration-none text-primary">lidiyahaile60@gmail.com</a>
          </p>
          <p>
            <strong>Phone:</strong> <a href="tel:+251933146431" className="text-decoration-none text-primary">+251 933146431</a>
          </p>
          <p>
            <strong>LinkedIn:</strong>{' '}
            <a href="https://www.linkedin.com/in/lidiya-haile-32b837199/" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-primary">
              linkedin.com/in/lidiya-haile-32b837199/
            </a>
          </p>
          <p>
            <strong>GitHub:</strong>{' '}
            <a href="https://github.com/lilonna" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-primary">
              github.com/lilonna
            </a>
          </p>
          <p>
            <strong>Location:</strong> Hawassa, Ethiopia
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
