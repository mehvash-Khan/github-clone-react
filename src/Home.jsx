
import React from 'react'
import { useNavigate} from 'react-router-dom';
import './App.css';



function Home(){

    const navigate = useNavigate();
   
    function handleSubmit(){
        var input = document.getElementById('name')
        navigate('/table/'+input.value)  
    }

    function handleRead(){
        var input = document.getElementById('name')
        navigate('/read/'+input.value)  
    }
    
        return(
            <div className="App">
               
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <h1>Read Repositories</h1> 
                <br></br>
                <form >
                <label htmlFor="name" className="faded-line">Enter username    </label>
                <input type="text" id='name' name="username"></input>

                <br></br><br></br>
                <button type="submit" onClick={handleSubmit}  >Submit</button>
                <br></br><br></br>
                <button className="read" onClick={handleRead} >Read Profile</button>
                </form>
                <br></br>
                <br></br>
                <br></br>
            

            
            
            </div>


    
    )


}
export default Home


