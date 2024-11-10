function information () {
    const apiKey = "3bd9b53a9b9d4d36894133733241011"

    const city = 'Tbilisi'

    fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`)
        .then(response => response.json())
        // .then(data => console.log(data.main.temp + 'C, ' + data.weather[0].description))
        .then(data => console.log(data.current.temp_c))
}


const input = document.querySelector("cityInput")

const inputValue = input.value

inputValue = information