import React, { useState }from 'react';
import Axios from 'axios';


function LoginPage() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const login = () => {
        Axios.post("http://localhost:3001/login",
            {
                username: username,
                password: password,
            }).then((response) => {
            console.log(response);
            });
    };

    return(

        <div className="login-page">
            <h1>Connexion</h1>
            <label>Identifiant</label>
            <input
                type="text"
                onChange={(e)=> {
                    setUsername(e.target.value);
                }}/>
            <label> Mot de Passe</label>
            <input
                type="text"
                onChange={(e)=> {
                    setPassword(e.target.value);
                }}/>
            <button onClick={login}>Se connecter</button>
        </div>
    );
}

export default LoginPage;