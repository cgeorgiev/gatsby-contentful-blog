import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle, menuLinks }) => (
  <header id="header" className="body-content">
    <div className="wrapper">
      <div className="site-logo">
        <Link to="/">{siteTitle}</Link>
      </div>
      <nav id="main-menu">
        <ul>
          {menuLinks.map(link => (
            <li key={link.name}>
              <Link to={link.link} activeClassName="active">{link.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
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
