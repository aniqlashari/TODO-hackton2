import '../App.css';
import { useState } from 'react';
import axios from "axios"

function Signin() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function handleRegister() {
      
        console.log(email)
        console.log(password)

        axios.post("http://localhost:5000/signin",
            {  email: email, password: password }
        ).then((data) => {
            console.log(data);
        }).catch((err) => {
            console.log(err)
        })
    }
    return (
        <div className="App">
            <div>
                
                <input onChange={(e) => setEmail(e.target.value)} type="text" placeholder='Enter your email' />
                <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Enter your password' />
                <button onClick={handleRegister}>Submit</button>
            </div>
       
        </div>
    );
}

export default Signin;