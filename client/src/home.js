import React  from 'react'
import  { useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './App.css';
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
    
    <nav class="navbar navbar-expand-md bg-dark navbar-dark" style={{zIndex:'2'}}>
  <a class="navbar-brand" style={{color:"White",fontSize:"30px"}} href="#">ne<span style={{color:"red",fontSize:"30px"}}>a</span>r</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="collapsibleNavbar">
    <ul class="navbar-nav ml-auto">
    <li class="nav-item">
        <a class="nav-link " href="#"></a>
      </li>
      
      <li class="nav-item" >
        <a class="nav-link" href="#">Covid-19</a>
      </li>


      <li class="nav-item  dropdown">
        <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#">Solution</a> 
        <div class="dropdown-menu">
        <a class="dropdown-item" href="#"><span style={{fontSize:"14.4px"}}>Near for<br /><b>Publishers</b></span></a>
        <a class="dropdown-item" href="#"><span style={{fontSize:"14.4px"}}>Near for<br /><b>Marketers</b></span></a>
      </div>
      </li>


      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#">Products</a>
        <div class="dropdown-menu">
        <a class="dropdown-item" href="#"><span style={{fontSize:"14.4px"}}>Allspark<br /><b>AI-powered Audience Curation</b></span></a>
        <a class="dropdown-item" href="#"><span style={{fontSize:"14.4px"}}>CARBON<sup>TM</sup><br /><b>Real-World Data Enrichment</b></span></a>
      </div>
      </li>    
      <li class="nav-item">
        <a class="nav-link" href="#">The Data</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#">About Us</a>
        <div class="dropdown-menu">
        <a class="dropdown-item" href="#"><span style={{fontSize:"14.4px"}}><b>Leadership</b></span></a>
        <a class="dropdown-item" href="#"><span style={{fontSize:"14.4px"}}><b>Investors</b></span></a>
        <a class="dropdown-item" href="#"><span style={{fontSize:"14.4px"}}><b>Board</b></span></a>
        <a class="dropdown-item" href="#"><span style={{fontSize:"14.4px"}}><b>Resources</b></span></a>
        <a class="dropdown-item" href="#"><span style={{fontSize:"14.4px"}}><b>Blog</b></span></a>
        <a class="dropdown-item" href="#"><span style={{fontSize:"14.4px"}}><b>Newsroom</b></span></a>
        <a class="dropdown-item" href="#"><span style={{fontSize:"14.4px"}}><b>Careers</b></span></a>
        <a class="dropdown-item" href="#"><span style={{fontSize:"14.4px"}}><b>Privacy</b></span></a>
        <a class="dropdown-item" href="#"><span style={{fontSize:"14.4px"}}><b>Contact Us</b></span></a>
      </div>
      </li>
    </ul>
  </div>  
</nav>


    <div className="header"><div class="centered"><span style={{fontSize:"3vw"}}>Explore and do what you love</span><br />
    <center><span id="span1">Welcome to Near Careers</span><br /><br /><button type="button" class="btn btn-primary" id="btn111">View Openings</button></center></div>
    <img src={logo1} style={{position: "absolute",display: "block"}} id="er1"></img>
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
  
      <center><span id="span3">Open Positions</span></center>
  <span id="span4">Engineering</span>
  
  <div class="row">
  <div class="col-sm-4" class="col-md-4"   >     
  
  <div class="container" id="left1" class="card2">
  <div class="card" style={{width:"99%"}}>
    <div class="card-body">
     <h4 class="card-title" id="card_title"><b>Data Engineer</b></h4> 
      <p class="card-text">bangalore</p><hr></hr>
      <a href="#" class="btn btn-primary">See Profile</a>
    </div>
  </div></div>
  
  </div>
  <div class="col-md-4">  
  <div class="container" id="left2" class="card2">
  <div class="card" style={{width:"98%"}}>
    <div class="card-body">
     <h4 class="card-title" id="card_title"><b>Senior Engineer, Platform Engineering</b></h4> 
      <p class="card-text">bangalore</p><hr></hr>
      <a href="#" class="btn btn-primary">See Profile</a>
    </div>
  </div></div>
  </div>
</div>
<span id="span4">Product</span>
  
  <div class="row">
  <div class="col-sm-4" class="col-md-4"   >     
  
  <div class="container" id="left1" class="card2">
  <div class="card" style={{width:"99%"}}>
    <div class="card-body">
     <h4 class="card-title" id="card_title"><b>VP - Carbon</b></h4> 
      <p class="card-text">bangalore</p><hr></hr>
      <a href="#" class="btn btn-primary">See Profile</a>
    </div>
  </div></div>
  </div>
  <div class="col-md-4">  
  <div class="container" id="left2" class="card2">
  <div class="card" style={{width:"98%"}}>
    <div class="card-body">
     <h4 class="card-title" id="card_title"><b>Vice President of Data Partnerships</b></h4> 
      <p class="card-text">bangalore</p><hr></hr>
      <a href="#" class="btn btn-primary">See Profile</a>
    </div>
  </div></div>
  </div>
  <div class="col-md-4">  
  <div class="container" id="left2" class="card2">
  <div class="card" style={{width:"98%"}}>
    <div class="card-body">
     <h4 class="card-title" id="card_title"><b>Product Manager</b></h4> 
      <p class="card-text">bangalore</p><hr></hr>
      <a href="#" class="btn btn-primary">See Profile</a>
    </div>
  </div></div>
  </div>  
</div>
<span id="span4">Data Science</span>
  
  <div class="row">
  <div class="col-sm-4" class="col-md-4"   >     
  
  <div class="container" id="left1" class="card2">
  <div class="card" style={{width:"99%"}}>
    <div class="card-body">
     <h4 class="card-title" id="card_title"><b>Senior, Data Science</b></h4> 
      <p class="card-text">bangalore</p><hr></hr>
      <a href="#" class="btn btn-primary">See Profile</a>
    </div>
  </div></div>
  </div></div>

  <span id="span4">Research & Analytics</span>
  
  <div class="row">
  <div class="col-sm-4" class="col-md-4"   >     
  
  <div class="container" id="left1" class="card2">
  <div class="card" style={{width:"99%"}}>
    <div class="card-body">
     <h4 class="card-title" id="card_title"><b>Research Associate</b></h4> 
      <p class="card-text">bangalore</p><hr></hr>
      <a href="#" class="btn btn-primary">See Profile</a>
    </div>
  </div></div>
  </div></div>


  <span id="span4">Marketing</span>
  
  <div class="row">
  <div class="col-sm-4" class="col-md-4"   >     
  
  <div class="container" id="left1" class="card2">
  <div class="card" style={{width:"99%"}}>
    <div class="card-body">
     <h4 class="card-title" id="card_title"><b>Digital Marketing Technologist</b></h4> 
      <p class="card-text">bangalore</p><hr></hr>
      <a href="#" class="btn btn-primary">See Profile</a>
    </div>
  </div></div>
  </div>
  <div class="col-md-4">  
  <div class="container" id="left2" class="card2">
  <div class="card" style={{width:"98%"}}>
    <div class="card-body">
     <h4 class="card-title" id="card_title"><b>Content Marketing Specialist</b></h4> 
      <p class="card-text">bangalore</p><hr></hr>
      <a href="#" class="btn btn-primary">See Profile</a>
    </div>
  </div></div>
  </div>
  <div class="col-md-4">  
  <div class="container" id="left2" class="card2">
  <div class="card" style={{width:"98%"}}>
    <div class="card-body">
     <h4 class="card-title" id="card_title"><b>Product Manager</b></h4> 
      <p class="card-text">bangalore</p><hr></hr>
      <a href="#" class="btn btn-primary">See Profile</a>
    </div>
  </div></div>
  </div>  
</div>
<div class="row">
  <div class="col-sm-4" class="col-md-4"   >     
  
  <div class="container" id="left1" class="card2">
  <div class="card" style={{width:"99%"}}>
    <div class="card-body">
     <h4 class="card-title" id="card_title"><b>VP - CARBON</b></h4> 
      <p class="card-text">bangalore</p><hr></hr>
      <a href="#" class="btn btn-primary">See Profile</a>
    </div>
  </div></div>
  </div></div>

  <span id="span4">Platform Solutions</span>
  
  <div class="row">
  <div class="col-sm-4" class="col-md-4"   >     
  
  <div class="container" id="left1" class="card2">
  <div class="card" style={{width:"99%"}}>
    <div class="card-body">
     <h4 class="card-title" id="card_title"><b>Platform Solution Specialist</b></h4> 
      <p class="card-text">bangalore</p><hr></hr>
      <a href="#" class="btn btn-primary">See Profile</a>
    </div>
  </div></div>
  </div></div>


  <span id="span4">Sales</span>
  
  <div class="row">
  <div class="col-sm-4" class="col-md-4"   >     
  
  <div class="container" id="left1" class="card2">
  <div class="card" style={{width:"99%"}}>
    <div class="card-body">
     <h4 class="card-title" id="card_title"><b>Strategic Sales Lead</b></h4> 
      <p class="card-text">bangalore</p><hr></hr>
      <a href="#" class="btn btn-primary">See Profil</a>
    </div>
  </div></div>
  </div></div>


 </div>    
         )   
}

export default Home;