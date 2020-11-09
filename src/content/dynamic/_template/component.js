import React, { Component } from "react";
import { Nav } from './nav';
import Highlight from 'react-highlight';
import LinkIcons from 'components/linkIcons';
import 'highlight.js/styles/github.css';

class Auro[Component] extends Component {

  // constructor(props) {
  //   super(props);
  // };

  showVersion() {
    const pjson = require('../../../../package.json');
    const dependencies = pjson.dependencies['@alaskaairux/auro-component'];

    return `@alaskaairux/auro-component: ${dependencies}`;
  };

  render() {
    return (
      <section id="component">

        <Nav />

        <auro-header level="2" display="display">Component</auro-header>

        <p>Words </p>

        <auro-header level="2" display="700">Component use cases</auro-header>

        <p>Use the <code>auro-component</code> element to render:</p>
        <ul>
          <li>things ...</li>
        </ul>

        <auro-header level="2" display="700">Default component</auro-header>
        <div className="demo--inline exampleWrapper">
          <auro-component >Words ...</auro-component>
        </div>
        <Highlight className='html afterCode'>
          {`<auro-component >Words ...</auro-component>`}
        </Highlight>


        <LinkIcons
          github="https://github.com/AlaskaAirlines/auro-component"
          npm="https://www.npmjs.com/package/@alaskaairux/auro-component"
          code="https://github.com/AlaskaAirlines/auro-component/blob/master/src/auro-component.js"
          version={this.showVersion()}
        />
      </section>
    );
  }
}

export default Auro[Component];
