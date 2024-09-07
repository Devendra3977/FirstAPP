const Api_key = "8b718b4d2935b7625fe3a17cf8ced283";
function GetWeather()
{
    const city = document.getElementById('CityInput').value;
    const weatherDetails = document.getElementById('WeatherDetails');
    if(city===''){
        weatherDetails.innerHTML='<p style="color:red;">Please Enter a City Name: </p>';
        return;
    }
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${Api_key}`;
    fetch(url)
.then((response) => response.json())
.then((data) => {
            if(data.cod==='404')
            {
                weatherDetails.innerHTML=`<p>City Not Found Please Try Again...</p>`;
            }
            else{
                console.log('data is here:', data);
                weatherDetails.innerHTML=`<h2>${data.name},${data.sys.country}</h2>
                <p>Temperature:${data.main.temp}
                <p>Sea Level:${data.main.sea_level}
                <p>Base:${data.base}</p>`;
            }
        })
.catch(error=>{
weatherDetails.innerHTML='<p> Error Fetching Data.</p>'
})
}