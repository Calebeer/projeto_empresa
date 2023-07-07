import styles from './Navbar.module.css'
import {Link} from 'react-router-dom'


function Navbar(){
    return(
        <nav>
        <div className={styles.menubtn}>
            <i class="fa fa-bars fa-2x" onclick="menuShow()"></i>
        </div>

        <ul>
            <li> 
                <Link className='link' to="/" > Home</Link>
              </li>
            <li>
            <Link className='link' to="/newproject" >Projetos</Link>
              </li>
              <li> 
            <Link className='link' to="/company" >Empresa</Link>
               </li>
            <li>     
            <Link className='link' to="/contact" >Contato</Link>
               </li>
               
        </ul>
    </nav>
    )
}

export default Navbar;