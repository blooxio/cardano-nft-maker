import React, { FC, MutableRefObject, RefObject, useCallback, useEffect, useRef, useState } from "react"
/*
function quixSettings({
  typography,
  version,
  layout,
  navheaderBg,
  headerBg,
  sidebarStyle,
  sidebarBg,
  sidebarPosition,
  headerPosition,
  containerLayout,
  direction
}) {
  this.typography = typography || "poppins"
  this.version = version || "light"
  this.layout = layout || "vertical"
  this.navheaderBg = navheaderBg || "color_1"
  this.headerBg = headerBg || "color_1"
  this.sidebarStyle = sidebarStyle || "full"
  this.sidebarBg = sidebarBg || "color_1"
  this.sidebarPosition = sidebarPosition || "static"
  this.headerPosition = headerPosition || "static"
  this.containerLayout = containerLayout || "wide"
  this.direction = direction || "ltr"

  this.manageTypography()
  this.manageVersion()
  this.manageLayout()
  this.manageNavHeaderBg()
  this.manageHeaderBg()
  this.manageSidebarStyle()
  this.manageSidebarBg()
  this.manageSidebarPosition()
  this.manageHeaderPosition()
  this.manageContainerLayout()
  this.manageRtlLayout()
  this.manageResponsiveSidebar()
}

quixSettings.prototype.manageVersion = function () {
  switch (this.version) {
    case "light":
      body.attr("data-theme-version", "light")
      break
    case "dark":
      body.attr("data-theme-version", "dark")
      break
    case "transparent":
      body.attr("data-theme-version", "transparent")
      break
    default:
      body.attr("data-theme-version", "light")
  }
}

quixSettings.prototype.manageTypography = function () {
  switch (this.version) {
    case "poppins":
      body.attr("data-typography", "poppins")
      break
    case "roboto":
      body.attr("data-typography", "roboto")
      break
    case "opensans":
      body.attr("data-typography", "opensans")
      break
    default:
      body.attr("data-typography", "poppins")
  }
}

quixSettings.prototype.manageLayout = function () {
  switch (this.layout) {
    case "horizontal":
      this.sidebarStyle === "overlay" ? body.attr("data-sidebar-style", "full") : body.attr("data-sidebar-style", `${this.sidebarStyle}`)
      body.attr("data-layout", "horizontal")
      break
    case "vertical":
      body.attr("data-layout", "vertical")
      break
    default:
      body.attr("data-layout", "vertical")
  }
}

quixSettings.prototype.manageNavHeaderBg = function () {
  switch (this.navheaderBg) {
    case "color_1":
      body.attr("data-nav-headerbg", "color_1")
      break
    case "color_2":
      body.attr("data-nav-headerbg", "color_2")
      break
    case "color_3":
      body.attr("data-nav-headerbg", "color_3")
      break
    case "color_4":
      body.attr("data-nav-headerbg", "color_4")
      break
    case "color_5":
      body.attr("data-nav-headerbg", "color_5")
      break
    case "color_6":
      body.attr("data-nav-headerbg", "color_6")
      break
    case "color_7":
      body.attr("data-nav-headerbg", "color_7")
      break
    case "color_8":
      body.attr("data-nav-headerbg", "color_8")
      break
    case "color_9":
      body.attr("data-nav-headerbg", "color_9")
      break
    case "color_10":
      body.attr("data-nav-headerbg", "color_10")
      break
    case "image_1":
      body.attr("data-nav-headerbg", "image_1")
      break
    case "image_2":
      body.attr("data-nav-headerbg", "image_2")
      break
    case "image_3":
      body.attr("data-nav-headerbg", "image_3")
      break
    default:
      body.attr("data-nav-headerbg", "color_1")
  }
}

quixSettings.prototype.manageHeaderBg = function () {
  switch (this.headerBg) {
    case "color_1":
      body.attr("data-headerbg", "color_1")
      break
    case "color_2":
      body.attr("data-headerbg", "color_2")
      break
    case "color_3":
      body.attr("data-headerbg", "color_3")
      break
    case "color_4":
      body.attr("data-headerbg", "color_4")
      break
    case "color_5":
      body.attr("data-headerbg", "color_5")
      break
    case "color_6":
      body.attr("data-headerbg", "color_6")
      break
    case "color_7":
      body.attr("data-headerbg", "color_7")
      break
    case "color_8":
      body.attr("data-headerbg", "color_8")
      break
    case "color_9":
      body.attr("data-headerbg", "color_9")
      break
    case "color_10":
      body.attr("data-headerbg", "color_10")
      break
    case "transparent":
      body.attr("data-headerbg", "transparent")
      break
    case "gradient_1":
      body.attr("data-headerbg", "gradient_1")
      break
    case "gradient_2":
      body.attr("data-headerbg", "gradient_2")
      break
    case "gradient_3":
      body.attr("data-headerbg", "gradient_3")
      break
    default:
      body.attr("data-headerbg", "color_1")
  }
}

quixSettings.prototype.manageSidebarStyle = function () {
  switch (this.sidebarStyle) {
    case "full":
      body.attr("data-sidebar-style", "full")
      break
    case "mini":
      body.attr("data-sidebar-style", "mini")
      break
    case "compact":
      body.attr("data-sidebar-style", "compact")
      break
    case "modern":
      body.attr("data-sidebar-style", "modern")
      break
    case "icon-hover":
      body.attr("data-sidebar-style", "icon-hover")

      $(".quixnav").hover(
        function () {
          $("#main-wrapper").addClass("icon-hover-toggle")
        },
        function () {
          $("#main-wrapper").removeClass("icon-hover-toggle")
        }
      )
      break
    case "overlay":
      this.layout === "horizontal" ? body.attr("data-sidebar-style", "full") : body.attr("data-sidebar-style", "overlay")
      break
    default:
      body.attr("data-sidebar-style", "full")
  }
}

quixSettings.prototype.manageSidebarBg = function () {
  switch (this.sidebarBg) {
    case "color_1":
      body.attr("data-sibebarbg", "color_1")
      break
    case "color_2":
      body.attr("data-sibebarbg", "color_2")
      break
    case "color_3":
      body.attr("data-sibebarbg", "color_3")
      break
    case "color_4":
      body.attr("data-sibebarbg", "color_4")
      break
    case "color_5":
      body.attr("data-sibebarbg", "color_5")
      break
    case "color_6":
      body.attr("data-sibebarbg", "color_6")
      break
    case "color_7":
      body.attr("data-sibebarbg", "color_7")
      break
    case "color_8":
      body.attr("data-sibebarbg", "color_8")
      break
    case "color_9":
      body.attr("data-sibebarbg", "color_9")
      break
    case "color_10":
      body.attr("data-sibebarbg", "color_10")
      break
    case "image_1":
      body.attr("data-sibebarbg", "image_1")
      break
    case "image_2":
      body.attr("data-sibebarbg", "image_2")
      break
    case "image_3":
      body.attr("data-sibebarbg", "image_3")
      break
    default:
      body.attr("data-sibebarbg", "color_1")
  }
}

quixSettings.prototype.manageSidebarPosition = function () {
  switch (this.sidebarPosition) {
    case "fixed":
      ;(this.sidebarStyle === "overlay" && this.layout === "vertical") || this.sidebarStyle === "modern"
        ? body.attr("data-sidebar-position", "static")
        : body.attr("data-sidebar-position", "fixed")
      break
    case "static":
      body.attr("data-sidebar-position", "static")
      break
    default:
      body.attr("data-sidebar-position", "static")
  }
}

quixSettings.prototype.manageHeaderPosition = function () {
  switch (this.headerPosition) {
    case "fixed":
      body.attr("data-header-position", "fixed")
      break
    case "static":
      body.attr("data-header-position", "static")
      break
    default:
      body.attr("data-header-position", "static")
  }
}

quixSettings.prototype.manageContainerLayout = function () {
  switch (this.containerLayout) {
    case "boxed":
      if (this.layout === "vertical" && this.sidebarStyle === "full") {
        body.attr("data-sidebar-style", "overlay")
      }
      body.attr("data-container", "boxed")
      break
    case "wide":
      body.attr("data-container", "wide")
      break
    case "wide-boxed":
      body.attr("data-container", "wide-boxed")
      break
    default:
      body.attr("data-container", "wide")
  }
}

quixSettings.prototype.manageRtlLayout = function () {
  switch (this.direction) {
    case "rtl":
      html.attr("dir", "rtl")
      html.addClass("rtl")
      body.attr("direction", "rtl")
      break
    case "ltr":
      html.attr("dir", "ltr")
      html.removeClass("rtl")
      body.attr("direction", "ltr")
      break
    default:
      html.attr("dir", "ltr")
      body.attr("direction", "ltr")
  }
}

quixSettings.prototype.manageResponsiveSidebar = function () {
  const innerWidth = $(window).innerWidth()
  if (innerWidth < 1200) {
    body.attr("data-layout", "vertical")
    body.attr("data-container", "wide")
  }

  if (innerWidth > 767 && innerWidth < 1200) {
    body.attr("data-sidebar-style", "mini")
  }

  if (innerWidth < 768) {
    body.attr("data-sidebar-style", "overlay")
  }
}
*/

