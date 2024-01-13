 const apiKey = "f267ae893b31f3de434013fc0e11aae7";
 const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metrics&q=bangalore";

 async function checkWeather(){
    const response = await fetch(apiUrl + `&appid=${apiKey}`)
    var data = await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML = data
 }
checkWeather();