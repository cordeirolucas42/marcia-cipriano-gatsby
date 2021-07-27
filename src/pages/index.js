import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Imersão Autoconhecimento" />
    <h1>Encarando o medo de se expressar</h1>
    <StaticImage
      src="../images/Márcia Cipriano - Fala Voz (7).png"
      width={300}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="Cartaz Fala Voz"
      style={{ marginBottom: `1.45rem` }}
    />
    <p>Facilitadora: <a href="https://www.instagram.com/marciaciprianoh/?hl=pt-br">Márcia Cipriano</a>
    </p>
  </Layout>
)

export default IndexPage
