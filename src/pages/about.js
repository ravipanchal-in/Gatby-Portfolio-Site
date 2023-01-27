import React from "react"
import Layout from "../components/layout"
import { graphql, useStaticQuery } from "gatsby"

const About = () => {
  const data = useStaticQuery(graphql`
    query SiteInfo {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Layout>
      <div>About</div>

      <div>{data.site.siteMetadata.title}</div>

      <div>
        Lorem consectetur laboris aliquip ut. Pariatur nisi sunt nisi mollit
        officia et ea pariatur adipisicing nisi exercitation. Duis reprehenderit
        nostrud qui voluptate exercitation deserunt reprehenderit elit qui
        pariatur nisi proident qui.
      </div>
    </Layout>
  )
}

export default About
