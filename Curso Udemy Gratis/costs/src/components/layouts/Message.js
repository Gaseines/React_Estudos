import { useEffect, useState } from 'react'; // Importa os hooks useEffect e useState do React

import styles from './Message.module.css'; // Importa os estilos CSS específicos para o componente Message

function Message({ type, msg }) {
    // Declaração do estado 'visible' que controla se a mensagem será exibida ou não
    const [visible, setVisible] = useState(false); // Inicializa como 'false' (mensagem não visível)

    // useEffect que será executado sempre que a 'msg' mudar
    useEffect(() => {
        if (!msg) { // Se não houver uma mensagem (msg for undefined ou null)
            setVisible(false); // Garante que a mensagem não será exibida
            return; // Retorna imediatamente para evitar a execução do código abaixo
        }

        setVisible(true); // Se houver uma mensagem, torna a mensagem visível

        // Define um temporizador para esconder a mensagem após 3 segundos (3000 milissegundos)
        const timer = setTimeout(() => {
            setVisible(false); // Após 3 segundos, torna a mensagem invisível
        }, 3000);

        // Retorna uma função de limpeza que será executada antes de cada nova execução do efeito
        // ou quando o componente for desmontado, garantindo que o temporizador seja cancelado
        return () => clearTimeout(timer); 
    }, [msg]); // O efeito será executado sempre que o valor de 'msg' mudar

    return (
        <>
            {visible && ( // Renderiza o JSX condicionalmente, apenas se 'visible' for true
                <div className={`${styles.message} ${styles[type]}`}> {/* Aplica as classes CSS dinamicamente */}
                    {msg} {/* Exibe a mensagem */}
                </div>
            )}
        </>
    );
}

export default Message; // Exporta o componente Message para ser utilizado em outros lugares da aplicação
