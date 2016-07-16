---
layout: post
title: Local Weather App (Part 1)
date: 2016-7-1
modified: 2016-7-2
comments: true
share: true
excerpt:
categories: blog
tags: ["Free Code Camp", "html5 Canvas", "Trianglify", "JavaScript", "API"]
search_omit: false
image:
  feature: steamy.jpg
  thumb: weather1thumb.png
  credit: Shelly Barkley
---
### Project Objectives:
  * Create an app using the Open Weather API, and geolocation to display the user's current weather conditions.
  * Enable the background or an image to change based on conditions returned from the API call.
  * Allow the user to toggle between Fahrenheit and Celsius.

<figure class="caption-title">
<img src="http://res.cloudinary.com/recklessmoxie/image/upload/q_100/v1467437849/Screen_Shot_2016-07-01_at_10.35.44_PM_ouzska.png">
<figcaption>
<p>See the live project here</p>
</figcaption>
<a href="http://www.recklessmoxie.com/Weather-App/"></a>
</figure>
<p>Since the final product ended up being more complex than the required objectives, I chose to break down the project's steps over a series of blog posts.</p>
____

## First Objective: Enable background/image changes
 <p>Upon reading through the objectives, this was a really appealing aspect of the project. Creativity is the name of the game for this app. A plan developed in my mind to dynamically generate a multi-dimensional image for each set of weather conditions, instead of simply using a static image.</p>

##### Background Image Colors:
  <p>A tool which proved invaluable right from the start was <a href="https://color.adobe.com/create/image/"> Adobe ColorCC. </a> It's use is fairly straightforward. A user can create custom color palettes from an uploaded image, or chose from existing palettes created by other users. A series of custom color palettes were put together drawing upon the <a href="http://graphical.weather.gov/sectors/conus.php?element=T"> NOAA color key </a> for inspiration.</p>


 <figure class="third">
 <a href="http://res.cloudinary.com/recklessmoxie/image/upload/q_100/v1467441008/Screen_Shot_2016-07-01_at_11.21.19_PM_zcb0lw.png"><img src="http://res.cloudinary.com/recklessmoxie/image/upload/q_100/v1467441008/Screen_Shot_2016-07-01_at_11.21.19_PM_zcb0lw.png"></a>
 <a href="http://res.cloudinary.com/recklessmoxie/image/upload/q_100/v1467442314/Screen_Shot_2016-07-01_at_11.51.08_PM_mdgjrk.png"><img src="http://res.cloudinary.com/recklessmoxie/image/upload/q_100/v1467442314/Screen_Shot_2016-07-01_at_11.51.08_PM_mdgjrk.png"></a>
 <a href="/images/Screen Shot 2016-07-02 at 12.13.00 PM.png"><img src="/images/Screen Shot 2016-07-02 at 12.13.00 PM.png"></a>
<figcaption> The NOAA website was a great source for map graphics.
</figcaption>
</figure>
___


##### Trianglify, Chroma JS, and Color Brewer:

<figure class="caption-title pull-right">
<img src="https://cloud.githubusercontent.com/assets/347189/6771063/f8b0af46-d090-11e4-8d4c-6c7ef5bd9d37.png">
<figcaption>
   <p>Click to try the Trianglify Generator</p>
</figcaption>
<a href="http://qrohlf.com/trianglify-generator/"></a>
</figure>

<p>After completing the color palettes, It was time to create my background images. <a href="http://qrohlf.com/trianglify/"> Trianglify</a> is a really fun Javascript add-on which algorithmically generates triangle art utilizing HTML5 Canvas. I came into the project completely unfamiliar with Canvas, so I was prepared for a steep learning curve. </p>
___

<p>While reading the (very thurough) documentation, I learned Trianglify would accept a custom color palette for both the x and y axis. I wanted to achieve a gradient effect similar to the <a href="http://colorbrewer2.org/"> Color Brewer Scale </a> to represent my data points.</p>

<p>It became necessary to add more colors to achieve proper gradients. Visual appeal in the end product was very important as well. I found <a href="http://gka.github.io/chroma.js/"> Chroma Js </a> to be a perfect solution. Chroma JS is a color manipulation library and has an interactive tool as well. Using this tool allowed me to keep the JS light.</p>  

<figure class="half">
<a href="/images/Screen Shot 2016-07-02 at 1.36.59 PM.png">
<img src="/images/Screen Shot 2016-07-02 at 1.36.59 PM.png">
</a>
<a href="/images/Screen Shot 2016-07-02 at 12.13.44 PM.png">
<img src="/images/Screen Shot 2016-07-02 at 12.13.44 PM.png">
</a>
<figcaption> Every Color Brewer Scale: visual reference & Chroma.js </figcaption>
</figure>
___

##### The Final Color Schemes:

<p>Each final color palette was based on a temperature range represented in the NOAA color key shown above. The hex colors derived from Chroma.js were nice, yet still seemed a little bland. After testing many different hex codes the final product was a combination of my custom palettes and some Color Brewer ones.</p>

<figure class="half">
<a href="/images/light-purples.png">
<img src="/images/light-purples.png">
</a>
<a href="/images/purples.png">
<img src="/images/purples.png">
</a>
<figcaption> First image created with hex colors on both x & y axis. Second image created with Color Brewer Scale 'Purples' both x & y axis.
</figcaption>
</figure>

<figure class="half">
<a href="/images/Screen Shot 2016-07-15 at 11.18.14 PM.png">
<img src="/images/Screen Shot 2016-07-15 at 11.18.14 PM.png">
</a>
<a href="/images/Screen Shot 2016-07-15 at 11.22.18 PM.png">
<img src="/images/Screen Shot 2016-07-15 at 11.22.18 PM.png">
</a>
<figcaption>
First image (final product) derived from code below. Second image was desired outcome.
</figcaption>
</figure>
___

<p>The individual color palettes were coded as demonstrated below.
The resulting image is dynamically generated based on user data returned by the API call which reflects the current temperature range at their location, either in F° or C°.</p>


```javascript

var midPurple = Trianglify({
  cell_size: 60,
  variance: 0.74,
  width: window.innerWidth,
  height: window.innerHeight,
  x_colors: ['#cf7dd1', '#c274ce', '#b56bcb', '#a762c8', '#9958c4',
    '#8d51bf', '#804bba', '#7445b5', '#683fb0'
  ],
  y_colors: 'Purples',
  seed: Math.seedrandom('added entropy', {
    entropy: true
  })
});

```



<div markdown="0"><a href="http://www.recklessmoxie.com" class="btn pull-right"> Part 2 <i class="fa fa-long-arrow-right fa-lg"></i> </a></div>
