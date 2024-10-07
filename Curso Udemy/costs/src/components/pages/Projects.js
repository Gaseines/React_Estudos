import { useLocation } from "react-router-dom"

import Message from "../layouts/Message"
import styles from './Project.module.css'
import LinkButton from "../layouts/LinkButton"
import Container from "../layouts/Container"

function Projects() {
    const location = useLocation()
    let message = ''
    if (location.state) {
        message = location.state.message
    }

    return (
        <div className={styles.project_container} >
            <div className={styles.title_container} >
                <h1>Meus Projetos</h1>
                <LinkButton to="/newproject" text="Criar Projeto" />
            </div>
            {message && <Message type="sucess" msg={message} />}

            <Container customClass="start">
                Projetos...
            </Container>
        </div>
    )
}

export default Projects