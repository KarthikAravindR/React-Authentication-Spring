import React, { Component } from 'react';
import Calculatorbuilder from './containers/CalculatorBuilder/Calculatorbuilder'
import Calculatordisplay from './components/CalculatorDisplay/Calculatordisplay'
import Logout from './components/Auth/Logout/Logout'
import { BrowserRouter, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from './store/actions/index'
import './App.css';

class App extends Component {
  componentDidMount = () => {
    this.props.onAutoSignUp()
  }
  render() {
    return (
      <BrowserRouter>
        <Route path="/" exact >
          <Calculatorbuilder />
        </Route>
        <Route path="/logged" exact >
          <Calculatordisplay />
        </Route>
        <Route path="/logout" exact >
          <Logout />
        </Route>
      </BrowserRouter>
    );
  }

}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onAutoSignUp: () => dispatch(actions.authCheckState())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
