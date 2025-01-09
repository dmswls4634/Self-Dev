import React, {Component} from "react";
import { Badge, Button } from "reactstrap";

class R035_ReactstrapBadges extends Component{
    render(){
        return(
            <div>
                <h1>Product Name <Badge color="secondary">Hit</Badge></h1>
                <button color="light" outline>Accessor <Badge color="dark">4</Badge></button>
                <Badge color="danger" pill>pill</Badge>
                <Badge href="http://example.com" color="dark">Go Link</Badge>
            </div>
        )
    }
}

export default R035_ReactstrapBadges;