import React, { useContext } from "react";
import { AuthContext } from "../../contexts/auth";

const HomePage = () => {

const {logout , authenticate} = useContext(AuthContext);
const handleLogout = () => {
    logout();
}

    return(
        <>
        <p>{String(authenticate)}</p>
        <button onClick={handleLogout}>Logout</button>
        <h1>HomePage</h1>
        </>
    ) 
}

export default HomePage 