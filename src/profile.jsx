import './App.css';

import { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';


function profile() {

  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [editingId, setEditingId] = useState(null);

  // Load tasks from backend
  useEffect(() => {
    axios.get('https://todo-hackton1.vercel.app/tasks').then(res => setTasks(res.data));
  }, []);

  const addTask = async () => {
    if (!title || !description) return;

    if (editingId) {
      const res = await axios.put(`https://todo-hackton1.vercel.app/tasks/${editingId}`, {
        title,
        description,
      });
      setTasks(tasks.map(task => (task._id === editingId ? res.data : task)));
      setEditingId(null);
      Swal.fire({
        toast: true,
        position: 'top-end',
        icon: 'success',
        title: 'Task updated successfully!',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
      });
    } else {
      const res = await axios.post('https://todo-hackton1.vercel.app/tasks', { title, description });
      setTasks([...tasks, res.data]);
      Swal.fire({
        toast: true,
        position: 'top-end',
        icon: 'success',
        title: 'Task added successfully!',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
      });
    }

    setTitle('');
    setDescription('');
  };

  const deleteTask = async (id) => {
    await axios.delete(`https://todo-hackton1.vercel.app/tasks/${id}`);
    setTasks(tasks.filter(task => task._id !== id));
  };

  const startEdit = (task) => {
    setEditingId(task._id);
    setTitle(task.title);
    setDescription(task.description);
  };

  return (
    <div className="app">
      <aside className="sidebar">
        <h2>Task Mangment System</h2>
        <nav>
          <p className="activee">Dashboard</p>
      <a href="/task"> <p>Tasks</p></a>   
      <a href="/todo">    <p>My Profile</p></a> 
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
            <img src="https://i.pravatar.cc/40" alt="User" />
            <div>
              <p>Kashan Adnan</p>
              <small>User Account</small>
            </div>
          </div>
        </header>

        <div className="dashboard">
          <section className="todo-section">
            <h3>Uncompleted Todos<span className="required">*</span></h3>
            <table>
              <thead>
                <tr>
                  <th>Sno</th>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {tasks.map((task, i) => (
                  <tr key={task._id}>
                    <td>{i + 1}</td>
                    <td>{task.title}</td>
                    <td>{task.description}</td>
                    <td>
                      <input type="radio" />
                      <button className="action-btn update" onClick={() => startEdit(task)}>Update</button>
                      <button className="action-btn delete" onClick={() => deleteTask(task._id)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          <div className="bottom-section">
            <section className="add-task">
              <h3>{editingId ? 'Edit Task' : 'New Task'}<span className="required">*</span></h3>
              <input
                type="text"
                placeholder="enter your task"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <br />
              <input
                type="text"
                placeholder="enter your description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <br />
              <button onClick={addTask}>{editingId ? 'Save Changes' : 'Add +'}</button>
            </section>

            <section className="progress-box">
              <div className="circle">80%</div>
              <p>Todos Complete</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default profile;