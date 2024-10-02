import { useEffect, useState } from "react"

import Input from "../form/Input"
import Select from "../form/Select"
import SubmitButton from "../form/SubmitButton"
import styles from "./ProjectForm.module.css"


function ProjectForm({ textBtn }) {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/categories', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then((resp) => resp.json())
        .then((data) => {
            setCategories(data)
        })
        .catch((err) => console.log(err))
    }, [])

    return (
        <form className={styles.form} >
            <Input
                text="Nome do Projeto"
                name="name"
                type="text"
                placeholder="Insira o nome do projeto"
            />

            <Input
                type="number"
                text="Orçamento do Projeto"
                name="budget"
                placeholder="Insira o orçamento total"
            />

            <Select 
            text="Selecione a categoria"
            name="category_id"
            options={categories}
            />

            <SubmitButton text={textBtn} />

        </form>
    )
}

export default ProjectForm