import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Body from "../components/body"

const IndexPage = () => (
  <Layout>
    <Seo title="Imersão Autoconhecimento" />
    <StaticImage
      src="../images/fala_voz.png"
      width={300}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="Cartaz Fala Voz"
      style={{ marginBottom: `1.45rem` }}
    />
    <h1>Encarando o medo de se expressar</h1>
    <Body></Body>
  </Layout>
)

export default IndexPage
