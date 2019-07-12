import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPost = ({ data }) => {
  const { title, body, image, tags } = data.contentfulBlogPost
  return (
    <Layout>
      <SEO title={title} />
      <div className="body-content padding-content">
        <div className="wrapper">
          <h1>{title}</h1>
          {image ? (
            <picture>
              <source srcSet={image.fluid.srcSetWebp} type="image/webp" />
              <source srcSet={image.fluid.srcSet} type="image/jpeg" />
              <img src={image.fluid.src} alt={title} />
            </picture>
          ) : null}
          <div className="tags">
            {tags.map(tag => (
              <span className="tag" key={tag}>
                {tag}
              </span>
            ))}
          </div>
          <p className="body-text">{body.body}</p>
          <Link to="/blog/">View more posts</Link>
          <Link to="/">Back to Home</Link>
        </div>
      </div>
    </Layout>
  )
}
export default BlogPost
export const pageQuery = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      slug
      body {
        body
      }
      image {
        fluid(maxWidth: 2000) {
          src
          srcSet
          srcWebp
          srcSetWebp
        }
      }
      tags
    }
  }
`
