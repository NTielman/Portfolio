import './App.scss';
import Nav from './components/navMenu/Nav';
import ToggleBar from './components/toggleBar/ToggleBar';
import HomePage from './components/homePage/HomePage';
import AboutPage from './components/aboutPage/AboutPage';
import ProjectsPage from './components/projectsPage/ProjectsPage';
import ContactPage from './components/contactPage/ContactPage';

function App() {
  return (
    <div className="App">
      <Nav />
      <ToggleBar />
      <HomePage />
      <AboutPage />
      <ProjectsPage />
      <ContactPage />
    </div>
  );
}

export default App;