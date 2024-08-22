import { useLocation } from 'react-router-dom'
import image1 from '../../assets/images/image1.png'
import image2 from '../../assets/images/image2.png'



const BannerImg = ()=>{
    const location = useLocation()
     const isActive = location.pathname === `/home` || location.pathname === '/'
    return(
        <div id='img-container'>
            <div id={`${isActive ? 'div-background' : ''}`}>
                <h1>
                {`${isActive ? 'Chez vous, partout et ailleurs' : ''}`}
                </h1>
            </div>
            <img id="image" src ={`${isActive ? image2 : image1}`} className={`${isActive ? '' : 'banner-about'}`} alt="paysage"/>
            
        </div>
    )
}


export default BannerImg
