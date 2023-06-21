import React from 'react'
import  { BookOpen, Layers, Package, Star, Table } from 'react-feather';
import {  useNavigate} from 'react-router';
import { Routes,Route } from 'react-router-dom';


import './App.css';
import Repository from './Repository';

function ProfileDetails({user}){

const navigate = useNavigate();


    function displayRepos(){
        navigate('repositories')
        
    }

    return(

        <React.Fragment>
            <div className='header'>
            
                <button className='heading'>
                    <BookOpen size="16" /> Overview</button>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <button className='heading' onClick={displayRepos}>
                    <Layers size="16" /> Repositories</button> 
                &nbsp;&nbsp;&nbsp;&nbsp;
                <button className='heading'>
                    <Table size="16" /> Projects</button> 
                &nbsp;&nbsp;&nbsp;&nbsp;
                <button className='heading'>
                    <Package size="16" /> Packages</button> 
                &nbsp;&nbsp;&nbsp;&nbsp;
                <button className='heading'>
                <Star size="16" /> Stars</button> 
            </div>

        <div className="body">
           
                <Routes>
                    <Route path="repositories" element={<Repository user ={user}/> } />
                </Routes>
           
         
        </div> 
     
        </React.Fragment>
    )
}


export default ProfileDetails