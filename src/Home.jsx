
import React,{useContext} from 'react'
import { useNavigate} from 'react-router-dom';
import './App.css';
import {context} from './App'

function Home(){
   
    const data = useContext(context)
    console.log("data ",data)


    const navigate = useNavigate();
    function addName(){
      var input = document.getElementById('name')
      data.setName(input.value)
      
      
    }
function handleSubmit(){
    navigate('/table')
    
}
  

    return(
<div className="App">

<nav>
		<a href="#">Home</a>
		<a href="#">About</a>
		<a href="#">Contact</a>
	</nav>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <h1>Read Repositories</h1> 
    <form onSubmit={handleSubmit}>
      <label htmlFor="name" className="faded-line">Enter username    </label>
      <input type="text" id='name' name="username"></input>

      <br></br><br></br>
      <button type="submit" onClick={addName} >Submit</button>
      <br></br><br></br>
      <button className="read" >Read Profile</button>
      </form>
      <br></br>
      <br></br>
      <br></br>
      

    
     
    </div>
    

    
    )


}
export default Home


