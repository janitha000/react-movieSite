import React, { createContext, useContext, useState, useReducer } from 'react'
import { unstable_renderSubtreeIntoContainer } from 'react-dom';

export const AuthConetext = createContext();
export const UseAuth = () => useContext(AuthConetext);

export const AuthProvider = (props) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [profile, setProfile] = useState({});


    // const value = React.useMemo(() => [isAuthenticated, setIsAuthenticated], [isAuthenticated])
    // const [state, dispatch] = useReducer(AuthReducer, {})
    // const value = React.useMemo(() => [state, dispatch], [state])

    const setAuthenticated = (value) => {
        setIsAuthenticated(value);
    }

    const setAuthProfile = (value) => {
        setProfile(value);
    }

    return (
        // <AuthConetext.Provider value={{ isAuthenticated, setAuthenticated }} {...props}>
        // </AuthConetext.Provider>
        <AuthConetext.Provider value={{
            isAuthenticated,
            profile,
            setAuthenticated,
            setAuthProfile
        }} {...props} >
            
        </AuthConetext.Provider>
    )
}

const AuthReducer = (state, action) => {
    switch(action.type){
        case 'SET_AUTH':
            return ({isAuthenticated : true})
        case 'SET_PROFILE':
            return({profile : {"nickname" : "Janitha"}})
    }
}

