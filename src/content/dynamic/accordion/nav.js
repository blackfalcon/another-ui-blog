import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export class Nav extends Component {

  render() {
    return (
      <div role="tablist" className="ods-tablist tabList">
        <NavLink role="tab" exact className="tab link" to={`/accordion`} activeClassName="is-active">Accordion</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/accordion/install`} activeClassName="is-active">Install</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/accordion/api`} activeClassName="is-active">API</NavLink>
      </div>
    )
  }
}
