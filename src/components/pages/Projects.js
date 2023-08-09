import styles from './Projects.module.css';
import { Link, useNavigate, useParams } from 'react-router-dom';
import {useState, useEffect} from 'react'
import Loading from '../layout/Loading';
import Container from '../layout/Container'
import LinkButton from '../layout/LinkButton';
import Teste from '../layout/Teste';
import ProjectForm from '../project/ProjectForm';

function Projects(){
    
    const navigate = useNavigate();
    
    const {id} = useParams()

    const [project, setProject]= useState([])
    const [showProjectForm, setShowProjectForm] = useState(false)


    useEffect(()=>{
        fetch(`http://localhost:5000/projects/${id}`,{
            method:'GET',
            headers:{
                'Content-type': 'application/json'
            },
        })
        .then(resp => resp.json())
        .then((data) =>{
            setProject(data)
            
        })
        .catch((err) =>console.log(err))
        
    },[id])

    function toggleProjectForm(){
        setShowProjectForm(!showProjectForm)
        console.log(showProjectForm);
    }

    function editPost(project){
        fetch(`http://localhost:5000/projects/${project.id}`,{
            method:'PATCH',
            headers:{
                'Content-type': 'application/json'
            },
            body:JSON.stringify(project), 
        })
        .then(resp => resp.json())
        .then((data) =>{
            setProject(data) 
            navigate('/project', {msg: {message:'Projeto atualizado com sucesso!'}})

        })
        .catch((err) =>console.log(err))
    }

    return(<>
    
       {project.name ?
       <div className={styles.project_details} >
        <Container customClass="column">
           <div  className={styles.details_container} >
            <h1>Projeto: {project.name}</h1>
            <button onClick={toggleProjectForm} className={styles.botao}  >
                {!showProjectForm ? 'Editar projeto' : 'Fechar'}
                </button>
                {!showProjectForm ? (
                    <div className={styles.project_info}>
                        <p>
                            <span>Categoria: </span>{project.category.name}
                        </p>
                        <p>
                            <span>Total de orçamento: </span>{project.budget}
                        </p>
                        <p>
                            <span>Total utilizado: </span>R${project.cost}
                        </p>
                        
                    </div>
 
                ) : ( 
                    <div className={styles.project_info}>
                        <ProjectForm handleSubmit={editPost} btnText={'Concluir edição'} projectData={project} />
                    </div>
                )}
                </div>
        </Container>
       </div>
       :(
        <Loading/>
       )}
    </>)
}

export default Projects;