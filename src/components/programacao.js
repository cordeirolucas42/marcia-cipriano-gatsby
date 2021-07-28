import * as React from "react"
// import Accordion from "react-bootstrap/Accordion"

import 'bootstrap/dist/css/bootstrap.min.css'

const Programacao = () => {
    const prog = {
        sexta_noite: {
            titulo: "É impossível não comunicar",
            dia: "Sexta à noite",
            topicos: [
                "A voz é uma expressão da identidade",
                "O valor da escuta no processo de comunicação",
                "Comunicação e emoção – a voz do corpo",
                "Construindo a sua Linha Mestra para uma fala autêntica"
            ]
        },
        sabado_manha: {
            titulo: "Medo, que bicho é esse?",
            dia: "Sábado de manhã",
            topicos: [
                "Conhecendo e desafiando os medos existenciais",
                "Rompendo com a autodesqualificação",
                "Elevando a autoestima e a autoaceitação",
                "Encarando a vergonha e ativando o modo coragem",
                "ráticas para aprender a lidar com o medo"
            ]
        },
        sabado_tarde: {
            titulo: "Fale com firmeza",
            dia: "Sábado à tarde",
            topicos: [
                "Os três pilares da expressão verbal",
                "Como se preparar para uma apresentação",
                "SIM e NÃO - Conversação assertiva nas relações interpessoais",
                "Práticas para aperfeiçoar um fala que gere conexão e intimidade"
            ]
        },
        domingo_manha: {
            titulo: "Chame a sua voz",
            dia: "Domingo de manhã",
            topicos: [
                "Ancorando a mudança e assumindo um posicionamento",
                "Preparação para a apresentação em grupo com feedback",
                "EU no centro da roda - mensagem, voz e presença"
            ]
        }
    }

    return (
        // <>
        // <Accordion>    
        //     {Object.keys(prog).map((key,index) => (
        //         <Accordion.Item eventKey={index.toString()}>
        //             <Accordion.Header>{prog[key].titulo}</Accordion.Header>
        //             <Accordion.Body>
        //             <ul>
        //                 {prog[key].topicos.map((topico) => (
        //                     <li>{topico}</li>
        //                 ))}
        //             </ul>
        //             </Accordion.Body>
        //         </Accordion.Item>
        //     ))}
        // </Accordion>
        // </>

        <>
            <h2>Programação:</h2>
            {Object.keys(prog).map((key, index) => (
                <div>
                    <h4>{prog[key].dia}:</h4>
                    <h5>"{prog[key].titulo}"</h5>
                    <ul>
                        {prog[key].topicos.map((topico) => (
                            <li>{topico}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </>
    )
}

export default Programacao