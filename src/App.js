
import './App.css';

import Details from './component/Details';
import Newmovie from './component/Newmovie';

import {BrowserRouter as Router, Routes,Route } from 'react-router-dom';

import Main from './component/Main';
import Navbar from './component/Navbar';

function App() {
  
  return (
    <div>
      <Router>
     
      
      <Navbar/>    
       
       <Routes>
       <Route path="/Newmovie" element={<Newmovie/>} />
       <Route path="/Details" element={ <Details/> } />
       <Route path="/" element={ <Main/> } />
       </Routes>
      
      
      </Router>
    </div>
  )
}


export default App;
