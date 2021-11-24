import React from 'react';
import './App.css';
import Nav from '../Nav';
import Home from '../Home/Home';
import Header from '../Meeting/meetingList/Header';
import About from '../About';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';



const App = () => {
  
  return (
    <Router>
        <Nav />
        
        <Routes>
          <Route path="/" exact element={<Home/>}/>
          <Route path='/meeting' element={<Header/>}/>
          <Route path='/about' element={<About/>} />
        </Routes>
        
    </Router>
        
      
  );
}


export default App;

