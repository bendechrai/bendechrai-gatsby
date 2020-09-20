import React from "react"
import { Link } from "gatsby"

import useImageUrlBuilder from "../hooks/use-image-url-builder"
import SectionIcon from "./section-icon"

const ContentListItem = ({
  _id,
  slug,
  section,
  title,
  image,
  synopsis,
  content,
}) => {
  const builder = useImageUrlBuilder()

  const Synopsis = ({ synopsis, content }) => {
    if (synopsis) return synopsis
    if (!content) return null
    let summary = ""
    content[0].children.forEach(item => {
      if (item.text) summary += item.text
    })
    return summary
  }

  return (
    <li key={_id}>
      <Link to={slug}>
        <div className="title">
          <h3>
            {section && <SectionIcon section={section} />}
            {title}
          </h3>
        </div>
        <div className="content">
          {image && (
            <div className="image">
              <img
                src={builder.image(image).width(304).height(171).url()}
                alt="Pic"
              />
            </div>
          )}
          <div className="synopsis">
            <Synopsis synopsis={synopsis} content={content} />
          </div>
        </div>
      </Link>
    </li>
  )
}

export default ContentListItem
