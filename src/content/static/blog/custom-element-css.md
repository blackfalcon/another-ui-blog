# CSS styles and custom elements

<small><auro-datetime utc="2021-09-29T00:01:00Z" month="long"></auro-datetime></small>

CSS with custom elements opens a new bounty of opportunity. One of the many benefits that are most excited about is a custom element's ability to take advantage of encapsulation and the [:host selector](https://developer.mozilla.org/en-US/docs/Web/CSS/:host). Additionally, [Chromium](https://en.wikipedia.org/wiki/Chromium_(web_browser)) users unknowingly are taking advantage of [constructable stylesheets](https://developers.google.com/web/updates/2019/02/constructable-stylesheets) which offers additional behind-the-scene performance. Let's dive into these technologies and understand how best to use them.

## Encapsulation

> One of the key features of the Web Components standard is the ability to create custom elements that encapsulate your functionality on an HTML page, rather than having to make do with a long, nested batch of elements that together provide a custom page feature.

-- [Using custom elements - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements#:~:text=One%20of%20the%20key%20features%20of%20the%20Web%20Components%20standard%20is%20the%20ability%20to%20create%20custom%20elements%20that%20encapsulate%20your%20functionality%20on%20an%20HTML%20page)

So what does that even mean?

Another definition is, _"...the succinct expression or depiction of the essential features of something."_ In essence, that is also the definition of a custom element. It is the encapsulation with the [shadow DOM](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM) that allows web developers the unique opportunity to create a component that will not pollute anything outside the scope of the element and is mostly isolated from any outside code.

The most common properties that affect a custom element from the outside (or "pierce the shadow DOM") are global font and color styles, and [CSS custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties). See this [Github gist](https://gist.github.com/dcneiner/1137601) for a full list of CSS properties that are inherited by default.

While naming conventions and using parent selectors have become a staple of web development over the years, these techniques are not necessary for UI stability within a custom elements. However, they do come in handy for maintaining the sanity of your CSS. To that end, many design systems including Auro have a series of [CSS development conventions](https://auro.alaskaair.com/css/conventions).


## :host selector

With encapsulation comes the `:host` CSS [pseudo-class](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes#:~:text=A%20CSS%20pseudo-class%20is%20a%20keyword%20added%20to%20a%20selector%20that%20specifies%20a%20special%20state%20of%20the%20selected%20element(s)). This special selector in the CSS world is... _" the most powerful selector in the universe... "_ You could draw a parallel between `:host` and `{this}` in JavaScript.

> The `:host` CSS pseudo-class selects the shadow host of the shadow DOM containing the CSS it is used inside — in other words, this allows you to select a custom element from inside its shadow DOM.

~ [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/:host#:~:text=The%20:host%20CSS%20pseudo-class%20selects%20the%20shadow%20host%20of%20the%20shadow%20DOM%20containing%20the%20CSS%20it%20is%20used%20inside%20%E2%80%94%20in%20other%20words,%20this%20allows%20you%20to%20select%20a%20custom%20element%20from%20inside%20its%20shadow%20DOM.)

In practical terms, what does that mean? In other front-end frameworks, it is commonplace to wrap the scope of the component's HTML in a `div` and add a class. You could look at that outer `div` as the _host_ of this component example.

```js
// React w/JSX
render() {
  return (
    <div className="my-element">
      ...
    </div>
  )
}
```

With custom elements, there is no need to wrap all the HTML inside an outer element to create a host wrapper. The custom element itself is that wrapper and any styles using the `:host` selector will be applied to the whole element. The following example is a HTML template from LitElement using a [tagged template literal](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#tagged_templates). This is **NOT** JSX.

```js
// LitElement w/tagged template literal
render() {
  return html`
    <div>
      ...
    </div>
  `;
}
```

### Parental awareness

Aside from not needing to wrap all the HTML in yet another `div`, another benefit is parental awareness.

Where this comes in very handy is with applying stylistic changes to your custom element without having to create properties and/or manage the application of CSS selectors within the scope of the element. The idea is to allow a user to add an attribute to the custom element tag and the element will respond.

For example, let's imagine that you have `<my-element>` and you need an alert state. With no additional functionality inside the custom element, the API will simply be to add an `alert` attribute to the tag. Like so.

```html
<my-element alert></my-element>
```

The CSS for this attribute support could be something like this.

```css
:host([alert]) {
  color: var(--auro-color-alert-error-on-light);
}
```

For a great example of how this can be used, check out the [auro-alert](http://auro.alaskaair.com/components/auro/alert) [CSS styles](https://github.com/AlaskaAirlines/auro-alert/blob/main/src/style.scss).

### Reflection

When a corresponding property for the attribute is not needed, no additional support is required. However, if you bind the attribute to a property, you need to make sure to set the reflected value. Some frameworks, e.g. Svelte and Preact, have the opinion to set properties instead of attributes.

To set the reflected value in the custom element, add [reflect: true](https://lit-element.polymer-project.org/guide/properties#reflected-attributes) to the `properties()` method. This will ensure that setting the property will also set the attribute.

```js
myProp: {
  type: Boolean,
  reflect: true
}
```

For more detail on some best practices, please see [Custom Element Best Practices](http://auro.alaskaair.com/generator/best-practice#:~:text=Reflect%20properties%20to%20attributes).

## Constructable stylesheets

One complaint around using HTML custom elements is the fact that the CSS per that element is repeatedly loaded into the DOM. While in most cases this is not an issue, but in some, it may be. After all, it is not uncommon to have more than one button on a page.

To address this Google has been working to have a new spec called [constructable stylesheets](https://developers.google.com/web/updates/2019/02/constructable-stylesheets) in hopes of becoming a web standard. Reading this document may be more than most want to consume and the work seems daunting to address, luckily that is not the case. LitElement's [static styles property](https://lit-html.polymer-project.org/guide/styling-templates#:~:text=A%20new%20feature%20available%20in%20some%20browsers%20is%20Constructable%20Stylesheets%20Objects.%20This%20proposed%20standard%20allows%20multiple%20shadow%20roots%20to%20explicitly%20share%20style%20sheets.%20LitElement%20uses%20this%20feature%20in%20its%20static%20styles%20property.) supports constructable stylesheets by default.

```js
static get styles() {
  return [
    styleCss
  ]
}
```

That is all that is needed for you to support this proposed CSS specification that will allow for all uses of the same element to share one set of CSS in the browser. For browsers that do not support this spec, the CSS is loaded inline in a `<style>` element within the scope of the shadow DOM.

## CSS, shadow DOM, and slots

There is an important distinction to be aware of with CSS, the shadow DOM and slotted HTML. Earlier I stated that CSS in the shadow DOM is encapsulated. That being said, slots may have a confusing expectation.

> The slot global attribute assigns a slot in a shadow DOM shadow tree to an element: An element with a slot attribute is assigned to the slot created by the `<slot>` element whose name attribute's value matches that slot attribute's value.

~ [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot)

So what does that mean? Let's look at [auro-icon](https://auro.alaskaair.com/components/auro/icon) for example. Looking at the [source code](https://github.com/AlaskaAirlines/auro-icon/blob/master/src/auro-icon.js) for the element, you will see the following. Notice the use of the `<slot>` element.

```js
return html`
  <div class="${classMap(classes)}">
    ${this.svg}
    <div class="${classMap(a11y)}">
      <slot></slot>
    </div>
  </div>
`;
```

What this does is take the content from within the `<auro-icon>` tags and place that into the space of the `<slot>` element inside the shadow DOM.

Where this can get confusing is that the string between the `<auro-icon>` tags is in the light DOM and will be referenced in the shadow DOM where the `<slot>` element is.

For example, when using this custom element in your app there is this selector.

```css
.isOrange {
  color: orange;
  background-color: blue;
  font-size: 3rem;
}
```

<style>
  .isOrange {
    color: orange;
    background-color: blue;
    font-size: 3rem;
  }
</style>

Then within the `<slot>` element of the `<auro-icon>` element, you could do this:

```html
<auro-icon label category="in-flight" name="wifi">
  <span class="isOrange">Wi-Fi</span>
</auro-icon>
```

The result of this HTML would be this:

<div class="exampleWrapper">
  <auro-icon label category="in-flight" name="wifi">
    <span class="isOrange">Wi-Fi</span>
  </auro-icon>
</div><br>

[Lit.dev playground](https://lit.dev/playground/#project=W3sibmFtZSI6ImluZGV4Lmh0bWwiLCJjb250ZW50IjoiPCFET0NUWVBFIGh0bWw-XG48c3R5bGU-XG4gIC5pc09yYW5nZSB7XG4gICAgY29sb3I6IG9yYW5nZTtcbiAgfVxuPC9zdHlsZT5cblxuPGJvZHk-XG4gIDxhdXJvLWljb24gbGFiZWwgY2F0ZWdvcnk9XCJpbi1mbGlnaHRcIiBuYW1lPVwid2lmaVwiPlxuICAgIDxzcGFuIGNsYXNzPVwiaXNPcmFuZ2VcIj5XaS1GaTwvc3Bhbj5cbiAgPC9hdXJvLWljb24-XG48L2JvZHk-XG5cblxuPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL3VucGtnLmNvbS9AYWxhc2thYWlydXgvZGVzaWduLXRva2Vuc0BsYXRlc3QvZGlzdC90b2tlbnMvQ1NTQ3VzdG9tUHJvcGVydGllcy5jc3NcIiAvPlxuPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL3VucGtnLmNvbS9AYWxhc2thYWlydXgvd2ViY29yZXN0eWxlc2hlZXRzQGxhdGVzdC9kaXN0L2J1bmRsZWQvZXNzZW50aWFscy5jc3NcIiAvPlxuXG48c2NyaXB0IHNyYz1cImh0dHBzOi8vdW5wa2cuY29tL0BhbGFza2FhaXJ1eC9hdXJvLWljb25AbGF0ZXN0L2Rpc3QvYXVyby1pY29uX19idW5kbGVkLmpzXCIgdHlwZT1cIm1vZHVsZVwiPjwvc2NyaXB0PiJ9LHsibmFtZSI6InBhY2thZ2UuanNvbiIsImNvbnRlbnQiOiJ7XG4gIFwiZGVwZW5kZW5jaWVzXCI6IHtcbiAgICBcImxpdFwiOiBcIl4yLjAuMFwiLFxuICAgIFwiQGxpdC9yZWFjdGl2ZS1lbGVtZW50XCI6IFwiXjEuMC4wXCIsXG4gICAgXCJsaXQtZWxlbWVudFwiOiBcIl4zLjAuMFwiLFxuICAgIFwibGl0LWh0bWxcIjogXCJeMi4wLjBcIlxuICB9XG59IiwiaGlkZGVuIjp0cnVlfV0)

But how? The key thing to remember is that slotted content is **NOT** actually in the shadow DOM of an element. The content lives in the light DOM and is references within the scope of shadow DOM element. By this definition, any global CSS that is either attributed to or references this DOM node will have an effect on its appearance.

> The `<slot>` HTML element... is a placeholder inside a web component that you can fill with your own markup

~ [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot#:~:text=is%20a%20placeholder%20inside%20a%20web%20component%20that%20you%20can%20fill%20with%20your%20own%20markup)


## :slotted CSS pseudo-element

So what is the `::slotted` CSS pseudo-element?

> The `::slotted()` CSS pseudo-element represents any element that has been placed into a slot inside an HTML template (see Using templates and slots for more information).

-- [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/::slotted#:~:text=The%20::slotted()%20CSS%20pseudo-element%20represents%20any%20element%20that%20has%20been%20placed%20into%20a%20slot%20inside%20an%20HTML%20template%20(see%20Using%20templates%20and%20slots%20for%20more%20information))

Simply put, the `::slotted` CSS pseudo-element allows the developer of a custom element some control over the presentation over slotted content. This is especially helpful when allowing users to add their own HTML into the `<slot>` parts of your custom element. A pretty standard example can be seen in the [auro-alert](http://auro.alaskaair.com/components/auro/alert) custom element. In the [supporting stylesheet](https://github.com/AlaskaAirlines/auro-alert/blob/main/src/style.scss) you will see the following code:

```css
.content ::slotted(p) {
  margin-top: var(--auro-size-none);
}

.content ::slotted(p:last-child) {
  margin-bottom: var(--auro-size-none);
}
```

The styles inside the scope of the custom element cannot influence the `<p>` html element inserted into the `<slot>` that may be inheriting styles from a global stylesheet. To address this, using the `::slotted` CSS pseudo-element the author of the element can exert control over the slotted `<p>` element.

This is pretty powerful, but there are limitations. The `::slotted` selector [does not influence nested elements](https://stackoverflow.com/questions/61626493/slotted-css-selector-for-nested-children-in-shadowdom-slot). This is part of the [specification](https://drafts.csswg.org/css-scoping/#slotted-pseudo), so I don't see that changing any time soon.

## Shadow parts

This is an exciting new development with CSS and the growing support for custom element customization. With the ultimate demise of IE11, shadow parts will become a default feature of any HTML custom element.

> The ::part CSS pseudo-element represents any element within a shadow tree that has a matching part attribute.

-- [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/::part)

What do shadow parts give us? Simply put, this allows the author of the element to define specific parts of the HTML template that will allow users to target those parts and apply CSS that will affect the UI inside the shadow DOM.

If you have read through everything up to this point, you may see where this is yet another super power. What we know so far is that CSS in the shadow DOM stays in the shadow DOM. We also know that CSS outside the scope of the shadow DOM has little effect on any custom element. While influence on slotted content or using the `::slotted` CSS pseudo-element gives users some opportunity, `::part` is the most powerful of all.

The example below illustrates how you simply tag part of the HTML template.

```html
<span part="icon" class="alert__icon">
  <slot name="icon"></slot>
</span>
```

With the simple addition of `part="icon"` in the HTML template, taking advantage of this is even easier. The following CSS illustrates how you can write a simple selector that targets the new part.

```css
my-custom-element::part(icon) {
  color: orange;
  background-color: blue;
  font-size: 3rem;
}
```

Outside of that, you are only limited by your imagination. This selector is the same as any other selector. For example, if you wanted to add a `:hover` state to this part of the custom element, go ahead, there is nothing stopping you.

```css
my-custom-element::part(tab):hover:active {
  background-color: green;
}
```

This alone is one of the most powerful theming API options available and this requires no additional effort by the custom element author other than tagging the parts in HTML template.


## Conclusion

As you can see, probably one of the best things to happen to CSS in 20 years is HTML custom elements. The power that this newly achieved specification without the need for huge proprietary web development platforms or frameworks only changes the game, but brings things to a  whole new level. While I mention LitElement in this article, it is not specifically needed for any of the concepts I speak of. Nor is Stencil, Haunted, Svelte, etc... All of this can be done with [only JavaScript that is supported in the browser](https://medium.com/technofunnel/create-custom-html-element-without-any-frontend-framework-html5-6e78ada50162). Although tools like [Lit](https://lit.dev/) do make life better, and don't we all want that?
