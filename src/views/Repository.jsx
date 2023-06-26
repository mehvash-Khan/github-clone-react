import React, { useEffect ,useState} from 'react'
import RepoDetails from '../components/RepoDetails';
import PropTypes from 'prop-types';


function Repository({user}){



    const [repos,setRepos] = useState();
    const [repo,setRepo] =useState();

    useEffect(()=>{
        fetch(`https://api.github.com/users/${user.login}/repos`)
        .then(async response => {
            if(!response.ok)
                throw new Error( await response.json().message);
            return response.json()})
        .then(data=>setRepos(data))
        .catch(error => console.log(error))
},[])

function handleSearch(){
    var input = document.getElementById('search')
    console.log(input.value)
    setRepo(input.value)

}



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