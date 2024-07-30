import image1 from '../assets/image1.png'
import fleche from '../assets/fleche.png'

function About(){
    return (
        <div id="container">
            <div id='img-container'>
            <img id="image" src={image1} alt="paysage montagne" />
            </div>
            <div id='value'>
                <div className='div-element'>
                    <div className='div-value'>
                        <h1>Fiabilité</h1>
                        <img src={fleche} alt="fleche déroulante" />
                    </div>
                    <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.</p>
                </div>
                <div className='div-element'>
                    <div className='div-value'>
                        <h1>Respect</h1>
                        <img src={fleche} alt="fleche déroulante" />
                    </div>
                    <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
                </div>
                <div className='div-element'>
                    <div className='div-value'>
                        <h1>Service</h1>
                        <img src={fleche} alt="fleche déroulante" />
                    </div>
                    <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
                </div>
                <div className='div-element'>
                    <div className='div-value'>
                        <h1>Sécurité</h1>
                        <img src={fleche} alt="fleche déroulante" />
                    </div>
                    <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
                </div>
            </div>
        </div>
    )
}

export default About