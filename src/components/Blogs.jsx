import React from "react"
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
  
import gracie from "../pictures/placeholderForGracie.jpg"

class Blogs extends React.Component{
    render(){
        return(
            <div className="blogs">
                <div className="about">
                    Blogs
                </div>
                <div className="demarcation-padding">
                    <div className="demarcation">

                    </div>
                </div>
                <div>
                    <Card>
                        <CardImg top width="90%" src={gracie} alt="white dog" />
                        <CardBody>
                        <CardTitle tag="h5">I love animals</CardTitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                        <Button>Button</Button>
                        </CardBody>
                    </Card>
                </div>
                
                <img src={gracie} alt="white dog" className="blogs-gracieImage">
                </img>
                <div>
                    <p>
                        I love animals
                    </p>
                </div>
            </div>
        )
    }
}

export default Blogs;