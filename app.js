let celsiusInput=document.querySelector('#celsius > input')
let fahrenheitInput=document.querySelector('#fahrenheit > input')
let kelvinInput=document.querySelector('#kelvin > input')

let btn=document.querySelector('.button button')

function roundnumber(number){
    return Math.round(number*100)/100
}

celsiusInput.addEventListener('input',function(){
    let ctemp = parseFloat(celsiusInput.value);
    let ftemp = (ctemp*9/5) + 32
    let ktemp = ctemp + 273.15

    fahrenheitInput.value = roundnumber(ftemp)
    kelvinInput.value = roundnumber(ktemp)
})

fahrenheitInput.addEventListener('input',function(){
    let ftemp = parseFloat(fahrenheitInput.value);
    let ctemp = (ftemp - 32)*(5/9)
    let ktemp = ctemp + 273.15

    celsiusInput.value = roundnumber(ctemp)
    kelvinInput.value = roundnumber(ktemp)
})

kelvinInput.addEventListener('input',function(){
    let ktemp = parseFloat(kelvinInput.value);
    let ctemp = ktemp - 273.15
    let ftemp = (ktemp - 273.15)*(9/5) + 32

    fahrenheitInput.value = roundnumber(ftemp)
    celsiusInput.value = roundnumber(ctemp)
})

btn.addEventListener('click',()=>{
    celsiusInput.value=""
    fahrenheitInput.value=""
    kelvinInput.value=""
})