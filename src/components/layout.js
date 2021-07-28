/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import Header from "./header"

import { StaticImage } from "gatsby-plugin-image"
// import "./styles.css"
// import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <Header siteTitle={"Fala Voz - Encarando O Medo De Se Expressar"} />      
      <StaticImage
        src="../images/marcia-banner.jpg"
        quality={95}
        formats={["AUTO", "JPEG", "WEBP", "AVIF"]}
        alt="Cartaz Fala Voz"
        style={{ marginBottom: `1.45rem`, width: `100%` }}
      />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer
          style={{
            margin: `5rem 0`,
            borderTop: `1px solid black`
          }}
        >
          © {new Date().getFullYear()}, Desenvolvido por
          {` `}
          <a href="https://github.com/cordeirolucas42">Lucas Cordeiro</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
