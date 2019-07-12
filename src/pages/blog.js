import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"

const BlogPosts = ({ data }) => {
  const blogPosts = data.allContentfulBlogPost.edges
  return (
    <Layout>
      <SEO title="Blog posts" />
      <div className="body-content padding-content">
        <div className="wrapper">
          <div className="blogposts">
            {blogPosts.map(({ node: post }) => (
              <div key={post.id}>
                <Link to={`/blog/${post.slug}/`}>
                {post.image ? <Img fixed={post.image.fixed} /> : null}
                  {/* {post.image ? (
                    <picture>
                      <source
                        srcSet={post.image.fixed.srcSetWebp}
                        type="image/webp"
                      />
                      <source
                        srcSet={post.image.fixed.srcSet}
                        type="image/jpeg"
                      />
                      <img src={post.image.fixed.src} alt={post.title} />
                    </picture>
                  ) : null} */}
                  {post.title}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}
export default BlogPosts
export const query = graphql`
  query BlogPostsPageQuery {
    allContentfulBlogPost(limit: 1000, sort: {fields: createdAt, order: DESC}) {
      edges {
        node {
          id
          title
          slug
          body {
            body
          }
          image {
            fixed(width: 200, height: 200) {
              ...GatsbyContentfulFixed_withWebp
            }
          }
          tags
        }
      }
    }
  }
`

// export const query = graphql`
//   query BlogPostsPageQuery {
//     allContentfulBlogPost(limit: 1000) {
//       edges {
//         node {
//           id
//           title
//           slug
//           body {
//             body
//           }
//           image {
//             fixed(width: 300, height: 300) {
//               src
//               srcSet
//               srcWebp
//               srcSetWebp
//             }
//           }
//           tags
//         }
//       }
//     }
//   }
// `
