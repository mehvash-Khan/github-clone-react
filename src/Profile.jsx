import React, { useEffect } from 'react'
import { useParams } from 'react-router';

import './App.css';
import  {  MapPin,Link, Twitter, Mail} from 'react-feather';
import ProfileDetails from './ProfileDetails'

function Profile(){




    let {name} = useParams();
    const [user,setUser] = React.useState();
    useEffect(()=>{
        fetch(`https://api.github.com/users/${name}`)
        .then(async response => {
            if(!response.ok)
                throw new Error( await response.json().message);
            return response.json()})
        .then(data=>setUser(data))
        .catch(error => {console.log(error)
        })
            
        },[])


if(!user)
    return "Loading...."

return(
    <React.Fragment>
        <div>
           
            <div className='sideBar'>
                <br></br>
                <br></br>
                <img align="center" src={user.avatar_url}  className="circular-image" />
              
              
                <br></br>
                <b  style={{"padding":"10%","font-size":"20px"}}>{user.name}</b>
                <div style={{"padding-left":"10%",color:"grey",font:"28px" }}>{user.login}</div>
                <br>
                </br>
                <button type="submit" className="follow">Follow</button>
                
                <br></br>
                <p style={{"padding-left":"10%",font:"28px" }}>{user.bio}</p>
               
                <div style={{"marginLeft":"10%","font-size":"15px"}}><b>{user.followers}</b> Followers,<b>{user.following}</b> Following</div>
               <br></br>
               
               
         
                {user.location? <div><MapPin size="18" style={{"marginLeft":"10%"}} /><span>&nbsp; {user.location}</span><br></br></div> : null  }
                {user.email ? <div><Mail size="18" style={{"marginLeft":"10%"}} /><span>&nbsp; {user.email}</span><br></br></div> : null }
                

                {user.blog ? <div><Link size="18" style={{"marginLeft":"10%"}} /><span>&nbsp; {user.blog}</span><br></br></div> : null}
                {user.twitter_username ? <div><Twitter size="18" style={{"marginLeft":"10%"}} />&nbsp;<a href={`https://twitter.com/${user.twitter_username}`}> @{user.twitter_username}</a> </div>: null}
           
            </div>
        </div>






       <ProfileDetails user={user} />

    </React.Fragment>

)


}


export default Profile