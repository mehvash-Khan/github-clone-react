import { useEffect, useState } from "react";



export const  useGetUserProfile = (name) =>{

    const [user,setUser] = useState();

    useEffect(()=>{
        fetch(`https://api.github.com/users/${name}`)
        .then(async response => {
            if(!response.ok)
                throw new Error( await response.json().message);
            return response.json()})
        .then(data=>setUser(data))
        .catch(error => {console.log(error)
        })
            
            },[])

        return user;

}