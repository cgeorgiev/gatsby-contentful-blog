import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import PageTransition from "gatsby-plugin-page-transitions"

const IndexPage = () => (
  <PageTransition>
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <div className="home">
        <h1>Hello There</h1>
        <p>Welcome my awesome blog</p>
        <div>
          <div
            style={{
              maxWidth: `300px`,
              margin: "0 auto 1.45rem",
            }}
          >
            <Image />
          </div>
        </div>
        <Link to="/blogposts/">View all posts</Link>
      </div>
    </Layout>
  </PageTransition>
)
export default IndexPage
