
import React from 'react'
import { Layers, Star } from 'react-feather'
import PropTypes from 'prop-types';


function Pinned({pin}){

    return(
    <div className='pinned'>
        <Layers size="16" /> &nbsp;
        <a href={pin.link}>{pin.repo}</a> &nbsp;
        
        <p style={{"font-size": "14px","color":"gray"}}>{pin.description}</p>
        
      {pin.language ?  <span  style={{"font-size": "12px"}}>Languages used: {pin.language}  </span> : null }
        <br></br>
        <span  style={{"font-size": "12px"}}> <Star size="16" />&nbsp; {pin.stars}</span>
       
    </div>
    )
}

Pinned.propTypes = {
    pin: PropTypes.object
}

export default Pinned