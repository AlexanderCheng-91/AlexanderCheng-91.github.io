import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Row } from 'reactstrap';

import gracie from '../pictures/gracieWithMohawk.jpg';
import careerChange from '../pictures/careerChange.jpg';
import dogGroomer from '../pictures/dogGroomer.jpg';

import { Link, NavLink } from 'react-router-dom';

class Blogs extends React.Component {
   componentDidMount = () => {
      window.scrollTo(0, 0);
   };
   render() {
      return (
         <div className="blogs">
            <div className="about">Blogs</div>
            <div className="demarcation-padding">
               <div className="demarcation"></div>
            </div>
            <Row className="blog-row" lg={3} sm={1} no noGutters>
               <Card style={{ marginLeft: 10, marginRight: 10, marginTop: 10, marginBottom: 10 }}>
                  <CardImg src={gracie} alt="white dog" style={{ height: '55%' }} />
                  <CardBody>
                     <CardTitle tag="h5">I Love My Dog</CardTitle>
                     <CardSubtitle tag="h6" className="mb-2 text-muted">
                        2/10/2021
                     </CardSubtitle>
                     <CardText>
                        Here are 9 reasons why I love my dog. <br />
                        Gracie 5/4/11-1/25/20
                     </CardText>

                     <Link to="gracie">
                        <Button>Read More</Button>
                     </Link>
                  </CardBody>
               </Card>

               <Card style={{ marginLeft: 10, marginRight: 10, marginTop: 10, marginBottom: 10 }}>
                  <CardImg top width="100%" src={dogGroomer} alt="white dog" style={{ height: '55%' }} />
                  <CardBody>
                     <CardTitle tag="h5">A Day In The Life</CardTitle>
                     <CardSubtitle tag="h6" className="mb-2 text-muted">
                        3/10/2021
                     </CardSubtitle>
                     <CardText>This is what a typical day would look like as a dog grooming manager</CardText>
                     <NavLink to="/dayInTheLife" exact={true}>
                        <Button>Read More</Button>
                     </NavLink>
                  </CardBody>
               </Card>

               <Card style={{ marginLeft: 10, marginRight: 10, marginTop: 10, marginBottom: 10 }}>
                  <CardImg top width="100%" src={careerChange} alt="white dog" style={{ height: '55%' }} />
                  <CardBody>
                     <CardTitle tag="h5">My Career</CardTitle>
                     <CardSubtitle tag="h6" className="mb-2 text-muted">
                        5/10/2021
                     </CardSubtitle>
                     <CardText>My thoughts on my current career and why I changed it</CardText>
                     <NavLink to="/career" exact={true}>
                        <Button>Read More</Button>
                     </NavLink>
                  </CardBody>
               </Card>
            </Row>
         </div>
      );
   }
}

export default Blogs;
