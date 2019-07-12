import React from "react"

const Footer = () => (
  <footer id="footer" className="body-content center">
    <div className="wrapper">
    © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
    </div>
  </footer>
)

export default Footer
