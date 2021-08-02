import * as React from "react"
import { useState, useEffect } from "react";
import PropTypes from "prop-types"
import { StaticImage } from "gatsby-plugin-image"
import "./styles.css"

const Header = () => {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return (
    <header style={{ background: `#C2B5A3` }}>
      <div style={{
        margin: `0 auto`,
        maxWidth: 1200
      }}>
        {(windowSize.width > 600) ?
        (<StaticImage width={2400} height={595} className="headerImg" src="../images/banner página curso.png"></StaticImage>) :
        (<StaticImage width={800} height={400} className="headerImg" src="../images/banner mobile fala voz.png"></StaticImage>)}
        {/* <StaticImage className="headerImg" src="../images/banner página curso.png"></StaticImage> */}
      </div>
    </header>
  )
}


Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
