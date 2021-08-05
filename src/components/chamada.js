import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Chamada = () => {

    return (
        <section className="bodySection apresentacaoBlock">
            <iframe className="apresentacao" src="https://player.vimeo.com/video/583551933?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="apresentacao.mp4"></iframe>
            <div className="buttonGroup">
                <a href="https://www.sympla.com.br/fala-voz--encarando-o-medo-de-se-expressar__1293670" className="btn chamadaBtn">Inscreva-se no Fala Voz</a>
                <a href="https://chat.whatsapp.com/FUHCL3l5VV7LbXLOHTNWot" className="btn chamadaBtn"><StaticImage className="iconeZap" src="../images/whatsapp.png" alt="Márcia apontando"></StaticImage><span>Junte-se ao grupo</span></a>
            </div>            
        </section>
    )
}

export default Chamada