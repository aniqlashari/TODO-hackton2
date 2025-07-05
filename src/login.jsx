import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import Swal from 'sweetalert2'
import './App.css'

function Login() {
  let navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async () => {
    try {
      const res = await axios.post('https://todo-hackton1.vercel.app/login', {
        email,
        password
      })

      Swal.fire({
        title: '    Verified!',
        text: 'Welcome back!',
        icon: 'success',
        confirmButtonColor: '#6C28A2'
      }).then(() => {

        navigate("/profile");
      });
    } catch (err) {
      Swal.fire({
        title: ' Error',
        text: err.response?.data?.message || 'Login failed',
        icon: 'error',
        confirmButtonColor: '#6C28A2'
      })
    }
  }
  return (
    <div className="login-container">
      <header className="site-header">
        <h1 className="logo">Task Mangment System</h1>
        <nav className="nav">
          <a href="/">Home</a>
          <a href="#">Tasks</a>
          
        </nav>
      </header>

      <div className="login-box">
        <h2>
          Login to your account<span className="required">*</span>
        </h2>
        <input type="email"    onChange={(e) => setEmail(e.target.value)} placeholder="enter your email" />
        <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="enter your password" />
        <p className="register-text">
          Don’t have an account? <a href="/registere">Register</a>
        </p>
     <button onClick={handleLogin} className="login-btn">Login</button>
      </div>
    </div>
  )
}
export default  Login ;