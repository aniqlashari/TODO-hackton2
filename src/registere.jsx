import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import Swal from 'sweetalert2'
import './App.css'

function Register() {
  let navigate = useNavigate()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [age, setAge] = useState(0)


  const handleRegister = async () => {
    try {
      const res = await axios.post('http://localhost:5000/api/auth/register', {
        name,
        email,
        password,
        age
      }
      )

      Swal.fire({
        title: '✅ Success!',
        text: res.data.message,
        icon: 'success',
        confirmButtonColor: '#6C28A2'
      }).then(() => {

        navigate("/login");
      });
      localStorage.setItem("name", name)
      localStorage.setItem("email", email)
      localStorage.setItem("password", password)
      localStorage.setItem("age", age)
    } catch (err) {
      Swal.fire({
        title: '❌ Error',
        text: err.response?.data?.message || 'Registration failed',
        icon: 'error',
        confirmButtonColor: '#6C28A2'
      })
    }
  }
  return (
    <div className="register-container">
      <header className="site-header">
        <h1 className="logo">Task Mangment System</h1>
        <nav className="nav">
          <a href="/">Home</a>
          <a href="#">Tasks</a>

          <a href="/login"><button className="btn-login">Login</button></a>

        </nav>
      </header>

      <div className="register-box">
        <h2 className="form-title">
          Register your account<span className="required">*</span>
        </h2>

        <form className="form">
          <input type="text" onChange={(e) => setName(e.target.value)} placeholder="enter your name" />
          <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="enter your email" />
          <input type="number" onChange={(e) => setAge(e.target.value)} placeholder="enter your age" />
          <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="enter your password" />
          <input type="file" />
        </form>

        <p className="register-text">
          Have an account? Login
        </p>

        <button className="register-btn" onClick={handleRegister}>Register</button>
      </div>
    </div>
  )
}
export default Register;