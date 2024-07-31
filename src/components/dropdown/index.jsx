import fleche from '../../assets/images/fleche.png'

let dropDownOpen = false

function DropDown(){
    return(
        <div id='value'>
            <div className='div-element'>
                <div className='div-value'>
                    <h1>Fiabilité</h1>
                    <img className='arrow' src={fleche} alt="fleche déroulante" onClick={()=>{
                        const imgDropdown = document.querySelector('.arrow')
                        const txtDropdown = document.querySelector('#p-fiabilite')
                        if(dropDownOpen == false){
                            imgDropdown.classList.add("dropdown-open-img")
                            txtDropdown.classList.remove("dropdown-close-txt")
                            txtDropdown.classList.add("p-fiabilite")
                            dropDownOpen = true
                        }else{
                            imgDropdown.classList.remove("dropdown-open-img")
                            txtDropdown.classList.add("dropdown-close-txt")
                            txtDropdown.classList.remove("p-fiabilite")
                            dropDownOpen = false
                        }
                    } 
                    }/>
                </div>
                <p id='p-fiabilite' className='dropdown-close-txt'>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.</p>
            </div>
        </div>
    )
}
export default DropDown