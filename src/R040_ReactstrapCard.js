import React, {Component} from "react";
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap";

class R040_ReactstrapCard extends Component{
    render(){
        return(
            <div style={{padding:"0px"}}>
                <Card>
                    <CardImg top height={"200px"} src="hrrp://han.gl/rxRfr" alt="Card img"></CardImg>
                    <CardBody>
                        <CardTitle>Card 제목</CardTitle>
                        <CardSubtitle>부제목</CardSubtitle>
                        <CardText>card 내용 Lorem Ipsum is simply dummy text.</CardText>
                        <button>버튼</button>
                    </CardBody>
                </Card>
            </div>
        )
    }
}

export default R040_ReactstrapCard;