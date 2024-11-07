import Button from "./evento/Button"

function Eventos(){
    function meuEvento(){
        console.log("Primeiro Evento ativado!")
    }

    function segundoEvento(){
        console.log("Segundo Evento ativado!")
    }

    return(
        <div>
            <p>Clique para ativar o vento</p>
            <Button event={meuEvento} text="Primeiro Evento"/>
            <Button event={segundoEvento} text="Segundo Evento"/>
        </div>
    )
}

export default Eventos