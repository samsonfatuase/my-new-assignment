import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from "axios"

export default function Login({onLogin}) {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:3000/api/login", {
                username,
                password,
            });
            if (response.data.error) {
                setError(response.data.error);
                return;
            }
            onLogin(response.data.user);
            navigate("/");
        } catch (error) {
            throw error;
        }
    };
    
    // const handleSubmit = async (e) => {
    //     e.preventDefault();

    //     if (!username || !password) {
    //         setError("Please fill in all fields");
    //         return;
    //     }

    //     // if (!username || !password) {
    //     //     setError("Please fill in all fields");
    //     //     return;
    //     // }

    //     const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    //     const user = existingUsers.find((user) => user.username === username);
    //     if (!user) {
    //         setError("User does not exist");
    //         return;
    //     }

    //     if (user.password !== password) {
    //         setError("Password is incorrect");
    //         return;
    //     }
    //     onLogin(user);
    //     navigate("/");
    // };

  return (
    <div>
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />  
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            {error && <p>{error}</p>}
            <button type="submit">Login</button>
        </form>
    </div>
  )
}

// import React, {useState} from 'react'
// import { useNavigate } from 'react-router-dom'
// // import React, {useState} from 'react'
// // import { useNavigate } from "react-router-dom"

// export default function Login({onLogin}) {
//      const navigate = useNavigate();
//      const [username, setUsername] = useState ("");
//      const [password, setPassword] = useState ("");
//      const [error, setError] = useState("");
//      const handleSubmit = async (e) => {
//                 e.preventDefault();
        
//                 if (!username || !password) {
//                     setError("Please fill in all fields");
//                     return;
//                 }
                
        
//                 const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
//                 const user = existingUsers.find((user) => user.username === username);
//                 if (!user) {
//                     setError("User does not exist");
//                     return;
//                 }
//             }
//         }
            
        

// //      const handleSubmit = async (e) => {
// //         e.preventDefault();
// //      }
// //      if (!username || !password) {
// //         setError("Please fill in all fields");
// //         return;
// //     }

// //      const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
// //      const user = existingUsers.find((user)=> user.usename===username);
     
// //      if (!user) {
// //         setError("User does not exist");
// //         return;
// //     }
// // }
        
// //       if (user.password !== password) {
// //           setError("Password is incorrect");
// //                     return;
// //                 }
// //      onLogin(user);
// //      navigate("/");
    


// //   return (
// //     <div>
// //         <h1>Login</h1>
// //         <form onSubmit={handleSubmit}>
// //             <input
// //                 type="text"
// //                 placeholder='username'
// //                 value={username}
// //                 onChange={(e)=> setUsername(e.target.value)}

// //             />
// //             <input
// //                 type="password"
// //                 placeholder='password'
// //                 value={username}
// //                 onChange={(e)=> setPassword(e.target.value)}

// //             />
// //             {error&&<p>{error}</p>}
// //             <button type='submit'></button>
// //         </form>
// //     </div>
// //   )
// // }

