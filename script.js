let inputBox=document.querySelector("#inputBox");
let apiKey="417f5c92f9a466023b858b2d4496b87d";
let searchBtn=document.querySelector("#searchBtn")
let currentTemp=document.querySelector("#currentTemp");
let cityText=document.querySelector("#City");
let description=document.querySelector("#description")
let main=document.querySelector("#main");
let icon=document.querySelector("#icon")

let todayBtn=document.querySelector("#todayBtn");
let weekBtn=document.querySelector("#weekBtn")

let todayDiv=document.querySelector("#todayDiv");
let weekDiv=document.querySelector("#weekDiv")

let Wind=document.querySelector("#wind");
let Visibility=document.querySelector("#Visibility")
let humidity=document.querySelector("#humidity");
let pressure=document.querySelector("#pressure")

let firstDate=document.querySelector("#first");
let firstIcon=document.querySelector("#firstIcon")
let firstTemp=document.querySelector("#firstTemp");
let firstMain=document.querySelector("#firstMain");
let firstHumidity=document.querySelector("#firstHumidity");
let firstWind=document.querySelector("#firstWind")

let secondDate=document.querySelector("#second");
let secondIcon=document.querySelector("#secondIcon")
let secondTemp=document.querySelector("#secondTemp");
let secondMain=document.querySelector("#secondMain");
let secondHumidity=document.querySelector("#secondHumidity");
let secondWind=document.querySelector("#secondWind")

let thirdDate=document.querySelector("#third");
let thirdIcon=document.querySelector("#thirdIcon")
let thirdTemp=document.querySelector("#thirdTemp");
let thirdMain=document.querySelector("#thirdMain");
let thirdHumidity=document.querySelector("#thirdHumidity");
let thirdWind=document.querySelector("#thirdWind")

let forthDate=document.querySelector("#forth");
let forthIcon=document.querySelector("#forthIcon")
let forthTemp=document.querySelector("#forthTemp");
let forthMain=document.querySelector("#forthMain");
let forthHumidity=document.querySelector("#forthHumidity");
let forthWind=document.querySelector("#forthWind")

let fifthDate=document.querySelector("#fifth");
let fifthIcon=document.querySelector("#fifthIcon")
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

    const weekUpdates=async()=>{
        let promise=await fetch(urlForWeek);
        let data2=await promise.json();
        console.log(data2)
        
        // day 1
        let fullFirstDate = data2.list[4].dt_txt;
        let FirstdateOnly = fullFirstDate.split(' ')[0];
    
        firstDate.innerHTML = FirstdateOnly;
        firstTemp.innerHTML=`${data2.list[4].main.temp}&deg;C`
        firstMain.innerHTML=data2.list[4].weather[0].main;
        firstHumidity.innerHTML=`Humidity: ${data2.list[4].main.humidity} %`;
        firstWind.innerHTML=`Wind Speed: ${data2.list[4].wind.speed} km/hr`

        // day2

        let fullSecondDate = data2.list[12].dt_txt;
        let SeconddateOnly = fullSecondDate.split(' ')[0];
    
        secondDate.innerHTML = SeconddateOnly;
        secondTemp.innerHTML=`${data2.list[12].main.temp}&deg;C`
        secondMain.innerHTML=data2.list[12].weather[0].main;
        secondHumidity.innerHTML=`Humidity: ${data2.list[12].main.humidity} %`;
        secondWind.innerHTML=`Wind Speed: ${data2.list[12].wind.speed} km/hr`

        // day3

        let fullThirdDate = data2.list[20].dt_txt;
        let thirddateOnly = fullThirdDate.split(' ')[0];
    
        thirdDate.innerHTML = thirddateOnly;
        thirdTemp.innerHTML=`${data2.list[20].main.temp}&deg;C`
        thirdMain.innerHTML=data2.list[4].weather[0].main;
        thirdHumidity.innerHTML=`Humidity: ${data2.list[20].main.humidity} %`;
        thirdWind.innerHTML=`Wind Speed: ${data2.list[20].wind.speed} km/hr`

        // day4

        let fullfourthDate = data2.list[28].dt_txt;
        let fourthdateOnly = fullfourthDate.split(' ')[0];
    
        forthDate.innerHTML = fourthdateOnly;
        forthTemp.innerHTML=`${data2.list[28].main.temp}&deg;C`
        forthMain.innerHTML=data2.list[28].weather[0].main;
        forthHumidity.innerHTML=`Humidity: ${data2.list[28].main.humidity} %`;
        forthWind.innerHTML=`Wind Speed: ${data2.list[28].wind.speed} km/hr`

        // day5

        let fullFifthDate = data2.list[36].dt_txt;
        let FifthdateOnly = fullFifthDate.split(' ')[0];
    
        fifthDate.innerHTML = FifthdateOnly;
        fifthTemp.innerHTML=`${data2.list[36].main.temp}&deg;C`
        fifthMain.innerHTML=data2.list[36].weather[0].main;
        fifthHumidity.innerHTML=`Humidity: ${data2.list[36].main.humidity} %`;
        fifthWind.innerHTML=`Wind Speed: ${data2.list[36].wind.speed} km/hr`

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