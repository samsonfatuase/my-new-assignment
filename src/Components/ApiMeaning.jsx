import React, {useState, useEffect}  from 'react'
import axios from 'axios'

export default function ApiMeaning() {
    const [data, setData] = useState([]);


    useEffect(() => {
       const fetchData = async () => {
              const response = await axios.get('https://raw.githubusercontent.com/nully0x/react-api-meaning/main/assigment.json');
                setData(response.data);
                console.log(response.data);
         };
            fetchData();
    }, []);


  return (
    <div className='Ai'>
      {data.map((item, index) => (
        <div key={index}>
          <h2 className='Aii'>{Object.keys(item)[0]}</h2>
          <ul>
            {Object.entries(item[Object.keys(item)[0]]).map(([key, value]) => (
              <li key={key}>
                <strong>{key}:</strong> {value}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>        
  )
}