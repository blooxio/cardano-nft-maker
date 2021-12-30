import React, { FC } from "react"
import { MenuRight } from "./components/menu-right/MenuRight.component"

export const Header: FC = () => {
  return (
    <div className="header">
      <div className="header-content">
        <nav className="navbar navbar-expand">
          <div className="collapse navbar-collapse justify-content-between">
            <div className="header-left" />
            <MenuRight />
          </div>
        </nav>
      </div>
    </div>
  )
}
