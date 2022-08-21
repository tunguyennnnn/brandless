import React from 'react';

export default function SideBar() {
  return (
    <div className="sidebar sidebar-light sidebar-main sidebar-expand-lg align-self-start">
      <div className="sidebar-content">
        <div className="sidebar-section sidebar-header">
          <div className="sidebar-section-body d-flex align-items-center justify-content-center pb-0">
            <h6 className="sidebar-resize-hide flex-1 mb-0">Navigation</h6>
            <div>
              <button
                type="button"
                className="btn btn-outline-light text-body border-transparent btn-icon rounded-pill btn-sm sidebar-control sidebar-main-resize d-none d-lg-inline-flex"
              >
                <i className="icon-transmission"></i>
              </button>

              <button
                type="button"
                className="btn btn-outline-light text-body border-transparent btn-icon rounded-pill btn-sm sidebar-mobile-main-toggle d-lg-none"
              >
                <i className="icon-cross2"></i>
              </button>
            </div>
          </div>
        </div>

        <div className="sidebar-section sidebar-user">
          <div className="sidebar-section-body d-flex justify-content-center">
            <a href="#">
              <img
                src="../../../../global_assets/images/placeholders/placeholder.jpg"
                className="rounded-circle"
                alt=""
              />
            </a>

            <div className="sidebar-resize-hide flex-1 ml-3">
              <div className="font-weight-semibold">Victoria Baker</div>
              <div className="font-size-sm line-height-sm text-muted">
                Senior developer
              </div>
            </div>
          </div>
        </div>

        <div className="sidebar-section">
          <ul className="nav nav-sidebar" data-nav-type="accordion">
            <li className="nav-item-header pt-0">
              <div className="text-uppercase font-size-xs line-height-xs">
                Main
              </div>{' '}
              <i className="icon-menu" title="Main"></i>
            </li>
            <li className="nav-item">
              <a href="index.html" className="nav-link active">
                <i className="icon-home4"></i>
                <span>
                  Dashboard
                  <span className="d-block font-weight-normal opacity-50">
                    No active orders
                  </span>
                </span>
              </a>
            </li>
            <li className="nav-item nav-item-submenu">
              <a href="#" className="nav-link">
                <i className="icon-copy"></i> <span>Layouts</span>
              </a>

              <ul className="nav nav-group-sub" data-submenu-title="Layouts">
                <li className="nav-item">
                  <a
                    href="../../../../layout_1/LTR/default/full/index.html"
                    className="nav-link"
                  >
                    Default layout
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="../../../../layout_2/LTR/default/full/index.html"
                    className="nav-link"
                  >
                    Layout 2
                  </a>
                </li>
                <li className="nav-item">
                  <a href="index.html" className="nav-link active">
                    Layout 3
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="../../../../layout_4/LTR/default/full/index.html"
                    className="nav-link"
                  >
                    Layout 4
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="../../../../layout_5/LTR/default/full/index.html"
                    className="nav-link"
                  >
                    Layout 5
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="../../../../layout_6/LTR/default/full/index.html"
                    className="nav-link"
                  >
                    Layout 6
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="../../../../layout_7/LTR/default/full/index.html"
                    className="nav-link disabled"
                  >
                    Layout 7{' '}
                    <span className="badge bg-transparent align-self-center ml-auto">
                      Coming soon
                    </span>
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item nav-item-submenu">
              <a href="#" className="nav-link">
                <i className="icon-color-sampler"></i> <span>Themes</span>
              </a>

              <ul className="nav nav-group-sub" data-submenu-title="Themes">
                <li className="nav-item">
                  <a href="index.html" className="nav-link active">
                    Default
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="../../../LTR/material/full/index.html"
                    className="nav-link"
                  >
                    Material
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="../../../LTR/dark/full/index.html"
                    className="nav-link"
                  >
                    Dark
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="../../../LTR/clean/full/index.html"
                    className="nav-link disabled"
                  >
                    Clean{' '}
                    <span className="badge bg-transparent align-self-center ml-auto">
                      Coming soon
                    </span>
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item nav-item-submenu">
              <a href="#" className="nav-link">
                <i className="icon-stack"></i> <span>Starter kit</span>
              </a>

              <ul
                className="nav nav-group-sub"
                data-submenu-title="Starter kit"
              >
                <li className="nav-item">
                  <a
                    href="../seed/layout_navbar_fixed.html"
                    className="nav-link"
                  >
                    Fixed navbar
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="../seed/layout_navbar_hideable.html"
                    className="nav-link"
                  >
                    Hideable navbar
                  </a>
                </li>
                <li className="nav-item-divider"></li>
                <li className="nav-item">
                  <a href="../seed/layout_no_header.html" className="nav-link">
                    No header
                  </a>
                </li>
                <li className="nav-item">
                  <a href="../seed/layout_no_footer.html" className="nav-link">
                    No footer
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="../seed/layout_fixed_footer.html"
                    className="nav-link"
                  >
                    Fixed footer
                  </a>
                </li>
                <li className="nav-item-divider"></li>
                <li className="nav-item">
                  <a
                    href="../seed/layout_2_sidebars_1_side.html"
                    className="nav-link"
                  >
                    2 sidebars on 1 side
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="../seed/layout_2_sidebars_2_sides.html"
                    className="nav-link"
                  >
                    2 sidebars on 2 sides
                  </a>
                </li>
                <li className="nav-item">
                  <a href="../seed/layout_3_sidebars.html" className="nav-link">
                    3 sidebars
                  </a>
                </li>
                <li className="nav-item-divider"></li>
                <li className="nav-item">
                  <a href="../seed/layout_boxed_page.html" className="nav-link">
                    Boxed page
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="../seed/layout_boxed_content.html"
                    className="nav-link"
                  >
                    Boxed content
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a
                href="../../../RTL/default/full/index.html"
                className="nav-link"
              >
                <i className="icon-width"></i> <span>RTL version</span>
              </a>
            </li>

            <li className="nav-item-header">
              <div className="text-uppercase font-size-xs line-height-xs">
                Layout
              </div>{' '}
              <i className="icon-menu" title="Layout options"></i>
            </li>
            <li className="nav-item nav-item-submenu">
              <a href="#" className="nav-link">
                <i className="icon-stack2"></i> <span>Page layouts</span>
              </a>
              <ul
                className="nav nav-group-sub"
                data-submenu-title="Page layouts"
              >
                <li className="nav-item">
                  <a href="layout_navbar_fixed.html" className="nav-link">
                    Fixed navbar
                  </a>
                </li>
                <li className="nav-item">
                  <a href="layout_navbar_hideable.html" className="nav-link">
                    Hideable navbar
                  </a>
                </li>
                <li className="nav-item-divider"></li>
                <li className="nav-item">
                  <a href="layout_no_header.html" className="nav-link">
                    No header
                  </a>
                </li>
                <li className="nav-item">
                  <a href="layout_no_footer.html" className="nav-link">
                    No footer
                  </a>
                </li>
                <li className="nav-item">
                  <a href="layout_fixed_footer.html" className="nav-link">
                    Fixed footer
                  </a>
                </li>
                <li className="nav-item-divider"></li>
                <li className="nav-item">
                  <a href="layout_2_sidebars_1_side.html" className="nav-link">
                    2 sidebars on 1 side
                  </a>
                </li>
                <li className="nav-item">
                  <a href="layout_2_sidebars_2_sides.html" className="nav-link">
                    2 sidebars on 2 sides
                  </a>
                </li>
                <li className="nav-item">
                  <a href="layout_3_sidebars.html" className="nav-link">
                    3 sidebars
                  </a>
                </li>
                <li className="nav-item-divider"></li>
                <li className="nav-item">
                  <a href="layout_boxed_page.html" className="nav-link">
                    Boxed page
                  </a>
                </li>
                <li className="nav-item">
                  <a href="layout_boxed_content.html" className="nav-link">
                    Boxed content
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item nav-item-submenu">
              <a href="#" className="nav-link">
                <i className="icon-indent-decrease2"></i> <span>Sidebars</span>
              </a>
              <ul className="nav nav-group-sub" data-submenu-title="Sidebars">
                <li className="nav-item nav-item-submenu">
                  <a href="#" className="nav-link">
                    Main sidebar
                  </a>
                  <ul className="nav nav-group-sub">
                    <li className="nav-item">
                      <a
                        href="sidebar_default_resizable.html"
                        className="nav-link"
                      >
                        Resizable
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="sidebar_default_resized.html"
                        className="nav-link"
                      >
                        Resized
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="sidebar_default_hideable.html"
                        className="nav-link"
                      >
                        Hideable
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="sidebar_default_hidden.html"
                        className="nav-link"
                      >
                        Hidden
                      </a>
                    </li>
                    <li className="nav-item-divider"></li>
                    <li className="nav-item">
                      <a
                        href="sidebar_default_stretched.html"
                        className="nav-link"
                      >
                        Stretched
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="sidebar_default_color_dark.html"
                        className="nav-link"
                      >
                        Dark color
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item nav-item-submenu">
                  <a href="#" className="nav-link">
                    Secondary sidebar
                  </a>
                  <ul className="nav nav-group-sub">
                    <li className="nav-item">
                      <a
                        href="sidebar_secondary_hideable.html"
                        className="nav-link"
                      >
                        Hideable
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="sidebar_secondary_hidden.html"
                        className="nav-link"
                      >
                        Hidden
                      </a>
                    </li>
                    <li className="nav-item-divider"></li>
                    <li className="nav-item">
                      <a
                        href="sidebar_secondary_stretched.html"
                        className="nav-link"
                      >
                        Stretched
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="sidebar_secondary_color_dark.html"
                        className="nav-link"
                      >
                        Dark color
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item nav-item-submenu">
                  <a href="#" className="nav-link">
                    Right sidebar
                  </a>
                  <ul className="nav nav-group-sub">
                    <li className="nav-item">
                      <a
                        href="sidebar_right_hideable.html"
                        className="nav-link"
                      >
                        Hideable
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="sidebar_right_hidden.html" className="nav-link">
                        Hidden
                      </a>
                    </li>
                    <li className="nav-item-divider"></li>
                    <li className="nav-item">
                      <a
                        href="sidebar_right_stretched.html"
                        className="nav-link"
                      >
                        Stretched
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="sidebar_right_color_dark.html"
                        className="nav-link"
                      >
                        Dark color
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item-divider"></li>
                <li className="nav-item">
                  <a href="sidebar_components.html" className="nav-link">
                    Sidebar components
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item nav-item-submenu">
              <a href="#" className="nav-link">
                <i className="icon-menu3"></i> <span>Navbars</span>
              </a>
              <ul className="nav nav-group-sub" data-submenu-title="Navbars">
                <li className="nav-item nav-item-submenu">
                  <a href="#" className="nav-link">
                    Single navbar
                  </a>
                  <ul className="nav nav-group-sub">
                    <li className="nav-item">
                      <a
                        href="navbar_single_top_static.html"
                        className="nav-link"
                      >
                        Top static
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="navbar_single_top_fixed.html"
                        className="nav-link"
                      >
                        Top fixed
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="navbar_single_bottom_static.html"
                        className="nav-link"
                      >
                        Bottom static
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="navbar_single_bottom_fixed.html"
                        className="nav-link"
                      >
                        Bottom fixed
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item nav-item-submenu">
                  <a href="#" className="nav-link">
                    Multiple navbars
                  </a>
                  <ul className="nav nav-group-sub">
                    <li className="nav-item">
                      <a
                        href="navbar_multiple_top_static.html"
                        className="nav-link"
                      >
                        Top static
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="navbar_multiple_top_fixed.html"
                        className="nav-link"
                      >
                        Top fixed
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="navbar_multiple_bottom_static.html"
                        className="nav-link"
                      >
                        Bottom static
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="navbar_multiple_bottom_fixed.html"
                        className="nav-link"
                      >
                        Bottom fixed
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="navbar_multiple_top_bottom.html"
                        className="nav-link"
                      >
                        Top and bottom
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="navbar_multiple_secondary_sticky.html"
                        className="nav-link"
                      >
                        Secondary sticky
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item nav-item-submenu">
                  <a href="#" className="nav-link">
                    Content navbar
                  </a>
                  <ul className="nav nav-group-sub">
                    <li className="nav-item">
                      <a
                        href="navbar_component_single.html"
                        className="nav-link"
                      >
                        Single navbar
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="navbar_component_multiple.html"
                        className="nav-link"
                      >
                        Multiple navbars
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item-divider"></li>
                <li className="nav-item">
                  <a href="navbar_colors.html" className="nav-link">
                    Color options
                  </a>
                </li>
                <li className="nav-item">
                  <a href="navbar_sizes.html" className="nav-link">
                    Sizing options
                  </a>
                </li>
                <li className="nav-item">
                  <a href="navbar_hideable.html" className="nav-link">
                    Hide on scroll
                  </a>
                </li>
                <li className="nav-item">
                  <a href="navbar_components.html" className="nav-link">
                    Navbar components
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item nav-item-submenu">
              <a href="#" className="nav-link">
                <i className="icon-sort"></i> <span>Vertical navigation</span>
              </a>
              <ul
                className="nav nav-group-sub"
                data-submenu-title="Vertical navigation"
              >
                <li className="nav-item">
                  <a
                    href="navigation_vertical_collapsible.html"
                    className="nav-link"
                  >
                    Collapsible menu
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="navigation_vertical_accordion.html"
                    className="nav-link"
                  >
                    Accordion menu
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="navigation_vertical_bordered.html"
                    className="nav-link"
                  >
                    Bordered navigation
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="navigation_vertical_right_icons.html"
                    className="nav-link"
                  >
                    Right icons
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="navigation_vertical_badges.html"
                    className="nav-link"
                  >
                    Badges
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="navigation_vertical_disabled.html"
                    className="nav-link"
                  >
                    Disabled items
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item nav-item-submenu">
              <a href="#" className="nav-link">
                <i className="icon-transmission"></i>{' '}
                <span>Horizontal navigation</span>
              </a>
              <ul
                className="nav nav-group-sub"
                data-submenu-title="Horizontal navigation"
              >
                <li className="nav-item">
                  <a
                    href="navigation_horizontal_click.html"
                    className="nav-link"
                  >
                    Submenu on click
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="navigation_horizontal_hover.html"
                    className="nav-link"
                  >
                    Submenu on hover
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="navigation_horizontal_elements.html"
                    className="nav-link"
                  >
                    With custom elements
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="navigation_horizontal_tabs.html"
                    className="nav-link"
                  >
                    Tabbed navigation
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="navigation_horizontal_disabled.html"
                    className="nav-link"
                  >
                    Disabled navigation links
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="navigation_horizontal_mega.html"
                    className="nav-link"
                  >
                    Horizontal mega menu
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item nav-item-submenu">
              <a href="#" className="nav-link">
                <i className="icon-tree5"></i> <span>Menu levels</span>
              </a>
              <ul
                className="nav nav-group-sub"
                data-submenu-title="Menu levels"
              >
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    <i className="icon-IE"></i> Second level
                  </a>
                </li>
                <li className="nav-item nav-item-submenu">
                  <a href="#" className="nav-link">
                    <i className="icon-firefox"></i> Second level with child
                  </a>
                  <ul className="nav nav-group-sub">
                    <li className="nav-item">
                      <a href="#" className="nav-link">
                        <i className="icon-android"></i> Third level
                      </a>
                    </li>
                    <li className="nav-item nav-item-submenu">
                      <a href="#" className="nav-link">
                        <i className="icon-apple2"></i> Third level with child
                      </a>
                      <ul className="nav nav-group-sub">
                        <li className="nav-item">
                          <a href="#" className="nav-link">
                            <i className="icon-html5"></i> Fourth level
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="#" className="nav-link">
                            <i className="icon-css3"></i> Fourth level
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link">
                        <i className="icon-windows"></i> Third level
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    <i className="icon-chrome"></i> Second level
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
