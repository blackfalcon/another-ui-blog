import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export class Nav extends Component {

  render() {
    return (
      <div role="tablist" className="ods-tablist tabList">
        <NavLink role="tab" exact className="tab link" to={`/components/auro/[component]`} activeClassName="is-active">[component]</NavLink><NavLink role="tab" exact className="tab link" to={`/components/auro/[component]/install`} activeClassName="is-active">Install</NavLink><NavLink role="tab" exact className="tab link" to={`/components/auro/[component]/api`} activeClassName="is-active">API</NavLink>
      </div>
    )
  }
}
