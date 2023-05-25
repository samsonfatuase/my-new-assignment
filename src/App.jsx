import {React, useEffect, useState } from "react";
import Home from "./Components/Home";
import About from "./Components/About";
import{Routes, Route, Link, Outlet, NavLink, Navigate} from 'react-router-dom';
import JokesApi from "./Components/JokesApi";
import Form from "./Components/Form";
import ApiMeaning from "./Components/ApiMeaning";
import Login from "./Components/Login";
import Register from "./Components/Register";
import User from "./Components/User";

import './App.css'


function App () {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(true);
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const ProtectedRoute = ({ path, element }) => {
    return isLoggedIn ? element : <Navigate to="/login" />;
  };

  
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // useEffect(() => {
  //   const user = localStorage.getItem("user");
  //   if (user) {
  //     setIsLoggedIn(true);
  //   }
  // }, []);



  // const handleLogin = (user) => {
  //   localStorage.setItem("user", JSON.stringify(user));
  //   setIsLoggedIn(true);
  // };

  // const handleLogout = () => {
  //   localStorage.removeItem("user");
  //   setIsLoggedIn(false);
  // };

  // const ProtectedRoute = ({path,element}) => {
  //   return isLoggedIn ? element : <Navigate to="/login" />
  // }
    
  // const[isLoggedIn, setIsLoggedIn] = useState(false);

  // useEffect(()=> {
  //   const user = localStorage.getItem("user");
  //   if (user) {
  //     setIsLoggedIn(true);
  //   }
  // },);

  // const handleLogin = (user) => {
  //   localStorage.setItem("user", JSON.stringify(user));
  //   setIsLoggedIn(true);
  // };
  // const handleLogout = () =>{
  //   localStorage.removeItem("user");
  //   setIsLoggedIn(false);
  // };
  // const ProtectedRoute = ({path,element}) => {
  //   return isLoggedIn ? element : <Navigate to = "/login" />

  // }

  return (
    <div className="Container">
      <nav className="navbase">
        <Link to ="/" className = 'nav-item'>Home page</Link>
        <Link to ="/about-me" className = 'nav-item1'>About me</Link>
        <Link to="jokes-api" className="jokes">Jokes</Link>
        <Link to="Form" className="form">Form</Link>
        <Link to="ApiMeaning" className="Api">ApiMeaning</Link>
        <Link to="register" className="form">Register</Link>
        <Link to="User" className="form">UserList</Link>
        {isLoggedIn ? (<button onClick={handleLogout}>Logout</button>) : <Link  to="login" className="jokes">Login</Link>}
      </nav>
      <Routes>
        <Route  path="/" element={<Home />} />
        <Route  path="/about-me" element={<About />} />
        <Route path="jokes-api" element={<JokesApi />} />
        <Route path="form" element={<Form />} />
        <Route path="register" element={<Register />} />
        {/* <Route path="user" element={<User />} /> */}
        <Route path="login" element={isLoggedIn ? <Navigate to="/"/> : <Login onLogin={handleLogin} />} />
        <Route path="ApiMeaning" element={<ProtectedRoute path="ApiMeaning" element={<ApiMeaning />}  />} />
        <Route path="User" element={<ProtectedRoute path="User" element={<User />}  />} />
      </Routes>
    </div>
    
  )
}

export default App;



// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
