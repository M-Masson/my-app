import array from '../../data/logements.json'

function Gallery(){
    for(let index = 0 ; index<array.length ; index++){
    
    return(
        <div id='gallery'>
            {array.map((item, index) => (
                <div key={index} className="gallery-box">
                    <h2>{array[index].title}</h2>
                </div>
            ))}
        </div>

    )
    
    
    
    
    
    
    
    
}
}

export default Gallery