import React from 'react';
// import {Row, Col} from "reactstrap"

import '../App.css';
import alexHeroImage from '../pictures/alexpicSmallResized180by180.png';

class AlexCard extends React.Component {
   //                          <div class="flex flex-50-gt-sm waypoint bars-wrap animated slide-in-right" data-animation="slide-in-right">
   //                             <div class="bar flex">
   //                                 <div class="bar fill" style="width:90%">
   //                                      <div class="tag bold flex">CSS</div>
   //                                 </div>
   //                                 <span>90%</span>
   //                             </div>
   //                           </div>
   render() {
      return (
         <div className="AlexCard">
            {/* try to mess with rows and col or picture size */}

            <div className="alex-hero-image chart-slide-in-right">
               <img src={alexHeroImage} className="alexPicture" alt="Alexander Cheng"></img>
               <div className="alexCard-title">
                  <p>Who am I?</p>
               </div>
               <div className="alexCard-body">
                  <p>
                     I'm a full stack developer located in <br />
                     Los Angeles, CA. I love putting websites together <br />
                     from the front end to the back end. <br />
                     My stack is React.js, C#, and SQL.
                     <br />
                     Feel free to reach out!
                     {/* link this "feel free to reach out" to contact page */}
                  </p>
               </div>
            </div>
         </div>
      );
   }
}

export default AlexCard;
