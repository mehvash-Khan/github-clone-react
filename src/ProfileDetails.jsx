import React from 'react'
import  { BookOpen, Layers, Package, Star, Table } from 'react-feather';
import {  useNavigate} from 'react-router';
import { Routes,Route } from 'react-router-dom';
import './App.css';
import Repository from './Repository';
import Stars from './Stars'
import PropTypes from 'prop-types';



function ProfileDetails({user}){

const navigate = useNavigate();


    function displayRepos(){
        navigate('repositories')
        
    }

    function displayOverview(){
        navigate('overview')
        
    }

    function displayProjects(){
        navigate('projects')
        
    }

    function displayStars(){
        navigate('stars')
        
    }


    return(

        <React.Fragment>
            <div className='header'>
            
                <button className='heading' onClick={displayOverview}>
                    <BookOpen size="16" /> Overview</button>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <button className='heading' onClick={displayRepos}>
                    <Layers size="16" /> Repositories</button> 
                &nbsp;&nbsp;&nbsp;&nbsp;
                <button className='heading' onClick={displayProjects}>
                    <Table size="16" /> Projects</button> 
                &nbsp;&nbsp;&nbsp;&nbsp;
                <button className='heading'>
                    <Package size="16" /> Packages</button> 
                &nbsp;&nbsp;&nbsp;&nbsp;
                <button className='heading' onClick={displayStars}>
                <Star size="16" /> Stars</button> 
            </div>

        <div className="body">
           
                <Routes>
                    <Route path="repositories" element={<Repository user ={user}/> } />
                    <Route path="stars" element={<Stars user={user}/> } />
                </Routes>
           
         
        </div> 
     
        </React.Fragment>
    )
}

ProfileDetails.propTypes = {
    user: PropTypes.object
}


export default ProfileDetails