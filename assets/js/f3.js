let feet = document.getElementById("ft");
let incs = document.getElementById("inc");
let yards = document.getElementById("yd");
let miles = document.getElementById("mi");
let meter = document.getElementById("m");
let centi = document.getElementById("cm");
let kilo = document.getElementById("km");

feet.addEventListener("input", function() {
    let ft = this.value;
    let inc = ft*12;
    let yd = ft*0.33333;
    let mi = ft*0.00018939;
    let m = ft/3.2808;
    let cm = ft/0.032808;
    let km = ft/3280.8;

    incs.value = inc;
    yards.value = yd;
    miles.value = mi;
    meter.value = m;
    centi.value = cm;
    kilo.value = km;
});

incs.addEventListener("input", function() {
    let inc = this.value;
    let ft = inc*0.083333;
    let yd = inc*0.027778;
    let mi = inc*0.000015783;
    let m = inc/39.370;
    let cm = inc/0.39370;
    let km = inc/39370;

    feet.value = ft;
    yards.value = yd;
    miles.value = mi;
    meter.value = m;
    centi.value = cm;
    kilo.value = km;
});

yards.addEventListener("input", function() {
    let yd = this.value;
    let ft = yd*3;
    let inc = yd*36;
    let mi = yd*0.00056818;
    let m = yd/1.0936;
    let cm = yd/0.010936;
    let km = yd/1093.6;

    feet.value = ft;
    incs.value = inc;
    miles.value = mi;
    meter.value = m;
    centi.value = cm;
    kilo.value = km;
});

miles.addEventListener("input", function() {
    let mi = this.value;
    let ft = mi*5280;
    let inc = mi*63360;
    let yd = mi*1760;
    let m = mi/0.00062137;
    let cm = mi/0.0000062137;
    let km = mi/0.62137;

    feet.value = ft;
    incs.value = inc;
    yards.value = yd;
    meter.value = m;
    centi.value = cm;
    kilo.value = km;
});

meter.addEventListener("input", function() {
    let m = this.value;
    let ft = m*3.2808;
    let inc = m*39.370;
    let yd = m*1.0936;
    let mi = m*0.00062137;
    let cm = m/0.01;
    let km = m/1000;

    feet.value = ft;
    incs.value = inc;
    yards.value = yd;
    miles.value = mi;
    centi.value = cm;
    kilo.value = km;
})

centi.addEventListener("input", function() {
    let cm = this.value;
    let ft = cm*0.032808;
    let inc = cm*0.39370;
    let yd = cm*0.010936;
    let mi = cm*0.0000062137;
    let m = cm/100;
    let km = cm/100000;

    feet.value = ft;
    incs.value = inc;
    yards.value = yd;
    miles.value = mi;
    meter.value = m;
    kilo.value = km;
})

kilo.addEventListener("input", function() {
    let km = this.value;
    let ft = km*3280.8;
    let inc = km*39370;
    let yd = km*1093.6;
    let mi = km*0.62137;
    let m = km*1000;
    let cm = km*100000;

    feet.value = ft;
    incs.value = inc;
    yards.value = yd;
    miles.value = mi;
    meter.value = m;
    centi.value = cm;
})