import * as React from "react"
import { Row,Col } from "react-bootstrap"

const Depoimentos = () => {

    return (
        <section className="bodySection">
        <h2>Depoimentos:</h2>
            <Row xs={1} md={2}>
                <Col className="depoimentoCol">
                    <iframe className="depoimentos" src="https://www.youtube.com/embed/f520SWi1aUQ?controls=0" title="Depoimento Isa Vida" frameborder="0"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </Col>
                <Col className="depoimentoCol">
                    <iframe className="depoimentos" src="https://www.youtube.com/embed/hmRnyZ5J4V4?controls=0" title="Depoimento Rebeca" frameborder="0"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </Col>
                <Col className="depoimentoCol">
                    <iframe className="depoimentos" src="https://www.youtube.com/embed/Wd0qHxknwTc?controls=0" title="Depoimento Juliana Sousa" frameborder="0"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </Col>
                <Col className="depoimentoCol">
                    <iframe className="depoimentos" src="https://www.youtube.com/embed/I9lxBoCQ34A?controls=0" title="Depoimento Luana Dantas" frameborder="0"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </Col>
            </Row>
        </section>
    )
}

export default Depoimentos