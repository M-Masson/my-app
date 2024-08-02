import React from "react";
import ReactDom from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/home/home';
import Logements from './pages/logements/logement';
import Error from './pages/error/error';
import About from './pages/about/about';
import Header from './components/Header/header';
import Footer from './components/footer/footer';
import './styles/style.sass'


const rootElement = document.getElementById('root');
const root = ReactDom.createRoot(rootElement);


root.render(
    <React.StrictMode>
        <Router>
            <Header/>
            <Routes>
                <Route path="/home" element={<Home />}/>
                <Route path ="/logements" element={<Logements/>}/>
                <Route path = "/about" element={<About/>}/>
                <Route path ="*" element={<Error/>}/>
            </Routes>
            <Footer/>
        </Router>
   </React.StrictMode>
);