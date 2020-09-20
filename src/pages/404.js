import React from "react"

import Layout from "../components/layout"

import useSiteData from "../hooks/use-site-data"
import useImageUrlBuilder from "../hooks/use-image-url-builder"

const NotFoundPage = () => {
  const siteData = useSiteData()
  const builder = useImageUrlBuilder()

  return (
    <Layout title="Not Found">
      <div className="hero-image">
        <img
          src={builder
            .image(siteData.fourOhFourImage)
            .width(960)
            .height(320)
            .url()}
          alt="Not Found"
        />
      </div>
      <div className="content notFound">
        <blockquote>
          <ul>
            <li>It's with sorrow that we must expound</li>
            <li>To visitors from all around</li>
            <li>Despite our persistence</li>
            <li>Confirming existence</li>
            <li>The page that you seek can't be found</li>
          </ul>
        </blockquote>
      </div>
    </Layout>
  )
}

export default NotFoundPage
