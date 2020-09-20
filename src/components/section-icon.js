import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faCalendarAlt,
  faNewspaper,
  faChalkboardTeacher,
  faCommentDots,
  faIdCard,
  faLaptopCode,
} from "@fortawesome/free-solid-svg-icons"

const SectionIcon = ({ section }) => {
  switch (section) {
    case "articles":
      return <FontAwesomeIcon className="section-icon" icon={faNewspaper} />
    case "videos":
      return <FontAwesomeIcon className="section-icon" icon={faLaptopCode} />
    case "events":
      return <FontAwesomeIcon className="section-icon" icon={faCalendarAlt} />
    case "talks":
      return (
        <FontAwesomeIcon className="section-icon" icon={faChalkboardTeacher} />
      )
    case "contact":
      return <FontAwesomeIcon className="section-icon" icon={faCommentDots} />
    case "about":
      return <FontAwesomeIcon className="section-icon" icon={faIdCard} />
    default:
      return null
  }
}

export default SectionIcon
