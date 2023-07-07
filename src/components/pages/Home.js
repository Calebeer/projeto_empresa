import styles from './Home.module.css'
import savings from '../../img/savings.svg'
import { Link } from 'react-router-dom';


function Home(){
    return(
        <div  className={styles.containerhome} >
            <h1 className={styles.frase} >Bem-vindo ao <a className={styles.palavra} >Costs</a> </h1>
            <p className={styles.subtitulo} >Comece a gerenciar os seus projetos agora mesmo!</p>
            <button className={styles.createproject} ><Link to="/newproject" > <p className={styles.buttonproject} >Projetos</p>  </Link>  </button>
            <img className={styles.imagem} src={savings} alt="Savings" />
        </div>
        
    )
}

export default Home;