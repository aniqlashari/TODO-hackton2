// import logo from './logo.svg';
import '../App.css';
import { useState } from 'react';
import axios from "axios"

function SignUp() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function handleRegister() {
        console.log(name)
        console.log(email)
        console.log(password)

        axios.post("http://localhost:5000/signup",
            { name: name, email: email, password: password }
        ).then((data) => {
            console.log(data);
        }).catch((err) => {
            console.log(err)
        })
    }
    return (
        <div className="App">
            <div>
                <input onChange={(e) => setName(e.target.value)} type="text" placeholder='Enter your name' />
                <input onChange={(e) => setEmail(e.target.value)} type="text" placeholder='Enter your email' />
                <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Enter your password' />
                <button onClick={handleRegister}>Submit</button>
            </div>
            {/* <img src="" width="" alt="" /> */}
        </div>
    );
}

export default SignUp;
