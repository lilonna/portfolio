import React from 'react';
import  Hey from'../assets/Hey.gif'


const Home = () => {
  return (
    <section
      id="home"
      className="d-flex align-items-center justify-content-center text-center min-vh-100"
      style={{
        background: 'linear-gradient(135deg, #e0bbff 0%, #fcd5ce 100%)',
      }}
    >
      <div className="container">
       <h2 className="display-4 fw-bold text-dark mb-3">
  Hi, I'm <span className="text-primary">Lidiya Haile</span>{' '}
  <img 
    src={Hey} 
    alt="Hey waving" 
    style={{ 
      width: '85px',       
      marginLeft: '0px', 
      verticalAlign: 'bottom'  
    }} 
  />
</h2>

       
        <p className="lead text-secondary mb-4">
          A passionate web developer crafting responsive and engaging user experiences with <strong>React.js</strong> & modern web tools.
          

        </p>
        <a href="projects" className="btn btn-primary btn-lg px-4">
          View My Work
        </a>
      </div>
    </section>
  );
};

export default Home;
