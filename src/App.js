import "./App.css";
import Home from "./pages/Home/Home";
import Container from "./Components/Container/Container";
import About from "./pages/About/About";
import Navbar from "./Components/Navbar/Navbar";
import Skills from "./pages/Skills/Skills";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";
function App() {
  return (
    <div className='App'>
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
