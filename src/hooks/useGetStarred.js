import { useEffect,useState } from "react";
import Repository from "../views/Repository";

export const useGetStarred = (user) =>{
    
    const [repos,setRepos] = useState();
    useEffect(()=>{
        fetch(`https://api.github.com/users/${user.login}/starred`)
        .then(async response => {
            if(!response.ok)
                throw new Error( await response.json().message);
            return response.json()})
        .then(data=>setRepos(data))
        .catch(error => console.log(error))
},[])

    return repos;
}