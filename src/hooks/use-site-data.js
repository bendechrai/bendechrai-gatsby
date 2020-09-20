import { useStaticQuery, graphql } from "gatsby"

const useSiteData = () => {
  const data = useStaticQuery(graphql`
    {
      site: sanitySiteSettings {
        name
        _rawWelcome
        logo {
          asset {
            _id
          }
          crop {
            top
            bottom
            left
            right
          }
          hotspot {
            x
            y
            height
            width
          }
          alt
        }
        bgImage {
          asset {
            _id
          }
          crop {
            top
            bottom
            left
            right
          }
          hotspot {
            x
            y
            height
            width
          }
          alt
        }
        profileImage {
          asset {
            _id
          }
          crop {
            top
            bottom
            left
            right
          }
          hotspot {
            x
            y
            height
            width
          }
          alt
        }
        fourOhFourImage {
          asset {
            _id
          }
          crop {
            top
            bottom
            left
            right
          }
          hotspot {
            x
            y
            height
            width
          }
          alt
        }
      }
    }
  `)
  return data.site
}

export default useSiteData
