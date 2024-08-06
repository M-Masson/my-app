import React from "react";
import ReactDom from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, useParams } from "react-router-dom";
import Home from './pages/home/home';
import Logements from './pages/logements/logement';
import Error from './pages/error/error';
import About from './pages/about/about';
import Header from './components/Header/header';
import Footer from './components/footer/footer';
import array from './data/logements.json'
import './styles/style.sass'


const rootElement = document.getElementById('root');
const root = ReactDom.createRoot(rootElement);

const LogementId = () => {

    const { id } = useParams()
    console.log(id)
    const logements = array.find(logement => logement.id === id)

    if(!logements){
        return (
            <Error /> 
        )
    }
    
    return <Logements logement={logements} />
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
                <Route path ="*" element={<Error/>}/>
            </Routes>
            <Footer/>
        </Router>
   </React.StrictMode>
);