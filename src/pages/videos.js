import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

import ContentListItem from "../components/content-list-item"

export const query = graphql`
  {
    videos: allSanityVideo(
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
        series {
          name
        }
        episode
        synopsis
        tags {
          id
          children {
            id
          }
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

const Videos = ({ data }) => {
  return (
    <Layout title="Videos" section="videos">
      <section>
        <ul className="content-list">
          {data.videos.nodes.map(video => (
            <ContentListItem
              id={video._id}
              slug={"/videos/" + video.slug.current}
              title={video.title}
              image={video.image}
              synopsis={video.synopsis}
              content={video.content}
            />
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export default Videos
