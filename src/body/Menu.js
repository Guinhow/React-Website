import './Menu.css'
import { Link } from 'react-router-dom';

const subMenu = [
  { name: 'Serviços', path: '/servicos' },
  { name: 'Produtos', path: '/produtos' },
  { name: 'Sobre nós', path: '/sobre-nos' },
  { name: 'Contato', path: '/contato' }
];


function Menu() {
    return (
        <ul className='App-menu'>
          { subMenu.map( (x) => (<li className='submenu' key={x.name}>
            <Link to={x.path} className='menu-link'>{x.name}</Link>
          </li>))} 
        </ul>       
        

    )
}

export default Menu