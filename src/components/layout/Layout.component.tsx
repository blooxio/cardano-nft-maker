import React, { FC, useState } from "react"
import { Header } from "./components/header/Header.component"
import { SideBar } from "./components/side-bar/SideBar.component"
import { Nav } from "./components/nav/Nav.component"
import { Footer } from "./components/footer/Footer.component"

interface LayoutProps {
  title?: string
  subtitle?: string
}

export const Layout: FC<LayoutProps> = ({ children, title, subtitle }) => {
  const [sidebarClosed, setSidebarClosed] = useState(false)
  const toggleSidebar = () => setSidebarClosed(!sidebarClosed)

  return (
    <div id="main-wrapper" className={`show ${sidebarClosed ? "menu-toggle" : ""}`}>
      <Nav sidebarActive={sidebarClosed} onSideBarToggle={toggleSidebar} />
      <Header />
      <SideBar />
      <div className="content-body">{children}</div>
      <Footer />
    </div>
  )
}
