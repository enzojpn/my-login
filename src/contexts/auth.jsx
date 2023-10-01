import React, { createContext, useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [loading, SetLoading] = useState(true);

    useEffect(() => {
        const recoveredUser = localStorage.getItem('user');
        if (recoveredUser) {
            setUser(JSON.parse(recoveredUser));
        }
        SetLoading(false);
    }, [])


    const login = (email, password) => {
        console.log("login ", { email, password });

        //api criar uma session

        const loggedUser = {
            id: "123",
            email
        }

        
        if (password === "secret") {
            localStorage.setItem("user", JSON.stringify(loggedUser));
            setUser(loggedUser);
            navigate("/")
        }

    }
    const logout = () => {
        console.log('loghout');
        localStorage.removeItem('user');
        setUser(null);
        navigate("/login");
    }

    return (
        <AuthContext.Provider value={{ authenticate: !!user, user, loading, login, logout }}>
            {children}
        </AuthContext.Provider>
    );

}