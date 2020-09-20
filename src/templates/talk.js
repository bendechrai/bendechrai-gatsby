import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

export const query = graphql`
  query($slug: String!) {
    talk: sanityTalk(slug: { current: { eq: $slug } }) {
      title
      image {
        alt
        asset {
          id
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
      short {
        _key
        _type
        style
        list
        _rawChildren
      }
      medium {
        _key
        _type
        style
        list
        _rawChildren
      }
      long {
        _key
        _type
        style
        list
        _rawChildren
      }
      obsolete
    }
  }
`

const Talk = ({ data }) => {
  return (
    <Layout title={data.talk.title} section="talks">
      <h2>{data.talk.title}</h2>
    </Layout>
  )
}

export default Talk
