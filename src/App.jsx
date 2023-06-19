
import React, { useState } from 'react';

import Table from './Table.jsx'
import './App.css';

function App() {

const [name,setName] = useState('')

function addName(){
  var input = document.getElementById('name')
  setName(input.value)

  
    
}


  return (
    <div className="App">
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <h1>Read Repositories</h1> 

      <label htmlFor="name" className="faded-line">Enter username    </label>
      <input type="text" id='name' name="username"></input>

      <br></br><br></br>
      <button type="submit" onClick={addName}>Submit</button>
      <br></br><br></br>
      <button className="read" >Read Profile</button>
      <br></br>
      <br></br>
      <br></br>
      <Table name={name} />
     
    </div>
  );
}








export default App;
