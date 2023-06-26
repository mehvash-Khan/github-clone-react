
import React, { useEffect, useState } from 'react'
import Pinned from '../components/Pinned';
import PropTypes from 'prop-types';
import { useGetPinnedRepos } from '../hooks/useGetPinnedRepos';

function Overview({user}){

  const [pinned,loading] = useGetPinnedRepos(user)

  
    if(loading)
        return("Loading pinned repositories...")

    if(!pinned)
        return("No data avalaible")

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