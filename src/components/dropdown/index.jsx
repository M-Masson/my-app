import fleche from '../../assets/images/fleche.png'
import React, { useState } from 'react'

const dropdownBar = [
    {title:"Fiabilité", text:"Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."}, 
    {title:"Respect", text:"La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."}, 
    {title:"Service", text:"La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."}, 
    {title:"Sécurité", text:"La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."}
]

const element = dropdownBar

function DropDown() {
    // Initialisation de l'état pour stocker l'ouverture/fermeture de chaque élément
    const [openStates, setOpenStates] = useState(Array(element.length).fill(false))

    // Fonction pour basculer l'état d'ouverture/fermeture pour un élément spécifique
    const toggleDropdown = (index) => {
        setOpenStates(prevState => {
            const newState = [...prevState]
            newState[index] = !newState[index]
            return newState
        })
    }

    return (
        <div id='value'>
            {element.map((item, index) => (
                <div key={index} className={`div-element ${openStates[index] ? 'div-open':''}`}>
                    <div className='div-value'>
                        <h1>{item.title}</h1>
                        <img
                            className={`arrow ${openStates[index] ? 'dropdown-open-img' : ''}`}
                            src={fleche}
                            alt="fleche déroulante"
                            onClick={() => toggleDropdown(index)}/>
                    </div>
                    <p
                        id='p-fiabilite'
                        className={openStates[index] ? 'p-fiabilite' : 'dropdown-close-txt'}>
                        {item.text}
                    </p>
                </div>
            ))}
        </div>
    )
}

export default DropDown;