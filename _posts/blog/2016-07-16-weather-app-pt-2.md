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



<p>The initial blog post for this project should have detailed the API's to keep information in order; However, the Trianglify and background image process was really in-depth so I chose to share it first. The remaining blog posts will be presented sequentially.</p>

<div markdown="0"><a href="/blog/weather-app-pt-2/" class="btn"><i class="fa fa-long-arrow-left fa-lg"></i> Part 1</a></div>
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

#### Calling the API

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
      console.log("This is the data returned by the API:"),
      console.log(data);
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

<p> Let's take a look. All we have to do is open the developer console in our browser, because we included a console.log(data); within the function.</p>

<p>
<figure>
<a href="/images/openweathercall.png">
<img src="/images/openweathercall.png">
</a>
</figure>
</p>

#### Working with temperature data

<p> Accessing information becomes pretty simple, once you are able to see the results.
The first piece of information worked with was the current temperature. The figure below shows a 'main' object, which contains temperature information. My API call asked for c°, but data can be retrieved in f° and kelvin as well (see <a href="http://openweathermap.org/current#data"> API documentation </a> for greater detail).</p>

<figure>
<a href ="/images/main-temp.png">
<img src="/images/main-temp.png">
</a>
</figure>
____

##### Adding to the function

<p>New code added within the base function places the temperature data into variables used elsewhere within the app.</p>

```javascript

//Variables which contain the temp data//
    $tempC = data.main.temp;
    $temp = Math.round(data.main.temp);
    $tempF = Math.round((data.main.temp * 9) / 5 + 32);

    console.log("$tempC contains the raw c° temperature.");
    console.log($tempC);
    console.log("$temp contains c° rounded to remove the decimal from the raw c°");
    console.log($temp);
    console.log("$tempF contains the conversion of raw c° into f°");
    console.log($tempF);
```
<p> To test the data, a few console.log() additions were made. A quick look at the developer console shows the data stored within these new variables.</p>

<figure>
<a href ="/images/temp-data.png">
<img src="/images/temp-data.png">
</a>
</figure>
____

#### Sending information to the DOM

<p> The next task was manipulation of the DOM to display information dynamically in some existing html elements. The figure below shows the data nestled in the 'weather' object, and the 'main' object. The city/region was passed in from the ip-api data function.</p>

<figure>
<a href ="/images/current-log.png">
<img src="/images/current-log.png">
</a>
</figure>
____


```javascript
      //Displays the current weather description//
      $('#current').append(data.weather[0].description);
      console.log("Current weather description:")
      console.log(data.weather[0].description);

      //Displays the user's location (city & state) which was passed in from the ip-api call//
      $('#location').append($local);
      console.log("Current location:")
      console.log($local);

      //Displays the current percentage of humidity and concatenates the % symbol//
      $('#pctHumidity').append(data.main.humidity + "%");
      console.log("Current percentage of humidity:");
      console.log(data.main.humidity + "%");
```

<p> The developer console shows the console.log() of data stored within the new variables.</p>

<figure>
<a href ="/images/displaycurrent.png">
<img src="/images/displaycurrent.png">
</a>
</figure>
____

#####
