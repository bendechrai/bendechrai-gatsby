import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import BlockContent from "@sanity/block-content-to-react"

import useSiteData from "../hooks/use-site-data"
import useImageUrlBuilder from "../hooks/use-image-url-builder"
import BlockSerializer from "../utils/block-serializer"
import ContentListItem from "../components/content-list-item"

export const query = graphql`
  {
    articles: allSanityArticle(
      limit: 10
      sort: { fields: publishDate___local, order: DESC }
    ) {
      nodes {
        title
        slug {
          current
        }
        publishDate {
          local
        }
        synopsis
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
    events: allSanityEvent {
      nodes {
        title
        slug {
          current
        }
        publishDate {
          local
        }
        talks {
          title
          slug {
            current
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
    videos: allSanityVideo {
      nodes {
        title
        slug {
          current
        }
        publishDate {
          local
        }
        synopsis
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
const IndexPage = ({ data }) => {
  const siteData = useSiteData()
  const builder = useImageUrlBuilder()

  const latest = []
  data.articles.nodes.forEach(item => {
    latest.push({
      type: "articles",
      date: item.publishDate.local,
      link: `/articles/${item.slug.current}`,
      item,
    })
  })
  data.events.nodes.forEach(item => {
    latest.push({
      type: "events",
      date: item.publishDate.local,
      link: `/events/${item.slug.current}`,
      item,
    })
  })
  data.videos.nodes.forEach(item => {
    latest.push({
      type: "videos",
      date: item.publishDate.local,
      link: `/videos/${item.slug.current}`,
      item,
    })
  })
  latest.sort((a, b) => {
    return new Date(b.date) - new Date(a.date)
  })

  return (
    <Layout title="Welcome">
      <blockquote className="asset">
        <img
          src={builder.image(siteData.profileImage).width(200).url()}
          alt={siteData.name}
        />
        <div>
          <BlockContent
            blocks={siteData._rawWelcome}
            serializers={BlockSerializer}
          />
        </div>
      </blockquote>

      <section>
        <h2>Latest</h2>
        <ul className="content-list">
          {latest.map(entry => (
            <ContentListItem
              id={entry.type + entry.item.slug.current}
              slug={entry.link}
              section={entry.type}
              title={entry.item.title}
              image={entry.item.image}
              synopsis={entry.item.synopsis}
              content=""
            />
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export default IndexPage
