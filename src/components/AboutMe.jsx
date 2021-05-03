import React from "react"
import '../App.css'

import Dynamic from "../pictures/icons/SettingsChosen.png"
import Fast from "../pictures/icons/FlashChosen.png"
import Intuitive from "../pictures/icons/IdeaChosen.png"
import Responsive from "../pictures/icons/ResponsiveChosen.png"

import {Col, Row} from "reactstrap";

class AboutMe extends React.Component{
    render(){
        return(
            <div className="about-me">
                <div className="about">
                    ABOUT
                </div>
                    <div className="demarcation-padding">
                        <div className="demarcation"></div>
                    </div>

                
                {/* first row */}
            
                    <Row className="about-me-Rows" style={{padding:0, margin:0}}>
                        <Col className="about-me-Column" style={{padding:0, margin:0}}>                            
                            <div className="fast-image">
                                <img src={Fast} alt="lightning bolt"></img>
                            </div>
                            <div className="fast-title">
                                <p>Fast</p>
                            </div>
                            <div className="fast-text">
                                <p>slow = yuck<br/>fast loading times. </p>
                            </div>
                        </Col>
                        <Col className="about-me-Column" style={{padding:0, margin:0}}>
                            <div className="fast-intuitive">
                                <img src={Intuitive} alt="phone in front of a monitor"></img>
                            </div>
                            <div className="intuitive-title">
                                <p>Intuitive</p>      
                            </div>
                            <div className="intuitive-text">
                                <p>If I have to explain <br/>
                                how to use my websites<br/>
                                I'm not doing it right</p>                                   
                            </div>
                        </Col>
                    </Row>
                    <Row className="about-me-Rows" style={{padding:0, margin:0}}>
                        <Col style={{padding:0, margin:0}}>                            
                            <div>
                                <img src={Responsive} alt="lightning bolt"></img>
                            </div>
                            <div className="responsive-title">
                            <p>Responsive</p>
                            </div>
                            <div className="responsive-text">
                                <p> Website renders well<br/>
                                on any device</p>
                            </div>
                        </Col>        
                        <Col style={{padding:0, margin:0}}>
                            <div>
                                <img src={Dynamic} alt="phone in front of a monitor"></img>
                            </div>
                            <div className="dynamic-title">
                            <p>Dynamic</p>
                            </div>
                            <div className="dynamic-text">
                                <p>I love making pages<br/> come alive</p>
                            </div>                            
                        </Col>
                    </Row>
                









            </div>
            
        )
    }
}
// ********************* original rendering style *********************
// <div className="about-me">
//                 <div className="about">
//                     ABOUT
//                 </div>
//                 <Col className="about-me-Column" >
//                 {/* first row */}
            
//                     <Row className="about-me-Rows">
//                         <Col>
//                             <div>
//                                 <div>
//                                     <img src={Fast} alt="lightning bolt"></img>
//                                 </div>
//                                 <p>Fast</p>
//                                     <p>slow = yuck<br/>fast loading times. </p>
//                                 <div>
//                                     <img src={Intuitive} alt="phone in front of a monitor"></img>
//                                 </div>
//                                 <p>Intuitive</p>
//                                     <p>If I have to explain how<br/>
//                                     to use my websites<br/>
//                                     I'm not doing it right</p>                
//                             </div>
//                         </Col>
//                     </Row>
                    
//                     {/* second row */}
                    
//                     <Row className="about-me-Rows">
//                         <Col>
//                             <div>
//                                 <div>
//                                     <img src={Responsive} alt="lightning bolt"></img>
//                                 </div>
//                                 <p>Responsive</p>
//                                     <p> Website renders well<br/>
//                                     on any device</p>
                                
//                                 <div>
//                                     <img src={Dynamic} alt="phone in front of a monitor"></img>
//                                 </div>
//                                     <p>Dynamic</p>
//                                     <p>I love making pages<br/> come alive</p>
//                             </div>
//                         </Col>
//                     </Row>
//                 </Col>
//             </div>

export default AboutMe;