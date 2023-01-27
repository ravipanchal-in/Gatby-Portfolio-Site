import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import Img from "gatsby-image"
import "../styles/projects.css"

function Portfolio({ data }) {
  const projects = data.allMarkdownRemark.nodes
  const admin = data.admin.siteMetadata.admin
  return (
    <Layout>
      <div className="portfolio">
        <h2>Portfolio</h2>
        <h3>Projects & Websites I've Created</h3>
        <div className="projects">
          {projects.map(item => {
            return (
              <Link key={item.id} to={"/projects/" + item.frontmatter.slug}>
                <div>
                  <Img fluid={item.frontmatter.thumb.childImageSharp.fluid} />
                  <h3>{item.frontmatter.title}</h3>
                  <p>{item.frontmatter.stack}</p>
                </div>
              </Link>
            )
          })}
        </div>
        <p>
          Like what you see? Contact to <i>{admin}</i>
        </p>
      </div>
    </Layout>
  )
}

export default Portfolio

//export page query
export const query = graphql`
  query ProjectsPage {
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          title
          stack
          slug
          thumb {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        id
      }
    }
    admin: site {
      siteMetadata {
        admin
      }
    }
  }
`
