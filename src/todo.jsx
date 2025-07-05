import './styless.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import imagees from './assets/WhatsApp ANIQ.JPG'

function todo() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    axios.get('https://todo-hackton1.vercel.app/user').then((res) => {
      if (res.data) {
        setUser(res.data);
        setName(res.data.name);
        setEmail(res.data.email);
        setPassword(res.data.password);
      }
    });
  }, []);

  useEffect(() => {
    const navName = document.querySelector('.nav-username');
    if (navName) navName.textContent = name;
  }, [name]);

  const handleUpdate = () => {
    axios
      .put('https://todo-hackton1.vercel.app/user', {
        name,
        email,
        password,
      })
      .then((res) => {
        setUser(res.data);
        alert('Profile updated successfully!');
      });
  };

  return (
    <div className="app">
      <aside className="sidebar">
        <h2>Task Mangment System</h2>
        <nav>
        <a href="/profile">  <p>Dashboard</p></a> 
        <a href="/task">  <p>Tasks</p></a>
          <p className="active">My Profile</p>
        </nav>
        <p className="logout">Logout</p>
      </aside>

      <div className="main">
        <header className="header">
          <div className="nav-links">
           <a href="/"><span>Home</span></a> 
            <span className="active">Tasks</span>
          </div>
          <div className="user">
            <img src={imagees} alt="User" />
            <div>
              <p className="nav-username">{user.name}</p>
              <small>User Account</small>
            </div>
          </div>
        </header>

        <div className="profile-page">
          <div className="profile-photo">
            <img src={imagees} alt="Profile" width={"1800px"} height={110}/>
            <p>Change your photo</p>
          </div>

          <div className="profile-form">
            <h3>Edit Your Profile<span className="required">*</span></h3>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter name"
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
            />
            <button onClick={handleUpdate}>Edit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default todo;