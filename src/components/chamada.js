import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Chamada = () => {

    return (
        <section className="bodySection apresentacaoBlock">
            <iframe className="apresentacao" src="https://www.youtube.com/embed/_3oODbs6UAg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <div className="buttonGroup">
                <a href="https://www.sympla.com.br/fala-voz--encarando-o-medo-de-se-expressar__1293670" className="btn chamadaBtn">Inscreva-se no Fala Voz</a>
                <a href="https://chat.whatsapp.com/FUHCL3l5VV7LbXLOHTNWot" className="btn chamadaBtn"><StaticImage className="iconeZap" src="../images/whatsapp.png" alt="Márcia apontando"></StaticImage><span>Junte-se ao grupo</span></a>
            </div>            
        </section>
    )
}

export default Chamada