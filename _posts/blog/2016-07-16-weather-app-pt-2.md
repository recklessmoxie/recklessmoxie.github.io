---
layout: post
title: Local Weather App (Part 2)
date: 2016-7-16
modified: 2016-7-16
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

  <figure>
  <a href="http://www.recklessmoxie.com/Weather-App/"><img src="/images/weather2thumb.png">
  </a>
  </figure>

<p>The initial post for this project should have detailed the API's to keep information in order; However, the Trianglify and background image process was really in-depth so I chose to share it first. The remaining blog posts will be presented sequentially.</p>
____




#### Geolocation API

<figure class="caption-title pull-right">
<img src="/images/Screen Shot 2016-07-17 at 11.39.56 AM.png">
<figcaption>
<h3>Click to try the ip-api call</h3>
<p>Sample data from ip-api.</p>
</figcaption>
<a href="http://ip-api.com/json"></a>
</figure>

<p>When I began this project I was apprehensive about using two different API calls. The project just prior to this was a random quote generator <a href="http://codepen.io/RecklessMoxie/full/BzKKLP/">(seen here)</a> which involved a single API call.</p>

<p> The API documentation was all I used to complete the previous project. One goal I had for this project was to better understand API calls. Turns out, it's not hard or scary. In my opinion, the best way to understand an API is to use it. Seeing the data the call returns for yourself definitely helps everything sink in.</p>
