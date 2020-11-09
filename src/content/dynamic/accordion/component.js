import React, { Component } from "react";
import { Nav } from './nav';
import Highlight from 'react-highlight';
import 'highlight.js/styles/github.css';

class AuroAccordion extends Component {


  render() {
    return (
      <section id="accordion">

        <Nav />

        <auro-header level="2" display="display">Accordion</auro-header>

        <p>Use the auro-accordion to allow users to toggle/expand additional content based on a trigger. </p>
        <p>The auro-accordion allows for stacked containers with nested items that expand and collapse when triggered.</p>

        <auro-header level="2" display="700">Component use cases</auro-header>

        <p>Use the <code>auro-accordion</code> element to:</p>
        <ul>
          <li>Hide/show long sub-content based on headline trigger</li>
          <li>Use is for in-page content only when content length is distracting to the specific experience</li>
        </ul>

        <auro-header level="2" display="700">Single accordion</auro-header>
        <p>The auro-accordion can be used as an individual element to hide/show content.</p>
        <div className="demo--inline exampleWrapper">
          <auro-accordion id="cookiePolicy">
            <span slot="trigger">Cookie Policy</span>
            <p><auro-hyperlink href="/content/legal/privacy-policy">Review cookie policy</auro-hyperlink> to learn or withdraw your consent to all or some of the cookies our website uses.</p>
          </auro-accordion>
        </div>
        <Highlight className='html afterCode'>
          {`<auro-accordion id="cookiePolicy">
  <span slot="trigger">Cookie Policy</span>
  <p><auro-hyperlink href="/content/legal/privacy-policy">Review cookie policy</auro-hyperlink> to learn or withdraw your consent to all or some of the cookies our website uses.</p>
</auro-accordion>`}
        </Highlight>

        <auro-header level="2" display="700">Multi-content accordion</auro-header>
        <p>The auro-accordion multi-content use case requires the use of the <code>auro-accordion-group</code> component.</p>
        <div className="demo--inline exampleWrapper">
          <auro-accordion-group>
            <auro-accordion id="flightNotice">
              <span slot="trigger">Flight notifications</span>

              <auro-radio-group required>
                <span slot="legend">Choose the level of notifications that’s best for you:</span>
                <auro-radio id="radio1" label="No notifications" name="notifications" value="No notifications" checked></auro-radio>
                <auro-radio id="radio2" label="Standard (flight delays, cancellations, and gate changes)" name="notifications" value="Standard"></auro-radio>
                <auro-radio id="radio3" label="Extended (Standard plus pre-flight status and arrival)" name="notifications" value="Extended"></auro-radio>
              </auro-radio-group>

              <p>By enabling flight notifications, I agree to the terms and conditions.</p>

              <auro-button>Save</auro-button>
            </auro-accordion>

            <auro-accordion id="dealsPromotions">
              <span slot="trigger">Deals and promotions</span>

              <auro-checkbox-group>
                <span slot="legend">Please select an option if applicable</span>
                <auro-checkbox id="optionOne" name="exampleOptions" value="option one">Deals and announcements</auro-checkbox>
                <auro-checkbox id="optionTwo" name="exampleOptions" value="option two">Insider newsletter</auro-checkbox>
              </auro-checkbox-group>
            </auro-accordion>
          </auro-accordion-group>
        </div>
        <Highlight className='html afterCode'>
          {`<auro-accordion-group>
<auro-accordion id="flightNotice">
  <span slot="trigger">Flight notifications</span>

  <auro-radio-group required>
    <span slot="legend">Choose the level of notifications that’s best for you:</span>
    <auro-radio id="radio1" label="No notifications" name="notifications" value="No notifications" checked></auro-radio>
    <auro-radio id="radio2" label="Standard (flight delays, cancellations, and gate changes)" name="notifications" value="Standard"></auro-radio>
    <auro-radio id="radio3" label="Extended (Standard plus pre-flight status and arrival)" name="notifications" value="Extended"></auro-radio>
  </auro-radio-group>

  <p>By enabling flight notifications, I agree to the terms and conditions.</p>

  <auro-button>Save</auro-button>
</auro-accordion>

<auro-accordion id="dealsPromotions">
  <span slot="trigger">Deals and promotions</span>

  <auro-checkbox-group>
    <span slot="legend">Please select an option if applicable</span>
    <auro-checkbox id="optionOne" name="exampleOptions" value="option one">Deals and announcements</auro-checkbox>
    <auro-checkbox id="optionTwo" name="exampleOptions" value="option two">Insider newsletter</auro-checkbox>
  </auro-checkbox-group>
</auro-accordion>
</auro-accordion-group>`}
        </Highlight>

      </section>
    );
  }
}

export default AuroAccordion;
