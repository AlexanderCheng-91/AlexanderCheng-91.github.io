import React from "react"
import {Row, Col} from "reactstrap"

import alexHeroImage from "../pictures/alexpicSmallResized180by180.png"

class AlexCard extends React.Component{
    //                          <div class="flex flex-50-gt-sm waypoint bars-wrap animated slide-in-right" data-animation="slide-in-right">
    //                             <div class="bar flex">
    //                                 <div class="bar fill" style="width:90%">
    //                                      <div class="tag bold flex">CSS</div>
    //                                 </div>
    //                                 <span>90%</span>
    //                             </div>
    //                           </div>
    render(){
        return(
            <div className="AlexCard">
                <Row noGutters>
                    
                        <div className="alex-hero-image chart-slide-in-right">
                            <img src={alexHeroImage} alt="Alexander Cheng"></img>
                            <p>alex picture</p>
                        </div>
                    
                    <Col>
                        <div className="alex-Stats">
                            <p>alex stats</p>
                            {/* 1. we need a div to encase the whole graph */}
                            {/* <div className="chart-slide-in-left"> */}
                                {/* 2. we need div bar for bar names */}
                                {/* <div className="bar-name"> */}
                                    {/* I need to make a box for the bar name */}
                                    {/* <div> */}
                                        {/* 3. we need div bars to animate */}
                                        {/* note this whole bar needs to be on same Row */}
                                        {/* the graph itself needs to be in a col */}
                                    {/* </div> */}

                                {/* </div> */}
                            {/* </div> */}
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default AlexCard; 