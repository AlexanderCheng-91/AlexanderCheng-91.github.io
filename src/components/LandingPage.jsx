import React from "react"
import coffee from "../pictures/coffee.gif"

class LandingPage extends React.Component{
    render(){
        return(
            <div className="landingPage">
                <img src={coffee} alt="a gif with a yellow coffee cup steaming">
                </img>
            </div>
        )
    }
}

export default LandingPage;