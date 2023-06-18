
import React,{useEffect,useState} from 'react'
import { ReactComponent as MySvg } from './up-right-from-square-solid.svg';

function Details({name}){

    console.log("Entering Details")
    
    const[data,setData] = useState(null)
    const [error,setError]= useState('')
    const token = process.env.REACT_APP_TOKEN
    useEffect(() =>{
      fetch(`https://api.github.com/users/${name}/repos`, {
        headers: {
          "Authorization": "Bearer "+token
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
    
    <tr key={item.name}>
    <td>{item.name}</td>
    <td>{item.stargazers_count}</td>
    <td>{item.default_branch}</td>
    <td>{item.language}</td>
    <td><a href={item.html_url} target="_blank" rel="noreferrer"><MySvg style={{ fill: "blue", width: "15px", height: "15px" }} /></a></td>
    
    </tr>
    
       )) }
       </tbody>
        
     
    
    )
    
    }

    export default Details


