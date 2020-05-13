import auth0 from 'auth0-js'
import { useHistory } from "react-router-dom";
import * as Auth0 from '../Secrets/auth0'

import { UseAuth } from '../Contexts/Auth-Context'

console.log(process.env.REACT_APP_AUTH0_DOMAIN)

let auth0Client = new auth0.WebAuth({
    domain: Auth0.Domain,
    clientID: Auth0.ClientID,
    redirectUri: Auth0.RedirectUri,
    audience: Auth0.Audience,
    responseType: 'token id_token',
    scope: 'openid profile'
})



export const Login = () => {
    let accessToken = localStorage.getItem('access_token');
    if (accessToken) {

    }

    auth0Client.authorize();
}


export const HandleAuthentication = () => {
    const { setAuthenticated, setAuthProfile } = UseAuth()

    // const [isAuthenticated, setIsAuthenticated] = UseAuth();
    // const [profile, setProfile] = UseAuth();
    // let userProfile;

    console.log('Handle authentication called');
    let history = useHistory();
    auth0Client.parseHash((err, authResult) => {
        if (authResult && authResult.accessToken && authResult.idToken) {
            auth0Client.client.userInfo(authResult.accessToken, (err, profile) => {
                if (profile) {

                    setAuthProfile(profile)
                    setSession(authResult);
                    setAuthenticated(true)
                    console.log('Auth set to true')
                    history.push("/")
                }
            });

        } else if (err) {
            console.log(err);
        }
    })
}

export const Logout = () => {
    const { setAuthenticated } = UseAuth()
    let history = useHistory();
    removeSession();
    setAuthenticated(false);
    history.push('/')

}

export const IsAuthenticated = () => {
    let isAccessToken = localStorage.getItem('access_token') != null;
    if (isAccessToken) {
        let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
        return new Date().getTime() < expiresAt;
    }
    return false;

}

const setSession = (authResult) => {
    let expireAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expireAt);
}

const removeSession = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
}