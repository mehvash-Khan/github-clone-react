
import React, { useEffect, useState } from 'react'
import { Layers, Star } from 'react-feather';
import PropTypes from 'prop-types';


function Overview({user}){

    const [pinned,setPinned] =useState();

    useEffect(()=>{
        fetch(`https://gh-pinned-repos.egoist.dev/?username=${user.login}`)
        .then(async response => {
            if(!response.ok)
                throw new Error( await response.json().message)
            return response.json()})
        .then(repos =>setPinned(repos))
        .catch(error=>console.log(error.message))
    },[])


    console.log(pinned)
    if(!pinned)
        return("No Pinned repositories")

    return(
    <React.Fragment>
        <h5>Pinned</h5>
      <div className='overview'>
        
        {pinned.map(pin =>(

            <div key={pin.name} className='pinned'>
                 <Layers size="16" /> &nbsp;
               <a href={pin.link}>{pin.repo}</a> &nbsp;
                <p style={{"font-size": "16px"}}>{pin.description}</p>
                <span  style={{"font-size": "14px"}}>Languages used: {pin.language}  </span>
                &nbsp;&nbsp;&nbsp;
                <p> <Star size="16" />&nbsp; {pin.stars}</p>
                
                </div>

        ))}

      </div>
      </React.Fragment>
    )

}

Overview.propTypes = {
    user: PropTypes.object
}


export default Overview