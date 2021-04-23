import React from "react"
// import coffeeScaled3 from "../pictures/coffeeScaled3.gif"
import '../App.css';

class LandingPage extends React.Component{
    render(){
        return(
            <div className="landingPage">                
                <div className="landingPage content">
                    <div className="center hi" >
                        Hello, my name is 
                    </div>  
                    <div >
                        <b className="highlight">Alexander Cheng</b>
                    </div>
                    <div className="hi">
                        check me out
                    </div>
                </div>
            </div>
            
            
        )
    }
}

export default LandingPage;