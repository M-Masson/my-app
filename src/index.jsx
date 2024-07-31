import React from "react";
import ReactDom from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/home';
import Logements from './pages/logements';
import Error from './pages/error';
import About from './pages/about';
import Header from './components/Header';
import Footer from './components/footer';
import './styles/style.sass'


const rootElement = document.getElementById('root');
const root = ReactDom.createRoot(rootElement);


root.render(
    <React.StrictMode>
        <Router>
            <Header/>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path ="/logements" element={<Logements/>}/>
                <Route path = "/about" element={<About/>}/>
                <Route path ="*" element={<Error/>}/>
            </Routes>
            <Footer/>
        </Router>
   </React.StrictMode>
);