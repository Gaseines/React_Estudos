import { useNavigate } from "react-router-dom";
import ProjectForm from "../project/ProjectForm";
import styles from "./NewProject.module.css";

function NewProject() {
  const navigate = useNavigate(); // Nome corrigido para 'navigate'

  function createPost(project) {
    project.cost = 0;
    project.services = [];

    fetch('http://localhost:5000/projects', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(project),
    })
    .then((resp) => resp.json()) // Corrigido o uso de then()
    .then((data) => {
      console.log(data);
      // Redirecionamento após o sucesso
      navigate('/projects', { state: { message: 'Projeto enviado com sucesso!' } });
    })
    .catch((err) => console.log(err));
  }

  return (
    <div className={styles.new_project_container}>
      <h1>Criar Projeto</h1>
      <p>Crie seu projeto para depois adicionar os serviços</p>
      <ProjectForm handleSubmit={createPost} textBtn="Criar Projeto" />
    </div>
  );
}

export default NewProject;
