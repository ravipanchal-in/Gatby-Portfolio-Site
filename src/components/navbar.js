import * as React from "react"
import { Link } from "gatsby"

const Navbar = ({ siteTitle }) => (
  <nav>
    <h1> {siteTitle}</h1>
    <div className="links">
      <Link to="/">Home</Link>
      <Link to="/about">About Us</Link>
      <Link to="/portfolio">Portfolio</Link>
      <Link to="/contact">Contact Us</Link>
    </div>
  </nav>
)

export default Navbar
