import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import SectionIcon from "./section-icon"

const Menu = () => {
  const [active, setActive] = useState(false)

  const handleClick = () => {
    setActive(!active)
  }

  const handleKeyDown = ev => {
    if (ev.keyCode === 13) {
      setActive(!active)
    }
  }

  useEffect(() => {
    const menuHandle = document.querySelector("nav.main-menu")
    if (active) {
      const vh = Math.max(
        document.documentElement.clientHeight || 0,
        window.innerHeight || 0
      )
      menuHandle.style.top = vh - menuHandle.scrollHeight + "px"
    } else {
      menuHandle.style.top = ""
    }
    menuHandle.blur()
  }, [active])

  if (typeof window !== "undefined")
    window.addEventListener("resize", () => {
      setActive(false)
    })

  return (
    <nav className="main-menu">
      <div
        className="burger"
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        role="button"
        tabIndex="0"
      >
        ☰ ☰ ☰
      </div>
      <ul>
        <li>
          <Link to="/articles/">
            <SectionIcon section="articles" />
            Articles
          </Link>
        </li>
        <li>
          <Link to="/videos/">
            <SectionIcon section="videos" />
            Videos
          </Link>
        </li>
        <li>
          <Link to="/events/">
            <SectionIcon section="events" />
            Events
          </Link>
        </li>
        <li>
          <Link to="/talks/">
            <SectionIcon section="talks" />
            Talks
          </Link>
        </li>
        <li>
          <Link to="/contact/">
            <SectionIcon section="contact" />
            Contact
          </Link>
        </li>
        <li>
          <Link to="/about/">
            <SectionIcon section="about" />
            About
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Menu
