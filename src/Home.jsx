
import React, { useEffect,useState } from 'react'
import { useNavigate} from 'react-router-dom';
import './App.css';



function Home(){


    const [name,setName] = useState(null)
    const [data,setData] =useState(null)
    const navigate = useNavigate();
   
       

    function handleRead(){
        var input = document.getElementById('name')
        navigate('/read/'+input.value)  
    }
    

    useEffect(()=>{
        const getData = setTimeout(() =>{
             fetch(`https://api.github.com/search/users?q=${name}`)
        .then(async response => {
            if(!response.ok)
                throw new Error( await response.json().message);
            return response.json()})
        .then(data=>{
           
            setData(data.items.slice(0,5));
            
            console.log(data)
        })
        .catch(error => console.log(error))
        } ,500)

        return () => clearTimeout(getData)

    },[name])

  

        return(
            <div className="App">
                <br></br>
                <br></br>
                <h1>Read Repositories</h1> 
                <br></br>
                <form >
                <label htmlFor="name" className="faded-line">Enter username    </label>
                <input type="text" id='name' name="username" onChange={(e)=>setName(e.target.value)}></input>
                <ul className='nameList'>
                {name ?  data.map((d)=> <li key ={d.login} className='names'>{d.login}</li> )    :null }
                </ul>
                <br></br><br></br>
                <button type="submit" onClick={handleRead}  >Submit</button>
                </form>
                <br></br>
                <br></br>
                <br></br>
            

            
            
            </div>


    
    )


}
export default Home


