import React from 'react';
import Details from './Details.jsx'

function Table({name}){
    return(
      <table align="center">
        <thead>
      <tr>
        <th>Name</th>
        <th>Stars</th>
        <th>Default Branch</th>
        <th>Main Language</th>
        <th>Repository Link</th>
      </tr>
    </thead>
    
      <Details name={name} />
      
  
      </table>
    )
  
  
  }

  export default Table