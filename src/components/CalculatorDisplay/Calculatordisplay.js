import React from 'react'
import classes from './Calculatordisplay.module.css'

import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

const calculatordisplay = (props) => {
    const logoutHandler = () => {
        props.history.push('/logout')
    }
    return(
        <div className={classes.calculatorDisplay}>
            <p>Logged IN Succesfully</p>
            <p>{props.password}</p>
            <p>{props.originalpassword}</p>
            <button onClick={logoutHandler}>Log Out</button>
        </div>
    )
}
const mapStateToProps = state => {
    return {
        password: state.auth.password,
        originalpassword: state.auth.originalpassword,
        isAuthenticated: state.auth.token1 !== null
    }
}

export default withRouter(connect(mapStateToProps)(calculatordisplay))
