import React, {FC, useContext} from 'react';
import {TokenContext} from "../../App";
import {getRoleFromToken} from "../../helpers/token-helper";
import {Outlet, useLocation} from "react-router-dom";
import Error403Forbidden from "../Error403Forbidden/Error403Forbidden";
import Login from "../Login/Login";


interface ProtectedRouteProps {
    allowedRoles: string[];
}

const ProtectedRoute: FC<ProtectedRouteProps> = ({allowedRoles}) => {
    const {token} = useContext(TokenContext);
    const location = useLocation();
    if (!token) return <Login redirectTo={location.pathname}/>;
    const role = getRoleFromToken(token);

    return (
        allowedRoles.includes(role) ?
            <Outlet/> : <Error403Forbidden/>
    );
}

export default ProtectedRoute;