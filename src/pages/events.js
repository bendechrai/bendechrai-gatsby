import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

import ContentListItem from "../components/content-list-item"

export const query = graphql`
  {
    events: allSanityEvent(
      sort: { fields: dateStart___utc, order: DESC }
      limit: 400
    ) {
      nodes {
        title
        slug {
          current
        }
        dateStart {
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
  }
`

const Events = ({ data }) => {
  return (
    <Layout title="Events" section="events">
      <section>
        <ul className="content-list">
          {data.events.nodes.map(event => (
            <ContentListItem
              id={event._id}
              slug={"/events/" + event.slug.current}
              title={event.title}
              image={event.image}
              synopsis={event.dateStart.local}
              content={event.content}
            />
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export default Events
