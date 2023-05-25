import React, {useState, useEffect } from 'react'
import axios from 'axios';

export default function JokesApi() {
  const [jokes, setJokes] = useState("");

  useEffect(() => {
    const fetchJokes = async () => {
      const response = await axios.get("https://v2.jokeapi.dev/joke/Any");
      setJokes(response.data);
    };
    fetchJokes();
  }, []);

  return (
    <div>
      <h1>Our recent Jokes</h1>
      <h2> Jokes Type: {jokes.type}</h2>
      <h3> Jokes ID: {jokes.id}</h3>
      <p> Jokes Setup: {jokes.Setup}</p>
      <p> Jokes Punchline: {jokes.punchline}</p>
    </div>
    
  )
}
