let celciusInput = document.getElementById('celcius');
let reamurInput = document.getElementById('reamur');
let fahrenheitInput = document.getElementById('fahrenheit');
let kelvinInput = document.getElementById('kelvin');


/* Celcius to Reamur, Fahrenheit and Kelvin */
celciusInput.addEventListener('input', function(){
    let cTemp = parseFloat(celciusInput.value);
    let rTemp = cTemp*(4/5);
    let fTemp = (cTemp*(9/5)) + 32;
    let kTemp = cTemp + 273.15;

    reamurInput.value = rTemp;
    fahrenheitInput.value = fTemp;
    kelvinInput.value = kTemp;
})


/* Reamur to Celcius, Fahrenheit and Kelvin */
reamurInput.addEventListener('input', function(){
    let rTemp = parseFloat(reamurInput.value);
    let cTemp = rTemp*(5/4);
    let fTemp = (rTemp*(9/4)) + 32;
    let kTemp = (rTemp*(5/4)) + 273.15;

    celciusInput.value = cTemp;
    fahrenheitInput.value = fTemp;
    kelvinInput.value = kTemp;
})


/* Fahrenheit to Celcius, Reamur and Kelvin */
fahrenheitInput.addEventListener('input', function(){
    let fTemp = parseFloat(fahrenheitInput.value);
    let cTemp = (fTemp - 32)*(5/9);
    let rTemp = (fTemp-32)*(4/9);
    let kTemp = (fTemp -32)*(5/9)+273.15;

    celciusInput.value = cTemp;
    reamurInput.value = rTemp;
    kelvinInput.value = kTemp;
})

/* Kelvin to Celcius, Reamur and Fahrenheit */
kelvinInput.addEventListener('input', function(){
    let kTemp = parseFloat(kelvinInput.value);
    let cTemp = kTemp-273.15;
    let rTemp = (kTemp-273.15)*(4/9);
    let fTemp = (kTemp - 273.15)*(9/5)+32;

    celciusInput.value = cTemp;
    reamurInput.value = rTemp;
    fahrenheitInput.value = fTemp;
})