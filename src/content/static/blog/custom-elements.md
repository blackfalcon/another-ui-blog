# Custom elements, so what's really the big deal?!

<small><auro-datetime utc="2020-11-06T00:01:00Z" month="long"></auro-datetime></small>

This is my blog, so I am not going to beat around the bush much. The fact is, [custom elements](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements) have been a dream for close to 15 years. Unlike many in web development, I have been watching the evolution of custom elements the whole time. Seeing their value without hesitation, I have simply been waiting for the tech to catch up to the dream.

## What I have been looking for?

This is pretty easy to answer. Consistency and efficiency. When I am building UIs I don't care about the framework I am using. If there is a consistent UI between products, I DO NOT want to have to reinvent.

I started out as a web designer all those years ago. Before this was popular, being an early web designer also meant being an early web developer. The tools were total shit, but we had a dream. Right away people were looking for ways to reuse UI elements, but the best we had at the time was [server-side includes](http://httpd.apache.org/docs/2.2/howto/ssi.html). It works and I guess it is still supported, but it sucked. It is a direct include, not a useable template.

Ugh ... Dreamweaver had support for this, but we're not going there. Talk about a failed reality.

My first real dive into modern web app programming (ignoring the years of PHP and ASP hell) was joining a Rails team. So many things just rang true. Partials, helpers, view templates, etc. This all made sense and I really dove deep into using these tools as best I could to bring sanity to an insane world.

So much that I started speaking at meetups of the amazing ways I came up with to solve really shitty problems. But alas, not everyone used Rails. And everyone is not using Rails today. This left me wanting more. Wanting to find a way to share ideas across platforms.

## The JavaScript revolution

Ahhh yes. I am NOT going to get into every religious argument in this space. SPAs, client-side versus server side rendering, etc. Don't care.

What was interesting to me about these frameworks was their use of JavaScript to build UIs. This got me to thinking more and more about how there literally is a universal platform for UIs, but the problem was that with each implementation, sure they were using JavaScript, but they were doing it in such a way that cross-framework UIs were just not possible. Trust me, I tried. Or I should say that it was possible, but the amount of code it took to support that was just not manageable.

But sitting in the corner was a small group with HUGE support from Google, the Polymer team. When I was fist introduced to Polymer, I saw it's potential but it's execution was just not cool. And Google's support really made it seem like it was only a tool that Google would use. Practical dev support outside Google was just not there.

## The dust settles, or did it?

It took a few years, but the dust did settle and the support for using React as THE framework of choice was clear. But was it? If anything about the JavaScript wars was clear was that this was a community that is never satisfied. Angular was still a commanding option. Riot was an unsung hero and Vue has had a draw for a long time. And now Svelte is in the mix.

Given all of this, it never felt safe putting any of my eggs in any of those baskets. I spent years on teams supporting shitty apps built with all these tools. None of them grabbed me by my soul to really invest in. In fact, the more time I spent with them, the more I hated them.

During all this time I had a vision. Having become more and more invested in the Design System movement, I saw all the amazing work people were doing to try and standardize UIs, but their executions were fragile. This carried over to the time I spent at Microsoft working on a now defunct design system. I said it then and I say it now, HTML 'templates' and an overly-complex Sass code base is NOT a sustainable execution of a design system.

It's exactly at this time I discovered the [Predix Design System](https://www.predix-ui.com/#/home). Their claim that their components would work in both React and Angular blew me away. And it was built on Polymer 2.0. I had to take a closer look.

## Custom Elements are here!

So here it was. The project I was looking for. A real test case for building UIs that can be used across frameworks. I had to take a much closer look.

Digging in, the opportunity was clear as day. But the tech wasn't where I wanted it to be. For one, the Polymer setup was still based in some outdated tech. Browser support was not there, and the polyfill was still too big. But this for sure was the path I wanted to take. It just needed a little more time.

I gave it another year. And the timing couldn't have been better. I had spent the past year supporting a legacy Angular app that was pretty much a nightmare. To maintain sanity I kept tabs on Polymer and React at the same time. Then it happened. Polymer 3.0 came out. Everything changed. The old tech was replaced. The v1 custom element spec was released on all modern browsers. And there was a group dedicated to supporting a polyfill for IE. All of this was really promising.

What was weird was that the support that Google was throwing behind Polymer was fading. Polymer Summit never returned after 2017. Material UI was really taking hold. The Material UI React project was really gaining in popularity. Was Google dropping support for Polymer?

The answer was yes and no. In September of 2017 there was a new repo created `Polymer/lit-element` with an initial committed README of ...

```
# polymer-lit

## This is just an example, and not event working yet. Please hold.
```

2017 marked a turning point in how modern web development would be changed forever by using HTML custom elements.
