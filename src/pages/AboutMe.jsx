import React from 'react';

const AboutMe = () => {
  return (
    <section
      id="about-me"
      className="d-flex align-items-center justify-content-center text-center min-vh-100"
      style={{
        background: 'linear-gradient(135deg, #e0bbff 0%, #fcd5ce 100%)',
      }}
    >
      <div className="container px-4">
        <h1 className="display-4 fw-bold text-primary mb-4">About Me</h1>
        <p className="lead text-dark fw-semibold mx-auto" style={{ maxWidth: '700px', lineHeight: '1.8' }}>
          Hello! I’m a passionate <strong>Full-Stack web developer</strong> focused on building beautiful and responsive websites using modern tools like <strong>React</strong>, Tailwind CSS, and Vite.
          I love learning new technologies, solving real-world problems, and turning ideas into reality with code.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
