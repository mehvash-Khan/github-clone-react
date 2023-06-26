
import React from 'react'
import Pinned from '../components/Pinned';
import PropTypes from 'prop-types';
import { useGetPinnedRepos } from '../hooks/useGetPinnedRepos';

function Overview({user}){

  const [pinned,loading] = useGetPinnedRepos(user)

  
    if(loading)
        return(<div className="loader"></div>)

    if(!pinned)
        return("No pinned repositories")

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