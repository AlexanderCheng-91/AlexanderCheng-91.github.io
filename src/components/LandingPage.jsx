import React from 'react';
// import coffeeScaled3 from "../pictures/coffeeScaled3.gif"
import '../App.css';

import { Row } from 'reactstrap';

class LandingPage extends React.Component {
   render() {
      return (
         <Row style={{ margin: 0 }}>
            <div className="landingPage">
               <div className="landingPage content">
                  <div className="font-white">Hello, my name is</div>
                  <div>
                     <b className="highlight">Alexander Cheng</b>
                  </div>
                  <div className="font-white">check me out</div>
               </div>
            </div>
         </Row>
      );
   }
}

export default LandingPage;
