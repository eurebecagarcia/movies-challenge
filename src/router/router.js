import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../components/header";
import Home from '../pages/home'
import Movies from '../pages/movies'
import Series from '../pages/series'

export default function AppRouter(){
    return(
     
            <Router>
            <Header/>
                <Routes>
                    <Route path='/' element={<Home/>}/>   
                    <Route path='/movies' element={<Movies/>}/> 
                    <Route path='/series' element={<Series/>}/> 
                </Routes>
            </Router>

    )
}