import './App.css';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import HomePage from './components/HomePage';
import Nav from './components/Nav';
import ProjectsPage from './components/ProjectsPage';
import ToggleBar from './components/ToggleBar';

function App() {
  return (
    <div className="App">
      <ToggleBar />
      <Nav />
      <HomePage />
      <AboutPage />
      <ProjectsPage />
      <ContactPage />
    </div>
  );
}

export default App;
