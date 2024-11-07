function Pessoa({nome, idade, profissao, foto}){
    return(
        <div>
            <img src={foto} alt={nome} />
            <h2>Olá {nome} </h2>
            <p>Vi que você tem {idade} anos de idade</p>
            <p>E trabalha como {profissao}!</p>
        </div>
    )
}

export default Pessoa