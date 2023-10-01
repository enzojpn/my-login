import React, { useEffect, useContext, useState } from "react";
import { AuthContext } from "../../contexts/auth";
import { getUsers } from "../../services/api";



const HomePage = () => {
    const {logout,  authenticate } = useContext(AuthContext);
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            const response = await getUsers();
            setUsers(response.data);
            setLoading(false);
        })()
    }, [])

    const handleLogout = () => {
        logout();
    }

    if(loading){
       return <div className="loading">Carregando dados....</div>
    }

    return (
        <>
            <p>{String(authenticate)}</p>
            <button onClick={handleLogout}>Logout</button>
            <ul>
                {
                    users.map((user)=>(
                        <li key={user._id}>
                            {user.id} - {user.email}
                        </li>
                    ))
                    
                }
            </ul>
            <h1>HomePage</h1>
        </>
    )
}

export default HomePage 