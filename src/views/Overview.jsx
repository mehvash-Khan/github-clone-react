
import React, { useEffect, useState } from 'react'
import Pinned from '../components/Pinned';
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


    //console.log(pinned)
    if(!pinned)
        return("Pinned repositories...")

    return(
    <React.Fragment>
        <h5>Pinned</h5>
      <div className='overview'>
        
        {pinned.map(pin =>(

           <Pinned key={pin.name} pin={pin} />

        ))}

      </div>
      </React.Fragment>
    )

}

Overview.propTypes  = {
    user: PropTypes.object
}


export default Overview