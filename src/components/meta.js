import React from "react"
import PropTypes from "prop-types"

import { Link } from "gatsby"

import moment from "moment-timezone"

const Meta = ({ meta }) => {
  const published = moment(meta.published)

  return (
    <section className="meta">
      <dl>
        {meta.published && (
          <>
            <dt>Published</dt>
            <dd>
              <span title={published.format("lll")}>{published.fromNow()}</span>
            </dd>
          </>
        )}
        {meta.tags && (
          <>
            <dt>Filed under</dt>
            <dd>
              {meta.tags.map(tag => (
                <Link key={tag.slug} to={tag.slug} className="tag button">
                  {tag.name}
                </Link>
              ))}
            </dd>
          </>
        )}
      </dl>
    </section>
  )
}

Meta.propTypes = {
  meta: PropTypes.node.isRequired,
}

export default Meta
