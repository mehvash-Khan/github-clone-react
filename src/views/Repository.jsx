import React, {  useState} from 'react'
import RepoDetails from '../components/RepoDetails';
import PropTypes from 'prop-types';
import { useGetAllRepo } from '../hooks/useGetAllRepo';


function Repository({user}){
    const [repos,loading] = useGetAllRepo(user)
    const [repo,setRepo] =useState();
    
    function handleSearch(){
        var input = document.getElementById('search')
        console.log(input.value)
        setRepo(input.value)    
    }
    if(loading)
        return(<div className="loader"></div>)

    if(!repos)
    return 
    
    return(
        <React.Fragment>
            <div>
                <form>
                    <input id='search' className='search-bar' type="text" onChange={handleSearch} placeholder="Find a repository..." />
                </form>
            
            </div>
            <div>
                {(repo ? repos.filter((r)=>r.name.toLowerCase().startsWith(repo)) : repos)
                                .map((r)=>(
                                    <RepoDetails key={r.name} repo={r} />
                                ))}
            </div>
      </React.Fragment>
    ) 
}

Repository.propTypes = {
    user: PropTypes.object
}

export default Repository