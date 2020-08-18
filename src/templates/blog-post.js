import React from 'react';
import { graphql } from 'gatsby'


function BlogPost ({ data }) {
  const post = data.markdownRemark

  return (
    <>
      <h1>{post.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }}>

      </div>
    </>
  )
}

export const query = graphql`
  query MyQuery($slug: String!) {
    markdownRemark(fields: {slug: {eq: $slug }}) {
      frontmatter {
        title
      }
      html
    }
  }
`

export default BlogPost;