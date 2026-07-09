
import './App.css';

import React from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';


export default function App () {

    let pagesize=6;
    const apiKey=process.env.REACT_APP_NEWS_API;
    return (
      <>
        <Router>
          <Navbar/>

          <Routes>
              <Route exact path="" element={<News apiKey={apiKey} key="home" pageSize={pagesize} country="us" category="general"/>}></Route>
              <Route exact path="/home" element={<News apiKey={apiKey}  key="general" pageSize={pagesize} country="us" category="general"/>}></Route> 
              <Route exact path="/business" element={<News apiKey={apiKey}  key="business" pageSize={pagesize} country="us" category="business"/>}></Route> 
              <Route exact path="/technology" element={ <News apiKey={apiKey} key="technology" pageSize={pagesize} country="us" category="technology"/>}></Route> 
              <Route exact path="/entertainment" element={ <News apiKey={apiKey}  key="entertainment" pageSize={pagesize} country="us" category="entertainment"/>}></Route> 
              <Route exact path="/health" element={ <News apiKey={apiKey} key="health" pageSize={pagesize} country="us" category="health"/>}></Route> 
              <Route exact path="/sports" element={ <News apiKey={apiKey} key="sports" pageSize={pagesize} country="us" category="sports"/>}></Route> 
              <Route exact path="/science" element={ <News apiKey={apiKey} key="science" pageSize={pagesize} country="us" category="science"/>}></Route> 
          </Routes>

        </Router>
      </>
    )
  
}
