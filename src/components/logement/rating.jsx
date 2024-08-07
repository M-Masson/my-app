import { useParams } from 'react-router-dom'
import array from '../../data/logements.json'
import starOn from '../../assets/svg/star-on.svg'
import starOff from '../../assets/svg/star-off.svg'

function Rating(){
    const { id } = useParams()
    const logementsdata = array.find(logement => logement.id === id)

    const rating = parseInt(logementsdata.rating, 10)
    
    const stars = Array.from({ length: 5 }, (unusedValue, index) => (
        <img key={index} src={index < rating ? starOn : starOff} alt="étoile de notation" />
    ))

    return <div id='rating'>{stars}</div>;
}

export default Rating