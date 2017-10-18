import React from 'react'
import Link from 'gatsby-link'


export default ({ data }) => {
  console.log(data)
  return (
    <div>
      <h4>
        {data.allMarkdownRemark.totalCount} Posts
      </h4>
      {data.allMarkdownRemark.edges.map(({ node }) =>
        <div key={node.id}>
        <Link
            to={node.fields.slug}
            style={{ textDecoration: `none`, color: `inherit` }}
          >
          <h2>
            {node.frontmatter.title}{" "}
            <span style={{color:`grey`, fontSize:`0.7em`}}>— {node.frontmatter.date}</span>
          </h2>
          <p>
            {node.excerpt}
          </p>
          <h5>
            By {node.frontmatter.author}
          </h5>
          </Link>
        </div>
      )}
    </div>
  )
}

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}){
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date
            author
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`