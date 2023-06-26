
import React, { useState } from 'react'
import { useNavigate} from 'react-router-dom';
import {useGetUser} from '../hooks/useGetUser'

function Home(){


    const [name,setName] = useState(null)
    const navigate = useNavigate();
   
       

    function handleRead(input){
        navigate('/read/'+input)  
    }
    
    
    
    const data = useGetUser(name);
    return(
        
        <div className="App">
            <br></br>
            <br></br>
            <h1>Read Repositories</h1> 
            <br></br>
            <form >
            <label htmlFor="name" className="faded-line">Enter username    </label>
            <input type="text" id='name' name="username" onChange={(e)=> setName(e.target.value)}></input>
            <ul className='nameList'>
            {(data&&name) ?  data.map((d)=> <li key ={d.login} className='names' onClick={() =>{
                document.getElementById('name').value=d.login
                handleRead(d.login);
                }}>{d.login}</li> )    :null }
            </ul>
            <br></br><br></br>
            <button type="submit" onClick={() => handleRead(name)}  >Submit</button>
            </form>
            <br></br>
            <br></br>
            <br></br>
        
        
        
        </div>
    )
    
}
export default Home


