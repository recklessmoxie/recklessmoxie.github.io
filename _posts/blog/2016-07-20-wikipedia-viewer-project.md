---
layout: post
title: Wikipedia Viewer
date: 2016-7-20
modified: 2016-7-29
comments: true
share: true
excerpt: "Free Code Camp project: Create an app where the user can search Wikipedia entries in a search box and see the resulting Wikipedia entries."
categories: blog
tags: ["Free Code Camp", "Wikipedia Viewer", "JavaScript", "API"]
search_omit: false
image:
  feature: train.jpg
  thumb: trainthumb.jpg
  credit: Shelly Barkley
---

### Project Objectives:

  * Create an app where the user can search Wikipedia entries in a search box and see the resulting Wikipedia entries.

  *  Include a button/element the user can click to see a random Wikipedia entry.

  <figure class="caption-title">
  <img src="/images/goatsearch.png">
  <figcaption>
  <p>See the live project here</p>
  </figcaption>
  <a href="http://www.recklessmoxie.com/wikipedia-viewer/"></a>
  </figure>

____

### Html/CSS:

<p> My most productive workflow during a project comes from beginning with the html/CSS. I've found this allows a clearer visualization of the project goals once I begin the Javascript portion. Up until quite recently I coded in the reverse order. I was getting bored and decided to change things up and noticed it took me a lot less time and was a lot more enjoyable this way. For this project I wanted to keep it simple and interesting. I hope the final product reflects this.</p>

<figure>
<a href ="https://designschool.canva.com/blog/website-color-schemes/">
<img src="/images/colorinspiration.png">
</a>
<figcaption>
Color inspiration
</figcaption>
</figure>
____

#### The Logo/Header Image:

<p> Incorporating the <a href="https://en.wikipedia.org/wiki/Wikipedia_logo"> Wikipedia Logo </a> in some way seemed natural, so I started work on this first. The color scheme needed a large image to show off the orange color prominently and the globe seemed a perfect fit.</p>

<figure>
<a href ="/images/globe.png">
<img src="/images/globe.png">
</a>
<figcaption>
Globe Logo and Header using 'Hoefler Text'
</figcaption>
</figure>

<p>I read about the font used on Wikipedia because I wanted to replicate the look of the 'W' wordmark. Luckily, Inkscape includes the 'Hoefler Text' font which was originally used on the site. I wound up using <a href="https://inkscape.org/en/"> Inkscape </a> a lot during to manipulate text and images during this project.</p>
____

#### Random Article element:

<p><figure class="pull-right">
<a href ="/images/puzzle.png">
<img src="/images/puzzle.png">
</a>
</figure>
</p>

<p> Creating an image for this element was simple once I came up with the idea to use a puzzle piece. The dark orange color was used again to give the impression the piece had fallen from the globe. Initially I wanted to use <a href="https://daneden.github.io/animate.css/"> Animate.css </a> to have it drop into view; However, testing revealed it to be too busy for the spirit of the project.</p>
____

#### Search Bar and Icon:

<p> The FCC project demo included a magnifying glass icon which upon click expanded into a search bar. I set out to replicate this effect and created an image with the magnifying glass and text together (as I had done with the prior elements). A (GO) button was added as a way to submit for search, along with pressing the enter key.</p>

<p><figure class="half">
<a href ="/images/searchicon.png">
<img src="/images/searchicon.png">
</a>
<a href ="/images/searchbar.png">
<img src="/images/searchbar.png">
</a>
<figcaption>
Search Icon with Text & Search Bar Extended
</figcaption>
</figure>
</p>

<p>Expanding the search bar was achieved with some manipulation of the CSS</p>

```css

input.searchText {
 color: #857e76;
 position:relative;
 z-index:5;
 transition: z-index 0.8s, width 0.5s, background 0.3s ease, border 0.3s;
 height: 50px;
 width: 260px;
 margin: 0;
 padding: 0px;
 box-sizing: border-box;
 font-size: 1.4rem;
 cursor: pointer;
 border-radius: 40px;
 border: 6px solid transparent;
 background: url(search.svg) no-repeat center transparent;
 background-size:300px;
}

input.searchText:focus {
 z-index:3;
 width: 260px;
 border: 3px solid #F7B733;
 background-color: rgba(255, 255, 255, 1);
 outline: none;
 cursor:pointer;
 padding-right: 10px;
 padding-left: 50px;
}

input.searchSubmit {
 position: relative;
 z-index: 4;
 top:25px;
 left: 49px;
 width: 75px;
 height: 45px;
 margin: 5px;
 padding: 2px;
 border: 0;
 outline: 0;
 border-radius: 40px;
 cursor: pointer;
 background: none;
}
```
___

#### Styling Search Results:

<p><figure class="half">
<a href ="/images/goats.png">
<img src="/images/goats.png">
</a>
<a href ="/images/resulting.png">
<img src="/images/resulting.png">
</a>
<figcaption>
Search Term and Results
</figcaption>
</figure>
</p>

<p> Animate.css was used to allow the element which displayed search results to slide into view. The styling was kept simple in this element as well. The text was colored with meaning: Title and link to the full Wikipedia article colored in dark green (with hover link underline and color change), Snip of article text white, and search term in yellow.</p>
_____


#### Including a (GO) button:

<p> The (GO) button element (#getIt) was added to give users an interactive action element to retrieve search results. To keep a clean page appearance, this element remained hidden until the expansion of the search bar (through user click). Some search bars rely only on the user pressing the enter key, but I felt this addition made the app more user-friendly. Once this was added I came upon some difficulty.....</p>


### JavaScript Challenges:

<p> The portion of JavaScript which proved challenging was setting up an event handler for the #searchText element to trigger a click function on an input element once the enter key was pressed (and released). Adding to the complication was my lack of understanding regarding <a href="https://api.jquery.com/event.preventdefault/"> preventDefault(); </a>.</p>

<p> After doing some reading about this, <a href="http://stackoverflow.com/questions/979662/how-to-detect-pressing-enter-on-keyboard-using-jquery"> event handlers </a> (thank you Stack Overflow!), and <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form" form elements </a> I was able to clear up the issue I'd been having.</p>

<p> See the resulting code snippet below:</p>

```javascript
//hide the go button element until user clicks on search icon//
$('#getIt').hide();

$('#searchText').click(function () {
  $('#getIt').show();
});

//event handler to trigger the click event for the go button.//
$('#searchText').keyup(function (e) {
  if (e.which == 13) {
    $('#getIt').click();
    e.preventDefault();
  }
});
```

#### Conclusion:

<p> I enjoyed this project and it was challenging to keep the design minimal. I am looking forward to moving on to algorithims soon (one more project left!). Feel free to comment below, or catch me on <a href="https://twitter.com/RecklessMoxie"> Twitter. </a> I'd love to talk about these projects, or whatever you're working on. Thanks for reading!</p>
