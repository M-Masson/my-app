import React from "react";
import ReactDom from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, useParams } from "react-router-dom";
import Home from './pages/home/home';
import Logements from './pages/logements/logement';
import Error from './pages/error/error';
import About from './pages/about/about';
import Header from './components/Header/header';
import Footer from './components/footer/footer';
import array from './data/logements.json';
import './styles/style.sass';
import { Navigate } from "react-router-dom";

const rootElement = document.getElementById('root');
const root = ReactDom.createRoot(rootElement);

function LogementId (){
    const { id } = useParams()
    const logementsdata = array.find(logement => logement.id === id)

    if(!logementsdata){
        return <Navigate to="/error" replace={true} />
       
    }
    
    return <Logements logement={logementsdata} />
}



root.render(
    <React.StrictMode>
        <Router>
            <Header/>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/home" element={<Home />}/>
                <Route  path ="/logements/:id" element={<LogementId/>}/>
                <Route path = "/about" element={<About/>}/>
                <Route path ="/error" element={<Error/>}/>
                <Route path ="*" element={<Error/>}/>
            </Routes>
            <Footer/>
        </Router>
   </React.StrictMode>
);

