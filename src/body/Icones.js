import './Icones.css'
import perfil from '../images/perfil.svg'
import sacola from '../images/sacola.svg'
const icons = [perfil, sacola]

function Icones() {
    return (
        <ul className='icons'>
          { icons.map( (y) => (<li className='icone'><img src={y} alt='img'></img></li>))} 
        </ul>

    )
}

export default Icones