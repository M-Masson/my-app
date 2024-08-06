
import { useNavigate } from 'react-router-dom'
import array from '../../data/logements.json'



function Gallery(){
    const navigate = useNavigate()
    return(
        <div id='gallery'>
            {array.map((item, index) => (
                <div 
                key={index} className="gallery-box" 
                style={{backgroundImage: "url(" + item.cover + ")"}} 
                onClick={() => navigate(`/logements/${item.id}`)}>
                    <div className='overlay'>
                        <h2>{item.title}</h2>
                    </div>
                </div>
            ))}
        </div>
    )   
}

export default Gallery