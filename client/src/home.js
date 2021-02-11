import React  from 'react'
import  { useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import{FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {  faEnvelope, faKey, faPhone, faUser } from '@fortawesome/free-solid-svg-icons'
import './App.css';
import logo from './a1.jpg';
import logo1 from './a2.jpg';
import img1 from './b1.PNG';import img2 from './c1.PNG';import img3 from './d1.PNG';
import img4 from './e1.PNG';import img5 from './f1.PNG';import img6 from './g1.PNG';
import i1 from './z1.jpg';import i2 from './z2.jpg';import i3 from './z3.jpg';
import i4 from './z4.jpg';import i5 from './z5.jpg';import i6 from './z6.jpg';
import i7 from './z7.jpg';


import axios from 'axios';


const api = axios.create({
  baseURL : "http://localhost:5000/"
});

function Home() {
   let history = useHistory();
    const [name,setName] = useState('');
  const[email,setEmail]=useState('');
  const[phone,setPhone]=useState('');
  const[password,setPassword]=useState('');
  const [list,setList] = useState([]);

  const fetchData = async ()=>{
    try{
        const response = await api.get("/");
        console.log(response.data.data.list);
        setList(response.data.data.list);
    }catch(err){}
};
  const handleSubmit = async (e)=>{
    e.preventDefault();
    try{
      console.log(name);
      console.log(email);
      console.log(phone);
      console.log(password);
      const response =  await api.post("/create", {
        name,email,phone,password
      }
      
      );
      console.log(response);
      setName("");
      setEmail("");
      setPhone("");
      setPassword("");
      fetchData();
    }catch(err){}
  };
 
  const handleDelete = async (e,email)=>{
    e.stopPropagation();
    try {
      const response = await api.post('/delete',{
        email
      });
      console.log(response);
      fetchData();
      }catch(err){
        console.log(err);
      }
    }

    const handleUpdate = async (e,name,completed)=>{
        e.stopPropagation();
        history.push("/${id}/update");
    }
  
useEffect(() => {
     fetchData();
       }, [])

  return (
    <div className="App"> 
    <img src={logo} id="er"></img>
    <div className="header"><div class="centered"><span style={{fontSize:"3vw"}}>Explore and do what you love</span><br />
    <center><span id="span1">Welcome to Near Careers</span><br /><br /><button type="button" class="btn btn-primary" id="btn111">View Openings</button></center></div>
    <img src={logo1} id="er1"></img>
    </div>                         
    <br />             
   <center> <div class="btn-group">
    <button type="button" class="btn btn-primary">Careers</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <button type="button" class="btn btn-primary">Culture</button></div></center>
    <br />
    <br />
    <br />

    <center><p style={{fontSize:'2vw',color:' #8C8C8C'}}>"Great Workplace is about Great Colleagues"</p>
     <p style={{fontSize:'2vw',color:' black'}}>PERKS AND BENEFITS</p>
     <button type="button" class="btn btn-primary">A great culture is not just about work, it's about work + life </button>
    </center>
    
    <br />
    <div class="container">
  <div class="card-columns">
    
    <div class="card-decoration-none">
      <div class="card-decoration-none text-center">
        <p class="card-text"> <div> 
                              <span id="surround">
                              <span id="initial"><img src={img1} id="er2"></img></span>
                              <span id="onhover"><img src={i1} id="er3"></img></span>
                              </span>
                              </div></p>
      </div>
    </div>
    <div class="card-decoration-none ">
      <div class="card-decoration-none text-center">
        <p class="card-text"> <div> 
                              <span id="surround">
                              <span id="initial"><img src={img2} id="er2"></img></span>
                              <span id="onhover"><img src={i2} id="er3"></img></span>
                              </span>
                              </div>
                              </p>
      </div>
    </div>
    <div class="card-decoration-none ">
      <div class="card-decoration-none text-center">
        <p class="card-text"> <div> 
                              <span id="surround">
                              <span id="initial"><img src={img3} id="er2"></img></span>
                              <span id="onhover"><img src={i3} id="er3"></img></span>
                              </span>
                              </div></p>
      </div>
    </div>
    <div class="card-decoration-none ">
      <div class="card-decoration-none text-center">
        <p class="card-text"> <div> 
                              <span id="surround">
                              <span id="initial"><img src={img4} id="er2"></img></span>
                              <span id="onhover"><img src={i4} id="er3"></img></span>
                              </span>
                              </div></p>
      </div>
    </div>  
    <div class="card-decoration-none ">
      <div class="card-decoration-none text-center">
        <p class="card-text"> <div> 
                              <span id="surround">
                              <span id="initial"><img src={img5} id="er2"></img></span>
                              <span id="onhover"><img src={i5} id="er3"></img></span>
                              </span>
                              </div></p>
      </div>
    </div>
    <div class="card-decoration-none ">
      <div class="card-decoration-none text-center">
        <p class="card-text"> <div> 
                              <span id="surround">
                              <span id="initial"><img src={img6} id="er2"></img></span>
                              <span id="onhover"><img src={i6} id="er3"></img></span>
                              </span>
                              </div></p>
      </div>
    </div>
  </div>
</div>
<br /><br />
    <img src={i7} id="er5"></img>
    <span id="span2" style={{marginLeft:'40%',fontSize:'4vw'}}>#Welcome to Near Careers</span>
    <center><span id="span3">Open Positions</span></center>
  <span id="span4">Engineering</span>
  
<table>
  <tr><td>  <div class="container">
  <div class="card" style={{width:"400px"}}>
    <div class="card-body">
     <h3 class="card-title">Data Engineer</h3> <hr></hr>
      <p class="card-text">bangalore</p>
      <a href="#" class="btn btn-primary">See Profile</a>
    </div>
  </div></div>
  </td>
  <td>  <div class="container">
  <div class="card" style={{width:"400px"}}>
    <div class="card-body">
     <h3 class="card-title">Lead, Data Engineer</h3> <hr></hr>
      <p class="card-text">bangalore</p>
      <a href="#" class="btn btn-primary">See Profile</a>
    </div>
  </div></div>
  </td>
  <td>  <div class="container">
  <div class="card" style={{width:"400px"}}>
    <div class="card-body">
     <h3 class="card-title">Senior Engineer, Platform Engineering</h3> <hr></hr>
      <p class="card-text">bangalore</p>
      <a href="#" class="btn btn-primary">See Profile</a>
    </div>
  </div></div>
  </td>
  </tr>
</table>
 

 





    </div>    
         )   
}

export default Home;