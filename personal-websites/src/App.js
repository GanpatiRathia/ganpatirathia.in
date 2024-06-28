import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <section id="about">
          <h2>About Me</h2>
          <p>This is the about section.</p>
        </section>
        <section id="projects">
          <h2>Projects</h2>
          <p>This is the projects section.</p>
        </section>
        <section id="contact">
          <h2>Contact</h2>
          <p>This is the contact section.</p>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
