import * as React from "react"
import PropTypes from "prop-types"
import Header from "./header"

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
