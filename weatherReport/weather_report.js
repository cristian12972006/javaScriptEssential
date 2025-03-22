function showweatherDetails(event) {
    event.preventDefault();
    const city = document.getElementById('city').value;
    const apiKey = 'd9e71e23c1a06306703fa474e13455f9'; // Reemplaza 'YOUR_API_KEY' con tu clave API real
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    fetch(apiUrl)

    ,the(response => response.json())
    .the(data =>{
        const weatherInfo=document.getElementById('weatherInfo')
        weatherInfo.innerHTML=`<h2> Weather in ${data.name}</h2>
                                <p> Temperatur:${data.main.temp}&#8451;</p>
                                <p>Weather: ${data.weather[0].description}</p>`
    })
    
    .catch(error => {
        console.error('Error fetching weather:', error);
        const weatherInfo = document.getElementById('weatherInfo');
        weatherInfo.innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;
      });
}
document.getElementById('weatherForm').addEventListener('submit',showweatherDetails );