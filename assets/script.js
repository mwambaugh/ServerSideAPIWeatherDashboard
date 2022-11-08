var api =
  "https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=f427ac2a434e25790de0c97c67104b2b";

//state variables
var timeStamp = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
currentDay.textContent = timeStamp;

var toMorrow = moment().add(1, 'days').calendar();
tomM.textContent = toMorrow;

var toMorrow = moment().add(2, 'days').calendar();
tomM2.textContent = toMorrow;

var toMorrow = moment().add(3, 'days').calendar();
tomM3.textContent = toMorrow;

var toMorrow = moment().add(4, 'days').calendar();
tomM4.textContent = toMorrow;

var toMorrow = moment().add(5, 'days').calendar();
tomM5.textContent = toMorrow;


//event listeners for search text area box
$(".searchBtn").on("click", function (event) {
  console.log("search button clicked");
  $(".searchData").val();
  console.log($(".searchData").val());
  var userSearch = $(".searchData").val();
  console.log("userSearch");
  cityCall(userSearch);
});

//loops and functions
//taking the user serach and making a request to the api
function cityCall(cityName) {
  var url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=f427ac2a434e25790de0c97c67104b2b`;
  fetch(url)
    .then(function (response) {
//.then is formatting the data into JSON 
// console.log(response)
      return response.json();
    })
    .then(function (data) {
      // console.log(data);
    //making var for lat and long key values 
    var lonValue = data.coord.lon  
    var latValue = data.coord.lat
//calling the location 
locationCall(lonValue,latValue);
    });
//end of function city call 
}

function locationCall(lon, lat){
    var locationUrl =   `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=f427ac2a434e25790de0c97c67104b2b&units=imperial`;
    fetch(locationUrl)
    .then(function (response){
        // console.log(response)
        return response.json();
    })
    .then(function (data){
console.log(data);

var weatherContainer = $("#todaysWeatherContainer");

var mainData = data.list[0].weather[0].description;
var mainDataListItem = '<li>' +"The weather is: "+ mainData +'</li>';
weatherContainer.append(mainDataListItem);

var tempData = data.list[0].main.temp;
var tempDataListItem = '<li>' +"Tempature is: "+ tempData + " degrees"+'</li>';
weatherContainer.append(tempDataListItem);

var speedData = data.list[0].wind.speed;
var speedDataListItem = '<li>' + "Wind Speed is: " + speedData + '</li>' 
// var speedDataListItem = $('li').text(speedData);
weatherContainer.append(speedDataListItem);
console.log(data.list[0].wind.speed);

var humData = data.list[0].main.humidity;
var humDataListItem = '<li>' + "Humidity is: " + humData +'</li>' 
weatherContainer.append(humDataListItem);
console.log(humData);


//day 1 
//date//

var fiveDayContainer1 = $(".fiveDayContainer1");

var mainData = data.list[1].weather[0].description;
var mainDataListItem = '<li>' +"The weather is: "+ mainData +'</li>';
fiveDayContainer1.append(mainDataListItem);

var tempData = data.list[1].main.temp;
var tempDataListItem = '<li>' +"Tempature is: "+ tempData + " degrees"+'</li>';
fiveDayContainer1.append(tempDataListItem);

var speedData = data.list[1].wind.speed;
var speedDataListItem = '<li>' + "Wind Speed is: " + speedData + '</li>' ;
fiveDayContainer1.append(speedDataListItem);


var humData = data.list[1].main.humidity;
var humDataListItem = '<li>' + "Humidity is: " + humData +'</li>' ;
fiveDayContainer1.append(humDataListItem);

//DAY TWO 
var fiveDayContainer2 = $(".fiveDayContainer2");

var mainData = data.list[2].weather[0].description;
var mainDataListItem = '<li>' +"The weather is: "+ mainData +'</li>';
fiveDayContainer2.append(mainDataListItem);

var tempData = data.list[2].main.temp;
var tempDataListItem = '<li>' +"Tempature is: "+ tempData + " degrees"+'</li>';
fiveDayContainer2.append(tempDataListItem);

var speedData = data.list[2].wind.speed;
var speedDataListItem = '<li>' + "Wind Speed is: " + speedData + '</li>' ;
fiveDayContainer2.append(speedDataListItem);


var humData = data.list[2].main.humidity;
var humDataListItem = '<li>' + "Humidity is: " + humData +'</li>' ;
fiveDayContainer2.append(humDataListItem);

//DAY THREE
var fiveDayContainer3 = $(".fiveDayContainer3");

var mainData = data.list[4].weather[0].description;
var mainDataListItem = '<li>' +"The weather is: "+ mainData +'</li>';
fiveDayContainer3.append(mainDataListItem);

var tempData = data.list[4].main.temp;
var tempDataListItem = '<li>' +"Tempature is: "+ tempData + " degrees"+'</li>';
fiveDayContainer3.append(tempDataListItem);

var speedData = data.list[4].wind.speed;
var speedDataListItem = '<li>' + "Wind Speed is: " + speedData + '</li>' ;
fiveDayContainer3.append(speedDataListItem);


var humData = data.list[4].main.humidity;
var humDataListItem = '<li>' + "Humidity is: " + humData +'</li>' ;
fiveDayContainer3.append(humDataListItem);

//DAY FOUR
var fiveDayContainer4 = $(".fiveDayContainer4");

var mainData = data.list[6].weather[0].description;
var mainDataListItem = '<li>' +"The weather is: "+ mainData +'</li>';
fiveDayContainer4.append(mainDataListItem);

var tempData = data.list[6].main.temp;
var tempDataListItem = '<li>' +"Tempature is: "+ tempData + " degrees"+'</li>';
fiveDayContainer4.append(tempDataListItem);

var speedData = data.list[6].wind.speed;
var speedDataListItem = '<li>' + "Wind Speed is: " + speedData + '</li>' ;
fiveDayContainer4.append(speedDataListItem);


var humData = data.list[6].main.humidity;
var humDataListItem = '<li>' + "Humidity is: " + humData +'</li>' ;
fiveDayContainer4.append(humDataListItem);

//DAY FIVE

var fiveDayContainer5 = $(".fiveDayContainer5");

var mainData = data.list[8].weather[0].description;
var mainDataListItem = '<li>' +"The weather is: "+ mainData +'</li>';
fiveDayContainer5.append(mainDataListItem);

var tempData = data.list[8].main.temp;
var tempDataListItem = '<li>' +"Tempature is: "+ tempData + " degrees"+'</li>';
fiveDayContainer5.append(tempDataListItem);

var speedData = data.list[8].wind.speed;
var speedDataListItem = '<li>' + "Wind Speed is: " + speedData + '</li>' ;
fiveDayContainer5.append(speedDataListItem);


var humData = data.list[8].main.humidity;
var humDataListItem = '<li>' + "Humidity is: " + humData +'</li>' ;
fiveDayContainer5.append(humDataListItem);
    })   
}


// User Searched Cities 
  // Save To Do Items in Local Storage
  // localStorage.setItem(userSearch, searchData);

// Get & display local storage
// $("# .").val(localStorage.getItem(""));


