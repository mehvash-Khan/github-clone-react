import { useEffect,useState } from "react";


export const useGetStarred = (user) =>{
    
    const [repos,setRepos] = useState();
    const [loading,setLoading] = useState(true);
    useEffect(()=>{
        fetch(`https://api.github.com/users/${user.login}/starred`)
        .then(async response => {
            if(!response.ok)
                throw new Error( await response.json().message);
            return response.json()})
        .then(data=>{setRepos(data)
                    setLoading(false)})
        .catch(error => console.log(error))
},[])

    return [repos,loading];
}