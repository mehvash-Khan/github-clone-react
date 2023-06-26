import React,{useState} from 'react'
import RepoDetails from '../components/RepoDetails';
import PropTypes from 'prop-types';
import { useGetStarred } from '../hooks/useGetStarred';


function Star({user}){

  const [repos,loading] = useGetStarred(user)
    const [repo,setRepo] =useState();

   

function handleSearch(){
    var input = document.getElementById('search')
    
    setRepo(input.value)

}

if(loading){
    return(<div className="loader"></div>)
}

if(!repos)
    return 

  return(
        <React.Fragment>
            <div>
                <form>
                    <input id='search' className='search-bar' type="text" onChange={handleSearch} placeholder="Search stars..." />
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

Star.propTypes = {
    user: PropTypes.object
}


export default Star