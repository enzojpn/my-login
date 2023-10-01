import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const login = (email, password) => {
        console.log("login ", { email, password });
        setUser({ id: 123, email });
    }
    const logout = () => {
        console.log('loghout');
    }

    return (
        <AuthContext.Provider value={{ autenticated: !!user, user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );

}