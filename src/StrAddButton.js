import React, {Component} from 'react';
import {connect} from 'react-redux';
import {add} from './actions'

class StrAddButton extends Component {
    render() {
        return (
            <input value='Add200' type="button" onClick={this.props.addString}/>
        )
    }
}

let mapDispatchToProps = (dispatch, props) => {
    console.log('Props from App.js : ' + props.AppProp)
    return {
        addString: () => dispatch(add())
    };
};

StrAddButton = connect(null, mapDispatchToProps)(StrAddButton);

export default StrAddButton;