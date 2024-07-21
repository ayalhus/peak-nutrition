import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import React from 'react';
import Hero from './components/pageContainer/header';
import Service from './components/pageContainer/service';
import About from './components/pageContainer/about';
import Commitment from './components/pageContainer/commitment';
import Contact from './components/pageContainer/contact';
import Footer from './components/pageContainer/footer';
const App = () => {
  return (
    <div className="App">
      <Hero />
      <Service />
      <About />
      <Commitment />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;





