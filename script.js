let inputBox=document.querySelector("#inputBox");
let apiKey="417f5c92f9a466023b858b2d4496b87d";
let searchBtn=document.querySelector("#searchBtn")
let currentTemp=document.querySelector("#currentTemp");
let cityText=document.querySelector("#City");
let description=document.querySelector("#description")
let main=document.querySelector("#main");
let Wind=document.querySelector("#wind");
let Visibility=document.querySelector("#Visibility")
let icon=document.querySelector("#icon")
let humidity=document.querySelector("#humidity");
let pressure=document.querySelector("#pressure")

searchBtn.addEventListener("click",()=>{
    let city=inputBox.value;

    
    // let urlForHourly=`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`;
    let urlForCurrent=`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`

    const weather=async()=>{
        let response=await fetch(urlForCurrent);
        let data=await response.json();
        console.log(data)
        currentTemp.innerHTML=`${data.main.temp}&deg;C`;
        cityText.innerHTML=data.name
        description.innerHTML=data.weather[0].description;
        main.innerHTML=data.weather[0].main;
        
        let condition=data.weather[0].main
        if(condition=="Clouds"){
            icon.innerHTML="&#x2601;"
        }else if(condition=="Snow"){
            icon.innerHTML="&#9731;"
        }

        Wind.innerHTML=`${data.wind.speed}km/hr`
        
        Visibility.innerHTML=`${data.visibility}m`

        humidity.innerHTML=`${data.main.humidity}%`;

        pressure.innerHTML=`${data.main.pressure}hPa`;
    }
    weather()

})