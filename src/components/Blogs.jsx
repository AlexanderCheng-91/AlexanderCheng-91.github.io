import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

import gracie from '../pictures/gracieWithMohawk.jpg';
import careerChange from '../pictures/careerChange.jpg';
import dogGroomer from '../pictures/dogGroomer.jpg';

import { Link, NavLink } from 'react-router-dom';

class Blogs extends React.Component {
   render() {
      return (
         <div className="blogs">
            <div className="about">Blogs</div>
            <div className="demarcation-padding">
               <div className="demarcation"></div>
            </div>
            <Card style={{ width: '90%', display: 'inline-block' }}>
               <CardImg top width="100%" src={gracie} alt="white dog" />
               <CardBody>
                  <CardTitle tag="h5">I Love My Dog</CardTitle>
                  <CardSubtitle tag="h6" className="mb-2 text-muted">
                     2/10/2021
                  </CardSubtitle>
                  <CardText>Here are 9 reasons why I love my dog</CardText>

                  <Link to="gracie">
                     <Button>Read More</Button>
                  </Link>
               </CardBody>
            </Card>

            <Card style={{ width: '90%', display: 'inline-block' }}>
               <CardImg top width="100%" src={dogGroomer} alt="white dog" />
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

            <Card style={{ width: '90%', display: 'inline-block' }}>
               <CardImg top width="100%" src={careerChange} alt="white dog" />
               <CardBody>
                  <CardTitle tag="h5">My Career</CardTitle>
                  <CardSubtitle tag="h6" className="mb-2 text-muted">
                     5/10/2021
                  </CardSubtitle>
                  <CardText>My thoughts on why I changed my Career</CardText>
                  <NavLink to="/career" exact={true}>
                     <Button>Read More</Button>
                  </NavLink>
               </CardBody>
            </Card>
         </div>
      );
   }
}

export default Blogs;
