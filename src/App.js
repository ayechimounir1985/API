import 'bootstrap/dist/css/bootstrap.min.css';
import UserList from './UserList';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Details from './Details';
import axios from 'axios'
import React, { useEffect, useState } from 'react'
function App() {
  const [users,setUsers]=useState([])
  const DataUsers = async()=>{
   const {data} = await axios.get ('https://jsonplaceholder.typicode.com/users');
   setUsers(data);
  }
  useEffect(()=>{DataUsers();},[]);
  return (
  <Router>
    <Routes>
      <Route index element ={<UserList users={users}/>}></Route>
      <Route path='/details/:idUsers' element ={<Details data={users} />}/>
    </Routes>
  </Router>
  );
}

export default App;