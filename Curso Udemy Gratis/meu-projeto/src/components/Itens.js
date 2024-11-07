import PropTypes from 'prop-types'

function Itens({marca, ano_lancamento}){
    return(
        <>
        <li>{marca} - {ano_lancamento}</li>
        </>
    )
}
//Define o tipo da porps
Itens.propTypes = {
    marca: PropTypes.string.isRequired, //isRequired é para ser obrigatório
    ano_lancamento: PropTypes.number,
}

Itens.defaultProps = {
    marca: 'Faltou a marca',
    ano_lancamento: 0,

}

export default Itens