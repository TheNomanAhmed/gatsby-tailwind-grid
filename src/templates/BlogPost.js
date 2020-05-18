import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/Layout"
import "./layout.css"

export const data = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
      }
    }
  }
`

const BlogPost = ({ data: { mdx } }) => {
  return (
    <Layout>
      <div className="w-full h-full">
        <div className="-lg mx-auto ">
          <h1>{mdx.frontmatter.title}</h1>
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </div>
      </div>
    </Layout>
  )
}

export default BlogPost
