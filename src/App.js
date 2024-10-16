import './App.css';
import { Header } from './components/header';
import { LandingPage } from './components/LandingPage';
import { ProjectSection } from './components/Project'
import { ContactMe } from './components/ContactMe'
import { Footer } from './components/Footer';
import { useRef } from 'react'

function App() {
  const projectsRef = useRef(null)  // for navigation
  const contactRef = useRef(null)   // for navigation

  const scrollToSection = (section) => {
    section.current.scrollIntoView({ behavior: 'smooth' })  //may iba't ibang method like scrollIntoView, focus etc 
  }

  return (
    <div className="App">
        <Header projectsRef={projectsRef} contactRef={contactRef} scrollToSection={scrollToSection}/>
        <LandingPage/>
        <ProjectSection ref={projectsRef} id="projects" />
        <ContactMe ref={contactRef} id="contact"/>
        <Footer/>
    </div>
  );
}

export default App;
