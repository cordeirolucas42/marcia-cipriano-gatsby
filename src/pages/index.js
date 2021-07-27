import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Imersão Autoconhecimento" />
    <h1>Fala Voz</h1>
    <p>Encarando o medo de se expressar</p>
    <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
    <p>Facilitadora: <a href="https://www.instagram.com/marciaciprianoh/?hl=pt-br">Márcia Cipriano</a>
    </p>
  </Layout>
)

export default IndexPage
