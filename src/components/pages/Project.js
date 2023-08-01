import { useLocation } from "react-router-dom";
import Message from "../layout/Message";
import styles from './Project.module.css'
import Container from '../layout/Container'
import LinkButton from '../layout/LinkButton'
import ProjectCard from "../project/ProjectCard";

function Project(){
    
    const location = useLocation()
    let message = ''
    
    if (location.state){
        message = location.state.message
    }

    return(
        <div className={styles.project_container} >
            <div className={styles.title_container} >
                <h1>Meus Projetos</h1>
                <LinkButton to={'/newproject'} text={'Novo projeto'} />
            </div>
        {message &&  <Message type={'success'} msg={message}/>}
        <Container customClass="start">
            <ProjectCard/>
        </Container>
        </div>
            
    )
}

export default Project;