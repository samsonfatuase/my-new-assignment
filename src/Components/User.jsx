import React, { useState, useEffect } from 'react';
import axios from 'axios';

const User = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/users');
      setUsers(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default User;
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const UserList = (user) => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await axios.get("http://localhost:3000/api/login");
//       setData(response.data);
//     } catch (error) {
//       console.error(error);
    
//     }
    
//   };

//   return (
//     <div className='Ai'>
//       {data.map((item, index) => (
//         <div key={index}>
//           <h2 className='Aii'>{Object.keys(item)[0]}</h2>
//           <ul>
//             {Object.entries(item[Object.keys(item)[0]]).map(([key, value]) => (
//               <li key={key}>
//                 <strong>{key}:</strong> {value}
//               </li>
//             ))}
//           </ul>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default UserList;