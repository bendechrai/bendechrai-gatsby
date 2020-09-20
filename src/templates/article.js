import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

import BlockContent from "@sanity/block-content-to-react"
import BlockSerializer from "../utils/block-serializer"

export const query = graphql`
  query($slug: String!) {
    article: sanityArticle(slug: { current: { eq: $slug } }) {
      title
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
      _rawContent
      publishDate {
        local
      }
    }
  }
`

const Article = ({ data }) => {
  const meta = {
    published: new Date(data.article.publishDate.local),
    tags: [
      { name: "Tech", slug: "tech" },
      { name: "Tips", slug: "tips" },
      { name: "Streaming", slug: "streaming" },
    ],
  }

  return (
    <Layout
      title={data.article.title}
      section="articles"
      meta={meta}
      heroImage={data.article.image}
    >
      <div className="content">
        <BlockContent
          blocks={data.article._rawContent}
          serializers={BlockSerializer}
        />
      </div>
    </Layout>
  )
}

export default Article
