import React from "react"
import { Link } from "gatsby"

const BlockSerializer = {
  types: {
    img: props => {
      return (
        <img
          src={props.node.asset.src}
          alt={props.node.asset.alt}
          onError={ev => (ev.target.style.display = "none")}
        />
      )
    },
  },

  marks: {
    link: ({ mark, children }) => {
      // If href starts with https? or mailto or // then it's an A element
      if (mark.href.match(/^(https?:\/\/|mailto:|\/\/)/)) {
        return <a href={mark.href}>{children}</a>
      }

      // Else return an internal Link
      return <Link to={mark.href}>{children}</Link>
    },
  },
}

export default BlockSerializer
