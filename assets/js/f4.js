let ponds = document.getElementById("lb");
let oncs = document.getElementById("oz");
let stons = document.getElementById("st");
let kilo = document.getElementById("kg");
let gram = document.getElementById("g");

ponds.addEventListener("input", function() {
    let lb = this.value;
    let oz = lb*16;
    let st = lb*0.071429;
    let kg = lb/2.2046;
    let g = lb/0.0022046;

    oncs.value = oz;
    stons.value = st;
    kilo.value = kg;
    gram.value = g;
});

oncs.addEventListener("input", function() {
    let oz = this.value;
    let lb = oz*0.0625;
    let st = oz*0.0044643;
    let kg = oz/35.274;
    let g = oz/0.035274;

    ponds.value = lb;
    stons.value = st;
    kilo.value = kg;
    gram.value = g;
});

stons.addEventListener("input", function() {
    let st = this.value;
    let lb = st*14;
    let oz = st*224;
    let kg = st/0.15747;
    let g = st/0.00015747;

    ponds.value = lb;
    oncs.value = oz;
    kilo.value = kg;
    gram.value = g;
});

kilo.addEventListener("input", function() {
    let kg = this.value;
    let lb = kg*2.2046;
    let oz = kg*35.274;
    let st = kg*0.1574;
    let g = kg*1000;

    ponds.value = lb;
    oncs.value = oz;
    stons.value = st;
    gram.value = g;
});

gram.addEventListener("input", function() {
    let g = this.value;
    let lb = g*0.0022046;
    let oz = g*0.035274;
    let st = g*0.00015747;
    let kg = g/1000;

    ponds.value = lb;
    oncs.value = oz;
    stons.value = st;
    kilo.value = kg;
})