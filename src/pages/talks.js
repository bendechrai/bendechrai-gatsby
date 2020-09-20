import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"

import ContentListItem from "../components/content-list-item"

export const query = graphql`
  {
    talks: allSanityTalk(
      sort: { fields: publishDate___utc, order: DESC }
      limit: 400
    ) {
      nodes {
        title
        slug {
          current
        }
        publishDate {
          local
        }
        _rawShort
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

const Talks = ({ data }) => {
  const pageCTA = (
    <Link to="/contact/" className="button">
      Ask me about speaking at your event
    </Link>
  )

  return (
    <Layout title="Talks" section="talks" cta={pageCTA}>
      <section>
        <ul className="content-list">
          {data.talks.nodes.map(talk => (
            <ContentListItem
              id={talk._id}
              slug={"/talks/" + talk.slug.current}
              title={talk.title}
              image={talk.image}
              content={talk._rawShort}
            />
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export default Talks
