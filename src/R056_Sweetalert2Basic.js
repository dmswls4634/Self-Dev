import React, { Component } from 'react';
import Swal from 'sweetalert2'

class R056_Sweetalert2Basic extends Component {
    componentDidMount(){
        Swal.fire('1. SweetAlert').then(result => { alert('Ok') })
    }

    render() {
        return (
            <h1>sweetalert2</h1>
        )
    }
}

export default R056_Sweetalert2Basic;