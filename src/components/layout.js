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
import "./styles.css"

const Layout = ({ children }) => {
  return (
    <>
      <Header siteTitle={"Fala Voz - Encarando O Medo De Se Expressar"} />
      <div>

        <main>{children}</main>

        <footer className="footer">© {new Date().getFullYear()}, Desenvolvido por
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
