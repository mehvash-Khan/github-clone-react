import { useEffect,useState } from "react";

export const useGetPinnedRepos = (user) => {


    const [pinned,setPinned] =useState();
    const [loading,setLoading] =useState(true);
    useEffect(()=>{
        fetch(`https://gh-pinned-repos.egoist.dev/?username=${user.login}`)
        .then(async response => {
            if(!response.ok)
                throw new Error( await response.json().message)
            return response.json()})
        .then(repos =>{setPinned(repos)
            setLoading(false)})
        .catch(error=>console.log(error.message))
    },[])




    return [pinned,loading];
}