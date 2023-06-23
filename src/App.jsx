
import React,{useState} from 'react'
import { BrowserRouter,Routes, Route} from 'react-router-dom';
import Table from './Table'
import Profile from './Profile'
import Home from './Home'
import Navigation from './Navigation';

export const context = React.createContext();

function App() {



  const [followers, setFollowers] = useState(JSON.parse(localStorage.getItem("follower")) ||  []);
  const setFollowers2 = (x) => {
    setFollowers(x);
    localStorage.setItem('follower',JSON.stringify(x));
  }


  return (
    <React.Fragment>
    <Navigation />
      <context.Provider value={{followers, setFollowers: setFollowers2}}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/table/:name" element={<Table />} />
            <Route path="/read/:name/*" element={<Profile />}  />
          </Routes>
        </BrowserRouter>
      </context.Provider>  
      </React.Fragment>
    
  );
}








export default App;
