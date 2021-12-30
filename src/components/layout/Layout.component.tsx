import React, { EventHandler, FC, useEffect, useRef, useState } from "react"

interface LayoutProps {
  title?: string
  subtitle?: string
}

const HeaderDropDown: FC = ({ children }) => {
  const ref: React.RefObject<HTMLDivElement> = useRef(null)
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

  const inlineStyle = {
    position: "absolute",
    transform: "translate3d(-126px, 51px, 0px)",
    top: "0px",
    left: "0px",
    willChange: "transform"
  } as any

  return (
    <div className={`dropdown dib ${show ? "show" : ""}`} ref={ref}>
      <div className="header-icon" data-toggle="dropdown" onClick={toggleMenu} role="button">
        <span className="user-avatar">
          {"John  "} <i className="ti-angle-down f-s-10" />
        </span>
        <div
          className={`drop-down dropdown-profile dropdown-menu dropdown-menu-right ${show ? "show" : ""}`}
          style={show ? inlineStyle : undefined}
        >
          <div className="dropdown-content-heading">
            <span className="text-left">Upgrade Now</span>
            <p className="trial-day">30 Days Trail</p>
          </div>
          <div className="dropdown-content-body">
            <ul>
              <li>
                <a href="#">
                  <i className="ti-user" />
                  <span>Profile</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="ti-email" />
                  <span>Inbox</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="ti-settings" />
                  <span>Setting</span>
                </a>
              </li>

              <li>
                <a href="#">
                  <i className="ti-lock" />
                  <span>Lock Screen</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="ti-power-off" />
                  <span>Logout</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export const Layout: FC<LayoutProps> = ({ children, title, subtitle }) => {
  const [showSidebar, setShowSidebar] = useState(true)
  const toggleSidebar = () => setShowSidebar(!showSidebar)

  return (
    <div className={`${!showSidebar && "sidebar-hide"}`}>
      <div className="sidebar sidebar-hide-to-small sidebar-shrink sidebar-gestures">
        <div className="nano">
          <div className="nano-content">
            <div className="logo">
              <a href="index.html">
                <span>Focus</span>
              </a>
            </div>
            <ul className="d-block">
              <li className="label">Main</li>
              <li>
                <a className="sidebar-sub-toggle">
                  <i className="ti-home" /> Dashboard <span className="badge badge-primary">2</span>{" "}
                  <span className="sidebar-collapse-icon ti-angle-down" />
                </a>
                <ul>
                  <li>
                    <a href="index.html">Dashboard 1</a>
                  </li>
                  <li>
                    <a href="index1.html">Dashboard 2</a>
                  </li>
                </ul>
              </li>

              <li className="label">Apps</li>
              <li>
                <a className="sidebar-sub-toggle">
                  <i className="ti-bar-chart-alt"></i> Charts <span className="sidebar-collapse-icon ti-angle-down"></span>
                </a>
                <ul>
                  <li>
                    <a href="chart-flot.html">Flot</a>
                  </li>
                  <li>
                    <a href="chart-morris.html">Morris</a>
                  </li>
                  <li>
                    <a href="chartjs.html">Chartjs</a>
                  </li>
                  <li>
                    <a href="chartist.html">Chartist</a>
                  </li>
                  <li>
                    <a href="chart-peity.html">Peity</a>
                  </li>
                  <li>
                    <a href="chart-sparkline.html">Sparkle</a>
                  </li>
                  <li>
                    <a href="chart-knob.html">Knob</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="header">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="float-left">
                <div className="hamburger sidebar-toggle" onClick={toggleSidebar}>
                  <span className="line" />
                  <span className="line" />
                  <span className="line" />
                </div>
              </div>
              <div className="float-right">
                <HeaderDropDown />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content-wrap">
        <div className="main">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                {!!title && (
                  <div className="page-header">
                    <div className="page-title">
                      <h1>
                        {title}
                        {!!subtitle && ", "}
                        {!!subtitle && <span>{subtitle}</span>}
                      </h1>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <section id="main-content">{children}</section>
          </div>
        </div>
      </div>
    </div>
  )
}
