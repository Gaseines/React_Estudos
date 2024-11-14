import React from "react";

const UserDetails = () => {
  const Users = [
    { id: 1, nome: "Gabriel", job: "Programador", age: 21 },
    { id: 2, nome: "Luiza", job: "Arquiteta", age: 22 },
    { id: 3, nome: "Mariana", job: "null", age: 9 },
    { id: 4, nome: "Aurora", job: "Estudante", age: 12 },
  ];

  return (
    <div style={{ width: "500px", margin: "auto" }}>
      <ul style={{ textAlign: "start" }}>
        <>
          {Users.map((user) => (
            <>
              <li style={{ listStyle: "none" }}>
                <p>Nome: {user.nome}</p>
                <p>Idade: {user.age}</p>
                <p>Profissão: {user.job}</p>
              </li>
              {user.age >= 18 && (
                <p
                  style={{
                    fontWeight: "bolder",
                    marginBottom: "50px",
                    color: "green",
                  }}
                >
                  Esse usuário pode tirar carteira de motorista!!
                </p>
              )}
              {user.age <= 18 && (
                <p
                  style={{
                    fontWeight: "bolder",
                    marginBottom: "50px",
                    color: "red",
                  }}
                >
                  Esse usuário não pode tirar carteira de motorista!!
                </p>
              )}
            </>
          ))}
        </>
      </ul>
    </div>
  );
};

export default UserDetails;
