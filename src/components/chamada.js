import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Chamada = () => {

    return (
        <section className="bodySection chamada">
            {/* PRIMEIRA OPÇÃO */}
            <StaticImage className="chamadaImg" src="../images/marcia-apontando__.png" alt="Márcia apontando"></StaticImage>
            <div className="chamadaBox">
                <h6>Serão 12 horas de teoria e prática ao vivo no Zoom para que você desperte a coragem para encarar o medo de se expressar publicamente e soltar a sua voz.</h6>
                <a href="https://www.sympla.com.br/fala-voz--encarando-o-medo-de-se-expressar__1293670" className="btn chamadaBtn">Inscreva-se no Fala Voz</a>
                <a href="https://chat.whatsapp.com/FUHCL3l5VV7LbXLOHTNWot" className="btn chamadaBtn"><StaticImage className="iconeZap" src="../images/whatsapp.png" alt="Márcia apontando"></StaticImage><span>Junte-se ao grupo</span></a>
            </div>
        </section>
    )
}

export default Chamada