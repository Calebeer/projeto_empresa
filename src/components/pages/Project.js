import { useLocation } from "react-router-dom";
import Message from "../layout/Message";
import styles from './Project.module.css'
import Container from '../layout/Container'
import Loading  from "../layout/Loading";
import LinkButton from '../layout/LinkButton'
import ProjectCard from "../project/ProjectCard";
import { useState, useEffect } from "react";
import NotProject from '../layout/NotProject'


function Project(){

    const[projects, setProjects] = useState([])
    const[removeLoading, setRemoveLoading] = useState(false)
    
    const location = useLocation()
    let message = ''
    
    if (location.state){
        message = location.state.message
    }

    useEffect(() => {
        fetch('http://localhost:5000/projects',{
            method:'GET',
            headers:{
                'Content-Type':'application/json',
            },
        })
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
            setProjects(data)
            setRemoveLoading(true)
        })
        .catch((err) => console.log(err))
    },[])

    function removeProject(id){
        fetch(`http://localhost:5000/projects/${id}`,{
            method:'DELETE',
            headers:{
                'Content-Type':'application/json'
            },
        }).then(resp => resp.json )
        .then(data => {
            setProjects(projects.filter((project) => project.id !== id))
        })
        .catch(err => console.log(err ))
        }

        

    return(
        <div className={styles.project_container} >
            <div className={styles.title_container} >
                <h1>Meus Projetos</h1>
                <LinkButton to={'/newproject'} text={'Novo projeto'} />

            </div>
        {message &&  <Message type={'success'} msg={message}/>}
        <Container customClass="start">
            {projects.length > 0 &&
            projects.map((project) =>(
                <ProjectCard 
                id={project.id}
                name={project.name}
                budget={project.budget}
                category={project?.category?.name}
                key={project.id}
                handleRemove={removeProject}

                  />
            ))}
            {!removeLoading && <Loading/>}
            {removeLoading && projects.length === 0 && <NotProject/> }
        </Container>
        </div>
            
    )
}

export default Project;