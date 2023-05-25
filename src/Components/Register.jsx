import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");


  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/api/register", {
        username,
        password,
      });
      if (response.data.error) {
        setError(response.data.error);
        return;
      }
      navigate("/login");

    } catch (error) {
      throw error;
    }
};
  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   if (!username || !password) {
  //     setError("Please fill in all fields");
  //     return;
  //   }

  //   const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
  //   const user = existingUsers.find((user) => user.username === username);
  //   if (user) {
  //     setError("User already exists");
  //     return;
  //   }

  //   const newUser = {
  //     username,
  //     password,
  //   };
  //   localStorage.setItem("users", JSON.stringify([...existingUsers, newUser]));

  //   navigate("/login");
  // };

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleRegister}>
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
        <button type="submit">Register</button>
      </form>
    </div>
  );
}// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// export default function Register() {
//   const navigate = useNavigate();
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!username || !password) {
//       setError("Please fill in all fields");
//       return;
//     }

//     const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
//     const user = existingUsers.find((user) => user.username === username);
//     if (user) {
//       setError("User already exists");
//       return;
//     }

//     const newUser = {
//       username,
//       password,
//     };
//     localStorage.setItem("users", JSON.stringify([...existingUsers, newUser]));

//     navigate("/login");
//   };

//   return (
//     <div>
//       <h1>Register</h1>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         {error && <p>{error}</p>}
//         <button type="submit">Register</button>
//       </form>
//     </div>
//   );
// }