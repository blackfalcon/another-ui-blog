# The Dream

<small><auro-datetime utc="2020-11-09T00:01:00Z" month="long"></auro-datetime></small>

So blah blah ... custom elements or web components. You get it. They are here and we can use them. Why do you care?

Simple really. Web development is all about HTML, right? But it's crazy how much effort we put in to not use HTML. Yes, it's primitive af. I get that. What we have always wanted is a way to make super-powered HTML elements so that we can make awesome things. Custom elements give us that in a way that is so amazing.

## "So here we need an accordion" -- team designer

Any web dev, tell me you haven't had this conversation.

> <b>Designer:</b> Hey, so here we want to use an accordion.<br/>
> <b>Dev:</b> Oh sure, no worries, I saw that in the site somewhere.<br/>
> <b>Designer:</b> cool!<br/>
> <b>Dev:</b> Oh crap ... that's in the customer support part of the site, we don't own that. It's in a totally different stack owned by a different team.<br/>
> <b>Designer:</b> But, it's in the site, can't you just copy it over?<br/>
> <b>Dev:</b> Well ... I need to recreate it, so we will need to build that into the scope of the sprint. Do you have a design spec?<br/>
> <b>Designer:</b> No. Ugh. What do you need?<br/>
> <b>Dev:</b> Well, I can use this library, but the UI is different, maybe I can hack it?

Again and again I have run into this scenario. Again and again I redeveloped things. I feel like much of my career was wasted on repeating things because there simply just wasn't a better way.

 But now there is!

 ## That accordion we talked about

This blog is a perfect example. I am using React with a markdown converter. The blog pages are written in markdown and rendered as HTML. So how do I get an accordion in here? Simple. I use HTML.

What you say? Yup. No MDX. I am bypassing React all together. These are not react components. These are HTML custom elements that can be [used anywhere](https://custom-elements-everywhere.com/).

For this example, I am going to use the [auro-accordion](https://auro.alaskaair.com/components/auro/accordion) from the [Auro Design System](https://auro.alaskaair.com/).

#### First the install. Nothing scary here.

```
$ npm i @alaskaairux/auro-accordion
$ npm i @alaskaairux/orion-design-tokens
```

#### Then the use

In the `index.js` file, I added these two lines.

```js
// Library of design tokens
import "@alaskaairux/orion-design-tokens/dist/tokens/CSSCustomProperties.css"

// HTML custom element definition
import "@alaskaairux/auro-accordion"
```

#### Now to use in the markdown file

Here is a simple HTML reference for an accordion element.

<auro-accordion>
  <span slot="trigger">Look ... I am an accordion</span>
  "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking." --Steve Jobs
</auro-accordion>

```html
<auro-accordion>
  <span slot="trigger">Look ... I am an accordion</span>
  "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking." --Steve Jobs
</auro-accordion>
```

Can you believe this? This is too easy. All the JavaScript for the component is baked into the shadow DOM. All the CSS came with it as well. None of this pollutes the app or document. It is 100% encapsulated. Can you say that about React?

Ok, so that previous conversation was painful and everyone hates it. What if ...

> <b>Designer:</b> Hey, so here we want to use an accordion.<br/>
> <b>Dev:</b> Done!<br/>

Yeah. Done.

## One more thing

Custom elements aren't just for things like buttons or accordions. How about date and time? Ugh ... date and time are such a pain in the butt with JavaScript. Thinking about this React site, where do I put code I want to use to convert a date? Then do I have to use MDX to make a JavaScript React component to install in the markdown file?

What if I just used the [auro-datetime](https://auro.alaskaair.com/components/auro/datetime) custom element? What is this element you say? Simply put, it's a custom element that allows you to access a date/time JavaScript API using basic HTML.

Yeah, we can do that.

```
$ npm i @alaskaairux/auro-datetime
import "@alaskaairux/auro-datetime
```

This is too easy.

```html
<auro-datetime type="date" weekday="long"></auro-datetime>
```

Really? So using this code I can have ... "The current date is, <auro-datetime type="date" weekday="long"></auro-datetime>"

No way! This is too simple! And just like HTML, you can easily combine things. Using pattern like this we can do whatever we want!

```html
<auro-accordion>
  <span slot="trigger"> ... </span>
  <auro-datetime type="date"></auro-datetime>
</auro-accordion>
```

<auro-accordion-group>
  <auro-accordion>
    <span slot="trigger">What is the current date? </span>
    <auro-datetime type="date" weekday="long" month="long"></auro-datetime>
  </auro-accordion>
  <auro-accordion>
    <span slot="trigger">What is the current time? </span>
    <auro-datetime type="time"></auro-datetime>
  </auro-accordion>
  <auro-accordion>
    <span slot="trigger">What's the time on the east coast? </span>
    <auro-datetime type="time" timezone="America/New_York"></auro-datetime>
  </auro-accordion>
  <auro-accordion>
    <span slot="trigger">Can I set the date? </span>
    Sure you can! Use <pre>utc="2020-09-22T01:38:22Z"</pre>
    <auro-datetime type="date" weekday="long" utc="2020-09-22T01:38:22Z"></auro-datetime>
  </auro-accordion>
</auro-accordion-group>

## So, there you have it

Look. The simple answer here is, if it's built as a custom element, it can be used anywhere. Install is a snap. Use is as easy as any other HTML. Define your own API and make awesome things.

So what's left? Well, if you don't already know how to build custom elements, it's time to learn.