interface SideBarItem {
  title: string
}

const SideBarItem: FC<SideBarItem> = ({ title, children }) => {
  const ulRef: RefObject<HTMLUListElement> = useRef(null)
  const [active, setActive] = useState(true)
  const [height, setHeight] = useState<string | undefined>(undefined)

  const toggleActive = () => {
    // setTimeout(() => setActive(!active), 300)
    setHeight(active ? "0px" : "auto")
  }

  const style = {
    transition: "transform 0.3s ease-out",
    transform: `scaleY(${active ? 1 : 0})`,
    height
  }

  return (
    <li className={active ? "mm-active" : ""}>
      <a className="has-arrow" role="button" aria-expanded="false" onClick={toggleActive}>
        <i className="icon icon-single-04" />
        <span className="nav-text">{title}</span>
      </a>
      <ul className={`mm-collapse mm-show`} style={style} ref={ulRef}>
        {children}
      </ul>
    </li>
  )
}

export const SideBar: FC = () => {
  return (
    <div className="quixnav">
      <div className="quixnav-scroll ps ps--active-y mm-active">
        <ul className="metismenu" id="menu">
          <li className="nav-label first">Main Menu</li>
          <SideBarItem title={"Dashboard"}>
            <li>
              <a href="./index.html">Dashboard 1</a>
            </li>
            <li>
              <a href="./index2.html">Dashboard 2</a>
            </li>
          </SideBarItem>
          <li className="nav-label">Apps</li>
          <li>
            <a className="has-arrow" href="#" aria-expanded="false">
              <i className="icon icon-app-store" />
              <span className="nav-text">Apps</span>
            </a>
            <ul aria-expanded="false" className="mm-collapse">
              <li>
                <a href="./app-profile.html">Profile</a>
              </li>
              <li>
                <a className="has-arrow" href="#" aria-expanded="false">
                  Email
                </a>
                <ul aria-expanded="false" className="mm-collapse">
                  <li>
                    <a href="./email-compose.html">Compose</a>
                  </li>
                  <li>
                    <a href="./email-inbox.html">Inbox</a>
                  </li>
                  <li>
                    <a href="./email-read.html">Read</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="./app-calender.html">Calendar</a>
              </li>
            </ul>
          </li>
          <li>
            <a className="has-arrow" href="#" aria-expanded="false">
              <i className="icon icon-chart-bar-33" />
              <span className="nav-text">Charts</span>
            </a>
            <ul aria-expanded="false" className="mm-collapse">
              <li>
                <a href="./chart-flot.html">Flot</a>
              </li>
              <li>
                <a href="./chart-morris.html">Morris</a>
              </li>
              <li>
                <a href="./chart-chartjs.html">Chartjs</a>
              </li>
              <li>
                <a href="./chart-chartist.html">Chartist</a>
              </li>
              <li>
                <a href="./chart-sparkline.html">Sparkline</a>
              </li>
              <li>
                <a href="./chart-peity.html">Peity</a>
              </li>
            </ul>
          </li>
          <li className="nav-label">Components</li>
          <li>
            <a className="has-arrow" href="#" aria-expanded="false">
              <i className="icon icon-world-2" />
              <span className="nav-text">Bootstrap</span>
            </a>
            <ul aria-expanded="false" className="mm-collapse">
              <li>
                <a href="./ui-accordion.html">Accordion</a>
              </li>
              <li>
                <a href="./ui-alert.html">Alert</a>
              </li>
              <li>
                <a href="./ui-badge.html">Badge</a>
              </li>
              <li>
                <a href="./ui-button.html">Button</a>
              </li>
              <li>
                <a href="./ui-modal.html">Modal</a>
              </li>
              <li>
                <a href="./ui-button-group.html">Button Group</a>
              </li>
              <li>
                <a href="./ui-list-group.html">List Group</a>
              </li>
              <li>
                <a href="./ui-media-object.html">Media Object</a>
              </li>
              <li>
                <a href="./ui-card.html">Cards</a>
              </li>
              <li>
                <a href="./ui-carousel.html">Carousel</a>
              </li>
              <li>
                <a href="./ui-dropdown.html">Dropdown</a>
              </li>
              <li>
                <a href="./ui-popover.html">Popover</a>
              </li>
              <li>
                <a href="./ui-progressbar.html">Progressbar</a>
              </li>
              <li>
                <a href="./ui-tab.html">Tab</a>
              </li>
              <li>
                <a href="./ui-typography.html">Typography</a>
              </li>
              <li>
                <a href="./ui-pagination.html">Pagination</a>
              </li>
              <li>
                <a href="./ui-grid.html">Grid</a>
              </li>
            </ul>
          </li>

          <li>
            <a className="has-arrow" href="#" aria-expanded="false">
              <i className="icon icon-plug" />
              <span className="nav-text">Plugins</span>
            </a>
            <ul aria-expanded="false" className="mm-collapse">
              <li>
                <a href="./uc-select2.html">Select 2</a>
              </li>
              <li>
                <a href="./uc-nestable.html">Nestedable</a>
              </li>
              <li>
                <a href="./uc-noui-slider.html">Noui Slider</a>
              </li>
              <li>
                <a href="./uc-sweetalert.html">Sweet Alert</a>
              </li>
              <li>
                <a href="./uc-toastr.html">Toastr</a>
              </li>
              <li>
                <a href="./map-jqvmap.html">Jqv Map</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="widget-basic.html" aria-expanded="false">
              <i className="icon icon-globe-2" />
              <span className="nav-text">Widget</span>
            </a>
          </li>
          <li className="nav-label">Forms</li>
          <li>
            <a className="has-arrow" href="#" aria-expanded="false">
              <i className="icon icon-form" />
              <span className="nav-text">Forms</span>
            </a>
            <ul aria-expanded="false" className="mm-collapse">
              <li>
                <a href="./form-element.html">Form Elements</a>
              </li>
              <li>
                <a href="./form-wizard.html">Wizard</a>
              </li>
              <li>
                <a href="./form-editor-summernote.html">Summernote</a>
              </li>
              <li>
                <a href="form-pickers.html">Pickers</a>
              </li>
              <li>
                <a href="form-validation-jquery.html">Jquery Validate</a>
              </li>
            </ul>
          </li>
          <li className="nav-label">Table</li>
          <li>
            <a className="has-arrow" href="#" aria-expanded="false">
              <i className="icon icon-layout-25" />
              <span className="nav-text">Table</span>
            </a>
            <ul aria-expanded="false" className="mm-collapse">
              <li>
                <a href="table-bootstrap-basic.html">Bootstrap</a>
              </li>
              <li>
                <a href="table-datatable-basic.html">Datatable</a>
              </li>
            </ul>
          </li>

          <li className="nav-label">Extra</li>
          <li>
            <a className="has-arrow" href="#" aria-expanded="false">
              <i className="icon icon-single-copy-06" />
              <span className="nav-text">Pages</span>
            </a>
            <ul aria-expanded="false" className="mm-collapse">
              <li>
                <a href="./page-register.html">Register</a>
              </li>
              <li>
                <a href="./page-login.html">Login</a>
              </li>
              <li>
                <a className="has-arrow" href="#" aria-expanded="false">
                  Error
                </a>
                <ul aria-expanded="false" className="mm-collapse">
                  <li>
                    <a href="./page-error-400.html">Error 400</a>
                  </li>
                  <li>
                    <a href="./page-error-403.html">Error 403</a>
                  </li>
                  <li>
                    <a href="./page-error-404.html">Error 404</a>
                  </li>
                  <li>
                    <a href="./page-error-500.html">Error 500</a>
                  </li>
                  <li>
                    <a href="./page-error-503.html">Error 503</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="./page-lock-screen.html">Lock Screen</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  )
}
