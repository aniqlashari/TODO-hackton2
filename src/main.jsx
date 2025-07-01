
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import House from './home.jsx'
import Login from './login.jsx';
import Registere from './registere.jsx';
import Profile from './profile.jsx';
 import Task from "./task.jsx"
 import Todo from "./todo.jsx"
;
ReactDOM.createRoot(document.getElementById('root')).render(

  <BrowserRouter>

    <Routes>
      <Route path="/" element={<House />}/>
        <Route path="/login" element={< Login />} />
        <Route path="/registere" element={< Registere />} />
        <Route path="/profile" element={< Profile />} />
        <Route path="/task" element={< Task />}/>
        <Route path="/todo" element={< Todo />} />
  
    </Routes>

  </BrowserRouter>

);