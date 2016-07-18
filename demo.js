
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
