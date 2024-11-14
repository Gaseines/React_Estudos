import React from 'react'

const PropsCarDetails = ({id, nome, idade}) => {
    return (
        <div>
            <ul>
                <li>ID: {id}</li>
                <li>Nome do funcionario: {nome}</li>
                <li>Idade: {idade}</li>
            </ul>
        </div>
    )
}

export default PropsCarDetails
