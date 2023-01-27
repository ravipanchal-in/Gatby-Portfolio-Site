import Img from "gatsby-image"
import { graphql, Link, useStaticQuery } from "gatsby"
import * as React from "react"
import Layout from "../components/layout"
import "../styles/home.css"

const Home = () => {
  const data = useStaticQuery(graphql`
    query Banner {
      file(relativePath: { eq: "banner.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <section className="header">
        <div>
          <h2>Hello Gatsby!!!</h2>
          <h3>Design Develop & Deploy</h3>
          <p>
            Deserunt do fugiat magna aliqua est cillum. Duis consequat qui id
            nulla consequat eiusmod reprehenderit et elit irure duis id minim.
            Culpa mollit aute incididunt nostrud laboris sint in tempor
            consequat mollit cillum laborum. Irure ut labore aliquip anim.
          </p>
          <Link className="btn" to="/portfolio">
            Visit My Portfolio
          </Link>
        </div>
        <Img fluid={data.file.childImageSharp.fluid} />
      </section>
    </Layout>
  )
}

export default Home
