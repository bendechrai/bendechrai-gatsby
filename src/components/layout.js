import React, { useEffect, useState, useCallback } from "react"
import PropTypes from "prop-types"

import SEO from "./seo"
import Header from "./header"
import Menu from "./menu"

import "../sass/app.scss"
import useSiteData from "../hooks/use-site-data"
import useImageUrlBuilder from "../hooks/use-image-url-builder"
import SectionIcon from "./section-icon"
import Meta from "./meta"

const Layout = ({
  title,
  section = null,
  children,
  meta = null,
  cta = null,
  heroImage = null,
}) => {
  const siteData = useSiteData()
  const builder = useImageUrlBuilder()
  const [bgImageAspectRatio, setBgImageAspectRatio] = useState(null)

  const setBackgroundSize = useCallback(() => {
    // Get window aspect ratios
    const vw = Math.max(
      document.documentElement.clientWidth || 0,
      window.innerWidth || 0
    )
    const vh = Math.max(
      document.documentElement.clientHeight || 0,
      window.innerHeight || 0
    )
    const windowAspectRatio = vw / vh

    // Set background image size to max width or height depending on aspect ratio comparison
    if (bgImageAspectRatio < windowAspectRatio) {
      document.querySelector("body").style.backgroundSize = "100% auto"
    } else {
      document.querySelector("body").style.backgroundSize = "auto 100%"
    }
  }, [bgImageAspectRatio])

  useEffect(() => {
    // Load background image
    const bgImageUrl = builder.image(siteData.bgImage).width(300).url()
    const bgImage = new Image()
    bgImage.src = bgImageUrl
    setBgImageAspectRatio(bgImage.width / bgImage.height)

    // Set background image
    document.querySelector(
      "body"
    ).style.backgroundImage = `url('${bgImageUrl}')`

    // Set background image size
    setBackgroundSize()
  }, [siteData.bgImage, builder, setBackgroundSize])

  window.addEventListener("resize", () => {
    if (bgImageAspectRatio) setBackgroundSize()
  })

  return (
    <>
      <SEO title={title} />
      <div className="outer-wrap">
        <Header />
        <Menu />

        <div className="section-and-cta">
          <section className="section-name">
            <h1>
              <SectionIcon section={section} /> {title}
            </h1>
          </section>
          {cta && <section className="cta">{cta}</section>}
        </div>

        {heroImage && (
          <div className="hero-image">
            <img
              src={builder.image(heroImage).width(960).height(320).url()}
              alt="Pic"
            />
          </div>
        )}

        {meta && (
          <div className="body-and-meta">
            <section className="body">{children}</section>
            <Meta meta={meta} />
          </div>
        )}
        {!meta && <section className="body">{children}</section>}
      </div>
    </>
  )
}

Layout.propTypes = {
  title: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
}

export default Layout
