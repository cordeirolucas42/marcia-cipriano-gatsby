import * as React from "react"
import { Row,Col } from "react-bootstrap"

const Depoimentos = () => {

    return (
        <section className="bodySection">
        <h2>Depoimentos:</h2>
            <Row xs={1} md={2}>
                <Col><iframe className="depoimentos" src="https://www.youtube.com/embed/f520SWi1aUQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></Col>
                <Col><iframe className="depoimentos" src="https://www.youtube.com/embed/hmRnyZ5J4V4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></Col>
                <Col><iframe className="depoimentos" src="https://www.youtube.com/embed/Wd0qHxknwTc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></Col>
                <Col><iframe className="depoimentos" src="https://www.youtube.com/embed/I9lxBoCQ34A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></Col>
            </Row>
        </section>
    )
}

export default Depoimentos