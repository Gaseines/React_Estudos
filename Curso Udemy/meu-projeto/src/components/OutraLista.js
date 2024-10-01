function OutraLista({ itens }) {
    return (
        <>
            <h3>Lista de coisas boas!</h3>
            {itens.length > 0 ? (
                itens.map((item, index) => (
                    <p key={index}>{item}</p>
                ))
            ) : (
                <p>Lista sem itens!</p>
            )
                
            }

        </>
    )
}

export default OutraLista