import { useEffect, useState } from "react"

// Importa componentes personalizados (Input, Select, SubmitButton) e os estilos CSS
import Input from "../form/Input"
import Select from "../form/Select"
import SubmitButton from "../form/SubmitButton"
import styles from "./ProjectForm.module.css"

// Componente funcional ProjectForm
function ProjectForm({ handleSubmit, textBtn, projectData }) {

    // useState para gerenciar o estado das categorias disponíveis e do projeto atual
    const [categories, setCategories] = useState([]) // Armazena as categorias obtidas da API
    const [project, setProject] = useState(projectData || {}) // Armazena os dados do projeto (se houver, ou um objeto vazio)

    // useEffect para buscar as categorias da API quando o componente é montado
    useEffect(() => {
        fetch('http://localhost:5000/categories', {
            method: 'GET', // Método de requisição HTTP GET para obter dados
            headers: {
                'Content-Type': 'application/json', // Define o tipo de conteúdo como JSON
            },
        })
            .then((resp) => resp.json()) // Converte a resposta da API em JSON
            .then((data) => {
                setCategories(data) // Armazena as categorias obtidas no estado
            })
            .catch((err) => console.log(err)) // Captura e exibe erros no console, se houver
    }, []) // O array vazio [] faz com que o useEffect seja executado apenas uma vez, ao montar o componente

    // Função chamada ao submeter o formulário
    const submit = (e) => {
        e.preventDefault() // Previne o comportamento padrão de recarregar a página
        handleSubmit(project) // Chama a função de callback handleSubmit (passada como prop) com os dados do projeto
    }

    // Função para lidar com mudanças nos campos de input (texto e número)
    function handleChenge(e) {
        // Atualiza o estado do projeto com o novo valor digitado no campo de formulário
        setProject({ ...project, [e.target.name]: e.target.value })
    }

    // Função para lidar com a seleção da categoria
    function handleCategory(e) {
        // Atualiza o estado do projeto, definindo o ID e o nome da categoria selecionada
        setProject({
            ...project, // Mantém o estado atual do projeto
            category: {
                id: e.target.value, // Define o ID da categoria com base no valor selecionado
                name: e.target.options[e.target.selectedIndex].text, // Define o nome da categoria com base no texto selecionado
            }
        })
    }

    // Retorna o JSX que define o formulário
    return (
        <form onSubmit={submit} className={styles.form} >
            {/* Componente Input para o nome do projeto */}
            <Input
                text="Nome do Projeto"
                name="name"
                type="text"
                placeholder="Insira o nome do projeto"
                handleOnChange={handleChenge} // Passa a função handleChange como prop para lidar com mudanças
                value={project.name ? project.name : ''} // Define o valor controlado do campo (se houver nome, usa-o; senão, vazio)
            />

            {/* Componente Input para o orçamento do projeto */}
            <Input
                type="number"
                text="Orçamento do Projeto"
                name="budget"
                placeholder="Insira o orçamento total"
                handleOnChange={handleChenge} // Usa a mesma função handleChange
                value={project.budget ? project.budget : ''} // Define o valor controlado do campo (se houver orçamento, usa-o; senão, vazio)
            />

            {/* Componente Select para a seleção da categoria */}
            <Select
                text="Selecione a categoria"
                name="category_id"
                options={categories} // Passa as categorias obtidas da API para o Select
                handleOnChange={handleCategory} // Passa a função handleCategory para lidar com a seleção de categoria
                value={project.category ? project.category.id : ''} // Define o valor controlado com base no ID da categoria (se houver)
            />

            {/* Componente SubmitButton para enviar o formulário */}
            <SubmitButton text={textBtn} />
        </form>
    )
}

export default ProjectForm
