# Overlapping concerns

### Where do the lines blur between custom elements and framework components?

<small><auro-datetime utc="2021-09-30T00:01:00Z" month="long"></auro-datetime></small>

It all starts with a tweet, right?

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Is anyone using React and Web Components together in a cool way? Is there an obvious dividing line between where you write React and where you write WC?</p>&mdash; Micah Godbolt (@micahgodbolt) <auro-hyperlink target="_blank" href="https://twitter.com/micahgodbolt/status/1443314083386707971?ref_src=twsrc%5Etfw">September 29, 2021</auro-hyperlink></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

Before we get into this, this post is not a rant about how I dislike this framework over this other framework. We all have jobs to do and we all have preferences and opinions. I have mine and you have yours. What we can do is take the opportunity to listen and learn from everyone and discover where the opportunities are.

## An obvious dividing line

That question really jumped out at me. Is there a clear line? I have to say no. But these are discussions I have with the designers and engineers I work with every day. In fact, [React's opinion](https://reactjs.org/docs/web-components.html#:~:text=Web%20Components%20provide%20strong%20encapsulation%20for%20reusable%20components,%20while%20React%20provides%20a%20declarative%20library%20that%20keeps%20the%20DOM%20in%20sync%20with%20your%20data.) is React's opinion, and it is true, _React and Web Components are built to solve different problems._ But some may see this as a play on words.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">FWIW I think React is plying a bit of gamesmanship here with their definition. This *could* say, “Web Components are the standardized component model of the web. React has not implemented the DOM standard.”<br><br>The biggest issue we’ve seen with interop is related to this.</p>&mdash; Chris Holt (@ChrisDHolt) <auro-hyperlink href="https://twitter.com/ChrisDHolt/status/1443343815624986630?ref_src=twsrc%5Etfw" target="_blank">September 29, 2021</auro-hyperlink></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

So maybe from one perspective, you can say that frameworks like React and HTML custom elements have a clear area of concern. But I'd argue that with everyday development problems those lines are harder to see proactively and typically only show up during development and even still, require some practice to notice.

Let's also make something clear as well. When we are speaking of HTML custom elements in this context, we are not talking about things like [Lit](https://lit.dev/). The reason I bring this up is because React's statement can be construed differently when building custom elements with Lit. While the scope may be smaller, Lit is a very declarative library that will keep DOM in sync with data via [reactive properties](https://lit.dev/docs/components/properties/) and [reactive controllers](https://lit.dev/docs/composition/controllers/). I only mention this because this adds to the confusion of where the dividing line is.

## Design systems

Clearly, the most prolific use of HTML custom elements, and Lit for that matter, is for creating design systems. You don't have to look far to see that. Projects like [Auro](http://auro.alaskaair.com/), [Shoelace](https://shoelace.style/), [Lion](https://lion-web.netlify.app/) [Red Hat One Platform](https://github.com/1-Platform/op-components), and [Spectrum](https://opensource.adobe.com/spectrum-web-components/) are all based on HTML custom element technology with Lit.

Salesforce's [LWC](https://developer.salesforce.com/docs/component-library/documentation/en/lwc) and Microsoft's new [Fast](https://www.fast.design/docs/fast-element/working-with-shadow-dom) design system are based on custom elements and are influenced by Lit.

So why do these teams put so much effort into working with these fledgling technologies when we have things like React, Angular, and Vue that have been around for years? To understand that, you have to really understand the history of design systems and how difficult it has been to deliver. Be it a divisive opinion, Brad Frost wrote...

> ...at the heart of any great design system is a reusable set of UI components that product teams can reach for to build actual software.

~ [Your sketch library is not a design system](https://bradfrost.com/blog/post/your-sketch-library-is-not-a-design-system/#:~:text=at%20the%20heart%20of%20any%20great%20design%20system%20is%20a%20reusable%20set%20of%20UI%20components%20that%20product%20teams%20can%20reach%20for%20to%20build%20actual%20software)

Similarly I spoke on this topic [in Chicago](https://chicagocamps.org/events/2018/ux-camp-spring/#:~:text=This%20talk%20will%20also%20propose%20new%20ideas%20in%20the%20industry%20in%20regards%20to%20building%20a%20design%20system%20that%20is%20integrated%20into%20the%20production%20development%20workflow) about the same time the post was released. A design system only in design tools is only part of the solution. Integration with engineering is paramount to success. But how?

This is where opinions get pretty strong. If you are building something that is not dedicated to a specific scope and is meant to outlast all the things, how can you put all your eggs into a single basket \[framework\]? While researching for UX-Camp, I came across GE's [Predix design system](https://www.predix-ui.com/#/home), and it gave me the evidence I was looking for. As they talk about in their [Predix Design System: Components that work in your framework and everywhere else too](https://medium.com/ge-design/predix-design-system-components-that-work-everywhere-97b774028b37#:~:text=Our%20components%20are%20built%20to%20work%20inside%20all%20modern%20JavaScript%20frameworks,%20or%20to%20work%20on%20their%20own%20with%20no%20framework%20at%20all) Medium article; build once and distribute to many. At the time this was mind-blowing.

This was a concept I was really gravitated to and gave me the confidence I needed when accepting my role at Alaska Airlines that yes, I can deliver a single UI platform that will be [compatible with any development stack](https://custom-elements-everywhere.com/) in use at the company. And when even peer devs said, _"Why not just use React?"_ It was because one day I knew someone would say, _"Hey, I am going to use Svelte for the new project!"_ BTW, that day came and went and no one batted an eye.

## Design system or not to design system?

So if you want to try and draw one distinction of _"...where you write React and where you write WC?"_ you can rephrase that and ask, _Is this UI appropriate for the design system?_ At least, that is a little easier to answer, sometimes.

When deciding if something should be in the [Auro design system](http://auro.alaskaair.com/) one of the things we look for is abstraction. When approached by a designer or an engineer with an idea for a new custom element, the discussion always goes through a process of understanding the scope of the new element and how far can we abstract away from the original product concept it is currently in.

Sure things like [buttons](http://auro.alaskaair.com/components/auro/button) and [hyperlinks](http://auro.alaskaair.com/components/auro/hyperlink) are easy starters. But the more complex something gets, the more specific the use is and the harder the conversation about that one thing is to have. To this end, this is where we start to move the conversation to not only talking about the one thing but what are the many smaller things that make up the one thing. A dropdown menu comes to mind. Many will simply see this as a single element, but it is actually much more than that. This one thing is actually made up of the following:

1. The concept of a dropdown
1. The trigger for the dropdown (can be anything)
1. What goes into a dropdown (can be anything)
1. For the sake of a dropdown menu, there is the concept of a menu that is made up of menu items

To visualize, here is an example from [Shoelace.style](https://shoelace.style/components/dropdown)

```html
<sl-dropdown>
  <sl-button slot="trigger" caret>Dropdown</sl-button>
  <sl-menu>
    <sl-menu-item>Dropdown Item 1</sl-menu-item>
    <sl-menu-item>Dropdown Item 2</sl-menu-item>
    <sl-menu-item>Dropdown Item 3</sl-menu-item>
    <sl-menu-divider></sl-menu-divider>
    <sl-menu-item checked>Checked</sl-menu-item>
    <sl-menu-item disabled>Disabled</sl-menu-item>
    <sl-menu-divider></sl-menu-divider>
    <sl-menu-item>
      Prefix
      <sl-icon slot="prefix" name="gift"></sl-icon>
    </sl-menu-item>
    <sl-menu-item>
      Suffix Icon
      <sl-icon slot="suffix" name="heart"></sl-icon>
    </sl-menu-item>
  </sl-menu>
</sl-dropdown>
```

As you can see there is some added complexity when thinking this way, but there is also a huge opportunity for unlimited use. Any trigger can open a dropdown that has any content in it. A menu and menu-item can be used in any context outside the dropdown as initially designed.

I'd argue that had this been implemented with the scope of the app using it, it would have been developed as a dropdown menu for that one use case. But even given this architecture, there is nothing stopping anyone from making a dropdown-menu element that encompasses these smaller elements with a dedicated API. Why not? And to that end, what is stopping anyone from using those same common elements and making a specific component for React or Vue? Nothing, but that just illustrates the unlimited flexibility made available by creating these concepts with HTML custom elements.

## Custom elements aren't only for design systems

So you can come to a reasonable conclusion when deciding if something should be part of a design system or not, but that still doesn't answer the question about what technology to use even if it isn't going to be part of the design system. This is where things get really metaphysical IMHO. At Alaska we are really pushing the boundaries of this question. Teams who develop with different frameworks across all platforms really are challenging themselves when faced with building a UI.

With all things in life, you have to ask what the value prop is. Fact: the work before you is to develop a new thing. Fact: today you are using React, but will you always? Will this new thing only be used with React projects? Sure you are solving a business problem for your team, but does that mean it's always only for your team or are you just the first one to have the idea?

These are all really hard questions for any development team. Fact is that any UI component can be built with an API abstract enough that will allow for additional flexibility. Given that, what is the value prop for building the UI only in your current framework?

## When the magic happens

I want to tell a quick story about Alaska's flight search team. Now this team went through a lot of work to come up with a new search UI concept. The app platform is React.

Early on the decision was made that the UI elements would be developed as HTML custom elements. Many would be added to the Auro design system. There are no plans to rebuild this experience in anything other than React and no one knows if it ever will, so that was not part of the calculus. But, from a random conversation a whole new business problem was discovered with Alaska's flight status experience.

The experience at the time was less than awesome to say the least. Since many of the UI elements that the search team had already created were in the design system, there was a plethora of options to pick from. And their next decision to build the new experience with Svelte was no issue at all since the UIs were created as HTML custom elements.

So there it it. A HUGE opportunity to create a new product experience that require little to no additional effort due to the easily reuseable pre-work that was 100% platform and framework agnostic. You can see this if you visit the [Alaska flight status](https://www.alaskaair.com/status/366/2021-09-29) experience.

To build this, they used the following Auro custom elements:

1. [auro-icon](https://auro.alaskaair.com/icon)
1. [auro-avatar](https://auro.alaskaair.com/avatar)
1. [auro-button](https://auro.alaskaair.com/button)
1. [auro-accordion](https://auro.alaskaair.com/accordion)
1. [auro-dialog](https://auro.alaskaair.com/components/auro/interruption/dialog)
1. [auro-drawer](https://auro.alaskaair.com/components/auro/interruption/drawer)
1. [auro-flight](https://auro.alaskaair.com/components/auro/flight)
1. [auro-flightline](https://auro.alaskaair.com/components/auro/flightline)
1. [auro-hyperlink](https://auro.alaskaair.com/hyperlink)
1. [auro-loader](https://auro.alaskaair.com/components/auro/loader)
1. airline-helper (internal)
1. airport-helper (internal)
1. cms-partial (internal)
1. food-menu (internal)
1. food-preorder (internal)

The real win with this project was not the only the fact tha the team has a list of tools to pull from and they could use the platform of their choosing, but this part of the customer experience, and many others like it, are not revenue generating views. As a result, they get little attention from product managers who set the priorities. This one project showed the business that big things can happen with little effort due in part of the agnostic component architecture we have.

### The smallest parts have the biggest impact

Looking at this flight status experience, small details can be easily overlooked. The one I am speaking of is the [auro-hyperlink](https://auro.alaskaair.com/hyperlink) element. In the **Your aircraft** details section, there is a link about **your aircraft**. This link opens a new tab, but is still within the Alaska domain. What I want to talk about is the small icon with the link for this type of interaction.

What makes this interesting is at one time we had a single icon for both internal and external new-window experiences. It was decided to update this element to have an individual icon for internal links versus external links. The element was updated and the new version rolled out. Teams simply updated their dependencies and over a short period of time all users of this element were quietly updated. Any team. Any platform. The only common thread is the custom element they are using.

Imagine rolling this out when every team has every link custom edited in their app. Even if is created as a framework specific component, this would require duplicated work between all the individual teams. With this scenario, one team made the update and other teams ran `$ npm update`. Which is easier to you?

Alaska, like many others, have a micro-site strategy. It is these common threads between apps that will be necessary to maintain the sanity.

## The elephant in the room

I am not going to lie. Working with custom elements and React, and Svelte for that matter, have not been without their challenges. But you can't say that moving to any new tech isn't without its challenges. Anyone remember back when we first starting using React for web sites and it had to work with IE? Tell me that wasn't a pain in the ass. And we didn't drop React because there was a huge value prop. The same can be said here. So sure, we did the work. We figured out the difficult issues and there is a community dedicated to solving these problems. To help our devs the Auro team put effort into things like building a [React](http://auro.alaskaair.com/reactSetup) and [Svelte](http://auro.alaskaair.com/svelteSetup) example projects. One part of our job is building custom elements, but the other part is assisting teams with integration.

In addition to those example projects, we have a good set of [best practices](http://auro.alaskaair.com/generator/best-practice) for the development of custom elements that ensure ease of use for our customer users.

Yes, we do wish for a day when there is seamless integration of these technologies, but will that happen? Probably not. Every framework has their own opinions and because of that, there will always be friction. But how bad is that friction? What is the value prop for the additional work? If it all ballance out in the right direction, that's where the opportunity is. If the value is not there, well, there is also your answer.

## In conclusion

At the end of the day, we all have to do the things that we need to do in order to do our jobs. Our role is to deliver features in software, not be overly dogmatic about any specific technology. So with each decision we have to ask ourselves where the opportunity is.
