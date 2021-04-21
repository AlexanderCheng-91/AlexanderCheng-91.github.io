import './App.css';
import Navbar1 from "./components/NavBar1"
import LandingPage from "./components/LandingPage"
import AboutMe from "./components/AboutMe"

function App() {
  return (
    <div className="App">
      
      <LandingPage></LandingPage>
      <Navbar1></Navbar1>
      <AboutMe></AboutMe>
      
    </div>
  );
}

export default App;
