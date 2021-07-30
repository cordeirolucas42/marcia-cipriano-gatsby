import * as React from "react"
import PropTypes from "prop-types"
import { StaticImage } from "gatsby-plugin-image"
import "./styles.css"

const Header = () => (
  <header style={{background: `#C2B5A3`}}>
    <div style={{
        margin: `0 auto`,
        maxWidth: 1200
    }}>
      <StaticImage className="headerImg" src="../images/banner página curso.png"></StaticImage>
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
