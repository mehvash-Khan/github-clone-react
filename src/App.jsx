
import React,{useState} from 'react'
import { BrowserRouter,Routes, Route} from 'react-router-dom';
import Table from './Table'

import Home from './Home'


function App() {
  const [name,setName] = useState('')
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home setName={setName}/>} />
        <Route path="/table" element={<Table name={name} />} />
      </Routes>
    </BrowserRouter>
  );
}








export default App;
