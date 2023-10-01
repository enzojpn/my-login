import React, {  useContext} from "react";

import { BrowserRouter as Router, Route, Routes, Navigate, } from "react-router-dom";
import LoginPage from "./pages/LoginPages";
import HomePage from "./pages/HomePages";

import { AuthProvider , AuthContext } from "./contexts/auth";

const AppRoutes = () => { 
    const Private = ({children}) => {
        const {authenticate} = useContext(AuthContext);

        if (!authenticate){
            return <Navigate to={"/login"}/>
        }
        return children;
    }
    return (
        <Router>
            <AuthProvider>
                <Routes>
                    <Route exact path="/login" element={<LoginPage />} />
                    <Route exact path="/" element={<Private><HomePage/></Private>} />
                </Routes>
            </AuthProvider>

        </Router>

    )
}

export default AppRoutes;