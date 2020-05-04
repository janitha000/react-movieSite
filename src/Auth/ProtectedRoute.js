import React, { useEffect } from 'react'
import { UseAuth } from '../Contexts/Auth-Context'
import { Redirect, Route } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...rest }) => {
    const {isAuthenticated} = UseAuth();

    return (
        <Route
            {...rest}
            render={(props) =>
                isAuthenticated
                    ? (<Component {...props} />)
                    : (
                        <Redirect to={{
                                pathname: "/login",
                                state: { from: props.location }
                            }}
                        />
                    )
            }
        />
    );
}

// const ProtectedRoute = ({ component: Component, path, ...rest }) => {
//     const[isAuthenticated] = UseAuth();

//     useEffect(() => {
//         if (isAuthenticated) {
//             return;
//         }
//         else{
//             return (
//                 <Redirect to={{ pathname: "/login",state: { from: path }}} />
//             )

//         }
//     }, [isAuthenticated, path]);

//     const render = props =>
//         isAuthenticated === true ? <Component {...props} /> : null;

//     return <Route path={path} render={render} {...rest} />;
// }

export default ProtectedRoute