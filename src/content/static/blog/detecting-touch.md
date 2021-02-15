# Detecting Touch

<small><auro-datetime utc="2020-03-01T00:01:00Z" month="long"></auro-datetime></small>

This week challenged me with the age 'ole question of how to deal with hover events and touch devices. When @media queries fail, what next?

Since the dawn of mobile-first thinking, hover events have been a pretty strict no-no. Mainly because you can't _hover_ on a touch device. Early on in mobile-first design concepts, this was easily addressed by using media queries and feature detection to easily discern what type of device the user was on and how this interaction would work. With the rise of 2-in-1 touch enabled larger devices, these techniques no longer apply.

Within our Design System, I am building a button. In the design spec is a hover interaction. _Sure_ I thought. It's a button, why not have a hover?! Well, the trap was set and I walked right into it.

The work was done, it looked great, it tested well and all things were a go, until I said to myself, "_I should really test this on a real device._"

Chrome's device specific inspector tools are really awesome, but they are not true emulation. So I opened up my component demo in Xcode's emulator and there it was, a tap event that triggered my hover UI. Ugh ... talk about a rookie mistake! Now a rookie would just jump into action and try to CSS away the problem using media queries. That won't work. What is the breakpoint these days for touch enabled devices?

Device detection? Nope! Not even going to go there.

What if the device supports 'touch'? Again, seems plausible, but think about that for a second. If a device supports touch, does that mean that the user is 'touching' it? There are touch enabled devices that also have an option to use a mouse or trackpad. Touch enabled? True. Large device? True. Hover? `¯\_(ツ)_/¯`

## Is the user touching it?

So this got me to start thinking that I don't care that the user has a touch device, but are they touching it? This line of thought of course lead me to search the internets and I found an [article](https://codeburst.io/the-only-way-to-detect-touch-with-javascript-7791a3346685), a few years old, but the author David Gilbertson nailed it.

> We want to detect human touch, not device touch.

I mean, come on! That's it. I knew I was reading the right article when he summed up the idea with this:

> ... you’ve just arrived at the airport and your friend that was coming to pick you up isn’t there. You want to know if they’re at least on their way to pick you up. So you call and ask if they’re currently strapped to a chair. Sure, a lot of the time when someone’s driving they’re strapped to a chair, but you can drive without being strapped to a chair, and you can be strapped to a chair without being in a car ...

So there it is. I don't care how small or large the device is, or if it is touch enabled or not. The question I want to know is, are you touching it?

## The tech behind the idea

David's article was spot on and the solution is straight to the point:

```js
window.addEventListener('touchstart', function() {
  // the user touched the screen!
});
```

The key is the [touchstart](https://developer.mozilla.org/en-US/docs/Web/API/Element/touchstart_event) event.

> The `touchstart` event is fired when one or more touch points are placed on the touch surface.

Given that I am building Lit-element Web Components, the technique works with a slight adjustment. I am unable to use this at a global level as shadow DOM components are not affected by events or CSS selectors placed outside the scope of the element. And besides, dictating a global event when I am building a web component simply goes against the grain of things.

One way to add an event listener to the scope of the element is to add it within the `constructor()` method in the `class`.

```js
class myButton extends LitElement {
  constructor() {
    super();
    this.addEventListener('touchstart', function() {
      this.classList.add('is-touching');
    });
  }

  ...
}
```

That's pretty much it. The new Button component has an event bound to it that is triggered by 'touching' it. This event will add the selector of `is-touching` to the root of the Web Component. Given that the event is all happening within the scope of the component, we can now activelly code against this in CSS.

### The CSS

Here is a typical CSS example for a button. As is, the `:hover` would trigger with a tap on a touch device. That is the undesired experience wanted for the button.

```css
.button {
  background-color: orange;

  &:hover {
    background-color: blue;
  }
}
```

Given that the `eventlistner` will append a new class of `is-touching` on the element, how can this be used?

When working with shadow DOM components, appending sibling selectors to the `:host` requires the selector be put inside parens `( )`:

```css
:host(.foo) { ... }
```

The `:hover` should only appear when the selector of `is-touching` is **NOT** appended to the host element, so the `:not()` pseudo selector can be used. Here is an example using Sass.

```css
:host(:not(.is-touching)) & {
  &:hover {
    background-color: blue;
  }
}
```

Standard CSS could be this.

```css
:host(:not(.is-touching)) .button:hover {
  background-color: blue;
}
```

## In conclusion

When detecting touch, the question is to do this actively or passively. I think that given the argument, the idea of passively detecting touch has major flaws knowing that there are touch devices as large as the common laptop.

What I really like about this technique is that it allows for almost surgical like interaction support with each component. Global detection leads to unintended side-effects that has plagued UI development for years. Web Components #ftw!

## Update

<small><auro-datetime utc="2021-02-15T00:01:00Z" month="long"></auro-datetime></small>

Something I have been meaning about adding to this article is that, depending in what you need, there may be a simpler way to get the same effect with only CSS.

```
@media (hover: hover) {
    /* ... */
}
```

That's it. The great thing is that it does one thing and it does that one thing really good! If you want to see more specifics about its API, see the [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/hover) docs.
