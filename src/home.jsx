import React from 'react'
import todoImg from './assets/todo-removebg-preview.png' // Make sure this file exists!
import { Link } from 'react-router-dom'
import task from "./task.jsx";
import './style.css';
import images from "./assets/xxx2011.png"


function App() {
  return (
    <div className="homepage">
      <header className="topbar">
        <h2 className="logo">Task Mangment System</h2>
        <nav>
          <a href="/">Home</a>
          <a href="#">Tasks</a>
        <a href="/login"> <button className="login-btn">Login</button></a> 
        </nav>
      </header>

      <main className="hero-section">
        <div className="hero-text">
          <h1 className="hero-title">The <br /><span>Task Manager</span></h1>
          <h3 className="hero-sub">Assignment</h3>
          <p className="hero-desc">
            task manager is a management system with dashboard. It was founded in 2025 by Kashan Adnan.
          </p>
       <a href="/registere">   <button className="discover-btn">Discover All Programs  <span> <img src={images} alt="not founded" /></span></button></a>
        </div>

        <div className="hero-image">
          <img src={todoImg} alt="ToDo Illustration"  />
        </div>
      </main>
    </div>
  );
}


export default App;
