---
layout: post
title: Local Weather App
date: 2016-6-1
modified: 2016-6-2
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

The outcome of my efforts ended up being a lot more than required by the objectives; so the steps of the project will be broken down over a series of blog posts.


##### First Objective: Enable background/image changes
 <p>This is the part of the project I found most exciting when I read the objectives. Instead of using a static image to represent specific conditions I wanted to go bigger, and have some fun with it.</p>
 <p>One of the most valuable tools I used for this part of the project was <a href="https://color.adobe.com/create/image/"> Adobe ColorCC. </a> It's pretty straightforward, and you can create a custom color palette from any photo you upload. I was able to create a palette from the <a href="http://graphical.weather.gov/sectors/conus.php?element=T"> NOAA color key </a> for each temperature range represented in the key.</p>

 <figure class="half">
 <a href="http://res.cloudinary.com/recklessmoxie/image/upload/q_100/v1467441008/Screen_Shot_2016-07-01_at_11.21.19_PM_zcb0lw.png"><img src="http://res.cloudinary.com/recklessmoxie/image/upload/q_100/v1467441008/Screen_Shot_2016-07-01_at_11.21.19_PM_zcb0lw.png"></a>
 <a href="http://res.cloudinary.com/recklessmoxie/image/upload/q_100/v1467442314/Screen_Shot_2016-07-01_at_11.51.08_PM_mdgjrk.png"><img src="http://res.cloudinary.com/recklessmoxie/image/upload/q_100/v1467442314/Screen_Shot_2016-07-01_at_11.51.08_PM_mdgjrk.png"></a>
<figcaption> The NOAA website has great weather map graphics along with a vibrant color key. It was just the right source for inspiration.
</figcaption>
</figure>

Once all the color palettes had been created, It was time to use <a href="http://qrohlf.com/trianglify/">Trianglify</a> to create the background images. Trianglify utilizes HTML5 Canvas which I had not used before. The depth and variety of images which can be created with these techniques was impressive.

<figure class="third">
<a href="/images/Screen Shot 2016-07-02 at 12.13.44 PM.png"><img src="/images/Screen Shot 2016-07-02 at 12.13.44 PM.png"></a>
<a href="/images/Screen Shot 2016-07-02 at 12.13.00 PM.png"><img src="/images/Screen Shot 2016-07-02 at 12.13.00 PM.png"></a>
<a href="/images/Screen Shot 2016-07-02 at 1.36.59 PM.png"><img src="/images/Screen Shot 2016-07-02 at 1.36.59 PM.png"></a>
<figcaption></figcaption>
<figure>
