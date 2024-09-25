import Itens from "./Itens"
 

function Lista(){
    return(
        <>
        <h1>Minha Lista</h1>
        <ul>
            <Itens marca="Ferrari" ano_lancamento={1975}/>
            <Itens marca="Honda" ano_lancamento={2003}/>
            <Itens marca="Nissan" ano_lancamento={2024}/>
            <Itens />
        </ul>
        </>
    )
}

export default Lista