import React from "react"


class AlexGraph extends React.Component{

    render(){
        return(
            <div className="graph">                
                <div className="bar">
                    <p>HTML<span></span><span className="progress"></span><span></span></p>
                </div>
                <div className="bar">
                    <p>CSS <span></span><span className="progress"></span><span></span></p>
                </div>
                <div className="bar">
                    <p>React.js <span></span><span className="progress"></span><span></span></p>
                </div>
                <div className="bar">
                    <p>JavaScript <span></span><span className="progress"></span><span></span></p>
                </div>
                <div className="bar">
                    <p>UI Design <span></span><span className="progress"></span><span></span></p>
                </div>
                <div className="bar">
                    <p>Gimp <span></span><span className="progress"></span><span></span></p>
                </div>
                <div className="bar">
                    <p>C# <span></span><span className="progress"></span><span></span></p>
                </div>
                <div className="bar">
                    <p>SQL <span></span><span className="progress"></span><span></span></p>
                </div>
                
            </div>

        )
    }
}

export default AlexGraph;