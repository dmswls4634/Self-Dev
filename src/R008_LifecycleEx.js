import React, {Component} from "react";

class R008_LifecycleEx extends Component{
    static gerDerivedStateFromProps(props, state){
        console.log('2. getDrivedStateFromProps call :'+props.prop_value);
        return{tmp_state:props.prop_value};
    }
    constructor(props){
        super(props);
        this.state={};
        console.log('1. constructor call');
    }
    componentDidMount(){
        console.log('4. componentDidMount call');
        console.log('5. tmp_state : '+this.state.tmp_state);
        this.setState({tmp_state2:true});
    }
    shouldComponentUpdate(props, state){
        console.log('6. shouldComponentUpdate call / tmp_state2'+state.tmp_state2);
        return state.tmp_state2
    }
    render(){
        console.log('3. render call');
        return(
            <h2>This is shouldComponentUpdate function</h2>
        )
    }
}

export default R008_LifecycleEx;