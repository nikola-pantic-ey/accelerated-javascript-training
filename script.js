var input= document.querySelector('input')
var button=document.querySelector('button')
var city=document.querySelector('.search-result-city')
var temperaturefield=document.querySelector('.search-result-temperature')
var weatherfield=document.querySelector('.search-result-weather')
var searchresultfield=document.querySelector('.search-result')

var apikey='7c0249f471691f748a9766827eda65d5'
var request= new XMLHttpRequest()


function searchWeather(data){
  searchresultfield.style.display='flex'

   city.textContent=data.name
temperaturefield.textContent=(data.main.temp-273.15).toFixed(1) + ' C'
weatherfield.textContent=data.weather[0].description

}

function fetchData(){
if(input.value!==''){
    request.open('GET', `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=`+apikey)

    
    request.onreadystatechange= function(){
        
        if(request.readyState===XMLHttpRequest.DONE && request.status===200){
           searchWeather(JSON.parse(request.responseText))
        }

        else if(request.readyState===XMLHttpRequest.DONE && request.status===404) alert(JSON.parse(request.responseText).message)
        else if(request.readyState===XMLHttpRequest.DONE) alert('Something went wrong.')
        
    }

    request.send()
}
else alert('Please enter city name')
}




button.addEventListener('click', fetchData)

