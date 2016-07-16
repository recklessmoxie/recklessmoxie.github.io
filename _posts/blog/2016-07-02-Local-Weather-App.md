---
layout: post
title: Local Weather App
date: 2016-7-1
modified: 2016-7-2
comments: true
excerpt:
categories: blog
tags: ["Free Code Camp", "html5 Canvas", "Trianglify", "JavaScript", "API"]
search_omit: false
image:
  feature: steam.JPG
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
 <p>Upon reading through the objectives, this was a really appealing aspect of the project. Creativity is the name of the game for this app. So, instead of using a static image to represent specific conditions, I decided to have some fun (and go a tad bit overboard) by creating a multi-dimensional image which would be generated dynamically.</p>

##### Background Image Colors:
  <p>A tool which proved invaluable right from the start was <a href="https://color.adobe.com/create/image/"> Adobe ColorCC. </a> It's use is fairly straightforward. A user can create custom color palettes from an uploaded image, or chose from existing palettes created by other users. I created a custom color palette drawing upon the <a href="http://graphical.weather.gov/sectors/conus.php?element=T"> NOAA color key </a> for inspiration.</p>


 <figure class="half">
 <a href="http://res.cloudinary.com/recklessmoxie/image/upload/q_100/v1467441008/Screen_Shot_2016-07-01_at_11.21.19_PM_zcb0lw.png"><img src="http://res.cloudinary.com/recklessmoxie/image/upload/q_100/v1467441008/Screen_Shot_2016-07-01_at_11.21.19_PM_zcb0lw.png"></a>
 <a href="http://res.cloudinary.com/recklessmoxie/image/upload/q_100/v1467442314/Screen_Shot_2016-07-01_at_11.51.08_PM_mdgjrk.png"><img src="http://res.cloudinary.com/recklessmoxie/image/upload/q_100/v1467442314/Screen_Shot_2016-07-01_at_11.51.08_PM_mdgjrk.png"></a>
<figcaption> The NOAA website was a great source for map graphics.
</figcaption>
</figure>
___

##### Trianglify:

<p>Once all the color palettes were created, It was time to create background images with <a href="http://qrohlf.com/trianglify/"> Trianglify.</a> Trianglify is a really fun Javascript add-on which algorithmically generates triangle art utilizing HTML5 Canvas. I went into this project completely unfamiliar with Canvas, so I was prepared for a steep learning curve. Thankfully the documentation is fantastic which allowed me to create exactly what I had envisioned.</p>

<figure class="third">
<a href="/images/Screen Shot 2016-07-02 at 12.13.44 PM.png"><img src="/images/Screen Shot 2016-07-02 at 12.13.44 PM.png"></a>
<a href="/images/Screen Shot 2016-07-02 at 12.13.00 PM.png"><img src="/images/Screen Shot 2016-07-02 at 12.13.00 PM.png"></a>
<a href="/images/Screen Shot 2016-07-02 at 1.36.59 PM.png"><img src="/images/Screen Shot 2016-07-02 at 1.36.59 PM.png"></a>
<figcaption></figcaption>
<figure>
