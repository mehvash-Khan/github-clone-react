
import React from 'react'
import { BrowserRouter,Routes, Route} from 'react-router-dom';
import Table from './Table'
import Profile from './Profile'
import Home from './Home'


function App() {





 


  return (
    
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/table/:name" element={<Table />} />
          <Route path="/read/:name" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    
  );
}








export default App;
