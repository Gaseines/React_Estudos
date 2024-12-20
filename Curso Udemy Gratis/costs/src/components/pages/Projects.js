import { useLocation } from "react-router-dom"
import { useEffect, useState } from "react"

import Message from "../layouts/Message"
import styles from './Project.module.css'
import LinkButton from "../layouts/LinkButton"
import Container from "../layouts/Container"
import ProjectCard from "../project/ProjectCard"


function Projects() {

    const [projects, setProjects] = useState([])

    const location = useLocation()
    let message = ''
    if (location.state) {
        message = location.state.message
    }

    useEffect(() => {
        fetch('http://localhost:5000/projects', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        }).then((res) =>
            res.json()
        ).then((data) => {
            console.log(data)
            setProjects(data)
        }).catch((err) => {
            console.log(err)
        });
    }, [])

    return (
        <div className={styles.project_container} >
            <div className={styles.title_container} >
                <h1>Meus Projetos</h1>
                <LinkButton to="/newproject" text="Criar Projeto" />
            </div>
            {message && <Message type="sucess" msg={message} />}

            <Container customClass="start">
                {projects.length > 0 &&
                    projects.map((project) =>
                        <ProjectCard
                            id={project.id}
                            name={project.name}
                            budget={project.budget}
                            category={project.category.name}
                            key={project.id}
                        />)}

            </Container>
        </div>
    )
}

export default Projects