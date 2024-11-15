import "./MyForm.css";

import { useState } from "react";

const MyForm = ({ user }) => {
  // 6 -Controlled Inputs
  const [name, setName] = useState(user ? user.name : "");
  const [email, setEmail] = useState(user ? user.email : "");

  const [bio, setBio] = useState("");
  const [role, setRole] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Formulário enviado");
    console.log(name, email, bio, role);
    // 7 - Limpa o input ao enviar
    setEmail("");
    setName("");
    setBio("");
  };

  return (
    <div>
      {/* 5 - Enviando dados do formulário */}
      <form onSubmit={handleSubmit}>
        {/* 1 - Criação de Form */}
        <div>
          <label htmlFor="name">Nome: </label>
          <input
            type="text"
            name="name"
            placeholder="Digite seu nome"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        {/* 2 - Label envonvendo Input (O mais correto a se fazer) */}
        <label>
          <span>E-mail: </span>
          <input
            type="text"
            name="email"
            placeholder="digite seu email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>
        {/* 8 - TextArea */}
        <label>
          <span>Bio: </span>
          <textarea
            name="bio"
            placeholder="Fale mais sobre vc "
            onChange={(e) => setBio(e.target.value)}
            value={bio}
          ></textarea>
        </label>
        {/* 9 - Select */}
        <label>
          <span>Função na empresa</span>
          <select
            name="role"
            onChange={((e) => setRole(e.target.value))}
          >
            <option value="user">Usuário</option>
            <option value="programer">Programador</option>
            <option value="adiv">Advogado</option>
          </select>
        </label>
        <input type="submit" value="enviar" />
      </form>
    </div>
  );
};

export default MyForm;
