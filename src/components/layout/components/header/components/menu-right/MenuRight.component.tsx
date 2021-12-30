import React, { FC, useEffect, useRef, useState } from "react"

export const MenuRight: FC = () => {
  const ref: React.RefObject<HTMLUListElement> = useRef(null)
  const [show, setShow] = useState(false)
  const toggleMenu = () => setShow(!show)

  useEffect(() => {
    function handleClickOutside(event: Event) {
      if (ref.current && !ref.current.contains(event?.target as any)) {
        setShow(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <ul className="navbar-nav header-right" ref={ref}>
      <li className={`nav-item dropdown header-profile ${show ? "show" : ""}`}>
        <a className="nav-link" href="#" role="button" data-toggle="dropdown" onClick={toggleMenu}>
          <i className="mdi mdi-account" />
        </a>
        <div className={`dropdown-menu dropdown-menu-right ${show ? "show" : ""}`}>
          <a href="./app-profile.html" className="dropdown-item">
            <i className="icon-user" />
            <span className="ml-2">Profile </span>
          </a>
          <a href="./email-inbox.html" className="dropdown-item">
            <i className="icon-envelope-open" />
            <span className="ml-2">Inbox </span>
          </a>
          <a href="./page-login.html" className="dropdown-item">
            <i className="icon-key" />
            <span className="ml-2">Logout </span>
          </a>
        </div>
      </li>
    </ul>
  )
}
