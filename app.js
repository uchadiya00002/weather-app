let weather = {
    apiKey: "045a5cbff687af80e44cb47791dbea2c",
    fetchWeather: async function (city) {
       let result =  await fetch
            ("https://api.openweathermap.org/data/2.5/weather?q="
                + city
                + "&units=metric&appid="
                + this.apiKey
            )
            const response =  await result.json();
            console.log(response);

            const { name } = response;
    const { icon, description } = response.weather[0];
    const { temp, humidity } = response.main;
    const { speed } = response.wind;
    console.log(name, icon, description, temp, humidity, speed);
    document.querySelector(".city").innerText = "Weather in " + name;
    document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText = temp + "°C";
    document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
    document.querySelector(".wind").innerText = "Wind Speed: " + speed + "  km/h ";   
document.querySelector(".weather").classList.add("weather_loading");                     }
    ,

search : function(){
    this.fetchWeather(document.querySelector(".search-bar").value);
}
};
document.querySelector(".search button").addEventListener("click",function(){
    weather.search();
});
document.querySelector(".search-bar").addEventListener("keyup",function(event){
    if(event.key == "Enter"){
        weather.search();

    }
});
weather.fetchWeather("Indore");