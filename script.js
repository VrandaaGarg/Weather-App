let inputBox=document.querySelector("#inputBox");
let apiKey="417f5c92f9a466023b858b2d4496b87d";
let searchBtn=document.querySelector("#searchBtn")
let currentTemp=document.querySelector("#currentTemp");
let cityText=document.querySelector("#City");
let description=document.querySelector("#description")
let main=document.querySelector("#main");

let todayBtn=document.querySelector("#todayBtn");
let weekBtn=document.querySelector("#weekBtn")

let todayDiv=document.querySelector("#todayDiv");
let weekDiv=document.querySelector("#weekDiv")

let Wind=document.querySelector("#wind");
let Visibility=document.querySelector("#Visibility")
let humidity=document.querySelector("#humidity");
let pressure=document.querySelector("#pressure")

let firstDate=document.querySelector("#first");
let firstTemp=document.querySelector("#firstTemp");
let firstMain=document.querySelector("#firstMain");
let firstHumidity=document.querySelector("#firstHumidity");
let firstWind=document.querySelector("#firstWind")

let secondDate=document.querySelector("#second");
let secondTemp=document.querySelector("#secondTemp");
let secondMain=document.querySelector("#secondMain");
let secondHumidity=document.querySelector("#secondHumidity");
let secondWind=document.querySelector("#secondWind")

let thirdDate=document.querySelector("#third");
let thirdTemp=document.querySelector("#thirdTemp");
let thirdMain=document.querySelector("#thirdMain");
let thirdHumidity=document.querySelector("#thirdHumidity");
let thirdWind=document.querySelector("#thirdWind")

let forthDate=document.querySelector("#forth");
let forthTemp=document.querySelector("#forthTemp");
let forthMain=document.querySelector("#forthMain");
let forthHumidity=document.querySelector("#forthHumidity");
let forthWind=document.querySelector("#forthWind")

let fifthDate=document.querySelector("#fifth");
let fifthTemp=document.querySelector("#fifthTemp");
let fifthMain=document.querySelector("#fifthMain");
let fifthHumidity=document.querySelector("#fifthHumidity");
let fifthWind=document.querySelector("#fifthWind")



searchBtn.addEventListener("click",()=>{
    let city=inputBox.value;

    
    let urlForWeek=`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`;
    let urlForCurrent=`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`

    const weatherForToday=async()=>{
        let response=await fetch(urlForCurrent);

        if(!response.ok){
            alert("Wrong input data.Pls try again !")
        }
        let data=await response.json();
        console.log(data)
        
        currentTemp.innerHTML=`${data.main.temp}&deg;C`;
        cityText.innerHTML=data.name
        description.innerHTML=data.weather[0].description;
        main.innerHTML=data.weather[0].main;
        

        document.getElementById('mainImage').src = `./images/${data.weather[0].icon}.png`;
        Wind.innerHTML=`${data.wind.speed}km/hr`
        Visibility.innerHTML=`${data.visibility}m`
        humidity.innerHTML=`${data.main.humidity}%`;
        pressure.innerHTML=`${data.main.pressure}hPa`;
    }

    const weekUpdates=async()=>{
        let promise=await fetch(urlForWeek);
        let data2=await promise.json();
        console.log(data2)
        
        // day 1
        let fullFirstDate = data2.list[2].dt_txt;
        let FirstdateOnly = fullFirstDate.split(' ')[0];
    
        firstDate.innerHTML = FirstdateOnly;
        firstTemp.innerHTML=`${data2.list[2].main.temp}&deg;C`
        firstMain.innerHTML=data2.list[2].weather[0].main;
        firstHumidity.innerHTML=`Humidity: ${data2.list[2].main.humidity} %`;
        firstWind.innerHTML=`Wind Speed: ${data2.list[2].wind.speed} km/hr`;
        document.getElementById("day1Img").src=`./images/${data2.list[2].weather[0].icon}.png`

        // day2

        let fullSecondDate = data2.list[10].dt_txt;
        let SeconddateOnly = fullSecondDate.split(' ')[0];
    
        secondDate.innerHTML = SeconddateOnly;
        secondTemp.innerHTML=`${data2.list[10].main.temp}&deg;C`
        secondMain.innerHTML=data2.list[10].weather[0].main;
        secondHumidity.innerHTML=`Humidity: ${data2.list[10].main.humidity} %`;
        secondWind.innerHTML=`Wind Speed: ${data2.list[10].wind.speed} km/hr`;
        document.getElementById("day2Img").src=`./images/${data2.list[10].weather[0].icon}.png`

        // day3

        let fullThirdDate = data2.list[18].dt_txt;
        let thirddateOnly = fullThirdDate.split(' ')[0];
    
        thirdDate.innerHTML = thirddateOnly;
        thirdTemp.innerHTML=`${data2.list[18].main.temp}&deg;C`
        thirdMain.innerHTML=data2.list[18].weather[0].main;
        thirdHumidity.innerHTML=`Humidity: ${data2.list[18].main.humidity} %`;
        thirdWind.innerHTML=`Wind Speed: ${data2.list[18].wind.speed} km/hr`
        document.getElementById("day3Img").src=`./images/${data2.list[18].weather[0].icon}.png`

        // day4

        let fullfourthDate = data2.list[26].dt_txt;
        let fourthdateOnly = fullfourthDate.split(' ')[0];
    
        forthDate.innerHTML = fourthdateOnly;
        forthTemp.innerHTML=`${data2.list[26].main.temp}&deg;C`
        forthMain.innerHTML=data2.list[26].weather[0].main;
        forthHumidity.innerHTML=`Humidity: ${data2.list[26].main.humidity} %`;
        forthWind.innerHTML=`Wind Speed: ${data2.list[26].wind.speed} km/hr`
        document.getElementById("day4Img").src=`./images/${data2.list[26].weather[0].icon}.png`

        // day5

        let fullFifthDate = data2.list[34].dt_txt;
        let FifthdateOnly = fullFifthDate.split(' ')[0];
    
        fifthDate.innerHTML = FifthdateOnly;
        fifthTemp.innerHTML=`${data2.list[34].main.temp}&deg;C`
        fifthMain.innerHTML=data2.list[34].weather[0].main;
        fifthHumidity.innerHTML=`Humidity: ${data2.list[34].main.humidity} %`;
        fifthWind.innerHTML=`Wind Speed: ${data2.list[34].wind.speed} km/hr`
        document.getElementById("day5Img").src=`./images/${data2.list[34].weather[0].icon}.png`

    }
    weekUpdates()
    weatherForToday()

})

weekBtn.addEventListener("click",()=>{
    todayDiv.style.display="none";
    weekDiv.style.display="block";
})

todayBtn.addEventListener("click",()=>{
    todayDiv.style.display="block";
    weekDiv.style.display="none";
})