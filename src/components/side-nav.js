import React, { useState, Fragment } from 'react';
import { NavLink } from "react-router-dom";

export default function SideNav(props) {

  const [siteNav, setNav] = useState([
    {
      header: "Latest hotness",
      items: [
        { linkTitle: "Overlapping concerns", route: "/blog/overlapping-concerns", parent: true },
        { linkTitle: "CSS and custom elements", route: "/blog/custom-element-css", parent: true },
        { linkTitle: "Custom elements, so what's really the big deal?!", route: "/blog/custom-elements", parent: true },
      ]
    },
    {
      header: "Archive",
      items: [
        { linkTitle: "CSS Loaders", route: "/blog/loader", parent: true },
        { linkTitle: "Why datetime?", route: "/blog/why-datetime", parent: true },
        { linkTitle: "The Dream", route: "/blog/the-dream", parent: true },
        { linkTitle: "Detecting touch", route: "/blog/detecting-touch", parent: true },
      ]
    },
    {
      header: "Other things",
      items: [
        { linkTitle: "About me", route: "/about", parent: true },
      ]
    }
  ]);

  return (
    <nav className="sidenav">
      {siteNav.map(navBlock => (
        <Fragment key={Math.random()}>

          <section>
            {/* heading for nav block, uses first title in the object */}
            <p className="isHeading auro_heading auro_heading--500" key={navBlock.header}>{navBlock.header}</p>

            <p className="auro_heading auro_heading--300" key={navBlock.title}>{navBlock.title}</p>


              {/* TODO: Toggle HIDDEN attr on click to hide/show nav items within a block */}
              <div className="navBlock">
                {navBlock.items.map(link => (
                  <NavLink exact key={link.route} to={link.route} activeClassName="is-active"

                    className={`auro_hyperlink auro_hyperlink--nav ${link.active ? 'auro_hyperlink--active': ''} ${link.subNav ? 'auro_hyperlink--subNav': ''} ${link.parent ? 'auro_hyperlink--parent': ''}`}>

                    {/* onClick event that sets nav item state to isActive */}
                    <span
                      onClick={() => {
                        siteNav.forEach(navBlock => navBlock.items.forEach(link => link.active = false));
                        link.active = true;
                        setNav([...siteNav]);
                      }}>

                      {link.linkTitle}
                    </span>
                  </NavLink>
                ))}
              </div>
            </section>
        </Fragment>
      ))}

      <p className="auro_heading auro_heading--500" style={{"margin-top": "100px"}}>Social</p>
      <auro-hyperlink href="https://twitter.com/anotheruiguy" nav target="_blank">Follow me on Twitter</auro-hyperlink>

      <p className="auro_heading auro_heading--500">Feedback</p>
      <small>Have feedback on a post?<br/>Ideas for a new post?</small>
      <auro-hyperlink href="https://github.com/blackfalcon/another-ui-blog/issues" nav target="_blank">Send me an issue</auro-hyperlink>
    </nav>
  )
}
