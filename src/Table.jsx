import React from 'react';
import { useParams } from 'react-router';
import Details from './Details.jsx' 




function Table(){
const {name} = useParams();

console.log("Table",name)

if(!name)
   return "Please enter Name"

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