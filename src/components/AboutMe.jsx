import React from "react"
import '../App.css'

import Dynamic from "../pictures/icons/SettingsChosen.png"
import Fast from "../pictures/icons/FlashChosen.png"
import Intuitive from "../pictures/icons/IdeaChosen.png"
import Responsive from "../pictures/icons/ResponsiveChosen.png"

import {Col, Row} from "reactstrap";



// idea for this component is to have two rows that render images and text on the bottom 

class AboutMe extends React.Component{
    render(){
        return(
            <div className="about-me">
                <div className="about">
                    ABOUT
                </div>
                <Col className="about-me-Column">
                {/* first row */}
            
                    <Row className="about-me-Rows">
                        <div>
                            <div>
                                <img src={Fast} alt="lightning bolt"></img>
                            </div>
                                <p>slow = yuck</p>
                                <p>fast loading times. </p>
                            <div>
                                <img src={Intuitive} alt="phone in front of a monitor"></img>
                            </div>
                                <p>If I have to explain how to use my website</p>
                                <p>I'm not doing it right</p>
                                <p>Intuitive design </p>                
                        </div>
                    </Row>
                    
                    {/* second row */}
                    
                    <Row className="about-me-Rows">
                        <div>
                            <div>
                                <img src={Responsive} alt="lightning bolt"></img>
                            </div>
                                <p> This website renders well<p>
                                </p> on any device</p>
                                <p>Responsive</p>
                            
                            <div>
                                <img src={Dynamic} alt="phone in front of a monitor"></img>
                            </div>
                                <p>I love to make pages come alive</p>
                                <p>Dynamic webpage</p>
                        </div>
                    </Row>
                </Col>
            </div>
            
        )
    }
}

export default AboutMe;