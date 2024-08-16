import React, { useState } from 'react'
import array from '../../data/logements.json'
import { useParams } from 'react-router-dom'
import arrow from '../../assets/svg/arrow.svg'

function Carrousel(){
    const { id } = useParams()
    const logementsdata = array.find(logement => logement.id === id)
    const imgSlide = logementsdata.pictures
    const [currentIndex, setCurrentIndex] = useState(0)

    const Previous = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? imgSlide.length - 1 : prevIndex - 1
        )
    }

    const Next = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === imgSlide.length - 1 ? 0 : prevIndex + 1
        )
    }

    if (imgSlide.length > 1){
        return (
            <div id="carrousel">
                <img src={imgSlide[currentIndex]} alt="Slide" id='slide' />
                <img src={arrow} id='previous' alt="Previous" onClick={Previous} />
                <img src={arrow} id='next' alt="Next" onClick={Next} />
                <p>{currentIndex + 1}/{imgSlide.length}</p>
            </div>
        )
    } else {
        return (
            <div id="carrousel">
                <img src={imgSlide[0]} alt="Slide" />
            </div>
        )
    }
}

export default Carrousel