import React, { useEffect, useState } from "react";
import { render } from "react-dom";
import "@babel/polyfill";

const App = () => {

    const [users, setUsers] = useState([]);

    useEffect( () => {

        const fetchUsers = async () => {
            const response = await fetch("http://localhost:3000/users");
            const jsonData = await response.json();
            setUsers(jsonData.users);
        }
        
        fetchUsers();
        
    }, [])

    return (
        <div>
            <h1>fullstack react playground</h1>
            {users.map( ( { name, surname }, index ) => (
                <h2 key= {name + surname + index}>{ name + " " + surname }</h2>
            ))}
        </div>
    )

}

render(<App />, document.getElementById("root"));
