import React, { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';

import axios from 'axios'; 
function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch("/api/users");
        const data = await res.json(); // await the parsing of JSON data
        setUsers(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  // useEffect(() =>{
  //   axios.get('/api/users')
  //   .then(res =>{
  //     setUsers(res.data)
  //     console.log(users)
  //   }).catch(err => {
  //     console.log(err)
  //   })
  // },[])


  return (
    <>
      <h1>hh</h1>
      {
        users.map( (user) => (
          <div key={user.Roll}>

            <h1>{user.name}</h1>
            <h3>{user.Branch}</h3>
            <p>{user.Roll}</p>
          </div>


        ))
      }




    </>
  );
}

export default App;
