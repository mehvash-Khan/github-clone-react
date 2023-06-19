import React from 'react';
import Details from './Details.jsx' 
import { useLocation } from 'react-router-dom';

function Table({name}){


    const location = useLocation();
   


   if(!name)
   return "Please enter Name"
   

    console.log('Table ',name)
    console.log(location.pathname)
    console.log(name)
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