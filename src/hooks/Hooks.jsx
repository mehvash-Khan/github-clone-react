import  { useEffect, useState } from 'react'


export const useGetUserDetails = (name) =>{
    const [data,setData]=useState();
    
    useEffect(()=>{
        const getData = setTimeout(() =>{
             fetch(`https://api.github.com/search/users?q=${name}`)
        .then(async response => {
            if(!response.ok)
                throw new Error( await response.json().message);
            return response.json()})
        .then(result=>{
           
            setData(result.items.slice(0,5));
            
            //console.log(data)
        })
        .catch(error => console.log(error))
        } ,500)

        return () => clearTimeout(getData)

    },[name])

    return data;
}