import { useState, useEffect } from 'react'
import image1 from '../../assets/images/image1.png'
import image2 from '../../assets/images/image2.png'

const SectionImg = ()=>{
    const [image, setImage] = useState(image1)

    useEffect(()=> {
        const home = document.getElementById("home")
        if(home.classList.contains("underline-on")){
            setImage(image2)
        }
    },[])
    return(
        <div id='img-container'>
            <img id="image" src ={image} alt="paysage"/>
        </div>
    )
}

export default SectionImg
