import * as React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import "../components/styles.css"

import Layout from "../circuito/layout"
import Seo from "../components/seo"
import Body from "../circuito/body"

const IndexPage = () => (
  <Layout>
    <Seo title="Imersão Autoconhecimento" />
    <Body></Body>
  </Layout>
)

export default IndexPage
