import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios';


// https://jasonwatmore.com/post/2021/04/22/react-axios-http-put-request-examples

function PutExample() {

  const [updatedAt, setUpdatedAt] = useState("");

  useEffect(() => {
        // PUT request using axios inside useEffect React hook
    const article = { title: 'React Hooks PUT Request Example' };
    axios.put('https://reqres.in/api/articles/1', article)
      .then(response => {

        setUpdatedAt(response.data.updatedAt);
        console.log(" response.data.updatedAt=" +  response.data.updatedAt);
      });

    // empty dependency array means this effect will only run once (like componentDidMount in classes)
  }, []);

  return "Put Example";

}

function App() {

  return (
    <>
      <div>
        <h2>Hello from React!</h2>
        <PutExample/>
      </div>
    </>
  )
}

export default App
