import * as React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import "../components/styles.css"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Body from "../components/body"

const IndexPage = () => (
  <Layout>
    <Seo title="Imersão Autoconhecimento" />
    <Body></Body>
  </Layout>
)

export default IndexPage
