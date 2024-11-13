
import { useState } from 'react'

const ListRender = () => {

    const [list] = useState(["Gabriel", "Luiza", "Mariana"])

    const [users, setUsers] = useState([
        { id: 1841566, name: "Gabriel", age: 21 },
        { id: 2652652, name: "Luiza", age: 22 }
    ])

    const deleteName = (dado) =>{
        dado = "Gabriel"
        setUsers((prevUsers) => {
            return prevUsers.filter((user) => dado != user.name)
        })
    }

    return (
        <div>
            <ul>
                {/* Forma quando não temos a key */}
                {list.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>
            <ul>
                {/* Forma quando ja temos o ID vindo do db */}
                {users.map((user) => (
                    <li key={user.id}>{user.name} - {user.age}</li>
                ))}
                <button onClick={deleteName}>Deletar Gabriel</button>
            </ul>

        </div>
    )
}

export default ListRender
