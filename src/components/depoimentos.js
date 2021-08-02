import * as React from "react"
import { Row,Col } from "react-bootstrap"

const Depoimentos = () => {

    return (
        <section className="bodySection">
        <h2>Depoimentos:</h2>
            {/* <Row xs={1} md={2} className="pb-4">
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
            </Row> */}

            <Row xs={1} md={2} className="pb-4">
                <Col className="depoimentoCol">
                    <iframe className="depoimentos" src="https://player.vimeo.com/video/582183115?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="depoimento1.mp4"></iframe>
                </Col>
                <Col className="depoimentoCol">
                    <iframe className="depoimentos" src="https://player.vimeo.com/video/582184138?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="Depoimento Rebeca"></iframe>
                </Col>
                <Col className="depoimentoCol">
                    <iframe className="depoimentos" src="https://player.vimeo.com/video/582184211?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="depoimento3"></iframe>
                </Col>
                <Col className="depoimentoCol">
                    <iframe className="depoimentos" src="https://player.vimeo.com/video/582184265?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="depoimento4"></iframe>
                </Col>
            </Row>
        </section>
    )
}

export default Depoimentos