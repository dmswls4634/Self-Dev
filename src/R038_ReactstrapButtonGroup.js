import React, {Component} from "react";
import { ButtonGroup } from "reactstrap";

class R038_ReactstrapButtonGroup extends Component{
    constructor(props){
        super(props);
        this.state={number:10}
    }

    move=(type, e)=>{
        if(type==='Left'){
            this.setState({number:this.state.number-1})
        }
        else{
            this.setState({number:this.state.number+1})
        }
    }

    render(){
        return(
            <div style={{padding:"0px"}}>
                <ButtonGroup style={{padding:"0px"}}>
                    <button onClick={e=>this.move('Left')}>Left</button>
                    <button onClick={e=>this.move('Middle')}>Middle</button>
                    <button onClick={e=>this.move('Right')}>Right</button>
                </ButtonGroup>
                <br/>{this.state.number}
            </div>
        )
    }
}

export default R038_ReactstrapButtonGroup;