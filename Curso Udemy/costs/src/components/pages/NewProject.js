import { useNavigate } from "react-router-dom"; // Importa o hook useNavigate para navegação programática entre rotas
import ProjectForm from "../project/ProjectForm"; // Importa o componente de formulário ProjectForm
import styles from "./NewProject.module.css"; // Importa os estilos CSS específicos para esse componente

function NewProject() {
  const navigate = useNavigate(); // Hook useNavigate, usado para redirecionar o usuário após uma ação

  // Função para criar um novo projeto e enviar para o servidor
  function createPost(project) {
    project.cost = 0; // Inicializa o custo do projeto com 0
    project.services = []; // Inicializa a lista de serviços do projeto como um array vazio

    // Faz uma requisição POST para o servidor, enviando os dados do projeto
    fetch('http://localhost:5000/projects', {
      method: 'POST', // Define o método como POST para enviar dados
      headers: {
        'Content-Type': 'application/json', // Define o tipo de conteúdo como JSON
      },
      body: JSON.stringify(project), // Converte o objeto project em uma string JSON e envia como corpo da requisição
    })
    .then((resp) => resp.json()) // Quando a resposta é recebida, converte-a de JSON para objeto JavaScript
    .then((data) => {
      console.log(data); // Exibe os dados retornados no console para depuração
      // Após o sucesso, redireciona o usuário para a página de projetos
      navigate('/projects', { state: { message: 'Projeto enviado com sucesso!' } }); 
    })
    .catch((err) => console.log(err)); // Se ocorrer um erro, ele é registrado no console
  }

  return (
    <div className={styles.new_project_container}> {/* Aplica as classes de estilo do arquivo CSS */}
      <h1>Criar Projeto</h1> {/* Título da página */}
      <p>Crie seu projeto para depois adicionar os serviços</p> {/* Descrição explicativa da página */}
      <ProjectForm 
        handleSubmit={createPost} // Passa a função createPost para o ProjectForm, para ser chamada ao submeter o formulário
        textBtn="Criar Projeto" // Define o texto do botão de envio como "Criar Projeto"
      />
    </div>
  );
}

export default NewProject; // Exporta o componente para ser usado em outras partes da aplicação
