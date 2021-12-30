// @ts-ignore
import LogoAbbr from "../../../../resources/images/logo.png"
// @ts-ignore
import LogoCompact from "../../../../resources/images/logo-text.png"
// @ts-ignore
import BrandTitle from "../../../../resources/images/logo-text.png"
import React, { FC } from "react"

interface NavProps {
  sidebarActive?: boolean
  onSideBarToggle?(): void
}

export const Nav: FC<NavProps> = ({sidebarActive, onSideBarToggle}) => {
  return (
    <div className="nav-header">
      <a href="index.html" className="brand-logo">
        <img className="logo-abbr" src={LogoAbbr} alt="" />
        <img className="logo-compact" src={LogoCompact} alt="" />
        <img className="brand-title" src={BrandTitle} alt="" />
      </a>

      <div className="nav-control">
        <div className={`hamburger ${sidebarActive ? "is-active" : ""}`} onClick={onSideBarToggle}>
          <span className="line"/>
          <span className="line"/>
          <span className="line"/>
        </div>
      </div>
    </div>
  )
}
