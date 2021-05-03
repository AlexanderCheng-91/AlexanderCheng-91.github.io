import './App.css';
import LandingPage from "./components/LandingPage"
import Navbar1 from "./components/NavBar1"
import AboutMe from "./components/AboutMe"
import AlexCard from "./components/AlexCard"
// import Projects from "./components/Projects"
// import Blogs from "./components/Blogs"
// import Footer from "./components/Footer"


import {Col, Container} from "reactstrap"


function App() {
  return (
    
    <div className="App">      
      <Container style={{padding:0}}>      
        <Col style={{padding:0}}>
          <LandingPage></LandingPage>
          <Navbar1></Navbar1>
          <AboutMe></AboutMe>
          <AlexCard></AlexCard>       
          {/* <Projects></Projects> */}
          {/* <Blogs></Blogs> */}
          {/* <Footer></Footer> */}
        </Col>
      </Container>
      
    </div>
  );
}

export default App;
