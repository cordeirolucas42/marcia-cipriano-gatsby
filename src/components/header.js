import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import "./styles.css"

const Header = () => (
  <header style={{background: `#FFCC0E`}}>
    <div style={{
        margin: `0 auto`,
        maxWidth: 1200
    }}>
      <StaticImage className="headerImg" src="../images/indice.jpg"></StaticImage>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
