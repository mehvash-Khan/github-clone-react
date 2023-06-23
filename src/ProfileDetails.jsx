import React from 'react'
import  { BookOpen, Layers, Package, Star, Table } from 'react-feather';
import {  useNavigate} from 'react-router';
import { Routes,Route } from 'react-router-dom';
import './App.css';
import Repository from './Repository';
import Stars from './Stars'
import PropTypes from 'prop-types';
import Overview from './Overview';


function ProfileDetails({user}){

const navigate = useNavigate();


    function displayRepos(){
        navigate('repositories')
        document.getElementById('repos').classList.add('clicked')
    }

    function displayOverview(){
        navigate('overview')
        document.getElementById('overview').classList.add('clicked')
        
    }

    function displayProjects(){
        navigate('projects')
        document.getElementById('projects').classList.add('clicked')
        
    }

    function displayStars(){
        navigate('stars')
        document.getElementById('stars').classList.add('clicked')

    }


    return(

        <React.Fragment>
            <div className='header'>
            
                <button className='heading' id='overview' onClick={displayOverview}>
                    <BookOpen size="16" /> Overview</button>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <button className='heading' id='repos' onClick={displayRepos}>
                    <Layers size="16" /> Repositories</button> 
                &nbsp;&nbsp;&nbsp;&nbsp;
                <button className='heading' id='projects' onClick={displayProjects}>
                    <Table size="16" /> Projects</button> 
                &nbsp;&nbsp;&nbsp;&nbsp;
                <button className='heading' id='packages'>
                    <Package size="16" /> Packages</button> 
                &nbsp;&nbsp;&nbsp;&nbsp;
                <button className='heading' id='stars' onClick={displayStars}>
                <Star size="16" /> Stars</button> 
            </div>

        <div className="body">
           
                <Routes>
                <Route path="/" element={<Overview user={user}/> } />
                    <Route path="repositories" element={<Repository user ={user}/> } />
                    <Route path="stars" element={<Stars user={user}/> } />
                    <Route path="overview" element={<Overview user={user}/> } />
                </Routes>
           
         
        </div> 
     
        </React.Fragment>
    )
}

ProfileDetails.propTypes = {
    user: PropTypes.object
}


export default ProfileDetails