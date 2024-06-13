import './logo.css';
import logo from '../images/logo.svg';


function Logo() {
    return(
        <div className='logo'>
          <img src={logo} alt='logo' className='img'></img>
          <p><strong>Scopatto Inc.</strong></p>
        </div>
    )
}

export default Logo