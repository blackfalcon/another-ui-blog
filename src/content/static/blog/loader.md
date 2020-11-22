# CSS Loaders

<small><auro-datetime utc="2020-12-28T00:01:00Z" month="long"></auro-datetime></small>

If you are like me you may be experiencing burnout from all the drama in the world. It's at times like this that we need to find things that make us happy. Reduces the stresses of the world and is just simply fund to do.

For me, that is building a HTML custom element that solves one of the great trivialities of the world, but a necessary tool to bridge the gaps between the current state of the internet and perceived performance. And they are just fun to build. Yes, I am talking about LOADERS!

## The problem

Simply put, loaders are such an annoying thing across an enterprise app. And if you are working on a typical project you are probably well aware of the issues I will speak to. A loader is a loader is a loader. No, that is a lie. Fact is there may be a 'design' intended consistency, but there is massive developer inconsistency. When a developer is challenged with the prospect of building a loader their usual first response is, <em>"Is there one out there I can just use?"</em>

Maybe? Did your designer use what is in use across the rest of the product? There is a good chance that they did not. Is there a library thing out there that can be easily integrated? Maybe. SVG? CSS? Gif? Why is this so hard?

The most common answer is polymorphic front-ends. Sure maybe someone on another team made a version of a loader, but can you use it in your code? Is their code accessible or will it need to be recreated? It's such a low impact part of the work that little effort is ever put towards making this easy so it is always hard.

## The inspiration

