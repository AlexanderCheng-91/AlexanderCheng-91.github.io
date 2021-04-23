import './App.css';
import Navbar1 from "./components/NavBar1"
import LandingPage from "./components/LandingPage"
import AboutMe from "./components/AboutMe"
import AlexCard from "./components/AlexCard"
import Projects from "./components/Projects"
import Footer from "./components/Footer"
import Blogs from "./components/Blogs"

function App() {
  return (
    <div className="App">
      
      <LandingPage></LandingPage>
      <Navbar1></Navbar1>
      <AboutMe></AboutMe>
      <AlexCard></AlexCard>
      <Projects></Projects>
      <Blogs></Blogs>
      <Footer></Footer>

    </div>
  );
}

export default App;
