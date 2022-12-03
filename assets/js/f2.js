let celciusInput = document.querySelector('#celcius > input');
let reamurInput = document.querySelector('#reamur > input');
let fahrenheitInput = document.querySelector('#fahrenheit > input');
let kelvinInput = document.querySelector('#kelvin > input');


function roundNumber(number){
    return Math.round(number*100)/100;
}


/* Celcius to Reamur, Fahrenheit and Kelvin */
celciusInput.addEventListener('input', function(){
    let cTemp = parseFloat(celciusInput.value);
    let rTemp = cTemp*(4/5);
    let fTemp = (cTemp*(9/5)) + 32;
    let kTemp = cTemp + 273.15;

    reamurInput.value = roundNumber(rTemp);
    fahrenheitInput.value = roundNumber(fTemp);
    kelvinInput.value = roundNumber(kTemp);
})


/* Reamur to Celcius, Fahrenheit and Kelvin */
reamurInput.addEventListener('input', function(){
    let rTemp = parseFloat(reamurInput.value);
    let cTemp = rTemp*(5/4);
    let fTemp = (rTemp*(9/4)) + 32;
    let kTemp = (rTemp*(5/4)) + 273.15;

    celciusInput.value = roundNumber(cTemp);
    fahrenheitInput.value = roundNumber(fTemp);
    kelvinInput.value = roundNumber(kTemp);
})


/* Fahrenheit to Celcius, Reamur and Kelvin */
fahrenheitInput.addEventListener('input', function(){
    let fTemp = parseFloat(fahrenheitInput.value);
    let cTemp = (fTemp - 32)*(5/9);
    let rTemp = (fTemp-32)*(4/9);
    let kTemp = (fTemp -32)*(5/9)+273.15;

    celciusInput.value = roundNumber(cTemp);
    reamurInput.value = roundNumber(rTemp);
    kelvinInput.value = roundNumber(kTemp);
})

/* Kelvin to Celcius, Reamur and Fahrenheit */
kelvinInput.addEventListener('input', function(){
    let kTemp = parseFloat(kelvinInput.value);
    let cTemp = kTemp-273.15;
    let rTemp = (kTemp-273.15)*(4/9);
    let fTemp = (kTemp - 273.15)*(9/5)+32;

    celciusInput.value = roundNumber(cTemp);
    reamurInput.value = roundNumber(rTemp);
    fahrenheitInput.value = roundNumber(fTemp);
})