import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Container, Row, Col } from "react-bootstrap"

import 'bootstrap/dist/css/bootstrap.min.css'

const Programacao = () => {
    const prog = {
        sexta_noite: {
            titulo: "É impossível não comunicar",
            data: "03/09",
            dia: "Sexta às 18h30",
            icone: "../images/voice.png",
            topicos: [
                "A voz é uma expressão da identidade",
                "O valor da escuta no processo de comunicação",
                "Comunicação e emoção – a voz do corpo",
                "Construindo a sua Linha Mestra para uma fala autêntica"
            ]
        },
        sabado_manha: {
            titulo: "Medo, que bicho é esse?",
            data: "04/09",
            dia: "Sábado às 9h",
            icone: "../images/voice.png",
            topicos: [
                "Conhecendo e desafiando os medos existenciais",
                "Rompendo com a autodesqualificação",
                "Elevando a autoestima e a autoaceitação",
                "Encarando a vergonha e ativando o modo coragem",
                "Práticas para aprender a lidar com o medo"
            ]
        },
        sabado_tarde: {
            titulo: "Fale com firmeza",
            data: "04/09",
            dia: "Sábado às 14h",
            icone: "../images/voice.png",
            topicos: [
                "Os três pilares da expressão verbal",
                "Como se preparar para uma apresentação",
                "SIM e NÃO - Conversação assertiva nas relações interpessoais",
                "Práticas para aperfeiçoar um fala que gera conexão e intimidade"
            ]
        },
        domingo_manha: {
            titulo: "Chame a sua voz",
            data: "05/09",
            dia: "Domingo às 9h",
            icone: "../images/voice.png",
            topicos: [
                "Ancorando a mudança e assumindo um posicionamento",
                "Preparação para a apresentação em grupo com feedback",
                "EU no centro da roda - mensagem, voz e presença"
            ]
        }
    }

    return (
        <section className="bodySection">
            <h2>Programação:</h2>
            <Container>
                {/* SEXTA A NOITE */}
                <Row xs={1} className="periodBlock">
                    <Col md={3} className="dateBlock d-flex flex-column justify-content-center align-items-center">
                        <p className="dateBig">{prog["sexta_noite"].data}</p>
                        <p className="dateSmall">{prog["sexta_noite"].dia}</p>
                    </Col>
                    <Col md={3} className="iconBlock d-flex flex-column justify-content-center align-items-center">
                        <StaticImage className="themeIcon" src={`../images/communication.png`} alt="ícone pessoa falando"></StaticImage>
                        <p className="themeTitle">{prog["sexta_noite"].titulo}</p>
                    </Col>
                    <Col md={6} className="listBlock d-flex flex-column justify-content-center align-items-center">
                        <ul>
                            {prog["sexta_noite"].topicos.map((topico) => (
                                <li>{topico}</li>
                            ))}
                        </ul>
                    </Col>
                </Row>
                {/* SABADO DE MANHA */}
                <Row xs={1} className="periodBlock">
                    <Col md={3} className="dateBlock d-flex flex-column justify-content-center align-items-center">
                        <p className="dateBig">{prog["sabado_manha"].data}</p>
                        <p className="dateSmall">{prog["sabado_manha"].dia}</p>
                    </Col>
                    <Col md={3} className="iconBlock d-flex flex-column justify-content-center align-items-center">
                        <StaticImage className="themeIcon" src={`../images/fear.png`} alt="ícone pessoa falando"></StaticImage>
                        <p className="themeTitle">{prog["sabado_manha"].titulo}</p>
                    </Col>
                    <Col md={6} className="listBlock d-flex flex-column justify-content-center align-items-center">
                        <ul>
                            {prog["sabado_manha"].topicos.map((topico) => (
                                <li>{topico}</li>
                            ))}
                        </ul>
                    </Col>
                </Row>
                {/* SABADO A TARDE */}
                <Row xs={1} className="periodBlock">
                    <Col md={3} className="dateBlock d-flex flex-column justify-content-center align-items-center">
                        <p className="dateBig">{prog["sabado_tarde"].data}</p>
                        <p className="dateSmall">{prog["sabado_tarde"].dia}</p>
                    </Col>
                    <Col md={3} className="iconBlock d-flex flex-column justify-content-center align-items-center">
                        <StaticImage className="themeIcon" src={`../images/strength.png`} alt="ícone pessoa falando"></StaticImage>
                        <p className="themeTitle">{prog["sabado_tarde"].titulo}</p>
                    </Col>
                    <Col md={6} className="listBlock d-flex flex-column justify-content-center align-items-center">
                        <ul>
                            {prog["sabado_tarde"].topicos.map((topico) => (
                                <li>{topico}</li>
                            ))}
                        </ul>
                    </Col>
                </Row>
                {/* DOMINGO DE MANHÃ */}
                <Row xs={1} className="periodBlock">
                    <Col md={3} className="dateBlock d-flex flex-column justify-content-center align-items-center">
                        <p className="dateBig">{prog["domingo_manha"].data}</p>
                        <p className="dateSmall">{prog["domingo_manha"].dia}</p>
                    </Col>
                    <Col md={3} className="iconBlock d-flex flex-column justify-content-center align-items-center">
                        <StaticImage className="themeIcon" src={`../images/promotion.png`} alt="ícone pessoa falando"></StaticImage>
                        <p className="themeTitle">{prog["domingo_manha"].titulo}</p>
                    </Col>
                    <Col md={6} className="listBlock d-flex flex-column justify-content-center align-items-center">
                        <ul>
                            {prog["domingo_manha"].topicos.map((topico) => (
                                <li>{topico}</li>
                            ))}
                        </ul>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Programacao