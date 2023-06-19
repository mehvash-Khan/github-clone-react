
import React,{useState} from 'react'
import { BrowserRouter,Routes, Route} from 'react-router-dom';
import Table from './Table'

import Home from './Home'
export const context = React.createContext();

function App() {




  const [name,setName] = useState('')
  const data ={
    name: name,
    setName: setName
  };


  return (
    <context.Provider value={data} >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/table" element={<Table />} />
        </Routes>
      </BrowserRouter>
    </context.Provider>
  );
}








export default App;
