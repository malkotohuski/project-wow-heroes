import { useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

export const Logout = () => {
    const { onLogout } = useContext(UserContext);

    useEffect(() => { 
        onLogout();
    }, [onLogout]);

    return (
        <Navigate to="/login" />
    );
}