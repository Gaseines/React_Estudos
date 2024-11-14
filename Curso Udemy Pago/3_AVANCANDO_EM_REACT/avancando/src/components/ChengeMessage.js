import React from 'react'

const ChengeMessage = ({handleChengeMessage}) => {
    const messages = ["oi", "Olá", "Hello", "Hi"]

    return (
        <div>
            <button onClick={() => handleChengeMessage(messages[0])} >1</button>
            <button onClick={() => handleChengeMessage(messages[1])} >2</button>
            <button onClick={() => handleChengeMessage(messages[2])} >2</button>
            <button onClick={() => handleChengeMessage(messages[3])} >3</button>
        </div>
    )
}

export default ChengeMessage
