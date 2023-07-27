import './App.css';
import React from 'react';

// comment out to test

import LandingPage from './components/LandingPage';
import Navbar1 from './components/NavBar1';
import NavBar2 from './components/NavBar2';
import AboutMe from './components/AboutMe';
import Blogs from './components/Blogs';
import BlogGracie from './components/BlogGracie';
import BlogDayInTheLife from './components/BlogDayInTheLife';
import BlogCareer from './components/BlogCareer';
import Footer from './components/Footer';

// commented out the cauousel
import Projects from './components/Projects';

// old commented out code
// want to route to a "different page" for gracie blog

import { Col, Container } from 'reactstrap';

import { Route, Switch, withRouter } from 'react-router-dom';

function App() {
   return (
      <div className="App">
         <Container fluid style={{ padding: 0 }}>
            <Col style={{ padding: 0 }}>
               <Switch>
                  <Route exact path="/gracie">
                     <BlogGracie></BlogGracie>
                  </Route>
                  <Route exact path="/dayInTheLife">
                     <BlogDayInTheLife></BlogDayInTheLife>
                  </Route>
                  <Route exact path="/career">
                     <BlogCareer></BlogCareer>
                  </Route>
                  <Route exact path="/blogs">
                     <Blogs></Blogs>
                  </Route>
                  <Route exact path="/">
                     <LandingPage></LandingPage>
                     {/* <Navbar1></Navbar1> */}
                     <NavBar2></NavBar2>
                     <AboutMe></AboutMe>

                     <Projects></Projects>

                     <Blogs></Blogs>
                     <Footer></Footer>
                  </Route>
               </Switch>
            </Col>
         </Container>
      </div>
   );
}

export default withRouter(App);
