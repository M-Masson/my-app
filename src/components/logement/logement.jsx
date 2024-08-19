import { useParams } from 'react-router-dom'
import array from '../../data/logements.json'
import DropDown from '../dropdown/dropdown'
import Rating from './rating'

function Information(){
    const { id } = useParams()
    const logementsdata = array.find(logement => logement.id === id)

    return(
        <div id='all-info'>
            <div id='top-info'>
                <div id="title">
                    <h1>{logementsdata.title}</h1>
                    <p>{logementsdata.location}</p>
                    <div className='tags'>
                        {logementsdata.tags.map((tag, index) => (
                            <div key={index}>
                                {tag}
                            </div>
                        ))}
                    </div>
                </div>
                <div id="profil">
                    <div id='host'>
                        <p id='nom'>{logementsdata.host.name}</p>
                        <div id='photo-profil'>
                            <img src={logementsdata.host.picture} alt="icone de profil" />
                        </div>
                    </div>
                    <Rating/>
                </div>
            </div>
            <div id="details">
                <DropDown />
            </div>
        </div>
    )

}
export default Information