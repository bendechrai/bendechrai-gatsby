import React from "react"
import { Link } from "gatsby"

import useSiteData from "../hooks/use-site-data"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faTwitter,
  faYoutube,
  faTwitch,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons"
import useImageUrlBuilder from "../hooks/use-image-url-builder"

const Header = () => {
  const siteData = useSiteData()
  const builder = useImageUrlBuilder()

  return (
    <section className="header">
      <div className="logo">
        <Link to="/">
          <img src={builder.image(siteData.logo).url()} alt={siteData.name} />
        </Link>
      </div>
      <div className="social">
        <ul>
          <li>
            <a
              href="https://twitter.com/bendechrai"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </li>
          <li>
            <a
              href="https://youtube.com/c/bendechrai"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </li>
          <li>
            <a
              href="https://twitch.tv/bendechrai"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faTwitch} />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/bendechrai/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/bendechrai/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Header
