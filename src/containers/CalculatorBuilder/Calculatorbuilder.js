import React, { Component } from 'react'
import Auth from '../../components/Auth/Auth'
// import Calculatorcontrols from '../../components/CalculatorControls/Calculatorcontrols'

class Calculatorbuilder extends Component {
    state = {
        firstnum: null,
        action: "",
        secondnum: null,
        answer: null
    }
    render() {
        return (
            <div>
                <Auth />
            </div>
        )
    }
}

export default Calculatorbuilder