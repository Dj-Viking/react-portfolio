import React, {useState} from 'react';
import Header from './components/Header.js';
import Home from './components/Home.js';
import About from './components/About.js';
import Projects from './components/Projects.js';
import Resume from './components/Resume.js';
import Footer from './components/Footer.js';
import Contact from './components/Contact.js';
import './index.css';

function App() {
  const [currentTab, setTab] = useState('Home');
  const renderSection = () => {
    switch (currentTab) {
      case 'About':
        return <About />;
      case 'Projects':
        return <Projects />;
      case 'Resume':
        return <Resume />;
      case 'Contact':
        return <Contact />;
      default:
        return <Home />;
    }
  }

  return (

    <div className="App">
      <Header 
        currentTab={currentTab}
        setTab={setTab}
      />
      <main>
        {renderSection(currentTab)}
      </main>
      <>
        <Footer />
      </>
    </div>
  );
}

export default App;
