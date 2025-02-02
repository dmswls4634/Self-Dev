import React, {Component} from "react";
import datatype from 'prop-types';

class R018_PropsDatatype extends Component{
    render(){
        let {
            String, Number, Boolean, Array, ObjectJson, Function
        } = this.props
        return(
        <div style={{padding:"0px"}}>
            <p>StringProps: {String}</p>
            <p>NumberPronps: {Number}</p>
            <span>BooleanProps: {Boolean.toString()}</span>
            <p>ArraynProps: {Array.toString()}</p>
            <p>Object JsonProps: {JSON.stringify(ObjectJson)}</p>
            <p>FunctionProps: {Function}</p>
        </div>
        )
    }
}

R018_PropsDatatype.propTypes={
    String: datatype.number,
    Number: datatype.number,
    Boolean: datatype.bool,
    Array: datatype.array,
    ObjectJson: datatype.object,
    Function: datatype.func,
}

export default R018_PropsDatatype;