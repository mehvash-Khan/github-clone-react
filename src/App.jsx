
import React, { useEffect,useState } from 'react';
import ReactDOM from 'react-dom/client';
import { ReactComponent as MySvg } from './up-right-from-square-solid.svg';

import logo from './logo.svg';
import './App.css';

function App() {

const [name,setName] = React.useState('')

function addName(){
  var input = document.getElementById('name')
  setName(input.value)

  
    
  
  //console.log(input.value)
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

function Table({name}){
  return(
    <table align="center">
      <thead>
    <tr>
      <th>Name</th>
      <th>Stars</th>
      <th>Default Branch</th>
      <th>Main Language</th>
      <th>Repository Link</th>
    </tr>
  </thead>
  
    <Details name={name} />
    

    </table>
  )


}

function Details({name}){

console.log("Entering Details")

const[data,setData] = React.useState(null)
const [error,setError]= React.useState('')

useEffect(() =>{
  fetch(`https://api.github.com/users/${name}/repos`, {
    headers: {
      "Authorization": "Bearer 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"
    }
  })
  .then(response => {
    if(!response.ok){
      throw new Error();
    }
    return response.json()
  }
 
  )
  .then(data=>setData(data))
  .catch(error=> setError(error))
},[name])

if(!data){
  return "No Data found"
}

console.log(error);


return(
  
   <tbody>
   
   {data.map(item=>(

<tr>
<td>{item.name}</td>
<td>{item.stargazers_count}</td>
<td>{item.default_branch}</td>
<td>{item.language}</td>
<td><a href={item.html_url} target="_blank"><MySvg style={{ fill: "blue", width: "15px", height: "15px" }} /></a></td>

</tr>

   )) }
   </tbody>
    
 

)

}




export default App;
