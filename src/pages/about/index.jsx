import image1 from '../../assets/images/image1.png'
import DropDown from '../../components/dropdown/index'

function About(){
    return (
        <div id="container">
            <div id='img-container'>
                <img id="image" src={image1} alt="paysage montagne" />
            </div>
            <DropDown/>
        </div>
    )
}

export default About