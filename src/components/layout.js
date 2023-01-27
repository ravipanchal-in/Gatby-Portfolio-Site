import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Navbar from "./navbar"
import "../styles/global.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          copyright
        }
      }
    }
  `)

  const { title, copyright } = data.site.siteMetadata

  return (
    <div className="layout">
      <Navbar siteTitle={title || `Title`} />

      <main className="content">{children}</main>
      <footer>
        <p>
          © {new Date().getFullYear()} &middot; Designed By &nbsp;
          <b>{copyright}</b>
        </p>
      </footer>
    </div>
  )
}

export default Layout
