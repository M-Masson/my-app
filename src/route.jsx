import Error from './pages/error/error';
import About from './pages/about/about';
import Header from './components/Header/header';
import Footer from './components/footer/footer';
import Home from './pages/home/home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LogementId from './pages/logements/logementID';

function RoutesApp (){
    return(
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
    )
}
export default RoutesApp