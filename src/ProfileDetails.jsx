import React, { useState } from 'react'
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

    const [active,setActive] = useState('overview');
    return(
    <React.Fragment>
        <div className='header'>
            {
                [
                    {
                        tabName: "overview",
                        tabLabel: "Overview",
                        TabIcon: BookOpen,
                    },
                    {
                        tabName: "repositories",
                        tabLabel: "Repositories",
                        TabIcon: Layers,
                    },
                    {
                        tabName: "packages",
                        tabLabel: "Packages",
                        TabIcon: Package,
                    },
                    {
                        tabName: "projects",
                        tabLabel: "Projects",
                        TabIcon: Table,
                    },
                    {
                        tabName: "stars",
                        tabLabel: "Stars",
                        TabIcon: Star,
                    }
                ].map(({ tabName, tabLabel, TabIcon}) => (
                    <button className={`heading ${active === tabName ? 'clicked' : ''}`} key={tabName} onClick={()=>{
                        setActive(tabName)
                        navigate(tabName)
                    }}>
                        <TabIcon size="16" />  {tabLabel}
                    </button>
                ))
            }
               
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