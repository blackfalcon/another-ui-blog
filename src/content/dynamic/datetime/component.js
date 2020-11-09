import React, { Component } from "react";
import { Nav } from './nav';
import Highlight from 'react-highlight';
import LinkIcons from 'components/linkIcons';
import 'highlight.js/styles/github.css';

class AuroDateTime extends Component {

  // constructor(props) {
  //   super(props);
  // };

  showVersion() {
    const pjson = require('../../../../package.json');
    const dependencies = pjson.dependencies['@alaskaairux/auro-datetime'];

    return `@alaskaairux/auro-datetime: ${dependencies}`;
  };

  render() {
    return (
      <section id="component">

        <Nav />

        <auro-header level="2" display="display">Date/Time</auro-header>

        <p>The new auro-datetime web components makes it really easy to add dates to your web app with a simple HTML API.  </p>

        <auro-header level="2" display="700">Basic date</auro-header>
        <div className="demo--inline exampleWrapper">
          <auro-datetime type="date"></auro-datetime>
        </div>
        <Highlight className='html afterCode'>
          {`<auro-datetime type="date"></auro-datetime>`}
        </Highlight>

        <auro-header level="2" display="700">Numeric date</auro-header>
        <div className="demo--inline exampleWrapper">
          <auro-datetime type="numeric"></auro-datetime>
        </div>
        <Highlight className='html afterCode'>
          {`<auro-datetime type="numeric"></auro-datetime>`}
        </Highlight>

        <auro-header level="2" display="700">Basic time</auro-header>
        <div className="demo--inline exampleWrapper">
          <auro-datetime type="time"></auro-datetime>
        </div>
        <Highlight className='html afterCode'>
          {`<auro-datetime type="time"></auro-datetime>`}
        </Highlight>

        <auro-header level="2" display="700">Basic date w/long weekday and month</auro-header>
        <div className="demo--inline exampleWrapper">
          <auro-datetime type="date" month="long" weekday="long"></auro-datetime>
        </div>
        <Highlight className='html afterCode'>
          {`<auro-datetime type="date" month="long" weekday="long"></auro-datetime>`}
        </Highlight>

        <auro-header level="2" display="700">Time with options</auro-header>
        <p>See all <auro-hyperlink href="https://bugs.chromium.org/p/chromium/issues/detail?id=928068#c1" target="_blank">timezone options</auro-hyperlink></p>
        <div className="demo--inline exampleWrapper">
          <p>Current location: <auro-datetime type="time"></auro-datetime></p>
          <p>Mid-west: <auro-datetime type="time" timezone="America/Chicago"></auro-datetime></p>
          <p>East coast: <auro-datetime type="time" timezone="America/New_York"></auro-datetime></p>
          <p>Custom UTC: <auro-datetime type="time" utc="2020-09-22T01:38:22Z"></auro-datetime></p>
          <p>Custom string: <auro-datetime type="time" setdate="August 19, 1975 23:15:30"></auro-datetime></p>
        </div>
        <Highlight className='html afterCode'>
          {`<p>Current location: <auro-datetime type="time"></auro-datetime></p>
<p>Mid-west: <auro-datetime type="time" timezone="America/Chicago"></auro-datetime></p>
<p>East coast: <auro-datetime type="time" timezone="America/New_York"></auro-datetime></p>
<p>Custom UTC: <auro-datetime type="time" utc="2020-09-22T01:38:22Z"></auro-datetime></p>
<p>Custom string: <auro-datetime type="time" setdate="August 19, 1975 23:15:30"></auro-datetime></p>`}
        </Highlight>

        <auro-header level="2" display="700">Set date with UTC time code</auro-header>
        <div className="demo--inline exampleWrapper">
          <auro-datetime utc="1920-04-22T01:38:22Z"></auro-datetime><br/>
          <auro-datetime weekday="long" month="long" utc="1920-04-22T01:38:22Z"></auro-datetime><br/>
          <auro-datetime type="numeric" utc="1920-04-22T01:38:22Z"></auro-datetime><br/>
          <auro-datetime type="weekday" utc="1920-04-22T01:38:22Z"></auro-datetime><br/>
          <auro-datetime type="day" utc="1920-04-22T01:38:22Z"></auro-datetime><br/>
          <auro-datetime type="month" utc="1920-04-22T01:38:22Z"></auro-datetime><br/>
          <auro-datetime type="year" utc="1920-04-22T01:38:22Z"></auro-datetime>
        </div>
        <Highlight className='html afterCode'>
          {`<auro-datetime utc="1920-04-22T01:38:22Z"></auro-datetime>
<auro-datetime weekday="long" month="long" utc="1920-04-22T01:38:22Z"></auro-datetime>
<auro-datetime type="numeric" utc="1920-04-22T01:38:22Z"></auro-datetime>
<auro-datetime type="weekday" utc="1920-04-22T01:38:22Z"></auro-datetime>
<auro-datetime type="day" utc="1920-04-22T01:38:22Z"></auro-datetime>
<auro-datetime type="month" utc="1920-04-22T01:38:22Z"></auro-datetime>
<auro-datetime type="year" utc="1920-04-22T01:38:22Z"></auro-datetime>`}
        </Highlight>

        <auro-header level="2" display="700">Set date with string</auro-header>
        <div className="demo--inline exampleWrapper">
          <auro-datetime setdate="August 19, 1975 23:15:30"></auro-datetime><br/>
          <auro-datetime weekday="long" month="long" setdate="August 19, 1975 23:15:30"></auro-datetime><br/>
          <auro-datetime type="numeric" setdate="August 19, 1975 23:15:30"></auro-datetime><br/>
          <auro-datetime type="weekday" setdate="August 19, 1975 23:15:30"></auro-datetime><br/>
          <auro-datetime type="day" setdate="August 19, 1975 23:15:30"></auro-datetime><br/>
          <auro-datetime type="month" setdate="August 19, 1975 23:15:30"></auro-datetime><br/>
          <auro-datetime type="year" setdate="August 19, 1975 23:15:30"></auro-datetime>
        </div>
        <Highlight className='html afterCode'>
          {`<auro-datetime setdate="August 19, 1975 23:15:30"></auro-datetime>
<auro-datetime weekday="long" month="long" setdate="August 19, 1975 23:15:30"></auro-datetime>
<auro-datetime type="numeric" setdate="August 19, 1975 23:15:30"></auro-datetime>
<auro-datetime type="weekday" setdate="August 19, 1975 23:15:30"></auro-datetime>
<auro-datetime type="day" setdate="August 19, 1975 23:15:30"></auro-datetime>
<auro-datetime type="month" setdate="August 19, 1975 23:15:30"></auro-datetime>
<auro-datetime type="year" setdate="August 19, 1975 23:15:30"></auro-datetime>`}
        </Highlight>

        <auro-header level="2" display="700">Combinations and slots</auro-header>
        <p>The auro-datetime component also supports a wide series of use cases and slots for positioning content. See the following examples for inspiration and use. </p>
        <div className="demo--inline exampleWrapper">
          <auro-datetime type="year">
            <span slot="pre">In </span>
            <span slot="post">
              day<auro-datetime type="day"></auro-datetime>
              of <auro-datetime type="month" month="long"></auro-datetime>
            </span>falls on a <auro-datetime type="weekday" weekday="long"></auro-datetime>
          </auro-datetime>
        </div>
        <Highlight className='html afterCode'>
          {`<auro-datetime type="year">
  <span slot="pre">In </span>
  <span slot="post">
    day<auro-datetime type="day"></auro-datetime>
    of <auro-datetime type="month" month="long"></auro-datetime>
  </span>falls on a <auro-datetime type="weekday" weekday="long"></auro-datetime>
</auro-datetime>`}
        </Highlight>



        <LinkIcons
          github="https://github.com/AlaskaAirlines/auro-datetime"
          npm="https://www.npmjs.com/package/@alaskaairux/auro-datetime"
          code="https://github.com/AlaskaAirlines/auro-datetime/blob/master/src/auro-datetime.js"
          version={this.showVersion()}
        />
      </section>
    );
  }
}

export default AuroDateTime;
