

window.onload = (event) => {
    console.log("OK")
    getData("porto");
};

function getCity() {
    const city = document.querySelector("#city").value;
    getData(city)
}

async function getData(city) {

    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5950586a267ea9c36b6a77ba120fb972`)
    .then(answer => answer.json())

    console.log(data);
    showInf(data);
    
}

function showInf(data) {
    const weather = document.querySelector('#weather')

    var city = document.querySelector('#cityName')
    city.textContent=data.name; 


    var icon = data.weather[0].icon;
    weather.src = `https://openweathermap.org/img/wn/${icon}.png`
    
    var temperature = document.querySelector('#temperature')
    temperature.innerHTML = `${(data.main.temp -273).toFixed(0)}<sup>°C</sup>`; 

    var description = document.querySelector('#description')
    description.textContent = data.weather[0].description; 

    var  percentageOfHuidity = document.querySelector('#humidityPercent'); 
    percentageOfHuidity.textContent = data.main.humidity + "%"; 

    var windVelocity = document.querySelector('#windVelocity'); 
    windVelocity.textContent = data.wind.speed; 


}
4
