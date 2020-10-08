import * as actionTypes from './actionTypes'
import axios from 'axios'

export const authStart = () => {
    return {
        type: actionTypes.SIGN_IN_START
    }
}

export const signupSuccess = () => {
    return {
        type: actionTypes.SIGN_UP_SUCCESS,
    }
}
export const signinSuccess = (token,password,originalpassword) => {
    return {
        type: actionTypes.SIGN_IN_SUCCESS,
        token: token,
        password:password,
        originalpassword: originalpassword
    }
}

export const authFailed = (error) => {
    return {
        type: actionTypes.SIGN_IN_FAILED,
        error: error
    }
}
export const clearall = () => {
    console.log("CLEAR_ALL CALLED")
    return {
        type: "CLEAR_ALL",
    }
}

export const logout = () => {
    console.log("LOGOUT CALLED")
    localStorage.removeItem('token')
    localStorage.removeItem('expirationDate')
    return {
        type: actionTypes.AUTH_LOGOUT
    }
}

export const authTimeOut = (expirationTime) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout())
            dispatch(clearall())
        },expirationTime * 1000)
    }
}

export const signup = (name,username,email,password) => {
    return dispatch => {
        dispatch(authStart())
        let url = 'http://localhost:8087/api/auth/signup'
        let authData = {
            name: name,
            username: username,
            email: email,
            password: password,
        }
        console.log(authData)
        axios.post(url, authData)
            .then(response => {
                // const expirationDate = new Date(new Date().getTime() +  3600 * 1000)
                // localStorage.setItem('token', response.data.token)
                // localStorage.setItem('userId', response.data.userId)
                // localStorage.setItem('email', response.data.email)
                // localStorage.setItem('username', response.data.username)
                // localStorage.setItem('expirationDate', expirationDate)
                dispatch(signupSuccess())
                // dispatch(authTimeOut(3600))
                console.log(response)
            })
            .catch(error => {
                dispatch(authFailed(error.response.data.message))
            })
    }
}

export const signin = (usernameoremail,password) => {
    return dispatch => {
        dispatch(authStart())
        let url = 'http://localhost:8087/api/auth/signin'
        let authData = {
            usernameOrEmail: usernameoremail,
            password: password,
        }
        axios.post(url, authData)
            .then(response => {
                const expirationDate = new Date(new Date().getTime() +  3600 * 1000)
                localStorage.setItem('token', response.data.accessToken)
                localStorage.setItem('password', response.data.userpassword)
                // localStorage.setItem('email', response.data.email)
                // localStorage.setItem('username', response.data.username)
                localStorage.setItem('expirationDate', expirationDate)
                console.log(response)
                dispatch(signinSuccess(response.data.accessToken,response.data.userpassword,password))
                dispatch(authTimeOut(3600))
            })
            .catch(error => {
                dispatch(authFailed(error.response.data.message))
            })
    }
}

export const authCheckState = () => {
    const token = localStorage.getItem('token')
    const password = localStorage.getItem('password')
    // const username = localStorage.getItem('username')
    const expirationDate = new Date(localStorage.getItem('expirationDate'))
    // const localId = localStorage.getItem('userId')
    return dispatch => {
        if(token === null) {
            dispatch(logout())
            dispatch(clearall())
        }else {
            if (expirationDate <= new Date()) {
                dispatch(logout())
                dispatch(clearall())
            }else {
                dispatch(signinSuccess( token,password))
                dispatch(authTimeOut((expirationDate.getTime() - new Date().getTime())/1000))
            }
        }
    }
}





