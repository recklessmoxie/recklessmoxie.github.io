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
<img src="/images/ipapi.png">
<figcaption>
<h3>Sample data</h3>
<p>Click to call the ip-api</p>
</figcaption>
<a href="http://ip-api.com/json"></a>
</figure>

<p>When I began this project I was apprehensive about using two different API calls. The project just prior to this was a random quote generator <a href="http://codepen.io/RecklessMoxie/full/BzKKLP/">(seen here)</a> which involved a single API call.</p>

<p> The API documentation was all I used to complete the previous project. One goal I had for this project was to better understand API calls. Turns out, it's not hard or scary. In my opinion, the best way to understand an API is to use it. Seeing the data yourself definitely helps everything sink in.</p>
____

#### What can I do with the data?

<p> Another aspect of API's I found difficult at first was accessing specific portions of the data. The user's city and region needed to pass from ip-api into the Open Weather API call within another function.</p>

```javascript

getLocation();

//Retrieves user city and region data from ip-api and passes it to a function for an Open Weather API call //
function getLocation() {
  $.ajax({
    url: 'http://ip-api.com/json',
    method: 'GET',
    data: {},
    dataType: 'json',
    success: function (data) {
      $local = data.city + ', ' + data.region;

      //Calls and passes the city/region data into the Open Weather API function//
      setConditions($local);
    },
    error: function (err) {
      console.log(err)
    }
  });
}
```

<p>The browser's developer console proved to be a great tool, and learning experience too. Once the ip-api call function and the variable to hold the data were written console.log() verified the necessary data was there. </p>

<p>
<figure>
<a href="/images/consolelog.png">
<img src="/images/consolelog.png">
</a>
<figcaption>
console.log(); showing what the variable $local contains
</figcaption>
</figure>
</p>
____

#### Open Weather API

##### This function creates the Open Weather API call:

```javascript
//Returns API data and routes it to various functions//
function setConditions(city) {
  $.ajax({
    url: 'http://api.openweathermap.org/data/2.5/weather?q=' + city +
      '&units=metric&APPID=b13822c4653dbf64c47f5d1ca4177324',
    method: 'GET',
    data: {},
    dataType: 'json',
    success: function (data) {

      //temp data converted from c° to f° and rounded to display in DOM//
      $tempC = data.main.temp;
      $temp = Math.round(data.main.temp);
      $tempF = Math.round((data.main.temp * 9) / 5 + 32);
      $displayTempF(data);

      //Functions to add user location, current conditions, relevant icon, and humidity % into the DOM//
      $('#current').append(data.weather[0].description);
      $('#location').append($local);
      $('#pctHumidity').append(data.main.humidity + "%");

      //Function calls which create a background image, and set a relevant icon to the DOM//
      backgroundImage(data);
      setIcon(data);

      //variable/function to display date and time data in the DOM//
      $utcSeconds = data.dt,
        $time = new Date(0),
        $time.setUTCSeconds($utcSeconds),
        $('#time').append($time);
    },
    error: function (err) {
      console.log(err)
    }
  });
}
```
____

#### What happened?

<p>The function called the Open Weather API with data obtained by the ip-api. A significant amount of data is returned from this call which gets utilized by the remaining functions to add DOM content.</p>

<p>
<figure>
<a href="/images/openweathercall.png">
<img src="/images/openweatherthumb.png">
</a>
<figcaption>
<p>Click to display complete data</p>
</figcaption>
</figure>
</p>
