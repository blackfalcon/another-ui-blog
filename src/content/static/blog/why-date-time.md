# Why a datetime component?

<small><auro-datetime utc="2020-11-11T00:01:00Z" month="long"></auro-datetime></small>

Let's just say, it all started with a Tweet.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">HTML should have a &lt;num&gt; tag that formats numbers according to the user&#39;s locale without JavaScript.</p>&mdash; Justin Fagnani (@justinfagnani) <a href="https://twitter.com/justinfagnani/status/1321909445685731328?ref_src=twsrc%5Etfw">October 29, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

This sparked a discussion I had with another developer about the number of times there were date and time conversion functions in the many web properties our teams manage. Let's just say, more than one is too many.

Yes, it would be great if we had better number, date and time native HTML elements, but we don't, so building a HTML custom element is the next best thing.

## The API

For simplicity sake, I decided to go with a single common component that did both date and time. The component is named [auro-datetime](https://auro.alaskaair.com/datetime). Using an attribute of `type` a user could then go between `date`, `time` and `numeric`. I admit, I live a luxury where I am building components to fit a design system, so enforcing restrictions makes sense.

<auro-datetime type="date"></auro-datetime>
```html
<auro-datetime type="date"></auro-datetime>
```

<auro-datetime type="time"></auro-datetime>
```html
<auro-datetime type="time"></auro-datetime>
```

<auro-datetime type="numeric"></auro-datetime>
```html
<auro-datetime type="numeric"></auro-datetime>
```

Extending the API for minor alterations on the types was next. Long versions of month and weekday. Setting custom timezone. And of course, providing a pre-defined date string.

<auro-datetime type="date" month="long" weekday="long"></auro-datetime>
```html
<auro-datetime type="date" month="long" weekday="long"></auro-datetime>
```

<auro-datetime type="time" timezone="America/Chicago"></auro-datetime>
```html
<auro-datetime type="time" timezone="America/Chicago"></auro-datetime>
```

<auro-datetime utc="2020-09-22T01:38:22Z"></auro-datetime>
```html
<auro-datetime utc="2020-09-22T01:38:22Z"></auro-datetime>
```

<auro-datetime type="time" utc="2020-09-22T01:38:22Z"></auro-datetime>
```html
<auro-datetime type="time" utc="2020-09-22T01:38:22Z"></auro-datetime>
```

## Simple customization

Also keep in mind, this custom element returns a basic HTML string, so you can do whatever you want with it. One of the few things that pierce the shadow DOM of custom elements is font styles and color. Want to make a time header? Custom elements are HTML elements, so add CSS to them and they react. It's that simple!

<auro-datetime style="color: forestgreen; font-size: 2rem; padding: 1rem 0; display: block; text-align: center" type="date" month="long" weekday="long"></auro-datetime>
```html
<auro-datetime style="color: forestgreen; font-size: 2rem; padding: 1rem 0; display: block; text-align: center" type="date" month="long" weekday="long"></auro-datetime>
```

## The code

The reality of it is that converting time and date with JavaScript not all that complicated. With the core being setting this object.

```js
let newDate = new Date();
```

Then using that object, creating a template object, and the following method, this really does most of the work.

```js
this.dateTemplate = {
  weekday: this.weekday,
  year: "numeric",
  month: this.month,
  day: "numeric"
};

newDate.toLocaleString('en-us', this.dateTemplate);
```

Using this model, we can pretty much do anything we want.

## If it's so simple...

You are right. The code in the end is not that complicated. If you look at [the code](https://github.com/AlaskaAirlines/auro-datetime/blob/main/src/auro-datetime.js) you will see that the majority of the code is in the API decision tree.

So what is the benefit? Well, what is life like without this component? Sure there is moment.js, and it is amazing, but unless you need the master of all dates and time, do you really need this library? For me, I don't think so.

If you are not using moment.js, then you are adding JavaScript somewhere in your app. Depending on how your app is set up, you may have this code in there a few times. Then, you move over to a different project and then you find out that there is no time support there so what do you do? You write another time conversion function.

What is life like with this component? I find it to be pretty nice. With a super simple [install](https://auro.alaskaair.com/components/auro/datetime/install) I can use a simple HTML interface anywhere. And I am not locked to a framework specific solution. React, Angular, Vue, Svelte. It will just work.

In fact, this document is written in markdown and it simply works.
