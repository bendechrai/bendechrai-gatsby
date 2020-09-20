import React from "react"

import Layout from "../components/layout"
import BlockContent from "@sanity/block-content-to-react"

import useImageUrlBuilder from "../hooks/use-image-url-builder"
import BlockSerializer from "../utils/block-serializer"

export const query = graphql`
  {
    about: sanityAboutPage {
      _rawBio
      profile_pics {
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
`

const About = ({ data }) => {
  const builder = useImageUrlBuilder()

  return (
    <Layout title="About" section="about">
      <section>
        <h3>Short Bio</h3>
        <blockquote>
          <BlockContent
            blocks={data.about._rawBio}
            serializers={BlockSerializer}
          />
        </blockquote>
      </section>
      <section>
        <h3>Profile Pictures</h3>
        <div className="content">
          <p>
            Need a profile picture? Grab one of these! Please do not hot link to
            them though, as the URLs might change. Download them and host them
            on your own web site.
          </p>
          <div className="profile_pics">
            {data.about.profile_pics.map((profile_pic, idx) => (
              <div key={idx}>
                <p>
                  <strong>{profile_pic.alt}</strong>
                </p>
                <img
                  src={builder.image(profile_pic).width(200).url()}
                  alt={profile_pic.alt}
                />
                <ul>
                  <li>
                    <a href={builder.image(profile_pic).width(200).url()}>
                      200px wide
                    </a>
                  </li>
                  <li>
                    <a href={builder.image(profile_pic).width(1024).url()}>
                      1024px wide
                    </a>
                  </li>
                  <li>
                    <a href={builder.image(profile_pic).url()}>Full size</a>
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default About
