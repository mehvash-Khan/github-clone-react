
import React,{useEffect,useState} from 'react'
import { ReactComponent as MySvg } from './up-right-from-square-solid.svg';

 function Details({name}){

   
    
    const[data,setData] = useState(null)
    const [error,setError]= useState('')
    const token = process.env.REACT_APP_TOKEN
    useEffect(() =>{
    if(!name)
        return 
      fetch(`https://api.github.com/users/${name}/repos`, {
        headers: {
          "Authorization": "Bearer "+token
        }
      })
      .then(async response => {
        if(!response.ok){
            const body =  await response.json()
          throw new Error(body.message);
        }
        return response.json()
      }
     
      )
      .then(data=>setData(data))
      .catch(error=> setError(error.message))
    },[name])
    
    

   
        if(!data)
        {
            if(error)
                return error
            return('No data found')
        }    
    
    
    
    
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


