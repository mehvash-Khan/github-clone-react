import { useEffect,useState } from "react";

export const useGetAllRepo = (user) =>{

    const [repos,setRepos] =useState(null)
    const token = process.env.REACT_APP_TOKEN


    useEffect(() =>{
      fetch(`https://api.github.com/users/${user.login}/repos`, {
        headers: {
          "Authorization": "Bearer "+token
        }
      })
      .then(async response => {
        if(!response.ok){
            const body =  await response.json()
          throw new Error(body.message);
        }
        return response.json()
      }
     
      )
      .then(data=>setRepos(data))
      .catch(error=> error.message)
    },[token])

return repos;
}