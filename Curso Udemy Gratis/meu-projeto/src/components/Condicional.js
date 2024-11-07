import { useState } from 'react'

function Condicional() {

    const [email, setEmail] = useState()
    const [usuarioEmail, setUsuarioEmail] = useState()

    function enviarEmail(e) {
        e.preventDefault()
        setUsuarioEmail(email)
    }

    function limparEmail(){
        setUsuarioEmail('')
    }

    return (
        <div>
            <h2>Cadastro de Email</h2>
            <form >
                <input
                    type="email"
                    placeholder="Digite seu e-mail..."
                    onChange={(e) => setEmail( e.target.value )}
                />
                <button onClick={enviarEmail}>Enviar</button>
            </form>
            {usuarioEmail && (
                <div>
                    <p>O email do usuário é: {usuarioEmail}</p>
                    <button onClick={limparEmail}>Limpar Email</button>
                </div>
            )}
        </div>
    )
}

export default Condicional