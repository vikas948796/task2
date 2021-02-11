import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import  { useHistory, useParams } from 'react-router-dom';
import{FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {  faEnvelope, faKey, faPhone, faUser } from '@fortawesome/free-solid-svg-icons'
const api = axios.create({
  baseURL : "http://localhost:5000/"
});


const Update=(props)=> {

    let history = useHistory();
  const {id}= useParams();
  const[name,setName]= useState('');
  const[email,setEmail]=useState('');
  const[phone,setPhone]=useState('');
  const[password,setPassword]=useState('');
    
  
    useEffect(() => {
     const fetchData= async() => {
       const response = await api.get('/${id}')
       console.log(response.data.data)
       setName(response.data.data.list.name)
       setEmail(response.data.data.list.email)
       setPhone(response.data.data.list.phone)
       setPassword(response.data.data.list.password)
     }
     fetchData();
    }, []);
  
    return (
      <div className="App">
        <header className="App-header">
        <div className="main-box">
          <h3>Edit Profile</h3>
       <hr></hr> 
       <form action="">
       <label>Enter Name:</label>
       <div class="input-container">
       <i><FontAwesomeIcon icon={faUser} /></i>
       <input type='text' id="text-input" placeholder="Name"   value = { name }
              onChange = {(e)=>setName(e.target.value)}
              ></input>
       </div>
       <label>Enter E-mail:</label>
       <div class="input-container">
       <i><FontAwesomeIcon icon={faEnvelope} /></i>
       <input type='email' id="text-input"  placeholder="E-mail" value = { email }
              onChange = {(e)=>setEmail(e.target.value)} ></input>
       </div>
       <label>Enter Contact:</label>
       <div class="input-container">
       <i><FontAwesomeIcon icon={faPhone} /></i>
       <input type='number' id="text-input" placeholder="Contact" value = { phone }
              onChange = {(e)=>setPhone(e.target.value)}></input>
       </div>
       <label>Enter Password:</label>
       <div class="input-container">
       <i><FontAwesomeIcon icon={faKey} /></i>
       <input type='password' id="text-input" placeholder="Password" value = { password }
              onChange = {(e)=>setPassword(e.target.value)}></input>
       </div>
       <button id="btn"  >Update</button>
       <button id="btn"  >Cancel</button>
       </form></div>
        </header>
      </div>
    );
  }
  
  export default Update;