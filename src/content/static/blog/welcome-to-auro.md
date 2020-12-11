# Welcome to Auro

<small>By Dale Sande; Principal Engineer; Auro Design System Lead</small>

![](https://auro.alaskaair.com/images/content/home.jpg)

Alaska Airlines, like so many in the web enabled application space, decided to build a design system. Saying and deciding to build a design system is the easy part. But building a system to support a design ethos and building a team around that system are wildly different things.

We took that challenge head on and we forged ahead. So I'd like to take this opportunity to introduce you to [Auro](https://auro.alaskaair.com/), an architecture of design, technology and consistency.

## What is a design system?

Before we get too far into things, there is an opportunity to be clear as to what a design system means to Alaska Airlines. We are of the opinion that a design system is not centralized solely around design, nor technology, but more so that it is a governed system that has a design input and a technology output. There is also a system of governance to maintain consistency of the input and output.

The role of the design system is not simply to capture repeatable concepts.

> Items under the umbrella of the design system are universally applicable and ambiguous in nature. There is no 'one' use case for any element/component of the design system.

What is supported in the design system can be used in many different ways across many different use cases to address many different business needs.

Things that fall outside the scope of that definition do not apply directly to the design system and are so specific to a use case that it cannot be systemized. It can be argued that all things have smaller parts that can be systemized and then brought together in another context.

Given that definition, there are no such things as one-offs. As long as any element on the page is built from a systemized component, there are infinite opportunities for use.

## Auro support comes in layers

Building a system means creating a series of independent dependencies that are individually managed, but are designed to work in concert with the entire ecosystem. When breaking down Auro there are common themes in design that are executed in code to support those choices.

#### Tokens

[Design Tokens](https://css-tricks.com/what-are-design-tokens/) are essential with any large scale project. I can still remember running into [Jina](https://jina.design/about/) at SFO and she said to me,

> What do you think about Design Tokens?

This was all new to me, but where she hooked me was a very simple question.

> What do you do when you need to change a value that will require a change across multiple teams, multiple projects, multiple tech stacks around the world?

She was at SalesForce at the time and to be honest I have never even considered a change at that scale. And it blew my mind.

At Alaska we are not at that scale, but we have those problems. My first week with Alaska I saw this and I started to build out the first part of Auro, [it's Tokens](https://auro.alaskaair.com/getting-started/developers/design-tokens). And then it happened. It was discovered that we had a color issue. The change was so small. The difference so little. But it meant being compliant or not.

The change was made and with little to no effort by all the teams at Alaska, the change was rolled out and the compliance issue was solved.

Something so simple, yet so powerful.

#### Icons

Aside from tokens for common values, the next extremely common UI elements are iconography. While there are a large number of ways to provide icons as a service the sediment was that icons, like other assets, need to be versioned and packaged. Taking inspiration from the [simple-icons](https://github.com/simple-icons/simple-icons) project I engineered a solution that allows us to quickly and easily manage a large set of icons and generate final assets based on a build solution.

The [Auro Icons](https://auro.alaskaair.com/icons/usage) library is an easy to consume and easy to use library of commonly used SVG icons. That's it. How any consumer decides to use these assets, that is up to them. And that in itself is a core principal of the Auro Design System. Any and all parts of the system are as opinion free as we can make it.

#### Web Core Stylesheets

While there are many design systems out there that have a large dependency on a series of overly complex CSS/Sass stylesheets, Auro is not one of them.

The purpose of Web Core Stylesheets is to solve some basic style problems.

One is to provide a uniform transition from legacy code to a new consistently developed code base. For teams that are still supporting large legacy code, moving to a new design is a complicated and frustrating process. To this end, Auro's solution consists of a series of stylesheets that are independently importable files. There are as few as possible interdependencies aside from their dependency on Design Tokens. This allows developers to import only what they want and have control over how their stylesheets grow and are used.

The other is to provide a baseline series of utility selectors for quick and easy development. There is no desire to build anything more complex than the basic utilities that serve as the foundation of the Auro design spec.

Auro's stylesheets, as they exist today, are actually being actively deprecated. There are new and better ways to address these baseline concerns and Auro is committed to move into the future and not being locked into yesterday's web dev. Any new thing to be added is heavily scrutinized. When given the opportunity, selectors are removed. The goal here is to allow these stylesheets to be a part of the transition, but over time its scope will be reduced  and eventually removed.

#### HTML Custom Elements

Here is where Auro is reaching into the future of web development and not looking back. When the Auro project first began there were a few basic objectives that needed to be considered. One being universal application.

The power of a design system, and a core definition, is that elements of the design system need to be  "_...universally applicable and ambiguous in nature._" That is not only in visual design, but in tech delivery. If we were to build Auro as only a React, Vue, Angular, or a CSS library, we would have failed before we ever started.

Another objective is to have an easy to use, opinion free, side-effect free, easily installed  dependency. Think about that. What we set out to build is a universally applicable visual element that has an easy to follow dependency chain, without opinion and a simplified API that has no visual or functional side-effects when added to a experience. In as few as five years ago, shipping something like this to a production environment like an airline was unthinkable. But today, it is not.

Working on a team in the past, a peer once said to me,

> What I want is a declarative way to know all my dependencies for a view without the worry of side-effects

This has always stuck with me to drive me in a way that best serves the engineers I work with.

All these layers build up to the development of the Auro HTML custom elements. Values are defined by the design tokens. Icon are pulled from the same resource as all other projects. Utility classes that other projects are using are utilized. It is these clear layers of dependencies that ensure that as one thing evolves, all others are allowed to evolve without imposition.

## What's next?

What's next for Auro? Where do we go from here? That is a great question. We know that we are only just beginning. What we do know is that wherever the road of modern web application development may take us, Auro will go there.

Currently the application of Auro components and other parts of it's ecosystem are pretty straight forward. But there are greater opportunities to be had in growing its influence over much of the front-end. How does Auro integrate with our CMS solution? How can Auro assist in modern content distribution? How does Auro begin to influence native platform development?

Only time will tell.
