const searchButton = document.getElementById('search-button');
const searchInput = document.getElementById('search-input');
var city = document.querySelector(" .city");
var info = document.querySelector(" .info");
var temp = document.querySelector(" .temp");

//search button to Display City on page
searchButton.addEventListener('click',function(){
  fetch('https://api.openweathermap.org/data/2.5/weather?q='+searchInput.value+
  '&appid=2f8560b036f6a5fa7d519bb3d3016e71&units=imperial')
  .then(response => response.json())
  .then(data => {
    var nameValue = data['name'];
    var tempValue = data['main']['temp'];
    var infoValue = data['weather'][0]['description'];

    city.innerHTML = nameValue;
    temp.innerHTML = tempValue;
    info.innerHTML = infoValue;
  })


.catch(err => alert("No city found"))
});



function weatherBalloon( cityID ) {
  var key = '2f8560b036f6a5fa7d519bb3d3016e71';
  fetch('https://api.openweathermap.org/data/2.5/weather?id=' + cityID+ '&appid=' + key)  
  .then(function(resp) { return resp.json() }) // Convert data to json
  .then(function(data) {
    console.log(data);
  })
  .catch(function() {
    // catch any errors
  });
}

window.onload = function() {
  weatherBalloon( 5389489 );
}

