import * as React from "react"
// import { StaticImage } from "gatsby-plugin-image"
import 'bootstrap/dist/css/bootstrap.min.css'

import Layout from "../components/layout"
import Seo from "../components/seo"
import Body from "../components/body"
import Programacao from "../components/programacao"

const IndexPage = () => (
  <Layout>
    <Seo title="Imersão Autoconhecimento" />
    <Body></Body>    
    <Programacao></Programacao>
  </Layout>
)

export default IndexPage
