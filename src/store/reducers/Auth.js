

import * as actionTypes from '../actions/actionTypes'

const inditialState = {
    token1: null,
    password: null,
    originalpassword: null,
    // username: null,
    // email: null,
    error: null,
    loading: false,
    newuser: false
}

const reducer = (state = inditialState, action) => {
    switch(action.type) {
        case actionTypes.SIGN_UP_SUCCESS :
            return {
                ...state,
                newuser: true,
                loading: false
            }
        case actionTypes.SIGN_IN_START :
            return {
                ...state,
                error: null,
                loading: true
            }
        case actionTypes.SIGN_IN_SUCCESS :
            console.log("signin reducer called")
            console.log(action.token)
            return {
                ...state,
                token1: action.token,
                password: action.password,
                originalpassword: action.originalpassword,
                newuser: false,
                loading: false
            }
        case actionTypes.SIGN_IN_FAILED :
            return {
                ...state,
                error: action.error,
                loading: false
            }
        case actionTypes.AUTH_LOGOUT :
            return {
                ...state,
                token1: null,
                // userid: null
            }
        case 'CLEAR_AUTH_ERROR' :
            return {
                ...state,
                error: null
            }
        default: 
            return state
    }
}

export default reducer