import React from 'react'
import PropTypes from 'prop-types';

function RepoDetails({repo}){
    return (
        <React.Fragment>
            <div className='repo-details'>
            <a href={repo.html_url}>{repo.name}</a> &nbsp;
            <div className='visible'>{repo.visibility}</div> 
            <br></br><br></br>
            {repo.description ? <span>{repo.description}</span> : null }
            <br></br><br></br>

            { repo.topics ?  repo.topics.map(topic =>(
                 <div key={topic} className='topic'>{topic}</div> 
        ) ) : null }  

            <br></br>
            <br></br>
            {repo.language ? <span>Language used : {repo.language}</span> :null }
        </div>
        </React.Fragment>
    )
}


RepoDetails.propTypes = {
    repo: PropTypes.object
}

export default RepoDetails;