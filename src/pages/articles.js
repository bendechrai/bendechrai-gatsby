import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import ContentListItem from "../components/content-list-item"

export const query = graphql`
  {
    articles: allSanityArticle(
      sort: { fields: publishDate___utc, order: DESC }
      limit: 400
    ) {
      nodes {
        _id
        title
        publishDate {
          local
        }
        slug {
          current
        }
        synopsis
        content {
          children {
            text
          }
        }
        tags {
          id
        }
        image {
          alt
          asset {
            _id
          }
          hotspot {
            _key
            _type
            x
            y
            height
            width
          }
          crop {
            _key
            _type
            top
            bottom
            left
            right
          }
        }
      }
    }
  }
`

const Articles = ({ data }) => {
  return (
    <Layout title="Articles" section="articles">
      <section>
        <ul className="content-list">
          {data.articles.nodes.map(article => (
            <ContentListItem
              id={article._id}
              slug={"/articles/" + article.slug.current}
              title={article.title}
              image={article.image}
              synopsis={article.synopsis}
              content={article.content}
            />
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export default Articles
