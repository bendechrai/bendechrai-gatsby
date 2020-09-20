import React from "react"
import Layout from "../components/layout"
import { graphql, Link } from "gatsby"

export const query = graphql`
  query($slug: String!) {
    event: sanityEvent(slug: { current: { eq: $slug } }) {
      title
    }
  }
`

const Event = ({ data }) => {
  const pageCTA = (
    <Link to="/" className="button">
      Ask me about speaking at your event
    </Link>
  )

  return (
    <Layout title={data.event.title} section="events" cta={pageCTA}>
      <h2>{data.event.title}</h2>
    </Layout>
  )
}

export default Event
