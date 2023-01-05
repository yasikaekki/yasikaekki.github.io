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

function copylbFunc() {
    ponds.select();
    ponds.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(ponds.value);
    
    var tooltip = document.getElementById("Toollb");
    tooltip.innerHTML = "Copied!";
}

function outlbFunc() {
    var tooltip = document.getElementById("Toollb");
    tooltip.innerHTML = "Copy to clipboard";
}

function copyozFunc() {
    oncs.select();
    oncs.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(oncs.value);
    
    var tooltip = document.getElementById("Tooloz");
    tooltip.innerHTML = "Copied!";
}

function outozFunc() {
    var tooltip = document.getElementById("Tooloz");
    tooltip.innerHTML = "Copy to clipboard";
}

function copystFunc() {
    stons.select();
    stons.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(stons.value);
    
    var tooltip = document.getElementById("Toolst");
    tooltip.innerHTML = "Copied!";
}

function outstFunc() {
    var tooltip = document.getElementById("Toolst");
    tooltip.innerHTML = "Copy to clipboard";
}

function copykgFunc() {
    kilo.select();
    kilo.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(kilo.value);
    
    var tooltip = document.getElementById("Toolkg");
    tooltip.innerHTML = "Copied!";
}

function outkgFunc() {
    var tooltip = document.getElementById("Toolkg");
    tooltip.innerHTML = "Copy to clipboard";
}

function copymtFunc() {
    gram.select();
    gram.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(gram.value);
    
    var tooltip = document.getElementById("Toolmt");
    tooltip.innerHTML = "Copied!";
}

function outmtFunc() {
    var tooltip = document.getElementById("Toolmt");
    tooltip.innerHTML = "Copy to clipboard";
}