There is a pretty awesome library that I have been profiting off of for some time now. The CSS library [load-awesome](https://github.com/danielcardoso/load-awesome) by Daniel Cardoso. It's just a really great assembly of common loaders and he built them in a way that is extremely extensible. A little code here, a little code there, slap together a new loader, ship it and forget.

Well, in the age of HTML custom elements, no more.

I am in the process of building a design system and oen thing that I see that is imperative to it's success is finding the little things that cause the most issues. And a loader, believe it or not, fits square in the middle of that definition. So here is my latest therapy project. One for the fun books that no one really asked for, but everyone will want to have.

## The custom element

Some of you may ask, <em>"Why a custom element for a loader?"</em> Fair enough. The answer is pretty straight forward. The developers I work with deserve a straight forward answer. When they get the design for a new interface, things like loaders need not distract them.

The following is the basic skeleton of the custom element.

```js
import { LitElement, html, css } from "lit-element";
import styleCss from "./style-css.js";

class AuroLoader extends LitElement {

  static get styles() {
    return css`
      ${styleCss}
    `;
  }

  render() {
    return html`
      <span></span>
      <span></span>
    `;
  }
}

customElements.define("auro-loader", AuroLoader);
```

Starting here we can start to build a basic API for our new loader. The twist I will put in here is that one part will be a attribute and the other will be a property. O_O Yeah, this will all make sense pretty soon.

And just to cover all the bases here. With this custom element, we can use this in our HTML files with the following syntax.

```html
<auro-loader></auro-loader>
```

### Injecting CSS

Before we get too far into this I feel I need to address how the CSS is working in this custom element.To keep things simple the CSS for each element is written in a separate file and there is a build process that takes the final CSS and outputs a new `style-css.js` file. For this we use [wc-sass-render](https://www.npmjs.com/package/wc-sass-render). Sass or not, this will generate the `.js` file wrapped in this template.

```js
import {css} from 'lit-element';
export default css` ... `
```

This just makes it really easy to import the CSS file,

```js
import styleCss from "./style-css.js";
```

and then use that in the custom element using the CSS named template literal.

```js
static get styles() {
  return css`
    ${styleCss}
  `;
}
```

## It's all just CSS

Up in the element skeleton we are working with a pretty simple HTML structure.

```html
<span></span>
<span></span>
```

The CSS on the other hand, is a little bit more complicated.

To get things started, the CSS is actually pretty direct. The one thing to notice here is that I am taking advantage of the [:host](https://developer.mozilla.org/en-US/docs/Web/CSS/:host()) selector. Simply put, this is the parent of the custom element. In this case that is `auro-element`. Using `:host` means that we don't need to use a wrapping `<div>` or something like that with a CSS selector.

Like any other selector, it has child selectors. So `:host > span` is exactly what you think it may be. And in this example, this will address the three `<span>` element in the template.

One other mention is the use of `currenColor`. This is really powerful as this will allow users to customize the color of the loader without having to deal with a complex JS api or have to deal with trying to style things inside the shadow DOM.

```css
:host,
:host > span {
  position: relative;
}

:host {
  width: 2rem;
  height: 2rem;
  display: inline-block;
  font-size: 0;
  color: currentColor;
}

:host > span {
  position: absolute;
  display: inline-block;
  float: none;
  top: 0;
  left: 0;
  width: 2rem;
  height: 2rem;
  border-radius: 100%;
  opacity: 0;
  background-color: currentColor;
  border: 0 solid currentColor;
  animation: ping 1s 0s linear infinite;
}
```

## The first API

This API is so simple it almost seems like we shouldn't be able to do this. Once considered the untouchable CSS selector, the [attribute selector](https://css-tricks.com/almanac/selectors/a/attribute/) is extremely flexible and really helpful when building custom elements.

For our element we want `sm`, `md`, `lg` and `xl`. And the syntax we want to use is the following.

```html
<auro-loader orbit md></auro-loader>
```

The first part of the API is the name of the loader we want, `orbit`. This will be  a boolean **attribute**. This is NOT a property because there is no API development required to enable this feature.

```css
:host([orbit]),
:host([orbit]) > span {
    opacity: 1;
}

:host([orbit]) > span {
    background: transparent;
    border-width: 5px;
}

:host([orbit]) > span:nth-child(1) {
  border-color: currentColor;
  opacity: 0.25;
}

:host([orbit]) > span:nth-child(2) {
  border-color: currentColor;
  border-right-color: transparent;
  border-bottom-color: transparent;
  border-left-color: transparent;
  animation: orbit 2s linear infinite;
}

@keyframes orbit {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
```

To make the sizing sensible I am using a fibonacci scale.

```css
:host([orbit][sm]) > span {
  border-width: 8px;
}

:host([orbit][md]) > span {
  border-width: 13px;
}

:host([orbit][lg]) > span {
  border-width: 21px;
}

:host([orbit][xl]) > span {
  border-width: 34px;
}
```

All this results in the following.

<auro-loader orbit></auro-loader>
<auro-loader orbit sm></auro-loader>
<auro-loader orbit md></auro-loader>
<auro-loader orbit lg></auro-loader>
<auro-loader orbit xl></auro-loader>

### Using customColor

Remember in the CSS the use of `customColor`? This makes it really easy to customize the color of the loader without having to do anything more than CSS.

What's also really handy about custom elements is that they are HTML, so all the standard HTML things work as well. For example, let's add some color to these loaders like so.

```html
<auro-loader orbit style="color: gray"></auro-loader>
<auro-loader orbit style="color: teal" sm></auro-loader>
<auro-loader orbit style="color: red" md></auro-loader>
<auro-loader orbit style="color: orange" lg></auro-loader>
<auro-loader orbit style="color: pink" xl></auro-loader>
```
<auro-loader orbit style="color: gray"></auro-loader>
<auro-loader orbit style="color: teal" sm></auro-loader>
<auro-loader orbit style="color: red" md></auro-loader>
<auro-loader orbit style="color: orange" lg></auro-loader>
<auro-loader orbit style="color: pink" xl></auro-loader>

## Always two spans?

> Here's where the fun begins!

> -- Han Solo

As you may imagine, we can produce any number of loaders using this structure, but these different loaders will need different HTML templates. Well within the scope of the custom element code, it's real easy to set up some properties that we can use to change manage the template.

For our next loader will be pulsating dots. This loader will consist of three `<span>` elements.

<auro-loader pulse></auro-loader>
```html
<auro-loader pulse></auro-loader>
```

This presents a new challenge. Since the first loader built was only two spans and now we need a third, we could be lazy and just have a template with three spans to begin with and ignore the third with the `orbit` loader, but where is the fun in that? What I want to do is make a single `<span></span>` template and then loop over that to create nodes as needed based on the property used. To start, let's define the new prop. In the custom element let's add the following to define the property.

So, let's start with creating a property.

```js
static get properties() {
  return {
    orbit: { type: Boolean }
  };
}
```

Next for the loop, the idea is to generate an array on the fly and map over that array with `<span>` elements. Any easy way to address this is to set up some keys and we do this in the constructor.

```js
constructor() {
  super();
  this.keys = [0, 1, 2];
}
```

Looking good so far. Next we need a simple function to create the right template based on the prop.

```js
defineTemplate() {
  let nodes = Array.from(Array(3).keys());

  if (this.orbit) {
    nodes = Array.from(Array(2).keys());
  }

  return nodes;
}
```

To wrap up the JavaScript part of this exercise, the last step is to update the rendered element template. Where before we had a simple HTML setup, this has been replaced with a map function based on the result of the `defineTemplate()` function.

```js
render() {
  return html`
    ${this.defineTemplate().map(
      idx => html`
        <span></span>
      `
    )}
  `;
}
```

Just so that we are on the same page here, this is what the custom element looks like now.

```js
import { LitElement, html, css } from "lit-element";
import styleCss from "./style-css.js";

class AuroLoader extends LitElement {
  constructor() {
    super();
    this.keys = [0, 1, 2];
  }

  static get properties() {
    return {
      orbit: { type: Boolean }
    };
  }

  static get styles() {
    return css`
      ${styleCss}
    `;
  }

  defineTemplate() {
    let nodes = Array.from(Array(3).keys());

    if (this.orbit) {
      nodes = Array.from(Array(2).keys());
    }

    return nodes;
  }

  render() {
    return html`
      ${this.defineTemplate().map(
        idx => html`
          <span></span>
        `
      )}
    `;
  }
}

if (!customElements.get("auro-loader")) {
  customElements.define("auro-loader", AuroLoader);
}
```

That's it. 45 lines of code and all the power in the world!

### Now for the CSS

As you can imagine, we need to update the CSS so that when the loader is used with the `pluse` property, this updates the look too. We will address this the exact same way that we did the `sm`, `md`, etc styles using the `[pulse]` attribute to update the styles.

```css
:host {
  --margin: 0.375rem;
  --margin--sm: 0.5rem;
  --margin--md: 0.75rem;
  --margin--lg: 1rem;
}

:host([pulse]),
:host([pulse]) > span {
  position: relative;
}

:host([pulse]) {
  width: calc((3 * 1rem) + (var(--margin) * 6));
  height: 1.5rem;
}

:host([pulse]) > span {
  width: 1rem;
  height: 1rem;
  margin: var(--margin);
  animation: pulse 1.5s ease infinite;
}

:host([pulse]) > span:nth-child(1) {
  animation-delay: -400ms;
}

:host([pulse]) > span:nth-child(2) {
  animation-delay: -200ms;
}

:host([pulse]) > span:nth-child(3) {
  animation-delay: 0ms;
}

@keyframes pulse {
  0%,
  100% {
    opacity: .1;
    transform: scale(.9);
  }
  50% {
    opacity: 1;
    transform: scale(1.1);
  }
}
```

The last thing to add are the styles to address the size API.

```css
:host([pulse][sm]) {
  width: calc((3 * 2rem) + (var(--margin--sm) * 6));
  height: 2.5rem;
}

:host([pulse][sm]) > span {
  margin: var(--margin--sm);
  width: 2rem;
  height: 2rem;
}

:host([pulse][md]) {
  width: calc((3 * 3rem) + (var(--margin--md) * 6));
  height: 3.5rem;
}

:host([pulse][md]) > span {
  margin: var(--margin--md);
  width: 3rem;
  height: 3rem;
}

:host([pulse][lg]) {
  width: calc((3 * 5rem) + (var(--margin--lg) * 6));
  height: 5.5rem;
}

:host([pulse][lg]) > span {
  margin: var(--margin--lg);
  width: 5rem;
  height: 5rem;
}
```

All these updates together gives us the following.

<auro-loader pulse></auro-loader><br>
<auro-loader pulse sm></auro-loader><br>
<auro-loader pulse md></auro-loader><br>
<auro-loader pulse lg></auro-loader><br>

```html
<auro-loader pulse></auro-loader>
<auro-loader pulse sm></auro-loader>
<auro-loader pulse md></auro-loader>
<auro-loader pulse lg></auro-loader>
```

## Loaders and accessibility

When it comes to loaders and accessibility, many gloss over this detail. A small accessibility detail that is often overlooked are motion sensitivities. Users of either macOS or Windows have an option to reduce motion and this is also supported by CSS. To make our new loader more responsive to these motion settings, there are some really easy things we can do.

For the low hanging fruit, in the baseline CSS for Auro, we use a blanket statement to assist with general motion settings.

```scss
* {
  @media (prefers-reduced-motion: reduce) {
    animation: none !important;
    transition: none !important;
  }
}
```

But for loaders specifically, we take things one step further. When you think about this, a 'stuck' loader seems wrong. You are trying to invoke the state of wait and a loader does that with motion. You remove the motion, it's just stuck there?

In the `render()` method of our component, I updated the return to have a new `<div>` element with the string `Loading...` in it. Both the `<span>` and the `<div>` have new CSS classes to describe the function I want to happen. `.loader` and `no-animation`.

```js
render() {
  return html`
    ${this.defineTemplate().map((idx) => html`
      <span part="element" class="loader node-${idx}"></span>
    `)}
    <div class="no-animation">Loading...</div>
  `;
}
```

In the CSS I make a pretty straight forward update. First I want the `:host` to center the non-animated `<div>` vertically and horizontally. Then between the `.loader` and `no-animation` selectors I trade off display properties.

```scss
:host > .no-animation {
  display: none;
}

@media (prefers-reduced-motion: reduce) {
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
  }

  :host > .loader {
    display: none;
  }

  :host > .no-animation {
    display: block;
  }
}
```

Now when a user enables the reduced motion feature, it will simply display `Loading...` which makes total sense.

## In conclusion

If you made it this far, congratulations! I hope I achieved my goal of illustrating amazing power and flexibility with the upmost in simplicity. What continues to blow me away here is that there is no dependency on other complex frameworks. There is no expectation to understand things other than some fundamental HTML/CSS/JS concepts.

And keep in mind, what you are reading here is a document that was written in markdown, then converted to HTML and injected into a React app. Say I were to want to rewrite this blog? Say I wanted to do it in Svelte? The best part of custom elements is that all my toys will go with me. All my content and even all my code examples.

How many of you can say that?
